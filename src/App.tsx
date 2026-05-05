import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import ServicesSection from '@/sections/ServicesSection';
import ProductsSection from '@/sections/ProductsSection';
import ValueAddSection from '@/sections/ValueAddSection';
import TeamSection from '@/sections/TeamSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import ContactCTASection from '@/sections/ContactCTASection';
import Footer from '@/sections/Footer';

export default function App() {
  return (
    <div className="bg-cream min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <ValueAddSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactCTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
