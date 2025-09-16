import { githubService } from './server/github.js';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function uploadProject() {
  console.log('🚀 Starte GitHub-Upload für joachimhummel.de...');
  
  try {
    // Get current user first
    const userResult = await githubService.getCurrentUser();
    if (!userResult.success) {
      throw new Error('GitHub-Verbindung fehlgeschlagen: ' + userResult.error);
    }
    console.log(`✅ Verbunden mit GitHub als: ${userResult.user.login}`);
    
    // Create repository
    console.log('📦 Erstelle GitHub-Repository...');
    const repoResult = await githubService.createRepository(
      'joachimhummel-de',
      'Moderne Website für Joachim Hummel - KI-Automation Spezialist mit 30 Jahren IT-Erfahrung',
      false
    );
    
    if (!repoResult.success) {
      throw new Error('Repository-Erstellung fehlgeschlagen: ' + repoResult.error);
    }
    console.log(`✅ Repository erstellt: ${repoResult.repo.html_url}`);
    
    // Collect all project files
    const filesToUpload = [];
    
    // Helper function to add files if they exist
    const addFile = (path, content = null) => {
      const fullPath = join(__dirname, path);
      if (existsSync(fullPath)) {
        const fileContent = content || readFileSync(fullPath, 'utf8');
        filesToUpload.push({ path, content: fileContent });
        console.log(`📄 Datei hinzugefügt: ${path}`);
      }
    };
    
    // Add project files
    addFile('README.md');
    addFile('.gitignore');
    addFile('package.json');
    addFile('package-lock.json');
    addFile('vite.config.ts');
    addFile('tailwind.config.ts');
    addFile('postcss.config.js');
    addFile('tsconfig.json');
    addFile('tsconfig.app.json');
    addFile('tsconfig.node.json');
    addFile('drizzle.config.ts');
    
    // Frontend files
    addFile('client/src/main.tsx');
    addFile('client/src/App.tsx');
    addFile('client/src/index.css');
    
    // Components
    addFile('client/src/components/Hero.tsx');
    addFile('client/src/components/About.tsx');
    addFile('client/src/components/Services.tsx');
    addFile('client/src/components/Contact.tsx');
    addFile('client/src/components/Footer.tsx');
    addFile('client/src/components/Navigation.tsx');
    
    // UI Components
    addFile('client/src/components/ui/button.tsx');
    addFile('client/src/components/ui/card.tsx');
    addFile('client/src/components/ui/form.tsx');
    addFile('client/src/components/ui/input.tsx');
    addFile('client/src/components/ui/label.tsx');
    addFile('client/src/components/ui/textarea.tsx');
    addFile('client/src/components/ui/toast.tsx');
    addFile('client/src/components/ui/toaster.tsx');
    
    // Pages
    addFile('client/src/pages/Home.tsx');
    addFile('client/src/pages/not-found.tsx');
    
    // Hooks and utils
    addFile('client/src/hooks/use-toast.ts');
    addFile('client/src/lib/queryClient.ts');
    addFile('client/src/lib/utils.ts');
    
    // Backend files
    addFile('server/index.ts');
    addFile('server/routes.ts');
    addFile('server/email.ts');
    addFile('server/github.ts');
    addFile('server/storage.ts');
    addFile('server/vite.ts');
    addFile('server/db.ts');
    
    // Shared files
    addFile('shared/schema.ts');
    
    console.log(`📚 Insgesamt ${filesToUpload.length} Dateien zum Upload bereit`);
    
    // Upload to GitHub
    console.log('⬆️ Lade Dateien zu GitHub hoch...');
    const uploadResult = await githubService.uploadFiles(
      userResult.user.login,
      'joachimhummel-de',
      filesToUpload,
      'Initial commit: Joachim Hummel Website mit KI-Automation Services'
    );
    
    if (!uploadResult.success) {
      throw new Error('Datei-Upload fehlgeschlagen: ' + uploadResult.error);
    }
    
    console.log('🎉 Upload erfolgreich!');
    console.log(`📍 Repository URL: ${repoResult.repo.html_url}`);
    console.log(`📄 Clone URL: ${repoResult.repo.clone_url}`);
    console.log(`🔧 Commit SHA: ${uploadResult.commitSha}`);
    
  } catch (error) {
    console.error('❌ Fehler beim GitHub-Upload:', error);
    process.exit(1);
  }
}

uploadProject();