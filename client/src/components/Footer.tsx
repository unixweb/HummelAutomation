import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground/5 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Joachim Hummel</h3>
            <p className="text-muted-foreground">
              KI-Automation Spezialist für IT-Freelancer & Unternehmen
            </p>
            <p className="text-sm text-muted-foreground">
              30+ Jahre Erfahrung in IT-Consulting und Automatisierung
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-home"
              >
                Start
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-about"
              >
                Über mich
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-services"
              >
                Leistungen
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-contact"
              >
                Kontakt
              </button>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Rechtliches</h4>
            <nav className="flex flex-col space-y-2">
              <Button 
                variant="link" 
                className="p-0 h-auto justify-start text-muted-foreground hover:text-primary"
                onClick={() => console.log('Impressum clicked')}
                data-testid="link-impressum"
              >
                Impressum
              </Button>
              <Button 
                variant="link" 
                className="p-0 h-auto justify-start text-muted-foreground hover:text-primary"
                onClick={() => console.log('Datenschutz clicked')}
                data-testid="link-datenschutz"
              >
                Datenschutzerklärung
              </Button>
            </nav>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Joachim Hummel. Alle Rechte vorbehalten.
          </p>
          <Button 
            variant="outline" 
            size="sm"
            onClick={scrollToTop}
            className="mt-4 sm:mt-0"
            data-testid="button-back-to-top"
          >
            Nach oben
          </Button>
        </div>
      </div>

      {/* Legal placeholder content - hidden by default */}
      <div className="hidden">
        <div id="impressum">
          <h2>Impressum</h2>
          <p>Joachim Hummel</p>
          <p>KI-Automation Consultant</p>
          <p>Musterstraße 123</p>
          <p>12345 Musterstadt</p>
          <p>Deutschland</p>
          <p>E-Mail: kontakt@joachimhummel.de</p>
          <p>Telefon: +49 (0) 123 456 789</p>
          <p>Umsatzsteuer-ID: DE123456789</p>
        </div>
        
        <div id="datenschutz">
          <h2>Datenschutzerklärung</h2>
          <p>Diese Website erhebt und verarbeitet personenbezogene Daten im Rahmen der DSGVO.</p>
          <p>Verantwortlicher: Joachim Hummel, kontakt@joachimhummel.de</p>
          <p>Kontaktformular: Die eingegebenen Daten werden zur Bearbeitung Ihrer Anfrage verwendet.</p>
          <p>Ihre Rechte: Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Übertragbarkeit</p>
          <p>Beschwerderecht bei der zuständigen Aufsichtsbehörde</p>
        </div>
      </div>
    </footer>
  );
}