
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface FinalCTASectionProps {
  images: string[];
}

export const FinalCTASection = ({ images }: FinalCTASectionProps) => {
  return (
    <section id="consultation-form" className="py-20 px-4 bg-[#363331] text-[#F9F7F6] relative overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Pronto para jogar o jogo certo?
        </motion.h2>
        
        <motion.p 
          className="text-xl mb-8 leading-relaxed text-[#C6C0BE]"
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
            <Button 
              size="lg" 
              className="bg-[#F9F7F6] text-[#363331] hover:bg-[#C6C0BE] px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Quero Minha Consultoria Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          <motion.p 
            className="text-sm text-[#C6C0BE] flex items-center justify-center gap-2"
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
