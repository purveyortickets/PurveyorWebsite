import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, DollarSign, TrendingUp, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import logo from "/lovable-uploads/fa21bdb6-a4e1-4d86-8a6e-97c7042719bc.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay for better text visibility */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/70" />
      
      {/* Animated dots */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-primary rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-1500" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex flex-col items-center mb-4">
              <img 
                src={logo} 
                alt="Purveyor Tickets Logo" 
                className="w-24 h-24 md:w-32 md:h-32 mb-4 animate-slide-up rounded-2xl shadow-lg backdrop-blur-sm border border-white/20"
              />
              <div className="text-4xl md:text-6xl font-bold text-white animate-slide-up">
                PURVEYOR TICKETS
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold animate-slide-up delay-200 text-white">
              Your Go-To Ticket Purchase Assistance
            </h1>
          </div>
          

          {/* Removed buttons as requested */}

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 animate-slide-up delay-500">
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-black/40 hover:border-white/30 cursor-pointer">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-white font-medium">Quick & Hassle-Free</p>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-black/40 hover:border-white/30 cursor-pointer">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-white font-medium">High Success Rate</p>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-black/40 hover:border-white/30 cursor-pointer">
              <div className="w-8 h-8 text-primary mx-auto mb-2 flex items-center justify-center text-2xl font-bold">1</div>
              <p className="text-sm text-white font-medium">Low Queue Numbers</p>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-black/40 hover:border-white/30 cursor-pointer">
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-white font-medium">Affordable Fees</p>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-black/40 hover:border-white/30 cursor-pointer">
              <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-white font-medium">1000+ Tickets Successfully Purchase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;