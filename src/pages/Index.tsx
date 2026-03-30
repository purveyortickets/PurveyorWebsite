import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import UpcomingEvents from "@/components/OngoingEvents";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      <Hero />
      <Services />
      <UpcomingEvents />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
