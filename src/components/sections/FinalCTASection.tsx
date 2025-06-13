
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section id="consultation-form" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para jogar o jogo certo?
        </h2>
        
        <p className="text-xl mb-8 leading-relaxed opacity-90">
          Você pode continuar criando conteúdo no escuro, torcendo para que um vídeo viralizar por acaso, 
          ou pode receber um plano estratégico claro, feito para o seu negócio, que atrai clientes reais. 
          A decisão de profissionalizar seu marketing começa aqui.
        </p>
        
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Quero Minha Consultoria Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-sm opacity-80 flex items-center justify-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Sessão estratégica 100% gratuita e sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};
