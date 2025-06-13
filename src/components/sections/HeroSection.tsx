import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import { motion, LayoutGroup } from "motion/react";
import { FloatingImages } from "./FloatingImages";

interface HeroSectionProps {
  onScrollToForm: () => void;
  images: string[];
  rotatingTexts: string[];
}

export const HeroSection = ({ onScrollToForm, images, rotatingTexts }: HeroSectionProps) => {
  return (
    <section className="w-full h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative">
      <FloatingImages images={images} />

      <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto px-4">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-4 font-bold"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span>Chega de </span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <TextRotate
                texts={rotatingTexts}
                mainClassName="overflow-hidden pr-3 text-[#C6C0BE] py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
          <span className="text-[#363331]">
            Atraia clientes com vídeos<br />
            que realmente vendem.
          </span>
        </motion.h1>
        
        <motion.p
          className="text-base sm:text-lg md:text-xl text-center pt-4 sm:pt-8 md:pt-10 lg:pt-12 leading-relaxed max-w-2xl mx-auto"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Consultoria gratuita para transformar seu perfil numa máquina de captação de clientes.
        </motion.p>

        <div className="flex flex-col justify-center items-center mt-10 sm:mt-16 md:mt-20 lg:mt-20 space-y-4">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
          >
            <Button 
              onClick={onScrollToForm}
              size="lg" 
              className="bg-[#363331] hover:bg-[#2a2826] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Quero Minha Consultoria Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.p
            className="text-sm text-[#C6C0BE] flex items-center justify-center gap-2"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.9 }}
          >
            <CheckCircle className="h-4 w-4 text-green-600" />
            Sessão estratégica 100% gratuita e sem compromisso.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
