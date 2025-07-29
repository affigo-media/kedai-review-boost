import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Siti Rahman",
      business: "Warung Mak Siti",
      location: "Kuala Lumpur",
      rating: 5,
      text: "kedAI has transformed how we handle customer feedback. Our response rate improved from 20% to 98%, and customers love our quick, personalized replies!"
    },
    {
      name: "Ahmad Fadzil",
      business: "Tech Solutions KL",
      location: "Selangor",
      rating: 5,
      text: "The AI understands our technical business context perfectly. It responds professionally in both English and Bahasa Malaysia, saving us hours daily."
    },
    {
      name: "Lim Wei Ming",
      business: "Heritage Hotel Penang",
      location: "Penang",
      rating: 5,
      text: "Since using kedAI, our Google rating improved from 4.2 to 4.7 stars. The automated responses handle guest feedback beautifully, even for complex situations."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Malaysian Businesses
            <span className="block text-transparent bg-gradient-primary bg-clip-text">
              Say About kedAI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real businesses across Malaysia who've transformed their customer engagement with kedAI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-smooth group">
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="border-t pt-6">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.business}
                  </div>
                  <div className="text-sm text-secondary">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Businesses Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">1M+</div>
              <div className="text-muted-foreground">Reviews Handled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;