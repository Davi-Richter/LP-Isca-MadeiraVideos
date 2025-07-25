
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  const openConsultationLink = () => {
    window.open('https://tally.so/r/nrbk25', '_blank', 'noopener,noreferrer');
  };

  const exampleImages = [
    "/lovable-uploads/6fbdd04d-f734-433d-b9c0-908097b9eee4.png",
    "/lovable-uploads/4503e2e0-baec-4ff8-882c-abda0f92f4a5.png",
    "/lovable-uploads/0f61c860-4c1b-4504-8d7c-a8988bbfe0c6.png",
    "/lovable-uploads/cf5bae7e-f91a-4624-a5f9-045c790ab452.png",
    "/lovable-uploads/e52267df-9cc9-43cd-9986-91e17a50b5b7.png",
  ];

  const rotatingTexts = [
    "trends.",
    "dancinhas.",
    "amadorismo.",
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F6] text-[#363331]">
      <HeroSection onButtonClick={openConsultationLink} images={exampleImages} rotatingTexts={rotatingTexts} />
      <BenefitsSection images={exampleImages} />
      <ProcessSection images={exampleImages} />
      <FinalCTASection onButtonClick={openConsultationLink} images={exampleImages} />
    </div>
  );
};

export default Index;
