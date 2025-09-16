import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Workflow, Users, Award, Settings } from "lucide-react";

export default function About() {
  const skills = [
    "KI-Automation",
    "n8n Workflows", 
    "Docker",
    "Pinecone",
    "LLMs",
    "Self-Hosting",
    "IT-Consulting",
    "Private Cloud-Infrastruktur"
  ];

  const highlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Praxisnahe Lösungen",
      description: "Helfe Unternehmen, IT greifbar und zuverlässig zu machen – praxisnah, klar und mit nachweislich erfolgreichen Projekten"
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
          {/* Left column - Professional workspace photo */}
          <div className="flex justify-center lg:justify-start order-last lg:order-first">
            <div className="relative">
              {/* Workspace photo placeholder */}
              <div className="w-full max-w-md h-80 lg:h-96 rounded-xl bg-gradient-to-br from-chart-2/20 to-primary/30 border border-primary/20 shadow-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Settings className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">Arbeitsplatz &</p>
                    <p className="text-muted-foreground text-sm font-medium">Automation Setup</p>
                  </div>
                </div>
              </div>
              {/* Tech elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
              <div className="absolute top-1/2 right-2 w-1 h-8 bg-primary/40 rounded-full"></div>
            </div>
          </div>
          
          {/* Right column - Text content */}
          <div className="space-y-6 md:space-y-8 order-first lg:order-last">
            <div className="space-y-4 md:space-y-6 px-4 lg:px-0">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Als <span className="font-semibold text-primary">IT-Systems Engineer & KI-Automation Spezialist</span> 
                helfe ich Unternehmen, IT greifbar und zuverlässig zu machen – 
                praxisnah, klar und mit nachweislich erfolgreichen Projekten.
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

            {/* Highlights */}
            <div className="space-y-4 md:space-y-6 px-4 lg:px-0">
              <h3 className="text-lg md:text-xl font-semibold text-foreground">Warum mit mir arbeiten?</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="hover-elevate transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          {highlight.icon}
                        </div>
                        <div className="space-y-1 min-w-0 flex-1">
                          <h4 className="font-semibold text-foreground text-sm">
                            {highlight.title}
                          </h4>
                          <p className="text-muted-foreground text-xs leading-relaxed">
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
      </div>
    </section>
  );
}