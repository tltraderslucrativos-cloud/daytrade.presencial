import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronLeft, ChevronRight, Clock, MapPin, Users, Zap, TrendingUp, Shield, BookOpen, Play, MessageCircle, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * TRADE EM FOCO - Página de Vendas
 * Design: Minimalismo Corporativo com Energia
 * Cores: Preto (#1a1a1a), Amarelo (#FFD700), Branco, Cinza
 * Tipografia: Montserrat (títulos), Inter (corpo)
 * Mentor: Vitor Brasileiro - CEO e criador do método TRADE LUCRATIVO
 */

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [vagasRestantes] = useState(8);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // Data de encerramento: 29 de maio de 2026 às 23:59
      const deadline = new Date(2026, 4, 29, 23, 59, 59, 0); // Mês é 0-indexado (4 = maio)

      const difference = deadline.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const faqItems = [
    {
      question: "Sou iniciante, esse evento é pra mim?",
      answer: "Sim! A imersão é estruturada para todos os níveis, do iniciante ao avançado. Começamos desde os fundamentos de leitura de mercado até estratégias avançadas. Você sairá com um método completo aplicável desde a semana seguinte."
    },
    {
      question: "Vou sair operando já na segunda-feira?",
      answer: "Sim. O objetivo é que você tenha um método prático e testado que possa aplicar imediatamente. Você receberá um checklist operacional e rotina diária para começar a operar com disciplina."
    },
    {
      question: "Tem estacionamento no local?",
      answer: "Sim, há estacionamento conveniado no local, com valor de R$ 10,00/h."
    },
    {
      question: "O almoço é incluso?",
      answer: "O almoço não será incluso. Teremos 1h30 de pausa para que você possa almoçar nos restaurantes próximos ao evento. Existem várias opções de qualidade na região."
    },
    {
      question: "Preciso levar notebook?",
      answer: "Não é obrigatório. Você poderá acompanhar o conteúdo normalmente sem a necessidade de levar um dispositivo."
    },
    {
      question: "E se eu não puder comparecer presencialmente?",
      answer: "Infelizmente é um evento 100% presencial. A interação ao vivo, networking e análise em tempo real são fundamentais para o aprendizado. Não oferecemos modalidade online para este evento."
    }
  ];

  const benefits = [
    { icon: Clock, title: "1 dia completo", description: "Imersão intensiva presencial em Praia Grande" },
    { icon: Users, title: "Mentoria ao vivo", description: "Com Vitor Brasileiro, CEO da TRADE EM FOCO" },
    { icon: Zap, title: "Operacional prático", description: "Método aplicável desde a semana seguinte" },
    { icon: TrendingUp, title: "B3 e Forex", description: "Análise em tempo real nos principais mercados" },
    { icon: Shield, title: "Gestão de risco", description: "Proteção de capital e disciplina operacional" },
    { icon: BookOpen, title: "Método TRADE LUCRATIVO", description: "Criado por Vitor Brasileiro, validado em mercado" }
  ];

  const schedule = [
    {
      period: "Período da Manhã",
      items: [
        {
          title: "Coffee Break & Networking (Recepção)",
          description: "Chegada, conexão entre os participantes e aquecimento para o dia. Ambiente preparado para você já entrar no clima do mercado."
        },
        {
          title: "Abertura & Direcionamento do Dia",
          description: "Entenda exatamente o que você vai aprender e como isso pode transformar seus resultados no mercado."
        },
        {
          title: "Nivelamento dos alunos",
          description: ""
        },
        {
          title: "Leitura Institucional do Mercado (SMC)",
          description: "Você vai aprender a identificar onde o dinheiro grande atua e como se posicionar junto com ele."
        },
        {
          title: "Como o Mercado Realmente se Move (Dow + Elliott)",
          description: "Domine tendências, ciclos e movimentos para parar de operar no achismo."
        },
        {
          title: "Exercícios e dinâmica sobre o mercado",
          description: ""
        }
      ]
    },
    {
      period: "Período da Tarde",
      items: [
        {
          title: "O Código do Mercado (Wyckoff na Prática)",
          description: "Entenda como os grandes players acumulam e distribuem antes dos grandes movimentos."
        },
        {
          title: "Aplicação Real no Gráfico (B3 & Forex)",
          description: "Hora de colocar em prática com acompanhamento."
        },
        {
          title: "Estratégias de entrada e saída",
          description: "Gestão de stop e alvo. Gestão de risco aplicada à renda extra: quanto arriscar por operação e como proteger capital."
        },
        {
          title: "Plano prático de trading",
          description: "Rotina operacional, checklist antes de operar e como transformar conhecimento em execução."
        },
        {
          title: "Ajustes Finais + Clareza Operacional",
          description: "Refine sua leitura, corrija erros e tire dúvidas."
        },
        {
          title: "Encerramento + Próximo Nível",
          description: "Direcionamento final para sua evolução no mercado."
        }
      ]
    }
  ];

  const testimonials = [
    { name: "Depoimento 1", videoId: "y5bzVbK4LMI" },
    { name: "Depoimento 2", videoId: "EAVUBbrnk_A" },
    { name: "Depoimento 3", videoId: "AtM5XD62xGQ" },
    { name: "Depoimento 4", videoId: "IJCvv_iyzq8" },
    { name: "Depoimento 5", videoId: "HK_fiyn9drQ" },
    { name: "Depoimento 6", videoId: "rjnvsapbUGM" },
    { name: "Depoimento 7", videoId: "xx28QIvHDBk" }
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-yellow-400 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="font-montserrat font-bold text-black text-lg">T</span>
            </div>
            <span className="font-montserrat font-bold text-black text-xl">Imersão Presencial de Day Trade</span>
          </div>
          <a href="https://pay.infinitepay.io/hugo-vitor-1e3/VC1DLTItSQ-1UKAOIegIV-297,00" target="_blank" rel="noopener noreferrer">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-montserrat font-bold">
              GARANTIR VAGA
            </Button>
          </a>
        </div>
      </header>

      {/* ===== COUNTDOWN SECTION ===== */}
      <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <span className="font-montserrat font-bold text-lg">⏰ INSCRIÇÕES ENCERRAM EM:</span>
            <div className="flex gap-3 justify-center">
              <div className="bg-black text-yellow-400 rounded-lg px-3 py-2 min-w-16">
                <div className="font-montserrat font-bold text-xl">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs">dias</div>
              </div>
              <div className="bg-black text-yellow-400 rounded-lg px-3 py-2 min-w-16">
                <div className="font-montserrat font-bold text-xl">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs">horas</div>
              </div>
              <div className="bg-black text-yellow-400 rounded-lg px-3 py-2 min-w-16">
                <div className="font-montserrat font-bold text-xl">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs">minutos</div>
              </div>
              <div className="bg-black text-yellow-400 rounded-lg px-3 py-2 min-w-16">
                <div className="font-montserrat font-bold text-xl">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs">segundos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663147000779/65djtfYT5YMYwXYQLpLfJ3/hero-trading-charts-Rk8L5HYhpgZf3KPee6MsN5.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg mb-6 font-montserrat font-bold text-sm">
              IMERSÃO PRESENCIAL 25 DE ABRIL
            </div>
            
            <h1 className="display-lg text-white mb-6">
              UM DIA DE IMERSÃO TOTAL NO <span className="text-yellow-400">MERCADO B3 & FOREX</span>
            </h1>
            <p className="text-2xl font-montserrat font-bold text-white mb-6">
              Do ZERO ao AVANÇADO — aprenda nosso operacional na prática!
            </p>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Do iniciante ao avançado. Aprenda o método completo de trading com Smart Money Concepts, Wyckoff e análise técnica avançada. Saia operando com processo de verdade, mentoriado por Vitor Brasileiro, CEO da TRADE EM FOCO.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3 text-white text-lg">
                <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span>Praia Grande, SP</span>
              </div>
              <div className="flex items-center gap-3 text-white text-lg">
                <Calendar className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span>25/05/2026</span>
              </div>
              <div className="flex items-center gap-3 text-white text-lg">
                <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span>9h as 17h</span>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://pay.infinitepay.io/hugo-vitor-1e3/VC1DLTItSQ-1UKAOIegIV-297,00" target="_blank" rel="noopener noreferrer">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-montserrat font-bold text-lg px-8 py-6 h-auto">
                  QUERO GARANTIR MINHA VAGA
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CASES SECTION ===== */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-montserrat font-bold text-center text-yellow-400 mb-16">
            Algum desses casos é o seu?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Case 1 */}
            <div className="bg-slate-800 border-2 border-yellow-400 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:border-yellow-300">
              <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-4 flex-shrink-0">
                <span className="text-slate-900 font-bold text-xl">⚠️</span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Já consumiu dezenas de conteúdos e continua sem saber exatamente quando entrar e quando sair de uma operação.
              </p>
            </div>
            
            {/* Case 2 */}
            <div className="bg-slate-800 border-2 border-yellow-400 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:border-yellow-300">
              <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-4 flex-shrink-0">
                <span className="text-slate-900 font-bold text-xl">⚠️</span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Opera no impulso, ganha num dia, devolve no outro e começa a duvidar se o mercado é realmente pra você.
              </p>
            </div>
            
            {/* Case 3 */}
            <div className="bg-slate-800 border-2 border-yellow-400 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:border-yellow-300">
              <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-4 flex-shrink-0">
                <span className="text-slate-900 font-bold text-xl">⚠️</span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Não tem um processo. Cada operação é uma decisão nova, tomada com base em achismo, emoção ou dica de alguém.
              </p>
            </div>
            
            {/* Case 4 */}
            <div className="bg-slate-800 border-2 border-yellow-400 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:border-yellow-300">
              <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-4 flex-shrink-0">
                <span className="text-slate-900 font-bold text-xl">⚠️</span>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Vê gente postando resultado e se pergunta: "o que essas pessoas fazem de diferente?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MENTOR SECTION (LADO A LADO COMPACTO) ===== */}
      <section className="bg-white py-20 border-t-8 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <img 
              src="/manus-storage/vitor-brasileiro_b3be3b49.png"
              alt="Vitor Brasileiro - CEO Trade em Foco"
              className="rounded-lg shadow-lg w-full lg:w-64 h-auto flex-shrink-0"
            />
            <div>
              <h2 className="display-md text-black mb-2">
                Vitor Brasileiro
              </h2>
              <p className="text-lg text-yellow-400 font-montserrat font-bold mb-4">
                CEO da Mesa Proprietária TRADE EM FOCO
              </p>
              
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Vitor Brasileiro, com formação em engenharia mecânica, acumulou anos de experiência na indústria antes de adentrar o mercado financeiro em 2020, onde se especializou em operações de Day Trade.
              </p>
              
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                Após mais de cinco anos nesse campo, alcançou a independência que essa carreira oferece. Ele é o criador do método <strong>TRADE LUCRATIVO</strong>, um programa completo que atende tanto iniciantes quanto traders experientes que buscam aprimorar seus resultados.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed">
                Atualmente, como CEO da mesa proprietária TRADE EM FOCO, ele guia e treina traders em busca de consistência e sucesso nos mercados financeiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EVENT ROOM SECTION ===== */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="display-md text-white mb-12 text-center">
            Ambiente Profissional & Focado
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <img 
              src="/manus-storage/evento-sala-treinamento_3e57c28b.webp"
              alt="Sala de Treinamento - Centro de Operações"
              className="rounded-lg shadow-lg w-full h-auto"
            />

            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Sala reduzida com múltiplos mentores, análise ao vivo em tempo real, e ambiente preparado para máximo aprendizado. Você terá contato direto com operadores experientes e acesso a ferramentas profissionais de trading.
              </p>
              
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-yellow-400 font-bold text-xl">✓</span>
                  <span className="text-gray-300">Máximo 30 participantes por turma</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-yellow-400 font-bold text-xl">✓</span>
                  <span className="text-gray-300">Mentores acompanhando toda a imersão</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-yellow-400 font-bold text-xl">✓</span>
                  <span className="text-gray-300">Análise de mercado ao vivo no encerramento</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-yellow-400 font-bold text-xl">✓</span>
                  <span className="text-gray-300">Networking com operadores e investidores</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="bg-black text-white py-16 border-t-8 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="display-md text-white mb-8">
              Quanto já te custou operar sem método?
            </h2>
            
            <div className="bg-gray-900 p-8 rounded-lg border-l-4 border-yellow-400">
              <p className="text-lg text-gray-300 mb-4">
                Entradas erradas, emocional descontrolado, lucro devolvido...
              </p>
              <p className="text-2xl font-montserrat font-bold text-white">
                Para muitos, isso passa de <span className="text-yellow-400">R$10.000 por ano</span>.
              </p>
              <p className="text-lg text-gray-300 mt-6">
                A <strong>Imersão Trade em Foco</strong> te entrega em 1 dia um método completo de operação, validado por quem vive do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="display-md text-black mb-16 text-center">
            O que você vai receber
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <Card key={idx} className="bg-white border-l-4 border-yellow-400 p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="font-montserrat font-bold text-lg text-black mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SCHEDULE SECTION ===== */}
      <section className="bg-black text-white py-20 border-t-8 border-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="display-md text-white mb-16 text-center">
            Cronograma Completo
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            {schedule.map((period, periodIdx) => (
              <div key={periodIdx}>
                <h3 className="font-montserrat font-bold text-2xl text-yellow-400 mb-8 pb-4 border-b border-yellow-400">
                  {period.period}
                </h3>
                <div className="space-y-6">
                  {period.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="pl-6 border-l-4 border-yellow-400">
                      <h4 className="font-montserrat font-bold text-lg text-white mb-2">
                        {item.title}
                      </h4>
                      {item.description && (
                        <p className="text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMAGES SHOWCASE ===== */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="display-md text-black mb-12 text-center">
            Conteúdo Prático & Aplicável
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663147000779/65djtfYT5YMYwXYQLpLfJ3/smc-smart-money-concept-KUZqo6qUvLLks7R73ULGW3.webp"
              alt="Smart Money Concepts"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663147000779/65djtfYT5YMYwXYQLpLfJ3/market-analysis-abstract-LB3qHxYzsXhe62NTDVWTdT.webp"
              alt="Análise de Mercado"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="bg-black text-white py-20 border-t-8 border-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="display-md text-white mb-16 text-center">
            O que dizem nossos alunos
          </h2>

          {/* Carrossel horizontal de vídeos 9:16 */}
          <div className="relative">
            {/* Botão esquerdo */}
            <button
              onClick={() => setCurrentTestimonialIdx((prev) => {
                const step = window.innerWidth < 768 ? 1 : 3;
                return Math.max(0, prev - step);
              })}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 text-black hover:bg-yellow-500 p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Container do carrossel */}
            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(calc(-${currentTestimonialIdx * 33.333}% - ${currentTestimonialIdx * 1}rem))`
                }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-1/2 md:w-1/3 px-2"
                  >
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden border-4 border-yellow-400 shadow-2xl" style={{ aspectRatio: '9/16', minHeight: '350px' }}>
                      <iframe
                        key={testimonial.videoId}
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=0&controls=1&modestbranding=1`}
                        title={testimonial.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ display: 'block', width: '100%', height: '100%' }}
                      />
                    </div>
                    <p className="text-yellow-400 font-montserrat font-bold text-sm mt-2 text-center">
                      {testimonial.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Botão direito */}
            <button
              onClick={() => setCurrentTestimonialIdx((prev) => {
                const step = window.innerWidth < 768 ? 1 : 3;
                return Math.min(testimonials.length - 1, prev + step);
              })}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 text-black hover:bg-yellow-500 p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicadores de página */}
          <div className="flex gap-2 justify-center mt-8 flex-wrap">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonialIdx(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentTestimonialIdx ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section className="bg-white py-20 border-t-8 border-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="display-md text-black mb-12 text-center">
            Localização do Evento
          </h2>

          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4361.275158288742!2d-46.41726582387079!3d-24.00713597812204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1d0dce6cd4b3%3A0x3adeb8c0b356501c!2sCentro%20de%20Opera%C3%A7%C3%B5es%20Presencial%20%7C%20Curso%20de%20Day%20Trade%20%7C%20Mesa%20Propriet%C3%A1ria!5e1!3m2!1sen!2sbr!4v1778867243690!5m2!1sen!2sbr"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="bg-gray-50 p-8 border-b-8 border-yellow-400">
              <h3 className="text-2xl font-montserrat font-bold text-black mb-4">
                📍 Centro de Operações Presencial - Praia Grande, SP
              </h3>
              <p className="text-gray-700 text-lg mb-2">
                <strong>Endereço:</strong> Rua Fumio Miyazi, 141 - Boqueirão, Praia Grande - SP
              </p>
              <p className="text-gray-700 text-lg">
                <strong>Sala:</strong> 14º Andar - Sala 1412
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md text-white mb-8">
            Investimento em Sua Evolução
          </h2>
          
          <div className="max-w-md mx-auto bg-gray-900 border-2 border-yellow-400 rounded-lg p-8 mb-8">
            <div className="text-5xl font-montserrat font-bold text-yellow-400 mb-4">
              R$ 297
            </div>
            <p className="text-gray-400 mb-8">
              1 dia completo de imersão presencial no operacional B3 e Forex
            </p>
            <a href="https://pay.infinitepay.io/hugo-vitor-1e3/VC1DLTItSQ-1UKAOIegIV-297,00" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-montserrat font-bold text-lg py-6 h-auto">
                GARANTIR VAGA AGORA
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="bg-white py-20 border-t-8 border-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="display-md text-black mb-12 text-center">
            Dúvidas Frequentes
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-montserrat font-bold text-lg text-left text-black">
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-yellow-400 flex-shrink-0 transition-transform ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedFaq === idx && (
                  <div className="p-6 bg-white border-t border-gray-300">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== FINAL CTA SECTION ===== */}
      <section className="bg-black text-white py-20 border-t-8 border-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md text-white mb-8">
            Pronto para Dominar o Mercado?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Garanta sua vaga agora e comece sua transformação no trading com Vitor Brasileiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://pay.infinitepay.io/hugo-vitor-1e3/VC1DLTItSQ-1UKAOIegIV-297,00" target="_blank" rel="noopener noreferrer">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-montserrat font-bold text-lg px-8 py-6 h-auto">
                QUERO GARANTIR MINHA VAGA
              </Button>
            </a>
          </div>

          <div className="text-gray-400 space-y-2">
            <p className="font-montserrat font-bold">Dúvidas? Fale com nossa equipe</p>
            <p className="text-lg">
              <a href="https://instagram.com/trade.em.foco" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-500 font-bold">
                @trade.em.foco
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black text-gray-500 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            © 2026 Trade em Foco. Todos os direitos reservados.
          </p>
          <p className="text-sm">
            Imersão Presencial em Trading e Análise Técnica - Método TRADE LUCRATIVO
          </p>
        </div>
      </footer>
      {/* ===== WHATSAPP FLOATING BUTTON ===== */}
      <a
        href="https://wa.me/5513988492463?text=Olá! Tenho dúvidas sobre a imersão TRADE EM FOCO de 25 de abril. Pode me ajudar?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        title="Envie uma mensagem no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Dúvidas? Fale conosco!
        </span>
      </a>
    </div>
  );
}
