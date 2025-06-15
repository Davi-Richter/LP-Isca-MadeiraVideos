import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Star } from "lucide-react";
import { motion } from "motion/react";
interface BenefitsSectionProps {
  images: string[];
}
export const BenefitsSection = ({
  images
}: BenefitsSectionProps) => {
  return <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#363331] mb-4 font-right-grotesk">Saia da Consultoria com um Plano Estratégico Claro</h2>
          <p className="text-xl text-[#C6C0BE] max-w-3xl mx-auto font-aeonik">
            Esta não é uma conversa genérica. Esta é uma sessão de trabalho onde você receberá:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }} whileHover={{
          y: -10,
          scale: 1.02
        }}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F9F7F6] h-full">
              <CardContent className="p-8">
                <motion.div className="w-16 h-16 bg-[#363331] rounded-full flex items-center justify-center mb-6 mx-auto" whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.5
              }}>
                  <Target className="h-8 w-8 text-[#F9F7F6]" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#363331] mb-4 text-center font-right-grotesk">
                  Um Raio-X Completo do Seu Cenário Atual
                </h3>
                <p className="text-[#C6C0BE] text-center leading-relaxed font-aeonik">
                  Vamos analisar seu perfil, bio e conteúdo para mostrar exatamente onde sua estratégia está falhando. 
                  Você entenderá por que seus esforços atuais (posts amadores, feed vitrine) não estão gerando conexões ou vendas.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} whileHover={{
          y: -10,
          scale: 1.02
        }}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F9F7F6] h-full">
              <CardContent className="p-8">
                <motion.div className="w-16 h-16 bg-[#363331] rounded-full flex items-center justify-center mb-6 mx-auto" whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.5
              }}>
                  <TrendingUp className="h-8 w-8 text-[#F9F7F6]" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#363331] mb-4 text-center font-right-grotesk">
                  Um Mapa Claro com Pontos de Melhoria e Oportunidades
                </h3>
                <p className="text-[#C6C0BE] text-center leading-relaxed font-aeonik">
                  Revelaremos as oportunidades de posicionamento e comunicação que você não está aproveitando. 
                  Você verá como otimizar sua bio para conversão, criar conteúdo de autoridade e construir uma identidade visual que justifique um ticket maior.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }} whileHover={{
          y: -10,
          scale: 1.02
        }}>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#F9F7F6] h-full">
              <CardContent className="p-8">
                <motion.div className="w-16 h-16 bg-[#363331] rounded-full flex items-center justify-center mb-6 mx-auto" whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.5
              }}>
                  <Star className="h-8 w-8 text-[#F9F7F6]" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#363331] mb-4 text-center font-right-grotesk">
                  Um Plano de Ação Estratégico para Resultados Imediatos
                </h3>
                <p className="text-[#C6C0BE] text-center leading-relaxed font-aeonik">
                  Você receberá um plano com as primeiras ações que precisa executar para transformar seu perfil num funil de vendas. 
                  Aprenderá como reestruturar seu posicionamento e quais métricas de negócio (não métricas de vaidade) realmente importam para gerar mais orçamentos.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>;
};