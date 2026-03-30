import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ticket, Clock, Shield, Users, Star, Zap, CheckCircle, DollarSign } from "lucide-react";
import ticketAnimation from "@/assets/ticket-animation.gif";
import patternBg from "@/assets/pattern-bg.jpg";

const Services = () => {
  const services = [
    {
      icon: <Ticket className="w-8 h-8 text-primary" />,
      title: "Ticket Purchase Assistance",
      description: "Expert help securing tickets for concerts, shows, and events. We handle the complexities of presales.",
      features: ["Concert tickets", "Show bookings", "Event access", "VIP packages"]
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Queue Management",
      description: "Low queue numbers and timestamps to maximize your chances of getting the best seats.",
      features: ["Priority access", "Early entry", "Best positioning", "Time optimization"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure Processing",
      description: "Use your own name and account for complete security and authenticity in all transactions.",
      features: ["Your credentials", "Secure payment", "Identity protection", "Fraud prevention"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up text-white">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
            Comprehensive ticket assistance solutions designed to make your event experience seamless and stress-free.
          </p>
        </div>


        {/* Main service showcase */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border/50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Professional Ticket Assistance
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                We offer dependable support to help you secure tickets for concerts, shows, and events. 
                Our team handles the complexities of ticket presales, so you can focus on enjoying the experience stress-free.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  <span className="text-sm">Hassle Free Processing</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-primary mr-3" />
                  <span className="text-sm">Expert Team</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-primary mr-3" />
                  <span className="text-sm">100% Reliable</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary mr-3" />
                  <span className="text-sm">100% Secure</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-primary mr-3" />
                  <span className="text-sm">High Success Rate</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-primary mr-3" />
                  <span className="text-sm">Affordable TPA Fee</span>
                </div>
              </div>

            </div>
            
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <img 
                  src={ticketAnimation} 
                  alt="Ticket Assistance" 
                  className="w-full h-auto rounded-3xl shadow-2xl backdrop-blur-sm border border-white/10"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;