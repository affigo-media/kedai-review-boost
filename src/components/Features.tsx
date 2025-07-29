import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, BarChart3, Clock, Shield, Globe, Zap } from "lucide-react";
import reviewAutomation from "@/assets/review-automation.jpg";
import businessGrowth from "@/assets/business-growth.jpg";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Smart Review Responses",
      description: "AI generates personalized, contextual replies to customer reviews in multiple languages including Bahasa Malaysia."
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Track your reputation score, customer sentiment, and response performance with detailed insights."
    },
    {
      icon: Clock,
      title: "24/7 Automation",
      description: "Never miss a review again. Our AI responds instantly, even outside business hours."
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Maintain consistent brand voice and handle negative reviews professionally and promptly."
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Works with Google Reviews, Facebook, TripAdvisor, and other major review platforms."
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get started in minutes with our simple integration process designed for Malaysian businesses."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Malaysian Businesses
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              Choose kedAI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your customer engagement with AI-powered tools designed specifically for the Malaysian market.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-smooth group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Review Automation */}
          <div className="order-2 lg:order-1">
            <img 
              src={reviewAutomation} 
              alt="Automated Review Management" 
              className="rounded-lg shadow-elegant hover:shadow-glow transition-smooth"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold mb-6">
              Automate Review Responses
              <span className="block text-transparent bg-gradient-secondary bg-clip-text">
                Like a Pro
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our AI understands context, sentiment, and your brand voice to create authentic responses 
              that build customer relationships and improve your online reputation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-secondary"></div>
                <span>Contextual responses in Bahasa Malaysia & English</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-secondary"></div>
                <span>Learns your brand voice and style</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-secondary"></div>
                <span>Handles positive and negative reviews professionally</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
          {/* Business Growth */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Boost Your Business
              <span className="block text-transparent bg-gradient-primary bg-clip-text">
                Growth with Data
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Get actionable insights about your customer sentiment, response performance, and 
              reputation trends to make informed business decisions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                <span>Real-time reputation monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                <span>Customer sentiment analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                <span>Performance benchmarking</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src={businessGrowth} 
              alt="Business Growth Analytics" 
              className="rounded-lg shadow-elegant hover:shadow-glow transition-smooth"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;