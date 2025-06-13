import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, TrendingUp, Target, ArrowRight, Star } from "lucide-react";
const Index = () => {
  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* SECTION 1: HERO */}
      <section className="relative py-20 px-4 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Chega de trends.{" "}
            <span className="text-blue-600">Atraia clientes com vídeos</span>{" "}
            que realmente vendem.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Agende uma consultoria gratuita e descubra o método exato para transformar seu perfil 
            numa máquina de captação de clientes, sem depender de trends ou músicas populares.
          </p>
          
          <div className="space-y-4">
            <Button onClick={scrollToForm} size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Quero Minha Consultoria Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Sessão estratégica 100% gratuita e sem compromisso.
            </p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Atraia clientes com vídeos 
que realmente vendem.</h3>
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
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
    </div>;
};
export default Index;