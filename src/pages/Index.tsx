import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Amenities } from "@/components/Amenities";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProperties />
      <Amenities />
      <Footer />
    </div>
  );
};

export default Index;