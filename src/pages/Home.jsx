import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Chatbot from "../components/internal_components/chatbot";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Home;
