import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ArrowRight, 
  ArrowUp,
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Star, 
  Check, 
  ShieldCheck, 
  Truck, 
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Compass,
  Award,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "sonner";
import { IMAGES, REVIEWS, REELS_VIDEOS, CONTACT_INFO } from "../const";

// Funcao para rastrear eventos no Google Analytics
const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData || {});
  }
};

// Funcao para rastrear eventos no Facebook Pixel
const trackFacebookEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, eventData || {});
  }
};

// Esquema de validação com Zod para o Formulário de Qualificação de Alto Padrão
const formSchema = z.object({
  nome: z.string().min(3, "Por favor, insira seu nome completo."),
  whatsapp: z.string().min(10, "Por favor, insira um número de WhatsApp válido."),
  faseProjeto: z.string().min(1, "Por favor, selecione a fase do seu projeto."),
  arquiteto: z.enum(["sim", "nao"]),
  investimento: z.string().min(1, "Por favor, selecione a faixa de investimento prevista."),
  descricao: z.string().min(10, "Por favor, descreva brevemente o seu ambiente (mínimo de 10 caracteres)."),
});

type FormValues = z.infer<typeof formSchema>;

// Lista de consultores seniores com seus respectivos números de WhatsApp
const CONSULTORES = [
  { telefone: "5567999990001" },
  { telefone: "5567999990002" },
  { telefone: "5567999990003" }
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [visibleReviews, setVisibleReviews] = useState<Set<number>>(new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      arquiteto: "nao",
    }
  });

  const arquitetoValue = watch("arquiteto");

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simular processamento local rápido
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);

    // Selecionar consultor de forma aleatória/rodízio para atendimento
    const consultorSelecionado = CONSULTORES[Math.floor(Math.random() * CONSULTORES.length)];

    // Formatar respostas amigáveis para a mensagem
    const faseFormatada = {
      planejamento: "Planejamento / Estudos Iniciais",
      obras: "Em Obras Estruturais",
      acabamento: "Fase de Acabamento / Decoração",
      renovacao: "Renovação Pontual de Ambientes"
    }[data.faseProjeto] || data.faseProjeto;

    const arquitetoFormatado = data.arquiteto === "sim" ? "Sim, possuo acompanhamento profissional" : "Não, gostaria de receber curadoria direta";

    const investimentoFormatado = {
      popular: "Até R$ 5.000",
      medio_baixo: "R$ 5.000 a R$ 10.000",
      medio_alto: "R$ 10.000 a R$ 20.000",
      alto: "Acima de R$ 20.000"
    }[data.investimento] || data.investimento;

    // Criar texto estruturado e extremamente profissional para o WhatsApp
    const mensagemWhatsApp = `Olá, gostaria de iniciar a Curadoria do meu Projeto com a Estofatto Casa.

Aqui estão os detalhes do meu projeto para análise:

*Nome Completo:* ${data.nome}
*WhatsApp:* ${data.whatsapp}
*Fase do Projeto:* ${faseFormatada}
*Acompanhamento de Profissional:* ${arquitetoFormatado}
*Previsão de Investimento:* ${investimentoFormatado}

*Descrição do Ambiente:*
${data.descricao}

_Solicitação enviada via Landing Page Estofatto Casa_`;

    // Gerar link do WhatsApp API
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=${consultorSelecionado.telefone}&text=${encodeURIComponent(mensagemWhatsApp)}`;

    // Rastrear evento de envio de formulario no Google Analytics
    trackEvent('form_submission', {
      event_category: 'engagement',
      event_label: 'qualification_form',
      investment_range: data.investimento,
      project_phase: data.faseProjeto,
      has_architect: data.arquiteto,
      value: 1
    });

    // Rastrear evento de envio de formulario no Facebook Pixel
    trackFacebookEvent('Lead', {
      currency: 'BRL',
      value: 1,
      content_name: 'Formulario de Qualificacao',
      content_type: 'product'
    });

    // Mostrar mensagem de sucesso com animacao
    setSuccessMessage(`Olá ${data.nome}! Sua solicitação foi enviada com sucesso.`);
    setFormSuccess(true);

    // Toast de sucesso sofisticado e personalizado
    toast.success("Curadoria Iniciada com Sucesso!", {
      description: "Você está sendo direcionado para o atendimento exclusivo com um de nossos consultores.",
      duration: 6000,
    });

    // Rastrear clique no WhatsApp
    trackEvent('whatsapp_click', {
      event_category: 'engagement',
      event_label: 'whatsapp_redirect',
      value: 1
    });

    // Rastrear clique no WhatsApp no Facebook Pixel
    trackFacebookEvent('Contact', {
      content_name: 'WhatsApp Redirect',
      content_type: 'product'
    });

    // Abrir WhatsApp em nova aba
    window.open(linkWhatsApp, "_blank");
    
    // Reset do formulario apos 3 segundos
    setTimeout(() => {
      setFormSuccess(false);
      reset();
    }, 3000);
  };

  const scrollToForm = () => {
    // Rastrear clique no botao de scroll para formulario
    trackEvent('scroll_to_form_click', {
      event_category: 'engagement',
      event_label: 'cta_button',
      value: 1
    });

    // Rastrear clique no CTA no Facebook Pixel
    trackFacebookEvent('ViewContent', {
      content_name: 'Qualification Form',
      content_type: 'product'
    });
    
    const element = document.getElementById("qualificar");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Carregar consentimento de cookies do localStorage
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
      setCookieConsent(JSON.parse(savedConsent));
    }
  }, []);

  // Intersection Observer para animacoes dos depoimentos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reviewId = parseInt(entry.target.getAttribute("data-review-id") || "0");
            setVisibleReviews((prev) => new Set(prev).add(reviewId));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (reviewsRef.current) {
      const reviewCards = reviewsRef.current.querySelectorAll("[data-review-id]");
      reviewCards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  // Listener de scroll para mostrar/esconder botao de voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funcao para voltar ao topo suavemente
  const scrollToTop = () => {
    // Rastrear clique no botao de scroll to top
    trackEvent('scroll_to_top_click', {
      event_category: 'engagement',
      event_label: 'scroll_to_top_button',
      value: 1
    });

    // Rastrear clique no scroll to top no Facebook Pixel
    trackFacebookEvent('ViewContent', {
      content_name: 'Scroll To Top',
      content_type: 'engagement'
    });
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      
      {/* HEADER SOFISTICADO */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-[0.15em] uppercase text-foreground">
              Estofatto Casa
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground -mt-1 pl-[2px]">
              Móveis e Estofados • Campo Grande
            </span>
          </div>

          {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-xs tracking-widest uppercase">
            <a href="#exclusividade" className="hover:text-primary transition-colors duration-200">Diferenciais</a>
            <a href="#acervo" className="hover:text-primary transition-colors duration-200">Produtos</a>
            <a href="#tradicao" className="hover:text-primary transition-colors duration-200">Tradição & Logística</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors duration-200">Depoimentos</a>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={scrollToForm}
              className="border-primary/40 text-primary hover:bg-primary/5 text-xs tracking-widest uppercase px-5 py-4"
            >
              Falar com Consultor
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground p-1"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-6 px-6 flex flex-col space-y-4 animate-fade-in">
            <a 
              href="#exclusividade" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest uppercase py-2 border-b border-border/30"
            >
              Diferenciais
            </a>
            <a 
              href="#acervo" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest uppercase py-2 border-b border-border/30"
            >
              Produtos
            </a>
            <a 
              href="#tradicao" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest uppercase py-2 border-b border-border/30"
            >
              Tradição & Logística
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest uppercase py-2 border-b border-border/30"
            >
              Depoimentos
            </a>
            <Button 
              onClick={scrollToForm}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs tracking-widest uppercase py-5"
            >
              Falar com Especialista
            </Button>
          </div>
        )}
      </header>

      <main className="flex-grow">
        
        {/* FOLD 1: HERO SECTION (Attention & Positioning) */}
        <section className="relative min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden border-b border-border/40">
          <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texto do Hero */}
            <div className="lg:col-span-5 space-y-8 z-10">
              <div className="inline-flex items-center space-x-2 bg-primary/5 px-3 py-1 border border-primary/10">
                <Sparkles size={14} className="text-primary" />
                <span className="text-[10px] tracking-[0.15em] uppercase text-primary font-semibold">
                  Design & Conforto para sua Casa
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.15] text-foreground tracking-tight">
                Design assinado e conforto sob medida em <span className="font-normal italic text-primary">Campo Grande</span>.
              </h1>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                Móveis e estofados selecionados com excelente acabamento, durabilidade e o conforto que a sua família merece. Encontre a peça ideal com o tamanho e a proporção perfeita para o seu ambiente.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToForm}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs tracking-widest uppercase px-8 py-6 shadow-sm group"
                >
                  Falar com Consultor de Vendas
                  <ArrowRight size={14} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Imagem do Hero (Sofa de 2.40m perfeitamente escalado na parede de 3.90m) */}
            <div className="lg:col-span-7 relative w-full h-[50vh] lg:h-[70vh] group">
              <div className="absolute inset-0 border border-border/60 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <div className="w-full h-full overflow-hidden border border-border">
                <img 
                  src={IMAGES.heroSofa} 
                  alt="Sofá de luxo de 2.40m perfeitamente escalado em living monumental com parede de 3.90m em Campo Grande" 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Legenda Arquitetônica Sutil */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border border-border/40 px-4 py-3 max-w-[280px]">
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-semibold mb-1">
                  Proporção e Harmonia
                </p>
                <p className="text-[11px] leading-relaxed text-foreground font-serif italic">
                  "Encontre o estofado no tamanho exato para a sua sala, garantindo o melhor aproveitamento de espaço."
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* FOLD 2: VALUE PROPOSITION & EXCLUSIVITY (Interest) */}
        <section id="exclusividade" className="py-20 md:py-32 bg-card border-b border-border/40">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Imagem de Detalhe de Textura (Linen/Wood) */}
              <div className="lg:col-span-5 order-2 lg:order-1 relative">
                <div className="absolute inset-0 border border-border/60 -translate-x-4 translate-y-4 -z-10" />
                <div className="aspect-square w-full overflow-hidden border border-border">
                   <img 
                     src={IMAGES.textureDetail} 
                     alt="Close-up macro de texturas premium, linho nobre e encaixes de madeira maciça na Estofatto Casa" 
                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                     loading="lazy"
                   />
                </div>
              </div>

              {/* Texto de Proposta de Valor */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
                <div className="text-xs tracking-[0.2em] uppercase text-primary font-semibold flex items-center space-x-2">
                  <span>01</span>
                  <span className="h-[1px] w-8 bg-primary/30" />
                  <span>Qualidade e Acabamento</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-light leading-tight text-foreground">
                  Matérias-primas selecionadas e <span className="italic font-normal text-primary">acabamento de alto padrão.</span>
                </h2>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Trabalhamos com móveis produzidos com espumas de alta densidade, tecidos resistentes e confortáveis, e estruturas de madeira maciça que garantem alta durabilidade.
                </p>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-semibold text-primary">
                  O mesmo design e qualidade das grifes mais caras do país, com uma proposta comercial inteligente.
                </p>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Conseguimos oferecer o mesmo padrão de acabamento e durabilidade de marcas que cobram o dobro porque operamos em um <strong>modelo de negociação direta</strong>. Diferente do mercado tradicional de decoração, não embutimos taxas invisíveis de intermediação, comissões corporativas ou custos de representação comercial no preço do seu móvel. Você paga estritamente pelo design e pela matéria-prima da peça.
                </p>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Na <strong>Estofatto Casa</strong>, nós ajudamos você a encontrar o móvel que melhor se adapta à sua rotina e ao seu espaço, oferecendo um atendimento consultivo focado em entregar a máxima qualidade pelo valor mais justo de Campo Grande.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border/60">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-primary/5 text-primary border border-primary/10 mt-0.5">
                      <Check size={12} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-foreground mb-1">Tamanho Sob Medida</h4>
                      <p className="text-xs text-muted-foreground">Móveis com opções de medidas para se ajustar perfeitamente à sua sala.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-primary/5 text-primary border border-primary/10 mt-0.5">
                      <Check size={12} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-foreground mb-1">Tecidos Resistentes</h4>
                      <p className="text-xs text-muted-foreground">Grande variedade de linhos, couros e tecidos fáceis de limpar para o dia a dia.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:col-span-2">
                    <div className="p-1 bg-primary/5 text-primary border border-primary/10 mt-0.5">
                      <Check size={12} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-foreground mb-1">Preço Justo Sem Taxas Invisíveis</h4>
                      <p className="text-xs text-muted-foreground">Eliminamos comissões de intermediação e parcerias embutidas. O preço que você vê reflete unicamente a alta qualidade do produto.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* FOLD 3: THE CURATED COLLECTION (Desire) */}
        <section id="acervo" className="py-20 md:py-32 border-b border-border/40">
          <div className="container">
            
            {/* Header do Acervo */}
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 md:mb-24">
              <div className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">
                Nossas Coleções
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                Móveis pensados para trazer beleza e <span className="italic font-normal text-primary">muito conforto</span>.
              </h2>
              <div className="h-[1px] w-16 bg-primary/30 mx-auto mt-4" />
            </div>

            {/* Grid Minimalista com Amplo Espaço em Branco */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              
              {/* Categoria 1: Living & Estofados */}
              <div className="group space-y-6">
                <div className="relative overflow-hidden border border-border aspect-[3/4]">
                   <img 
                     src={IMAGES.collection.living} 
                     alt="Coleção de Living e Estofados de luxo Estofatto Casa" 
                     className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                     loading="lazy"
                   />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border/30 px-3 py-1 text-[10px] tracking-widest uppercase">
                    I. Living
                  </div>
                </div>
                  <div className="space-y-3">
                  <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors duration-200">
                    Living & Estofados
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Sofás confortáveis, poltronas aconchegantes e modulares versáteis. Desenhados para salas de TV e estar com o máximo de aconchego e durabilidade.
                  </p>
                </div>
              </div>

              {/* Categoria 2: Jantar & Recepção */}
              <div className="group space-y-6 md:translate-y-8 transition-transform duration-500">
                <div className="relative overflow-hidden border border-border aspect-[3/4]">
                   <img 
                     src={IMAGES.collection.jantar} 
                     alt="Coleção de Jantar Estofatto Casa" 
                     className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                     loading="lazy"
                   />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border/30 px-3 py-1 text-[10px] tracking-widest uppercase">
                    II. Jantar
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors duration-200">
                    Salas de Jantar
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Mesas de jantar elegantes e cadeiras ergonômicas e estofadas. Perfeitas para reunir a família e amigos com muito conforto.
                  </p>
                </div>
              </div>

              {/* Categoria 3: Design de Autor */}
              <div className="group space-y-6">
                <div className="relative overflow-hidden border border-border aspect-[3/4]">
                   <img 
                     src={IMAGES.collection.autor} 
                     alt="Mobiliário com design contemporâneo na Estofatto Casa" 
                     className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                     loading="lazy"
                   />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border/30 px-3 py-1 text-[10px] tracking-widest uppercase">
                    III. Design
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors duration-200">
                    Móveis de Design
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Aparadores, buffets e mesas de apoio com design contemporâneo que trazem personalidade e complementam a decoração da sua casa.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA do Acervo */}
            <div className="text-center pt-16 md:pt-24">
              <Button 
                onClick={scrollToForm}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs tracking-widest uppercase px-8 py-6 transition-all duration-300"
              >
                Falar com Consultor de Vendas
              </Button>
            </div>

          </div>
        </section>


        {/* FOLD 4: 30 YEARS OF TRADITION & LOGISTICS (Trust & Security) */}
        <section id="tradicao" className="py-20 md:py-32 bg-card border-b border-border/40">
          <div className="container">


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              
              {/* Texto de Tradição */}
              <div className="lg:col-span-6 space-y-8">
                <div className="text-xs tracking-[0.2em] uppercase text-primary font-semibold flex items-center space-x-2">
                  <span>02</span>
                  <span className="h-[1px] w-8 bg-primary/30" />
                  <span>Tradição & Confiança</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-light leading-tight text-foreground">
                  Mais de 30 anos de tradição em <span className="italic font-normal text-primary">Campo Grande</span>.
                </h2>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  A Estofatto Casa é referência em Campo Grande e Mato Grosso do Sul pela qualidade de seus produtos e pelo atendimento próximo e transparente. São mais de três décadas ajudando famílias a realizarem o sonho de ter uma casa linda e aconchegante.
                </p>

                <div className="space-y-6 pt-6 border-t border-border/60">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/5 text-primary border border-primary/10 mt-1">
                      <Truck size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-1">Entrega e Montagem Própria</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Garantimos a segurança do seu móvel com frota de entrega própria e montadores internos altamente qualificados. Cuidamos de cada detalhe, desde o transporte até a montagem final na sua casa.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/5 text-primary border border-primary/10 mt-1">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-1">Atendimento em todo o Mato Grosso do Sul</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Entregamos e montamos com segurança em todas as cidades do estado do Mato Grosso do Sul, com agilidade e compromisso com o prazo combinado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Imagem do Showroom */}
              <div className="lg:col-span-6 relative">
                <div className="absolute inset-0 border border-border/60 translate-x-4 translate-y-4 -z-10" />
                <div className="aspect-[4/3] w-full overflow-hidden border border-border">
                   <img 
                     src={IMAGES.showroom} 
                     alt="Showroom monumental da Estofatto Casa em Campo Grande, MS" 
                     className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                     loading="lazy"
                   />
                </div>
                
                {/* Selo de 30 Anos */}
                <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground p-6 rounded-none border border-primary-foreground/10 shadow-lg hidden sm:flex flex-col items-center justify-center w-28 h-28 text-center">
                  <span className="font-serif text-2xl font-bold leading-none">30+</span>
                  <span className="text-[8px] tracking-[0.2em] uppercase mt-1 leading-tight">Anos de História</span>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* FOLD 5: AUTHORITY & SOCIAL PROOF (Desire) */}
        <section id="depoimentos" className="py-20 md:py-32 border-b border-border/40">
          <div className="container">
            
            {/* Header de Depoimentos */}
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 md:mb-24">
              <div className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">
                Quem Compra Recomenda
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                O que dizem os nossos <span className="italic font-normal text-primary">clientes</span>
              </h2>
              <div className="h-[1px] w-16 bg-primary/30 mx-auto mt-4" />
            </div>

            {/* Cards de Avaliações */}
            <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {REVIEWS.map((review) => {
                const isVisible = visibleReviews.has(review.id);
                return (
                <div 
                  key={review.id} 
                  data-review-id={review.id}
                  className={`bg-card border border-border p-6 flex flex-col justify-between space-y-4 relative group hover:border-primary/30 transition-all duration-500 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${review.id * 100}ms` : '0ms'
                  }}
                >
                  <div className="space-y-3">
                    
                    {/* Estrelas */}
                    <div className="flex space-x-1 text-primary">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                    
                    {/* Texto do Depoimento */}
                    <p className="text-xs text-muted-foreground leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/40 flex flex-col justify-between space-y-1">
                    <div>
                      <h4 className="text-xs font-bold tracking-wider uppercase text-foreground">{review.author}</h4>
                      <p className="text-[10px] text-muted-foreground" style={{fontSize: '12px', fontWeight: '700'}}>{review.role}</p>
                    </div>
                    <span className="text-[9px] text-muted-foreground tracking-widest uppercase">{review.date}</span>
                  </div>
                </div>
              );
              })}
            </div>

            {/* Google My Business Badge Sutil */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground border-t border-border/40 pt-8">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-foreground">Excelente 4.8 de 5</span>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>Baseado em avaliações auditadas no Google Meu Negócio</span>
            </div>

          </div>
        </section>


        {/* FOLD 6: THE HIGH-TICKET QUALIFICATION FORM (Action / Conversion) */}
        <section id="qualificar" className="py-20 md:py-32 bg-card relative">
          
          {/* Fundo Decorativo Sutil de Arquitetura */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="container max-w-4xl relative z-10">
            <div className="bg-background border border-border p-8 md:p-16 space-y-12 shadow-sm">
              
              {/* Header do Formulário */}
              <div className="text-center space-y-4">
                <div className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">
                  Fale com um Especialista
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                  Planeje a escolha do seu <span className="italic font-normal text-primary">mobiliário</span>.
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  Preencha o formulário abaixo para receber um atendimento personalizado e consultivo com nossos especialistas em vendas.
                </p>
                <div className="h-[1px] w-16 bg-primary/30 mx-auto mt-4" />
              </div>

              {/* Formulário Real */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Campo 1: Nome Completo */}
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-xs tracking-widest uppercase font-semibold text-foreground">
                      Nome Completo *
                    </Label>
                    <Input 
                      id="nome"
                      placeholder="Ex: Dr. Eduardo Silveira"
                      {...register("nome")}
                      className="bg-card/30 border-border focus:border-primary/50 text-sm h-12 rounded-none transition-all duration-200"
                    />
                    {errors.nome && (
                      <p className="text-xs text-destructive mt-1">{errors.nome.message}</p>
                    )}
                  </div>

                  {/* Campo 2: WhatsApp */}
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-xs tracking-widest uppercase font-semibold text-foreground">
                      WhatsApp para Contato *
                    </Label>
                    <Input 
                      id="whatsapp"
                      placeholder="Ex: (67) 99999-9999"
                      {...register("whatsapp")}
                      className="bg-card/30 border-border focus:border-primary/50 text-sm h-12 rounded-none transition-all duration-200"
                    />
                    {errors.whatsapp && (
                      <p className="text-xs text-destructive mt-1">{errors.whatsapp.message}</p>
                    )}
                  </div>

                  {/* Campo 3: Fase do Projeto */}
                  <div className="space-y-2">
                    <Label htmlFor="faseProjeto" className="text-xs tracking-widest uppercase font-semibold text-foreground">
                      Em qual fase está o seu projeto? *
                    </Label>
                    <Select onValueChange={(value) => setValue("faseProjeto", value)}>
                      <SelectTrigger className="bg-card/30 border-border focus:border-primary/50 text-sm h-12 rounded-none text-left">
                        <SelectValue placeholder="Selecione a fase atual..." />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border">
                        <SelectItem value="planejamento">Planejamento / Estudos Iniciais</SelectItem>
                        <SelectItem value="obras">Em Obras Estruturais</SelectItem>
                        <SelectItem value="acabamento">Fase de Acabamento / Decoração</SelectItem>
                        <SelectItem value="renovacao">Renovação Pontual de Ambientes</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.faseProjeto && (
                      <p className="text-xs text-destructive mt-1">{errors.faseProjeto.message}</p>
                    )}
                  </div>

                  {/* Campo 5 [FILTRO CRÍTICO AJUSTADO PARA TICKET MÉDIO DE R$ 7.000] */}
                  <div className="space-y-2">
                    <Label htmlFor="investimento" className="text-xs tracking-widest uppercase font-semibold text-foreground">
                      Previsão de investimento para o mobiliário deste ambiente *
                    </Label>
                    <Select onValueChange={(value) => setValue("investimento", value)}>
                      <SelectTrigger className="bg-card/30 border-border focus:border-primary/50 text-sm h-12 rounded-none text-left border-primary/20">
                        <SelectValue placeholder="Selecione a faixa de investimento..." />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border">
                        <SelectItem value="popular">Até R$ 5.000</SelectItem>
                        <SelectItem value="medio_baixo">R$ 5.000 a R$ 10.000</SelectItem>
                        <SelectItem value="medio_alto">R$ 10.000 a R$ 20.000</SelectItem>
                        <SelectItem value="alto">Acima de R$ 20.000</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.investimento && (
                      <p className="text-xs text-destructive mt-1">{errors.investimento.message}</p>
                    )}
                  </div>

                </div>

                {/* Campo 4: Radio Buttons Acompanhamento de Arquiteto */}
                <div className="space-y-3 pt-2">
                  <Label className="text-xs tracking-widest uppercase font-semibold text-foreground block">
                    O projeto conta com acompanhamento de Arquiteto(a) ou Designer de Interiores? *
                  </Label>
                  <RadioGroup 
                    defaultValue="nao" 
                    onValueChange={(value) => setValue("arquiteto", value as "sim" | "nao")}
                    className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="arq-sim" className="border-border text-primary" />
                      <Label htmlFor="arq-sim" className="text-xs text-muted-foreground font-normal">
                        Sim, possuo acompanhamento profissional
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="arq-nao" className="border-border text-primary" />
                      <Label htmlFor="arq-nao" className="text-xs text-muted-foreground font-normal">
                        Não, gostaria de receber curadoria direta da Estofatto Casa
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Campo 6: Descrição do Ambiente */}
                <div className="space-y-2">
                  <Label htmlFor="descricao" className="text-xs tracking-widest uppercase font-semibold text-foreground">
                    Descreva brevemente o ambiente e suas necessidades *
                  </Label>
                  <Textarea 
                    id="descricao"
                    placeholder="Ex: Living com parede de 3.90m precisando de um sofá de 2.40m de alto padrão, poltrona de design e mesa de centro em travertino."
                    {...register("descricao")}
                    rows={4}
                    className="bg-card/30 border-border focus:border-primary/50 text-sm rounded-none transition-all duration-200 resize-none"
                  />
                  {errors.descricao && (
                    <p className="text-xs text-destructive mt-1">{errors.descricao.message}</p>
                  )}
                </div>

                {/* Botão de Envio de Alta Percepção de Valor */}
                <div className="pt-4 text-center">
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/95 text-xs tracking-[0.15em] uppercase px-12 py-6 rounded-none transition-all duration-300 shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground" />
                        <span>Enviando dados...</span>
                      </span>
                    ) : (
                      "Solicitar Atendimento e Consultoria de Vendas"
                    )}
                  </Button>
                  <p className="text-[10px] text-muted-foreground mt-3 tracking-wider uppercase">
                    Seus dados estão seguros de acordo com a LGPD.
                  </p>
                </div>

              </form>

              {/* OVERLAY DE SUCESSO COM ANIMACAO */}
              {formSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
                  <div className="bg-background border border-border p-12 md:p-16 text-center space-y-6 max-w-md w-full mx-4 shadow-2xl animate-scale-in">
                    {/* Icone de Sucesso */}
                    <div className="flex justify-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                        <Check size={32} className="text-primary" />
                      </div>
                    </div>

                    {/* Mensagem de Sucesso */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-light text-foreground">
                        Sucesso!
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {successMessage}
                      </p>
                    </div>

                    {/* Texto Adicional */}
                    <div className="pt-4 border-t border-border/40">
                      <p className="text-xs text-muted-foreground tracking-wide">
                        Você será redirecionado para o WhatsApp em instantes para conversar com um de nossos consultores.
                      </p>
                    </div>

                    {/* Indicador de Carregamento */}
                    <div className="flex justify-center space-x-2 pt-4">
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

      </main>

      {/* FOLD 7: INSTITUTIONAL FOOTER */}
      <footer className="bg-card border-t border-border py-16 md:py-24 text-xs text-muted-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Coluna 1: Logo e Identidade */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl tracking-[0.2em] uppercase text-foreground">
                  Estofatto Casa
                </span>
                <span className="text-[8px] tracking-[0.3em] uppercase text-muted-foreground -mt-1 pl-[2px]">
                  Alta Curadoria • Desde 1996
                </span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground/80 max-w-sm">
                Mais de 30 anos selecionando e entregando móveis e estofados de qualidade no Mato Grosso do Sul. Especialistas em conforto, durabilidade e design.
              </p>
            </div>

            {/* Coluna 2: Endereço (Local SEO) */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-foreground flex items-center space-x-2">
                <MapPin size={14} className="text-primary" />
                <span>Showroom Campo Grande</span>
              </h4>
              <p className="leading-relaxed">
                Rua 13 de Maio, 1459 • Centro<br />
                Campo Grande - MS • CEP 79004-422<br />
                <span className="text-primary font-semibold">Venha nos visitar ou agende um horário com nossos consultores.</span>
              </p>
            </div>

            {/* Coluna 3: Horários e Contato */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-foreground flex items-center space-x-2">
                <Clock size={14} className="text-primary" />
                <span>Horário de Funcionamento</span>
              </h4>
              <p className="leading-relaxed mb-4">
                Segunda a Sexta: 08:30 às 18:00<br />
                Sábado: 08:00 às 12:30<br />
                Domingo: Fechado
              </p>
              <div className="flex space-x-4 pt-2">
                <a 
                  href={CONTACT_INFO.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border text-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a 
                  href="https://www.google.com/search?q=estofatto+casa&oq=estofatto+casa&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRg9MgYIBBBFGDwyBggFEEUYPNIBCDEyNTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border text-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200"
                  aria-label="Google Meu Negócio"
                  title="Avaliações no Google"
                >
                  <Search size={16} />
                </a>
              </div>
            </div>

          </div>

          {/* Linha de Copyright */}
          <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-muted-foreground/60 uppercase tracking-widest">
            <p>© 2026 Estofatto Casa. Todos os direitos reservados.</p>
            <p>Desenvolvido com foco em CRO & SEO Local para Campo Grande - MS</p>
          </div>
        </div>
      </footer>

      {/* MODAL DO PLAYER DE VÍDEO / REELS */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-sm aspect-[9/16] bg-black border border-border/40 shadow-2xl flex items-center justify-center">
            {/* Botão de Fechar Modal */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 md:-right-12 text-white/80 hover:text-white bg-background/20 p-2 hover:bg-background/40 transition-colors duration-200 border border-white/10"
              aria-label="Fechar vídeo"
            >
              <X size={20} />
            </button>

            {/* Elemento de Vídeo Real */}
            <video 
              src={activeVideo} 
              controls 
              autoPlay 
              loop
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* BOTÃO FLUTUANTE DO WHATSAPP (Quiet Luxury Style) */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Balão de Dica de Texto Sofisticado */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background border border-border px-4 py-2 text-[10px] tracking-widest uppercase text-foreground shadow-sm whitespace-nowrap opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Fale Conosco no WhatsApp
        </div>
        
        {/* Botão de WhatsApp em tom Oliva Profundo e Bronze do design Quiet Luxury */}
        <a
          href="https://api.whatsapp.com/send?phone=5567999990001&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20consultoria%20exclusiva%20com%20um%20especialista%20da%20Estofatto%20Casa."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg border border-primary-foreground/10 transition-all duration-300 hover:scale-105 active:scale-95 relative"
          aria-label="Fale conosco no WhatsApp"
        >
          {/* Efeito de pulso sutil no fundo */}
          <span className="absolute inset-0 bg-primary/20 animate-ping -z-10" />
          <Phone size={20} className="stroke-[2]" />
        </a>
      </div>

      {/* BOTAO DE VOLTAR AO TOPO */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-primary text-primary-foreground border border-primary/40 hover:bg-primary/90 transition-all duration-300 opacity-100 animate-fade-in shadow-lg"
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          <ArrowUp size={20} className="stroke-[2]" />
        </button>
      )}

      {/* BANNER DE CONSENTIMENTO DE COOKIES */}
      {cookieConsent === null && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-2xl animate-slide-up">
          <div className="container py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-foreground font-medium mb-2">
                Respeito à sua Privacidade
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias de rastreamento (Google Analytics e Meta Pixel) para melhorar sua experiência e analisar o desempenho do site. Ao continuar navegando, você concorda com nossa Política de Privacidade.
              </p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  setCookieConsent(false);
                  localStorage.setItem('cookieConsent', JSON.stringify(false));
                }}
                className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium border border-border text-foreground hover:bg-muted transition-colors"
              >
                Rejeitar
              </button>
              <button
                onClick={() => {
                  setCookieConsent(true);
                  localStorage.setItem('cookieConsent', JSON.stringify(true));
                }}
                className="flex-1 sm:flex-none px-4 py-2 text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
