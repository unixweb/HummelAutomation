import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Workflow, Server, ArrowRight } from "lucide-react";

interface ServicesProps {
  onContactClick?: () => void;
}

export default function Services({ onContactClick }: ServicesProps) {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "KI-Automation Beratung",
      description: "Strategische Beratung zur Integration von KI-basierten Automatisierungslösungen in bestehende Geschäftsprozesse.",
      features: [
        "Prozessanalyse und KI-Potentialbewertung",
        "Strategieentwicklung für KI-Integration",
        "ROI-Berechnung und Kostenoptimierung",
        "Change Management und Mitarbeiterschulung"
      ]
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Individuelle Workflow-Entwicklung",
      description: "Maßgeschneiderte Automatisierungslösungen mit modernsten Tools und Technologien.",
      features: [
        "n8n Workflow-Design und -Implementation",
        "Integration von Docker-Containern",
        "Pinecone Vektordatenbank-Setup",
        "LLM-Integration (ChatGPT, Claude, etc.)"
      ]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Self-Hosting Lösungen",
      description: "Sichere und skalierbare Self-Hosting-Implementierungen für Rechenzentrum und Unternehmensumgebung.",
      features: [
        "Rechenzentrum-Konzeption und -Aufbau",
        "Unternehmens-Infrastructure-Design",
        "Sicherheitskonzepte und Backup-Strategien",
        "Monitoring und Wartung"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onContactClick?.();
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">
            Meine Leistungen
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Von der strategischen Beratung bis zur technischen Umsetzung - 
            ich biete ganzheitliche Lösungen für Ihre Automatisierungsherausforderungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 h-full flex flex-col"
              data-testid={`card-service-${index}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 p-3 md:p-4 rounded-full bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <CardTitle className="text-lg md:text-xl mb-2 px-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col px-4 md:px-6">
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
                
                <div className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Bereit für Ihre digitale Transformation?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                Lassen Sie uns gemeinsam Ihre Prozesse optimieren und Zeit sparen.
              </p>
              <Button 
                size="lg" 
                className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto w-full sm:w-auto min-h-[44px] touch-manipulation"
                onClick={scrollToContact}
                data-testid="button-services-cta"
              >
                Kostenlose Beratung vereinbaren
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}