import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
    </div>
  );
};

export default Index;
