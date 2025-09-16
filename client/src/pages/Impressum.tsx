import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Mail, Phone, MapPin, Building2, ExternalLink } from "lucide-react";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-violet-600 bg-clip-text text-transparent">
              Impressum
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Angaben gemäß § 5 TMG und verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </p>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 md:gap-8">
            {/* Contact Information */}
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
                  <Building2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Diensteanbieter
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground mt-1 flex-shrink-0" />
                    <div className="text-sm md:text-base">
                      <div className="font-semibold">Joachim Hummel</div>
                      <div>Lisbergstraße 12</div>
                      <div>81249 München</div>
                      <div>Deutschland</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground flex-shrink-0" />
                    <div className="text-sm md:text-base">
                      <a 
                        href="tel:+498980044390" 
                        className="hover:text-primary transition-colors"
                        data-testid="link-phone-impressum"
                      >
                        +49-89-80044390
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground flex-shrink-0" />
                    <div className="text-sm md:text-base">
                      <a 
                        href="mailto:info@unixweb.de" 
                        className="hover:text-primary transition-colors"
                        data-testid="link-email-impressum"
                      >
                        info@unixweb.de
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm md:text-base">
                    <span className="font-semibold">Umsatzsteuer-Identifikationsnummer:</span> DE185721123
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Responsible Person */}
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Verantwortlicher für redaktionelle Inhalte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base">
                  Verantwortlich i.S.d. § 18 Abs. 2 MStV: <br />
                  <span className="font-semibold">Joachim Hummel</span><br />
                  Lisbergstraße 12<br />
                  81249 München
                </p>
              </CardContent>
            </Card>

            {/* Fairness Initiative */}
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
                  <ExternalLink className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Mitgliedschaften
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="secondary" className="text-xs md:text-sm">
                    Fairness im Handel
                  </Badge>
                  <p className="text-sm md:text-base">
                    Mitglied der Initiative „Fairness im Handel". 
                    Nähere Informationen: 
                    <a 
                      href="https://www.fairness-im-handel.de" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-1 text-primary hover:text-primary/80 transition-colors"
                      data-testid="link-fairness-handel"
                    >
                      fairness-im-handel.de
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AI Usage Prohibition */}
            <Card className="hover-elevate transition-all duration-300 border-orange-200/50 bg-orange-50/50 dark:border-orange-800/30 dark:bg-orange-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg md:text-xl text-orange-700 dark:text-orange-300">
                  <Shield className="h-5 w-5 md:h-6 md:w-6" />
                  Verbot der KI-Nutzung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-orange-800 dark:text-orange-200">
                <p className="text-sm md:text-base font-medium">
                  Der Betreiber dieser Website untersagt ausdrücklich die Nutzung sämtlicher Inhalte 
                  (Texte, Bilder, Metadaten) durch Dritte für folgende Zwecke:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base ml-4">
                  <li>Training, Entwicklung oder Optimierung von Systemen künstlicher Intelligenz (KI)</li>
                  <li>Maschinelles Lernen (ML)</li>
                  <li>Text- und Data-Mining</li>
                </ul>
                <p className="text-sm md:text-base">
                  <span className="font-medium">Dieses Verbot gilt unabhängig davon, ob:</span>
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm md:text-base ml-4">
                  <li>Technische Schutzmaßnahmen (wie Robots-Meta-Tags) implementiert sind oder nicht</li>
                  <li>Inhalte über öffentlich zugängliche Schnittstellen abgerufen werden</li>
                  <li>Die Verarbeitung durch Bots, Crawler oder andere automatisierte Systeme erfolgt</li>
                </ol>
                <p className="text-sm md:text-base font-medium pt-2 border-t border-orange-200/50 dark:border-orange-700/30">
                  Ausnahmen bedürfen der schriftlichen Genehmigung des Website-Betreibers.
                </p>
                <div className="text-xs md:text-sm opacity-75 pt-2">
                  <code className="bg-orange-100/50 dark:bg-orange-900/30 px-2 py-1 rounded">
                    &lt;meta name="robots" content="noai, noimageai"&gt;
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back Link */}
          <div className="text-center mt-8 md:mt-12">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-sm md:text-base text-primary hover:text-primary/80 transition-colors"
              data-testid="link-back-home"
            >
              ← Zurück zur Startseite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}