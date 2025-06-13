
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const exampleImages = [
    "/lovable-uploads/6fbdd04d-f734-433d-b9c0-908097b9eee4.png",
    "/lovable-uploads/4503e2e0-baec-4ff8-882c-abda0f92f4a5.png",
    "/lovable-uploads/0f61c860-4c1b-4504-8d7c-a8988bbfe0c6.png",
    "/lovable-uploads/cf5bae7e-f91a-4624-a5f9-045c790ab452.png",
    "/lovable-uploads/e52267df-9cc9-43cd-9986-91e17a50b5b7.png",
  ];

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }} className="min-h-screen bg-[#F9F7F6] text-[#363331]">
      <HeroSection onScrollToForm={scrollToForm} images={exampleImages} />
      <BenefitsSection />
      <ProcessSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
