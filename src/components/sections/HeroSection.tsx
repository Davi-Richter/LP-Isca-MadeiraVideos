
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import { SpinningLogos } from "@/components/ui/spinning-logos";
import { motion, LayoutGroup } from "motion/react";

interface HeroSectionProps {
  onScrollToForm: () => void;
  images: string[];
  rotatingTexts: string[];
}

export const HeroSection = ({ onScrollToForm, images, rotatingTexts }: HeroSectionProps) => {
  return (
    <section className="w-full min-h-screen overflow-hidden md:overflow-visible flex flex-col lg:flex-row items-center justify-center relative px-4 py-8 lg:py-0">
      {/* Conteúdo principal */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 z-50 pointer-events-auto order-2 lg:order-1">
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-4 font-bold"
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
          className="text-sm sm:text-base md:text-lg lg:text-xl text-center pt-4 sm:pt-6 md:pt-8 lg:pt-10 leading-relaxed max-w-xl mx-auto"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          Consultoria gratuita para transformar seu perfil numa máquina de captação de clientes.
        </motion.p>

        <div className="flex flex-col justify-center items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 space-y-4">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={onScrollToForm}
              size="lg" 
              className="bg-[#363331] hover:bg-[#2a2826] text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Quero Minha Consultoria Gratuita
              <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
          </motion.div>
          
          <motion.p
            className="text-xs sm:text-sm text-[#C6C0BE] flex items-center justify-center gap-2 text-center"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.9 }}
          >
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
            Sessão estratégica 100% gratuita e sem compromisso.
          </motion.p>
        </div>
      </div>

      {/* SpinningLogos */}
      <div className="flex justify-center items-center w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="transform scale-75 sm:scale-90 lg:scale-100"
        >
          <SpinningLogos />
        </motion.div>
      </div>
    </section>
  );
};
