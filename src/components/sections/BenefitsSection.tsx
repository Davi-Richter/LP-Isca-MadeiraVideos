import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Star } from "lucide-react";
import { FloatingImages } from "./FloatingImages";

interface BenefitsSectionProps {
  images: string[];
}

export const BenefitsSection = ({ images }: BenefitsSectionProps) => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <FloatingImages images={images} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#363331] mb-4">
            O Fim da Incerteza: Saia da Consultoria com um Plano Estratégico Claro
          </h2>
          <p className="text-xl text-[#C6C0BE] max-w-3xl mx-auto">
            Esta não é uma conversa genérica. Esta é uma sessão de trabalho onde você receberá:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F9F7F6]">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#363331] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="h-8 w-8 text-[#F9F7F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#363331] mb-4 text-center">
                Um Raio-X Completo do Seu Cenário Atual
              </h3>
              <p className="text-[#C6C0BE] text-center leading-relaxed">
                Vamos analisar seu perfil, bio e conteúdo para mostrar exatamente onde sua estratégia está falhando. 
                Você entenderá por que seus esforços atuais (posts amadores, feed vitrine) não estão gerando conexões ou vendas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F9F7F6]">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#363331] rounded-full flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="h-8 w-8 text-[#F9F7F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#363331] mb-4 text-center">
                Um Mapa Claro com Pontos de Melhoria e Oportunidades
              </h3>
              <p className="text-[#C6C0BE] text-center leading-relaxed">
                Revelaremos as oportunidades de posicionamento e comunicação que você não está aproveitando. 
                Você verá como otimizar sua bio para conversão, criar conteúdo de autoridade e construir uma identidade visual que justifique um ticket maior.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F9F7F6]">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#363331] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Star className="h-8 w-8 text-[#F9F7F6]" />
              </div>
              <h3 className="text-xl font-bold text-[#363331] mb-4 text-center">
                Um Plano de Ação Estratégico para Resultados Imediatos
              </h3>
              <p className="text-[#C6C0BE] text-center leading-relaxed">
                Você receberá um plano com as primeiras ações que precisa executar para transformar seu perfil num funil de vendas. 
                Aprenderá como reestruturar seu posicionamento e quais métricas de negócio (não métricas de vaidade) realmente importam para gerar mais orçamentos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
