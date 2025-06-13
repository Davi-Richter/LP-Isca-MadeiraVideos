
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section id="consultation-form" className="py-20 px-4 bg-[#363331] text-[#F9F7F6]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para jogar o jogo certo?
        </h2>
        
        <p className="text-xl mb-8 leading-relaxed text-[#C6C0BE]">
          Você pode continuar criando conteúdo no escuro, torcendo para que um vídeo viralizar por acaso, 
          ou pode receber um plano estratégico claro, feito para o seu negócio, que atrai clientes reais. 
          A decisão de profissionalizar seu marketing começa aqui.
        </p>
        
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="bg-[#F9F7F6] text-[#363331] hover:bg-[#C6C0BE] px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Quero Minha Consultoria Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-sm text-[#C6C0BE] flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Sessão estratégica 100% gratuita e sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};
