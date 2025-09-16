import { Octokit } from '@octokit/rest'

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

// WARNING: Never cache this client.
// Access tokens expire, so a new client must be created each time.
// Always call this function again to get a fresh client.
export async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

export class GitHubService {
  async createRepository(name: string, description: string, isPrivate = false) {
    const octokit = await getUncachableGitHubClient();
    
    try {
      const response = await octokit.rest.repos.createForAuthenticatedUser({
        name,
        description,
        private: isPrivate,
        auto_init: false
      });
      
      return {
        success: true,
        repo: response.data,
        cloneUrl: response.data.clone_url,
        htmlUrl: response.data.html_url
      };
    } catch (error: any) {
      console.error('Fehler beim Erstellen des GitHub-Repositories:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async uploadFiles(owner: string, repo: string, files: Array<{path: string, content: string}>, commitMessage: string) {
    const octokit = await getUncachableGitHubClient();
    
    try {
      // Create blobs for all files
      const blobs = await Promise.all(
        files.map(async (file) => {
          const blob = await octokit.rest.git.createBlob({
            owner,
            repo,
            content: Buffer.from(file.content).toString('base64'),
            encoding: 'base64'
          });
          return {
            path: file.path,
            mode: '100644' as const,
            type: 'blob' as const,
            sha: blob.data.sha
          };
        })
      );

      // Create tree
      const tree = await octokit.rest.git.createTree({
        owner,
        repo,
        tree: blobs
      });

      // Create commit
      const commit = await octokit.rest.git.createCommit({
        owner,
        repo,
        message: commitMessage,
        tree: tree.data.sha
      });

      // Update main branch reference
      await octokit.rest.git.updateRef({
        owner,
        repo,
        ref: 'heads/main',
        sha: commit.data.sha
      });

      return {
        success: true,
        commitSha: commit.data.sha
      };
    } catch (error: any) {
      console.error('Fehler beim Upload der Dateien:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async getCurrentUser() {
    const octokit = await getUncachableGitHubClient();
    
    try {
      const response = await octokit.rest.users.getAuthenticated();
      return {
        success: true,
        user: response.data
      };
    } catch (error: any) {
      console.error('Fehler beim Abrufen der Benutzerinformationen:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }
}

export const githubService = new GitHubService();