
import { CheckCircle, ArrowRight } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { motion } from "motion/react";

interface FinalCTASectionProps {
  images: string[];
  onButtonClick: () => void;
}

export const FinalCTASection = ({ images, onButtonClick }: FinalCTASectionProps) => {
  return (
    <section id="consultation-form" className="py-20 px-4 bg-[#363331] text-[#F9F7F6] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 font-right-grotesk"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Pronto para jogar o jogo certo?
        </motion.h2>
        
        <motion.p 
          className="text-xl mb-8 leading-relaxed text-[#C6C0BE] font-aeonik"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Você pode continuar criando conteúdo no escuro, torcendo para que um vídeo viralizar por acaso, 
          ou pode receber um plano estratégico claro, feito para o seu negócio, que atrai clientes reais. 
          A decisão de profissionalizar seu marketing começa aqui.
        </motion.p>
        
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <InteractiveHoverButton 
              onClick={onButtonClick}
              variant="light"
              className="bg-[#F9F7F6] text-[#363331] px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl font-aeonik"
            >
              <span className="flex items-center gap-2">
                Quero Minha Consultoria Gratuita
                <ArrowRight className="h-5 w-5" />
              </span>
            </InteractiveHoverButton>
          </motion.div>
          
          <motion.p 
            className="text-sm text-[#C6C0BE] flex items-center justify-center gap-2 font-aeonik"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="h-4 w-4" />
            Sessão estratégica 100% gratuita e sem compromisso.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
