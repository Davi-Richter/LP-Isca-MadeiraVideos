import { CheckCircle, ArrowRight } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import { SpinningLogos } from "@/components/ui/spinning-logos";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AnimatedText } from "@/components/ui/animated-shiny-text";
import { GradientBackground } from "@/components/ui/noisy-gradient-backgrounds";
import { motion, LayoutGroup } from "motion/react";

interface HeroSectionProps {
  onScrollToForm: () => void;
  images: string[];
  rotatingTexts: string[];
}

export const HeroSection = ({
  onScrollToForm,
  images,
  rotatingTexts
}: HeroSectionProps) => {
  return <section className="w-full min-h-screen overflow-hidden md:overflow-visible flex flex-col lg:flex-row items-center justify-center relative px-4 py-6 lg:py-8 gap-6 lg:gap-12">
      {/* Gradient Background with Noise */}
      <GradientBackground
        gradientType="radial-gradient"
        gradientSize="150% 150%"
        gradientOrigin="center"
        colors={[
          { color: 'rgba(249,247,246,1)', stop: '0%' },
          { color: 'rgba(249,247,246,0.95)', stop: '20%' },
          { color: 'rgba(198,192,190,0.3)', stop: '60%' },
          { color: 'rgba(54,51,49,0.1)', stop: '100%' }
        ]}
        noiseIntensity={0.3}
        noisePatternSize={150}
        noisePatternRefreshInterval={8}
        noisePatternAlpha={15}
        className="z-0"
      >

      {/* Conteúdo principal */}
      <div className="flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 z-50 pointer-events-auto order-2 lg:order-1 max-w-2xl lg:max-w-none">
        <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left w-full justify-center lg:justify-start items-center lg:items-start flex-col flex whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-2 lg:space-y-3 font-bold" animate={{
        opacity: 1,
        y: 0
      }} initial={{
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.2,
        ease: "easeOut",
        delay: 0.3
      }}>
          <span>Chega de </span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <TextRotate texts={rotatingTexts} mainClassName="overflow-hidden pr-3 text-[#C6C0BE] py-0 pb-1 md:pb-2 lg:pb-3 rounded-xl" staggerDuration={0.03} staggerFrom="last" rotationInterval={3000} transition={{
              type: "spring",
              damping: 30,
              stiffness: 400
            }} />
            </motion.span>
          </LayoutGroup>
        </motion.h1>
        
        <motion.div animate={{
        opacity: 1,
        y: 0
      }} initial={{
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.2,
        ease: "easeOut",
        delay: 0.4
      }} className="mt-2 md:mt-3 lg:mt-4 text-center lg:text-left">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#363331] leading-tight tracking-tight">
            <AnimatedText text="Atraia clientes com" textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight" className="py-0 justify-center lg:justify-start" gradientColors="linear-gradient(90deg, #363331, #C6C0BE, #363331)" gradientAnimationDuration={2} />
            <AnimatedText text="vídeos que realmente vendem" textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight" className="py-0 justify-center lg:justify-start" gradientColors="linear-gradient(90deg, #363331, #C6C0BE, #363331)" gradientAnimationDuration={2.5} />
            
          </div>
        </motion.div>
        
        <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-left pt-3 sm:pt-4 md:pt-5 lg:pt-6 leading-relaxed max-w-xl lg:mx-0 mx-auto" animate={{
        opacity: 1,
        y: 0
      }} initial={{
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.2,
        ease: "easeOut",
        delay: 0.5
      }}>
          Consultoria gratuita para transformar seu perfil numa máquina de captação de clientes.
        </motion.p>

        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start mt-6 sm:mt-8 md:mt-10 lg:mt-12 space-y-3">
          <motion.div animate={{
          opacity: 1,
          y: 0
        }} initial={{
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.2,
          ease: "easeOut",
          delay: 0.7,
          scale: {
            duration: 0.2
          }
        }} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <InteractiveHoverButton onClick={onScrollToForm} variant="dark" className="bg-[#363331] text-white px-6 lg:px-8 py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl" style={{
            fontFamily: 'Inter, system-ui, sans-serif'
          }}>
              <span className="flex items-center gap-2">
                Quero Minha Consultoria Gratuita
                <ArrowRight className="h-4 w-4 lg:h-5 lg:w-5" />
              </span>
            </InteractiveHoverButton>
          </motion.div>
          
          <motion.p className="text-xs sm:text-sm text-[#C6C0BE] flex items-center justify-center lg:justify-start gap-2 text-center lg:text-left" animate={{
          opacity: 1,
          y: 0
        }} initial={{
          opacity: 0,
          y: 20
        }} transition={{
          duration: 0.2,
          ease: "easeOut",
          delay: 0.9
        }}>
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
            Sessão estratégica 100% gratuita e sem compromisso.
          </motion.p>
        </div>
      </div>

      {/* SpinningLogos */}
      <div className="flex justify-center items-center w-full lg:w-1/2 order-1 lg:order-2 mb-4 lg:mb-0">
        <motion.div animate={{
        opacity: 1,
        scale: 1
      }} initial={{
        opacity: 0,
        scale: 0.8
      }} transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4
      }} className="transform scale-60 sm:scale-75 md:scale-85 lg:scale-90 xl:scale-100">
          <SpinningLogos />
        </motion.div>
      </div>
    </GradientBackground>
    </section>;
};
