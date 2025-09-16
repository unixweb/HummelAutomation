interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export class EmailService {
  private apiKey: string;
  private senderEmail: string;

  constructor() {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    
    if (!apiKey) {
      throw new Error('BREVO_API_KEY environment variable is not set');
    }
    
    if (!senderEmail) {
      throw new Error('BREVO_SENDER_EMAIL environment variable is not set');
    }

    this.apiKey = apiKey;
    this.senderEmail = senderEmail;
  }

  async sendContactForm(formData: ContactFormData): Promise<void> {
    const emailContent = `
Neue Kontaktanfrage von der Website joachimhummel.de

Von: ${formData.name}
E-Mail: ${formData.email}

Nachricht:
${formData.message}

---
Diese E-Mail wurde automatisch von der Website joachimhummel.de generiert.
    `.trim();

    const emailData = {
      to: [{ email: this.senderEmail, name: 'Joachim Hummel' }],
      sender: { email: this.senderEmail, name: 'Website joachimhummel.de' },
      replyTo: { email: formData.email, name: formData.name },
      subject: `Neue Kontaktanfrage von ${formData.name}`,
      textContent: emailContent
    };

    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': this.apiKey,
          'content-type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Brevo API error: ${response.status} - ${errorData}`);
      }

      const result = await response.json();
      console.log('E-Mail erfolgreich gesendet:', result);
    } catch (error) {
      console.error('Fehler beim E-Mail-Versand:', error);
      throw new Error('E-Mail konnte nicht gesendet werden');
    }
  }

  async sendConfirmationEmail(formData: ContactFormData): Promise<void> {
    const confirmationContent = `
Liebe/r ${formData.name},

vielen Dank für Ihre Kontaktanfrage über meine Website joachimhummel.de.

Ich habe Ihre Nachricht erhalten und werde mich zeitnah bei Ihnen melden.

Ihre Nachricht:
"${formData.message}"

Bei dringenden Anfragen können Sie mich auch direkt telefonisch erreichen.

Mit freundlichen Grüßen
Joachim Hummel
KI-Automation Spezialist

---
Joachim Hummel
E-Mail: ${this.senderEmail}
Website: joachimhummel.de
    `.trim();

    const emailData = {
      to: [{ email: formData.email, name: formData.name }],
      sender: { email: this.senderEmail, name: 'Joachim Hummel' },
      subject: 'Bestätigung Ihrer Kontaktanfrage - Joachim Hummel',
      textContent: confirmationContent
    };

    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': this.apiKey,
          'content-type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Fehler beim Versand der Bestätigungs-E-Mail:', errorData);
        return; // Don't throw here - confirmation email is nice to have but not critical
      }

      const result = await response.json();
      console.log('Bestätigungs-E-Mail erfolgreich gesendet:', result);
    } catch (error) {
      console.error('Fehler beim Versand der Bestätigungs-E-Mail:', error);
      // Don't throw here - confirmation email is nice to have but not critical
    }
  }
}

export const emailService = new EmailService();