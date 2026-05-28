import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  ArrowRight, 
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
  Award
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
import { IMAGES, REVIEWS } from "../const";

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

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    // Simular envio de API
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    // Toast de sucesso sofisticado e personalizado
    toast.success("Curadoria Solicitada com Sucesso", {
      description: "Nossos especialistas seniores (Elisabete, Gabriel ou Bianca) entrarão em contato em até 24 horas úteis via WhatsApp.",
      duration: 8000,
    });
    
    reset();
    
    // Rolar suavemente de volta para o topo ou confirmação
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToForm = () => {
    const element = document.getElementById("qualificar");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      
      {/* HEADER SOFISTICADO */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase text-foreground">
              Estofatto Casa
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground -mt-1 pl-[2px]">
              Alta Curadoria • Campo Grande
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-xs tracking-widest uppercase">
            <a href="#exclusividade" className="hover:text-primary transition-colors duration-200">Exclusividade</a>
            <a href="#acervo" className="hover:text-primary transition-colors duration-200">O Acervo</a>
            <a href="#tradicao" className="hover:text-primary transition-colors duration-200">Tradição & Logística</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors duration-200">Avaliações</a>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={scrollToForm}
              className="border-primary/40 text-primary hover:bg-primary/5 text-xs tracking-widest uppercase px-5 py-4"
            >
              Iniciar Curadoria
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
              Exclusividade
            </a>
            <a 
              href="#acervo" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest uppercase py-2 border-b border-border/30"
            >
              O Acervo
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
              Avaliações
            </a>
            <Button 
              onClick={scrollToForm}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs tracking-widest uppercase py-5"
            >
              Solicitar Consultoria VIP
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
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary font-semibold">
                  Mobiliário de Alta Categoria
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.15] text-foreground tracking-tight">
                O ápice do design e da sofisticação em <span className="font-normal italic text-primary">Campo Grande</span>.
              </h1>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                Curadoria exclusiva de móveis de alto padrão sob medida para arquiteturas exigentes. Peças com escala impecável, texturas nobres e presença monumental para transformar sua casa em uma obra de arte viva.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToForm}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs tracking-widest uppercase px-8 py-6 shadow-sm group"
                >
                  Solicitar Consultoria para Meu Projeto
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
                />
              </div>
              
              {/* Legenda Arquitetônica Sutil */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm border border-border/40 px-4 py-3 max-w-[280px]">
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-semibold mb-1">
                  Estudo de Proporção
                </p>
                <p className="text-[11px] leading-relaxed text-foreground font-serif italic">
                  "Sofá de 2.40m perfeitamente escalado para uma parede de 3.90m. Harmonia geométrica absoluta."
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
                  />
                </div>
              </div>

              {/* Texto de Proposta de Valor */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
                <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold flex items-center space-x-2">
                  <span>01</span>
                  <span className="h-[1px] w-8 bg-primary/30" />
                  <span>A Filosofia do Detalhe</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-light leading-tight text-foreground">
                  A precisão da escala. A nobreza da matéria-prima. <span className="italic font-normal text-primary">A perfeição do encaixe.</span>
                </h2>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  O verdadeiro luxo não se anuncia; ele é percebido no toque de um linho belga de alta gramatura, no encaixe milimétrico de uma marcenaria em madeira maciça e na proporção exata desenhada para o seu ambiente. 
                </p>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Na <strong>Estofatto Casa</strong>, acreditamos que o mobiliário deve servir à arquitetura. Cada peça do nosso acervo é selecionada para se integrar com exatidão matemática e harmonia estética ao projeto do seu arquiteto ou designer de interiores.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border/60">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-primary/5 text-primary border border-primary/10 mt-0.5">
                      <Check size={12} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-foreground mb-1">Escala Sob Medida</h4>
                      <p className="text-xs text-muted-foreground">Proporções calculadas para harmonizar com a volumetria do seu espaço.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-primary/5 text-primary border border-primary/10 mt-0.5">
                      <Check size={12} />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-foreground mb-1">Texturas Sensoriais</h4>
                      <p className="text-xs text-muted-foreground">Tecidos nobres e acabamentos naturais que elevam a experiência do toque.</p>
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
              <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                O Acervo Estofatto Casa
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                Coleções autorais selecionadas para <span className="italic font-normal text-primary">ambientes singulares</span>.
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
                    Sofás modulares, poltronas de contornos esculturais e chaises de alta costura. Projetados para ancorar salas de estar monumentais com conforto supremo e elegância atemporal.
                  </p>
                </div>
              </div>

              {/* Categoria 2: Jantar & Recepção */}
              <div className="group space-y-6 md:translate-y-8 transition-transform duration-500">
                <div className="relative overflow-hidden border border-border aspect-[3/4]">
                  <img 
                    src={IMAGES.collection.jantar} 
                    alt="Coleção de Jantar e Recepção de luxo Estofatto Casa" 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border/30 px-3 py-1 text-[10px] tracking-widest uppercase">
                    II. Recepção
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors duration-200">
                    Jantar & Recepção
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Mesas de jantar esculpidas em pedras exóticas e madeiras nobres, acompanhadas por cadeiras de ergonomia impecável. O cenário perfeito para banquetes memoráveis.
                  </p>
                </div>
              </div>

              {/* Categoria 3: Design de Autor */}
              <div className="group space-y-6">
                <div className="relative overflow-hidden border border-border aspect-[3/4]">
                  <img 
                    src={IMAGES.collection.autor} 
                    alt="Mobiliário assinado por designers consagrados na Estofatto Casa" 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm border border-border/30 px-3 py-1 text-[10px] tracking-widest uppercase">
                    III. Exclusivo
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors duration-200">
                    Design de Autor
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Peças assinadas por grandes nomes do design nacional e internacional. Mobiliários com status de obra de arte, que conferem valor histórico e identidade única ao seu lar.
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
                Conhecer Acervo Completo via Consultoria VIP
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
                <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold flex items-center space-x-2">
                  <span>02</span>
                  <span className="h-[1px] w-8 bg-primary/30" />
                  <span>Tradição & Segurança</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-light leading-tight text-foreground">
                  Mais de três décadas escrevendo a história do <span className="italic font-normal text-primary">morar bem no MS</span>.
                </h2>
                
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  A Estofatto Casa consolida mais de 30 anos de atuação impecável no mercado de altíssimo padrão. Nossa trajetória é pautada pelo respeito absoluto ao cliente, curadoria rigorosa de marcas parceiras e um atendimento consultivo que entende a fundo as necessidades de cada projeto.
                </p>

                <div className="space-y-6 pt-6 border-t border-border/60">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/5 text-primary border border-primary/10 mt-1">
                      <Truck size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-1">Frota Logística Própria</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Não terceirizamos a entrega do seu sonho. Possuímos frota de caminhões própria, climatizada e equipada com materiais de proteção de alta densidade. Nossa equipe de montagem é interna, altamente treinada e especializada em manusear peças de alta complexidade.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/5 text-primary border border-primary/10 mt-1">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground mb-1">Cobertura em todo o Mato Grosso do Sul</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Sediados estrategicamente em Campo Grande, MS, garantimos entrega impecável e montagem cirúrgica em qualquer cidade do estado, com prazos rigorosamente cumpridos e seguro total de carga.
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
              <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                Reconhecimento
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                A opinião de quem compartilha do nosso <span className="italic font-normal text-primary">padrão de exigência</span>.
              </h2>
              <div className="h-[1px] w-16 bg-primary/30 mx-auto mt-4" />
            </div>

            {/* Cards de Avaliações */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-card border border-border p-8 flex flex-col justify-between space-y-6 relative group hover:border-primary/30 transition-colors duration-300">
                  <div className="space-y-4">
                    
                    {/* Estrelas */}
                    <div className="flex space-x-1 text-primary">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    
                    {/* Texto do Depoimento */}
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold tracking-wider uppercase text-foreground">{review.author}</h4>
                      <p className="text-[10px] text-muted-foreground">{review.role}</p>
                    </div>
                    <span className="text-[9px] text-muted-foreground tracking-widest uppercase">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Google My Business Badge Sutil */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-muted-foreground border-t border-border/40 pt-8">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-foreground">Excelente 4.9 de 5</span>
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
                <div className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">
                  Curadoria Exclusiva
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                  Inicie a curadoria do seu <span className="italic font-normal text-primary">projeto residencial</span>.
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  Preencha o questionário de qualificação abaixo para receber uma consultoria exclusiva de interiores com nossos especialistas seniores: <strong>Elisabete, Gabriel ou Bianca</strong>.
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

                  {/* Campo 5 [FILTRO CRÍTICO]: Previsão de Investimento */}
                  <div className="space-y-2">
                    <Label htmlFor="investimento" className="text-xs tracking-widest uppercase font-semibold text-foreground">
                      Previsão de investimento para o mobiliário deste ambiente *
                    </Label>
                    <Select onValueChange={(value) => setValue("investimento", value)}>
                      <SelectTrigger className="bg-card/30 border-border focus:border-primary/50 text-sm h-12 rounded-none text-left border-primary/20">
                        <SelectValue placeholder="Selecione a faixa de investimento..." />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border">
                        <SelectItem value="baixo">R$ 15.000 a R$ 30.000</SelectItem>
                        <SelectItem value="medio">R$ 30.000 a R$ 50.000</SelectItem>
                        <SelectItem value="alto">Acima de R$ 50.000 (Mobiliário Premium)</SelectItem>
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
                    className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/95 text-xs tracking-[0.2em] uppercase px-12 py-6 rounded-none transition-all duration-300 shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground" />
                        <span>Processando Credenciais VIP...</span>
                      </span>
                    ) : (
                      "Solicitar Análise e Consultoria VIP"
                    )}
                  </Button>
                  <p className="text-[10px] text-muted-foreground mt-3 tracking-wider uppercase">
                    Acesso Restrito • Seus dados estão protegidos sob sigilo absoluto.
                  </p>
                </div>

              </form>

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
                Mais de 30 anos selecionando e entregando o melhor do mobiliário de alto padrão no Mato Grosso do Sul. Especialistas em escala, proporção e materiais nobres.
              </p>
            </div>

            {/* Coluna 2: Endereço (Local SEO) */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-foreground flex items-center space-x-2">
                <MapPin size={14} className="text-primary" />
                <span>Showroom Campo Grande</span>
              </h4>
              <p className="leading-relaxed">
                Av. Afonso Pena, 4500 • Jardim dos Estados<br />
                Campo Grande - MS • CEP 79020-001<br />
                <span className="text-primary font-semibold">Atendimento presencial e consultoria com hora marcada.</span>
              </p>
            </div>

            {/* Coluna 3: Horários e Contato */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold tracking-widest uppercase text-foreground flex items-center space-x-2">
                <Clock size={14} className="text-primary" />
                <span>Horário de Funcionamento</span>
              </h4>
              <p className="leading-relaxed mb-4">
                Segunda a Sexta: 08h às 18h<br />
                Sábado: 08h às 12h<br />
                Domingo e Feriados: Fechado
              </p>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border text-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a 
                  href="https://google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border text-foreground hover:text-primary hover:border-primary/40 transition-colors duration-200"
                  aria-label="Google Reviews"
                  title="Avaliações no Google"
                >
                  <Star size={16} />
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

    </div>
  );
}
