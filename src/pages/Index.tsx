import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, TrendingUp, Target, ArrowRight, Star } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { motion, LayoutGroup } from "motion/react";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const exampleImages = [
    "/lovable-uploads/6fbdd04d-f734-433d-b9c0-908097b9eee4.png",
    "/lovable-uploads/4503e2e0-baec-4ff8-882c-abda0f92f4a5.png",
    "/lovable-uploads/0f61c860-4c1b-4504-8d7c-a8988bbfe0c6.png",
    "/lovable-uploads/cf5bae7e-f91a-4624-a5f9-045c790ab452.png",
    "/lovable-uploads/e52267df-9cc9-43cd-9986-91e17a50b5b7.png",
  ];

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif' }} className="min-h-screen bg-[#F9F7F6] text-[#363331]">
      {/* SECTION 1: HERO */}
      <section className="w-full h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-center relative">
        <Floating sensitivity={-0.5} className="h-full">
          <FloatingElement
            depth={0.5}
            className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
          >
            <motion.img
              src={exampleImages[0]}
              alt="Landscape with lake"
              className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={1}
            className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
          >
            <motion.img
              src={exampleImages[1]}
              alt="Aerial beach view"
              className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={4}
            className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
          >
            <motion.img
              src={exampleImages[2]}
              alt="Forest landscape"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={2}
            className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
          >
            <motion.img
              src={exampleImages[3]}
              alt="Frozen lake aerial"
              className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            />
          </FloatingElement>

          <FloatingElement
            depth={1}
            className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
          >
            <motion.img
              src={exampleImages[4]}
              alt="Mountain lake reflection"
              className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            />
          </FloatingElement>
        </Floating>

        <div className="flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] z-50 pointer-events-auto px-4">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight tracking-tight space-y-1 md:space-y-4 font-bold"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
          >
            <span>Chega de </span>
            <LayoutGroup>
              <motion.span layout className="flex whitespace-pre">
                <TextRotate
                  texts={[
                    "trends.",
                    "dancinhas.",
                    "amadorismo.",
                    "perder tempo.",
                  ]}
                  mainClassName="overflow-hidden pr-3 text-[#C6C0BE] py-0 pb-2 md:pb-4 rounded-xl"
                  staggerDuration={0.03}
                  staggerFrom="last"
                  rotationInterval={3000}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </motion.span>
            </LayoutGroup>
            <span className="text-[#363331]">Atraia clientes com vídeos que realmente vendem.</span>
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-center pt-4 sm:pt-8 md:pt-10 lg:pt-12 leading-relaxed max-w-2xl mx-auto"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
          >
            Consultoria gratuita para transformar seu perfil numa máquina de captação de clientes.
          </motion.p>

          <div className="flex flex-col justify-center items-center mt-10 sm:mt-16 md:mt-20 lg:mt-20 space-y-4">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
                delay: 0.7,
                scale: { duration: 0.2 },
              }}
            >
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-[#363331] hover:bg-[#2a2826] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                Quero Minha Consultoria Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.p
              className="text-sm text-[#C6C0BE] flex items-center justify-center gap-2"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.9 }}
            >
              <CheckCircle className="h-4 w-4 text-green-600" />
              Sessão estratégica 100% gratuita e sem compromisso.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 2: BENEFITS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Fim da Incerteza: Saia da Consultoria com um Plano Estratégico Claro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esta não é uma conversa genérica. Esta é uma sessão de trabalho onde você receberá:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Um Raio-X Completo do Seu Cenário Atual
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Vamos analisar seu perfil, bio e conteúdo para mostrar exatamente onde sua estratégia está falhando. 
                  Você entenderá por que seus esforços atuais (posts amadores, feed vitrine) não estão gerando conexões ou vendas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Um Mapa Claro com Pontos de Melhoria e Oportunidades
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Revelaremos as oportunidades de posicionamento e comunicação que você não está aproveitando. 
                  Você verá como otimizar sua bio para conversão, criar conteúdo de autoridade e construir uma identidade visual que justifique um ticket maior.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Um Plano de Ação Estratégico para Resultados Imediatos
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Você receberá um plano com as primeiras ações que precisa executar para transformar seu perfil num funil de vendas. 
                  Aprenderá como reestruturar seu posicionamento e quais métricas de negócio (não métricas de vaidade) realmente importam para gerar mais orçamentos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROCESS */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona Nossa Análise Estratégica
            </h2>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Preencha sua Candidatura
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Clique no botão abaixo e preencha o formulário. Suas respostas são o ponto de partida 
                  para minha análise aprofundada do seu negócio.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  2
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Análise Pessoal do seu Perfil
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Vou analisar pessoalmente suas respostas e seu perfil para criar um diagnóstico inicial, 
                  identificando os principais pontos de melhoria ainda antes da nossa conversa.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  3
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Contato Direto via WhatsApp para Agendamento
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Com a pré-análise em mãos, eu ou minha equipe entraremos em contato diretamente via WhatsApp 
                  (em até 24h úteis) para apresentar os primeiros insights e agendar o melhor dia e horário para sua sessão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FINAL CTA */}
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
    </div>
  );
};

export default Index;
