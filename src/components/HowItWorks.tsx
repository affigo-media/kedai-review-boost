import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plug, Bot, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Plug,
      title: "Connect Your Platforms",
      description: "Link your Google Business, Facebook, and other review platforms in just a few clicks.",
      step: "01"
    },
    {
      icon: Bot,
      title: "AI Learns Your Voice",
      description: "Our AI analyzes your brand and creates a personalized response style that matches your business.",
      step: "02"
    },
    {
      icon: TrendingUp,
      title: "Watch Your Reputation Grow",
      description: "Sit back as kedAI automatically responds to reviews and provides insights to boost your business.",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started in
            <span className="block text-transparent bg-gradient-secondary bg-clip-text">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Setting up kedAI for your Malaysian business is quick and easy. No technical expertise required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-smooth group relative">
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-elegant">
                {step.step}
              </div>
              
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card p-12 rounded-lg shadow-elegant">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of Malaysian businesses already using kedAI to automate their customer engagement 
            and boost their online reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;