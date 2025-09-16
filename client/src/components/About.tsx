import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Workflow, Users, Award } from "lucide-react";

export default function About() {
  const skills = [
    "KI-Automation",
    "n8n Workflows", 
    "Docker",
    "Pinecone",
    "LLMs",
    "Self-Hosting",
    "IT-Consulting",
    "Homelab"
  ];

  const highlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "30 Jahre Erfahrung",
      description: "Umfassende Expertise im IT-Consulting und Systems Engineering"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "KI-Spezialist",
      description: "Modernste KI-Technologien für praktische Automatisierungslösungen"
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Workflow-Experte",
      description: "Maßgeschneiderte Prozessautomatisierung mit bewährten Tools"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Ganzheitlicher Ansatz",
      description: "Von der Beratung bis zur Umsetzung - alles aus einer Hand"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">
            Über mich
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6 px-4 lg:px-0">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Als <span className="font-semibold text-primary">IT-Systems Engineer & KI-Automation Spezialist</span> mit 
                über 30 Jahren Erfahrung im IT-Consulting bringe ich tiefgreifendes technisches Wissen 
                und praktische Expertise zusammen.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Ich helfe <span className="font-semibold text-foreground">Freelancern und Unternehmen</span> dabei, 
                ihre Prozesse mit modernster Automatisierung und KI-Workflows effizienter zu gestalten. 
                Mein Fokus liegt auf maßgeschneiderten Lösungen, die Zeit sparen und Produktivität steigern.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Von der strategischen Beratung bis zur technischen Umsetzung - 
                ich begleite Sie durch den gesamten Automatisierungsprozess und sorge für 
                nachhaltige, skalierbare Lösungen.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-3 md:space-y-4 px-4 lg:px-0">
              <h3 className="text-lg md:text-xl font-semibold text-foreground">Technologien & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-xs md:text-sm px-2 py-1 md:px-3 md:py-1"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Highlights */}
          <div className="space-y-4 md:space-y-6 px-4 lg:px-0">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300 w-full">
                <CardContent className="p-4 md:p-6 w-full">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="p-2 md:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div className="space-y-1 md:space-y-2 min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground text-base md:text-lg">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}