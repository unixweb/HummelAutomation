import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Felder aus.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Fehler",
        description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Nachricht gesendet!",
          description: result.message || "Ihre Nachricht wurde erfolgreich übermittelt. Ich melde mich zeitnah bei Ihnen.",
          duration: 5000
        });
        
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Fehler beim Senden der Nachricht");
      }
    } catch (error) {
      console.error("Fehler beim Senden der Nachricht:", error);
      toast({
        title: "Fehler",
        description: error instanceof Error ? error.message : "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "E-Mail",
      value: "kontakt@joachimhummel.de"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Telefon",
      value: "+49 89 87181763"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Standort",
      value: "Deutschland"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">
            Kontakt
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Bereit für Ihre digitale Transformation? Lassen Sie uns Ihre Herausforderungen besprechen 
            und gemeinsam eine maßgeschneiderte Lösung entwickeln.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="hover-elevate">
            <CardHeader className="px-4 md:px-6">
              <CardTitle className="text-xl md:text-2xl">Jetzt Termin vereinbaren</CardTitle>
            </CardHeader>
            <CardContent className="px-4 md:px-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ihr vollständiger Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ihre.email@beispiel.de"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anforderungen..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base md:text-lg py-4 md:py-6 h-auto min-h-[44px] touch-manipulation"
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      Nachricht senden
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <Card className="hover-elevate">
              <CardHeader className="px-4 md:px-6">
                <CardTitle className="text-xl md:text-2xl">Kontaktinformationen</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3 md:space-x-4">
                      <div className="p-2 md:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground text-sm md:text-base">{info.label}</p>
                        <p className="text-muted-foreground text-sm md:text-base break-words">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                  Warum mit mir arbeiten?
                </h3>
                <ul className="space-y-2 md:space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-primary flex-shrink-0">✓</span>
                    <span className="text-sm md:text-base">Umsetzung, die funktioniert – statt nur Theorie</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-primary flex-shrink-0">✓</span>
                    <span className="text-sm md:text-base">Kostenlose Beratung zum Einstieg</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-primary flex-shrink-0">✓</span>
                    <span className="text-sm md:text-base">Passgenaue Lösungen für Ihre Herausforderungen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-primary flex-shrink-0">✓</span>
                    <span className="text-sm md:text-base">Kontinuität und Vertrauen in der Zusammenarbeit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}