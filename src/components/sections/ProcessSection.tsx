import { motion } from "motion/react";
interface ProcessSectionProps {
  images: string[];
}
export const ProcessSection = ({
  images
}: ProcessSectionProps) => {
  return <section className="py-20 px-4 bg-[#F9F7F6] relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#363331] mb-4 font-right-grotesk">
            Como Funciona Nossa Análise Estratégica
          </h2>
        </motion.div>

        <div className="space-y-12">
          <motion.div className="flex flex-col md:flex-row items-center gap-8" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }} whileHover={{
          scale: 1.02
        }}>
            <div className="flex-shrink-0">
              <motion.div className="w-20 h-20 bg-[#363331] rounded-full flex items-center justify-center text-[#F9F7F6] font-bold text-2xl font-right-grotesk" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                1
              </motion.div>
            </div>
            <motion.div className="flex-1 text-center md:text-left" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <h3 className="text-2xl font-bold text-[#363331] mb-3 font-right-grotesk">
                Preencha sua Candidatura
              </h3>
              <p className="text-lg text-[#C6C0BE] leading-relaxed font-aeonik">Clique no botão abaixo e preencha o formulário. Suas respostas são o ponto de partida para nossa análise aprofundada do seu negócio.</p>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row items-center gap-8" initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} whileHover={{
          scale: 1.02
        }}>
            <div className="flex-shrink-0">
              <motion.div className="w-20 h-20 bg-[#363331] rounded-full flex items-center justify-center text-[#F9F7F6] font-bold text-2xl font-right-grotesk" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                2
              </motion.div>
            </div>
            <motion.div className="flex-1 text-center md:text-left" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} viewport={{
            once: true
          }}>
              <h3 className="text-2xl font-bold text-[#363331] mb-3 font-right-grotesk">
                Análise Pessoal do seu Perfil
              </h3>
              <p className="text-lg text-[#C6C0BE] leading-relaxed font-aeonik">Vamos analisar pessoalmente suas respostas e seu perfil para criar um diagnóstico inicial, identificando os principais pontos de melhoria ainda antes da nossa conversa.</p>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row items-center gap-8" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }} whileHover={{
          scale: 1.02
        }}>
            <div className="flex-shrink-0">
              <motion.div className="w-20 h-20 bg-[#363331] rounded-full flex items-center justify-center text-[#F9F7F6] font-bold text-2xl font-right-grotesk" whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.5
            }}>
                3
              </motion.div>
            </div>
            <motion.div className="flex-1 text-center md:text-left" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} viewport={{
            once: true
          }}>
              <h3 className="text-2xl font-bold text-[#363331] mb-3 font-right-grotesk">
                Contato Direto via WhatsApp para Agendamento
              </h3>
              <p className="text-lg text-[#C6C0BE] leading-relaxed font-aeonik">Com a pré-análise em mãos, nossa equipe entrará em contato diretamente via WhatsApp (em até 24h úteis) para agendar o melhor dia e horário para sua sessão.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};