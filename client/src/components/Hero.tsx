import { Button } from "@/components/ui/button";
import { ArrowDown, Bot, Zap, Settings, Target } from "lucide-react";

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
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center relative overflow-hidden py-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/5"></div>
      {/* Decorative elements - completely hidden on mobile for better performance and layout */}
      <div className="absolute top-20 right-10 opacity-20 hidden md:block">
        <Bot className="h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 text-primary" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 hidden md:block">
        <Settings className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 text-chart-2" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="text-primary">JoachimHummel</span>
              </h1>
              
              {/* Tagline */}
              <div className="max-w-4xl mx-auto lg:mx-0 px-4 lg:px-0">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium leading-relaxed">
                  <span className="text-primary font-semibold">KI-Automation</span> für 
                  IT-Freelancer & Unternehmen
                </p>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mt-4 flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  <span>Prozesse automatisieren. Zeit gewinnen.</span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center px-4 lg:px-0">
              <Button 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto min-h-[44px] touch-manipulation"
                onClick={scrollToContact}
                data-testid="button-cta-contact"
              >
                Jetzt Termin vereinbaren
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto min-h-[44px] touch-manipulation"
                onClick={scrollToAbout}
                data-testid="button-learn-more"
              >
                Mehr erfahren
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto lg:mx-0 mt-8 sm:mt-10 px-4 lg:px-0">
              <div className="text-center lg:text-left">
                <Target className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto lg:mx-0" />
                <div className="text-xs sm:text-sm text-muted-foreground mt-2">Praxisnahe Lösungen</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projekte umgesetzt</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Automatisierung</div>
              </div>
            </div>
          </div>
          
          {/* Right column - Professional Portrait */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              {/* Photo placeholder */}
              <div className="w-72 h-96 lg:w-80 lg:h-[420px] rounded-2xl bg-gradient-to-br from-primary/20 to-chart-2/30 border-2 border-primary/20 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                      <span className="text-2xl text-primary font-bold">JH</span>
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">Professionelles</p>
                    <p className="text-muted-foreground text-sm font-medium">Porträt</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-chart-2/30 rounded-full animate-pulse delay-75"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="p-3 rounded-full hover-elevate min-h-[44px] min-w-[44px] touch-manipulation"
            data-testid="button-scroll-down"
          >
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
}