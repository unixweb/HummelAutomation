import { Button } from "@/components/ui/button";
import { ArrowDown, Bot, Zap, Settings } from "lucide-react";

interface HeroProps {
  onContactClick?: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onContactClick?.();
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <Bot className="h-32 w-32 text-primary" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Settings className="h-24 w-24 text-chart-2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground">
              <span className="block">Joachim</span>
              <span className="block text-primary">Hummel</span>
            </h1>
            
            {/* Tagline */}
            <div className="max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium leading-relaxed">
                <span className="text-primary font-semibold">KI-Automation</span> für 
                IT-Freelancer & Unternehmen
              </p>
              <p className="text-lg sm:text-xl text-muted-foreground mt-4 flex items-center justify-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Prozesse automatisieren. Zeit gewinnen.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={scrollToContact}
              data-testid="button-cta-contact"
            >
              Jetzt Termin vereinbaren
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={scrollToAbout}
              data-testid="button-learn-more"
            >
              Mehr erfahren
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Projekte umgesetzt</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Automatisierung</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-2 rounded-full hover-elevate"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}