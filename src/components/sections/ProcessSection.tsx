import { FloatingImages } from "./FloatingImages";

interface ProcessSectionProps {
  images: string[];
}

export const ProcessSection = ({ images }: ProcessSectionProps) => {
  return (
    <section className="py-20 px-4 bg-[#F9F7F6] relative overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <FloatingImages images={images} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#363331] mb-4">
            Como Funciona Nossa Análise Estratégica
          </h2>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-[#363331] rounded-full flex items-center justify-center text-[#F9F7F6] font-bold text-2xl">
                1
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#363331] mb-3">
                Preencha sua Candidatura
              </h3>
              <p className="text-lg text-[#C6C0BE] leading-relaxed">
                Clique no botão abaixo e preencha o formulário. Suas respostas são o ponto de partida 
                para minha análise aprofundada do seu negócio.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-[#363331] rounded-full flex items-center justify-center text-[#F9F7F6] font-bold text-2xl">
                2
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#363331] mb-3">
                Análise Pessoal do seu Perfil
              </h3>
              <p className="text-lg text-[#C6C0BE] leading-relaxed">
                Vou analisar pessoalmente suas respostas e seu perfil para criar um diagnóstico inicial, 
                identificando os principais pontos de melhoria ainda antes da nossa conversa.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-[#363331] rounded-full flex items-center justify-center text-[#F9F7F6] font-bold text-2xl">
                3
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#363331] mb-3">
                Contato Direto via WhatsApp para Agendamento
              </h3>
              <p className="text-lg text-[#C6C0BE] leading-relaxed">
                Com a pré-análise em mãos, eu ou minha equipe entraremos em contato diretamente via WhatsApp 
                (em até 24h úteis) para apresentar os primeiros insights e agendar o melhor dia e horário para sua sessão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
