
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ProductsSection from '@/components/sections/products';
import PortfolioSection from '@/components/sections/portfolio';
import MarketplaceSection from '@/components/sections/marketplace';
import FloatingWhatsApp from '@/components/floating-whatsapp';
import LocationSection from '@/components/sections/location';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <MarketplaceSection />
        <PortfolioSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
