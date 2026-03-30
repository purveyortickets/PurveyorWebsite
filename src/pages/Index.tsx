import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TwitterFeed from "@/components/TwitterFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <TwitterFeed />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
