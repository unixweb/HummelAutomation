import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Server, Cookie, Mail, Clock, Users, FileText, Scale } from "lucide-react";

export default function Datenschutz() {
  const sections = [
    {
      id: 1,
      title: "Einleitung und Kontaktdaten des Verantwortlichen",
      icon: <Users className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            Wir freuen uns, dass du unsere Website besuchst und bedanken uns für dein Interesse. 
            Im Folgenden informieren wir dich über den Umgang mit deinen personenbezogenen Daten 
            bei der Nutzung unserer Website. Personenbezogene Daten sind hierbei alle Daten, 
            mit denen du persönlich identifiziert werden kannst.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Verantwortlicher für die Datenverarbeitung:</h4>
            <div className="text-sm md:text-base space-y-1">
              <div><strong>Joachim Hummel</strong></div>
              <div>Lisbergstraße 12</div>
              <div>81249 München</div>
              <div>Deutschland</div>
              <div>Tel.: <a href="tel:+498787181763" className="text-primary hover:text-primary/80">+49-89-87181763</a></div>
              <div>E-Mail: <a href="mailto:info@unixweb.de" className="text-primary hover:text-primary/80">info@unixweb.de</a></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Datenerfassung beim Besuch unserer Website",
      icon: <Eye className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            Bei der bloß informatorischen Nutzung unserer Website, also wenn du dich nicht registrierst 
            oder uns anderweitig Informationen übermittelst, erheben wir nur solche Daten, die dein Browser 
            an den Seitenserver übermittelt (sog. „Server-Logfiles").
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Folgende Daten werden erhoben:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
              <li>Besuchte Website</li>
              <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffs</li>
              <li>Menge der gesendeten Daten in Byte</li>
              <li>Quelle/Verweis, von welchem du auf die Seite gelangtest</li>
              <li>Verwendeter Browser</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
            </ul>
          </div>
          <p className="text-sm md:text-base leading-relaxed">
            Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten 
            Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.
          </p>
          <div className="bg-green-50/50 dark:bg-green-950/20 border border-green-200/50 dark:border-green-800/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">SSL/TLS-Verschlüsselung</h4>
            <p className="text-sm md:text-base text-green-800 dark:text-green-200">
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung personenbezogener 
              Daten eine SSL-bzw. TLS-Verschlüsselung. Du kannst eine verschlüsselte Verbindung an der 
              Zeichenfolge „https://" und dem Schloss-Symbol in deiner Browserzeile erkennen.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Hosting & Content-Delivery-Network",
      icon: <Server className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            Für das Hosting unserer Website und die Darstellung der Seiteninhalte nutzen wir einen Anbieter, 
            der seine Leistungen selbst oder durch ausgewählte Sub-Unternehmer ausschließlich auf Servern 
            innerhalb der Europäischen Union erbringt.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Sämtliche auf unserer Website erhobenen Daten werden auf diesen Servern verarbeitet.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen, der den Schutz 
            der Daten unserer Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "Cookies",
      icon: <Cookie className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung bestimmter Funktionen 
            zu ermöglichen, verwenden wir Cookies, also kleine Textdateien, die auf deinem Endgerät 
            abgelegt werden. Teilweise werden diese Cookies nach Schließen des Browsers automatisch 
            wieder gelöscht (sog. „Session-Cookies"), teilweise verbleiben diese Cookies länger auf 
            deinem Endgerät und ermöglichen das Speichern von Seiteneinstellungen (sog. „persistente Cookies").
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene Daten verarbeitet werden, 
            erfolgt die Verarbeitung gemäß Art. 6 Abs. 1 lit. b DSGVO entweder zur Durchführung des Vertrages, 
            gemäß Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten Einwilligung oder gemäß Art. 6 Abs. 1 
            lit. f DSGVO zur Wahrung unserer berechtigten Interessen an der bestmöglichen Funktionalität 
            der Website.
          </p>
          <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Browser-Einstellungen</h4>
            <p className="text-sm md:text-base text-blue-800 dark:text-blue-200">
              Du kannst deinen Browser so einstellen, dass du über das Setzen von Cookies informiert wirst 
              und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle 
              oder generell ausschließen kannst. Bitte beachte, dass bei Nichtannahme von Cookies die 
              Funktionalität unserer Website eingeschränkt sein kann.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Kontaktaufnahme",
      icon: <Mail className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder E-Mail) werden 
            personenbezogene Daten erhoben. Welche Daten im Falle der Nutzung eines Kontaktformulars 
            erhoben werden, ist aus dem jeweiligen Kontaktformular ersichtlich. Diese Daten werden 
            ausschließlich zum Zweck der Beantwortung deines Anliegens bzw. für die Kontaktaufnahme 
            und die damit verbundene technische Administration gespeichert und verwendet.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Rechtsgrundlage</h4>
              <p className="text-sm md:text-base">
                Unser berechtigtes Interesse an der Beantwortung deines Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. 
                Bei Vertragsanbahnung zusätzlich Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Löschung</h4>
              <p className="text-sm md:text-base">
                Deine Daten werden nach abschließender Bearbeitung deiner Anfrage gelöscht, 
                sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Rechte des Betroffenen",
      icon: <Scale className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            Das geltende Datenschutzrecht gewährt dir gegenüber uns als Verantwortlichen hinsichtlich 
            der Verarbeitung deiner personenbezogenen Daten die nachstehenden Betroffenenrechte:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Deine Rechte</h4>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                <li>Auskunftsrecht gemäß Art. 15 DSGVO</li>
                <li>Recht auf Berichtigung gemäß Art. 16 DSGVO</li>
                <li>Recht auf Löschung gemäß Art. 17 DSGVO</li>
                <li>Recht auf Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
                <li>Recht auf Unterrichtung gemäß Art. 19 DSGVO</li>
                <li>Recht auf Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
                <li>Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3 DSGVO</li>
                <li>Recht auf Beschwerde gemäß Art. 77 DSGVO</li>
              </ul>
            </div>
            <div className="bg-orange-50/50 dark:bg-orange-950/20 border border-orange-200/50 dark:border-orange-800/30 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">Widerspruchsrecht</h4>
              <p className="text-sm md:text-base text-orange-800 dark:text-orange-200">
                Wenn wir im Rahmen einer Interessenabwägung deine personenbezogenen Daten aufgrund 
                unseres überwiegenden berechtigten Interesses verarbeiten, hast du das jederzeitige 
                Recht, aus Gründen, die sich aus deiner besonderen Situation ergeben, gegen diese 
                Verarbeitung Widerspruch mit Wirkung für die Zukunft einzulegen.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Dauer der Speicherung personenbezogener Daten",
      icon: <Clock className="h-5 w-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-sm md:text-base leading-relaxed">
            Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand der jeweiligen 
            Rechtsgrundlage, am Verarbeitungszweck und – sofern einschlägig – zusätzlich anhand der 
            jeweiligen gesetzlichen Aufbewahrungsfrist.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Einwilligung</h4>
              <p className="text-sm md:text-base">
                Bei ausdrücklicher Einwilligung werden die Daten so lange gespeichert, 
                bis du deine Einwilligung widerrufst.
              </p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Berechtigtes Interesse</h4>
              <p className="text-sm md:text-base">
                Bei berechtigtem Interesse werden die Daten so lange gespeichert, 
                bis du dein Widerspruchsrecht ausübst.
              </p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Gesetzliche Fristen</h4>
              <p className="text-sm md:text-base">
                Bei gesetzlichen Aufbewahrungsfristen werden Daten nach Ablauf 
                routinemäßig gelöscht.
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base leading-relaxed">
            Sofern sich aus den sonstigen Informationen dieser Erklärung über spezifische 
            Verarbeitungssituationen nichts anderes ergibt, werden gespeicherte personenbezogene 
            Daten im Übrigen dann gelöscht, wenn sie für die Zwecke, für die sie erhoben oder 
            auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-violet-600 bg-clip-text text-transparent">
              Datenschutzerklärung
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Badge variant="secondary" className="text-xs md:text-sm">
                <Shield className="h-3 w-3 mr-1" />
                DSGVO-konform
              </Badge>
              <Badge variant="secondary" className="text-xs md:text-sm">
                Stand: {new Date().toLocaleDateString('de-DE')}
              </Badge>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 md:space-y-8">
            {sections.map((section, index) => (
              <Card key={section.id} className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      {section.icon}
                    </div>
                    <span className="leading-tight">
                      {section.id}. {section.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {section.content}
                </CardContent>
              </Card>
            ))}

            {/* Contact Card */}
            <Card className="bg-primary/5 border-primary/20 hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg md:text-xl text-primary">
                  <FileText className="h-5 w-5 md:h-6 md:w-6" />
                  Fragen zum Datenschutz?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base mb-4">
                  Sollten Sie Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer 
                  personenbezogenen Daten haben, können Sie sich jederzeit an uns wenden.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="mailto:info@unixweb.de" 
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm md:text-base"
                    data-testid="link-contact-privacy"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    E-Mail schreiben
                  </a>
                  <a 
                    href="tel:+498787181763" 
                    className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/5 transition-colors text-sm md:text-base"
                    data-testid="link-phone-privacy"
                  >
                    Anrufen
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back Link */}
          <div className="text-center mt-8 md:mt-12">
            <a 
              href="/" 
              className="inline-flex items-center gap-2 text-sm md:text-base text-primary hover:text-primary/80 transition-colors"
              data-testid="link-back-home-privacy"
            >
              ← Zurück zur Startseite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}