import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ChevronDown, ShieldCheck, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { OptimizedImage } from '@/components/OptimizedImage';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function Home() {
  const revealFold1 = useRef(null);
  const revealFold2 = useRef(null);
  const revealFold3 = useRef(null);
  const revealFold4 = useRef(null);
  const revealFold5 = useRef(null);
  const revealFold6 = useRef(null);

  useScrollReveal(revealFold1 as any);
  useScrollReveal(revealFold2 as any);
  useScrollReveal(revealFold3 as any);
  useScrollReveal(revealFold4 as any);
  useScrollReveal(revealFold5 as any);
  useScrollReveal(revealFold6 as any);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* FOLD 1: HERO (Attention) */}
      <section ref={revealFold1} className="reveal-section pt-32 md:pt-40 pb-20 md:pb-32 border-b border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-2">
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-secondary">
                  Design & Conforto para sua Casa
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground">
                  Design assinado e conforto sob medida em <span className="italic text-secondary">Campo Grande</span>.
                </h1>
              </div>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-lg">
                Móveis e estofados selecionados com excelente acabamento, durabilidade e o conforto que a sua família merece. Encontre a peça ideal com o tamanho e a proporção perfeita para o seu ambiente.
              </p>

              <div className="pt-4">
                <Link href="#form" className="inline-block px-8 py-4 bg-secondary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-secondary/90 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
                  Falar com Consultor de Vendas
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <OptimizedImage
                      src="/images/IMG_3140_a28f3515.jpg"
                      alt="Sofá de luxo de 2.40m perfeitamente escalado em living monumental com parede de 3.90m em Campo Grande"
                      width={600}
                      height={500}
                      className="w-full h-auto rounded border-4 border-secondary/60 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      onClick={() => setSelectedImage('/images/IMG_3140_a28f3515.jpg')}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <OptimizedImage
                    src="/images/IMG_3140_a28f3515.jpg"
                    alt="Sofá de luxo de 2.40m perfeitamente escalado em living monumental com parede de 3.90m em Campo Grande"
                    width={1200}
                    height={1000}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>

              <div className="absolute -bottom-6 -right-6 bg-white border-4 border-secondary/60 p-4 rounded shadow-lg max-w-xs">
                <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-1">Proporção e Harmonia</p>
                <p className="text-sm text-foreground italic">
                  "Encontre o estofado no tamanho exato para a sala, garantindo o melhor aproveitamento de espaço."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 2: QUALITY & CRAFTSMANSHIP (Interest) */}
      <section id="exclusividade" ref={revealFold2} className="reveal-section py-20 md:py-32 border-b border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <OptimizedImage
                      src="/images/IMG_1659_a556da71.JPG"
                      alt="Close-up macro de texturas premium, linho nobre e encaixes de madeira maciça na Estofatto Casa"
                      width={500}
                      height={600}
                      className="w-full h-auto rounded border-4 border-secondary/60 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      onClick={() => setSelectedImage('/images/IMG_1659_a556da71.JPG')}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <OptimizedImage
                    src="/images/IMG_1659_a556da71.JPG"
                    alt="Close-up macro de texturas premium, linho nobre e encaixes de madeira maciça na Estofatto Casa"
                    width={1200}
                    height={1400}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>
            </div>

            {/* Right: Copy */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-secondary">
                  01 — Qualidade e Acabamento
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-foreground">
                  Matérias-primas selecionadas e <span className="italic text-secondary">acabamento de alto padrão</span>.
                </h2>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Trabalhamos com móveis produzidos com espumas de alta densidade, tecidos resistentes e confortáveis, e estruturas de madeira maciça que garantem alta durabilidade.
                </p>

                <p>
                  O mesmo design e qualidade das grifes mais caras do país, com uma proposta comercial inteligente.
                </p>

                <p>
                  Conseguimos oferecer o mesmo padrão de acabamento e durabilidade de marcas que cobram o dobro porque operamos em um <strong>modelo de negociação direta</strong>. Diferente do mercado tradicional de decoração, não embutimos taxas invisíveis de intermediação, comissões corporativas ou custos de representação comercial no preço do seu móvel. Você paga estritamente pelo design e pela matéria-prima da peça.
                </p>

                <p>
                  Na <strong>Estofatto Casa</strong>, nós ajudamos você a encontrar o móvel que melhor se adapta à sua rotina e ao seu espaço, oferecendo um atendimento consultivo focado em entregar a máxima qualidade pelo valor mais justo de Campo Grande.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <p className="text-xs font-bold tracking-widest uppercase text-secondary">Tamanho Sob Medida</p>
                  <p className="text-sm text-foreground/80">
                    Móveis com opções de medidas para se ajustar perfeitamente à sua sala.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold tracking-widest uppercase text-secondary">Tecidos Resistentes</p>
                  <p className="text-sm text-foreground/80">
                    Grande variedade de linhos, couros e tecidos fáceis de limpar para o dia a dia.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold tracking-widest uppercase text-secondary">Preço Justo Sem Taxas Invisíveis</p>
                  <p className="text-sm text-foreground/80">
                    Eliminamos comissões de intermediação e parcerias embutidas. O preço que você vê reflete unicamente a alta qualidade do produto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 3: COLLECTIONS (Interest) */}
      <section id="acervo" ref={revealFold3} className="reveal-section py-20 md:py-32 border-b border-border/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 md:mb-24">
            <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-secondary">Nossas Coleções</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-foreground">
              Móveis pensados para trazer beleza e <span className="italic text-secondary">muito conforto</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Collection 1: Living */}
            <div className="space-y-6">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <OptimizedImage
                      src="/images/IMG_3140_a28f3515.jpg"
                      alt="Coleção de Living e Estofados de luxo Estofatto Casa"
                      width={400}
                      height={350}
                      className="w-full h-auto rounded border-4 border-secondary/60 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      onClick={() => setSelectedImage('/images/IMG_3140_a28f3515.jpg')}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <OptimizedImage
                    src="/images/IMG_3140_a28f3515.jpg"
                    alt="Coleção de Living e Estofados de luxo Estofatto Casa"
                    width={1200}
                    height={1000}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>

              <div className="space-y-3">
                <p className="text-xs font-bold tracking-widest uppercase text-secondary">I. Living</p>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">Living & Estofados</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Sofás confortáveis, poltronas aconchegantes e modulares versáteis. Desenhados para salas de TV e estar com o máximo de aconchego e durabilidade.
                </p>
              </div>
            </div>

            {/* Collection 2: Jantar */}
            <div className="space-y-6">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <OptimizedImage
                      src="/images/jantar.webp"
                      alt="Coleção de Jantar Estofatto Casa"
                      width={400}
                      height={350}
                      className="w-full h-auto rounded border-4 border-secondary/60 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      onClick={() => setSelectedImage('/images/jantar.webp')}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <OptimizedImage
                    src="/images/jantar.webp"
                    alt="Coleção de Jantar Estofatto Casa"
                    width={1200}
                    height={1000}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>

              <div className="space-y-3">
                <p className="text-xs font-bold tracking-widest uppercase text-secondary">II. Jantar</p>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">Salas de Jantar</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Mesas de jantar elegantes e cadeiras ergonômicas e estofadas. Perfeitas para reunir a família e amigos com muito conforto.
                </p>
              </div>
            </div>

            {/* Collection 3: Design */}
            <div className="space-y-6">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <OptimizedImage
                      src="/images/IMG_9715_0c33e132.webp"
                      alt="Mobiliário com design contemporâneo na Estofatto Casa"
                      width={400}
                      height={350}
                      className="w-full h-auto rounded border-4 border-secondary/60 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      onClick={() => setSelectedImage('/images/IMG_9715_0c33e132.webp')}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <OptimizedImage
                    src="/images/IMG_9715_0c33e132.webp"
                    alt="Mobiliário com design contemporâneo na Estofatto Casa"
                    width={1200}
                    height={1000}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>

              <div className="space-y-3">
                <p className="text-xs font-bold tracking-widest uppercase text-secondary">III. Design</p>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">Móveis de Design</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Aparadores, buffets e mesas de apoio com design contemporâneo que trazem personalidade e complementam a decoração da sua casa.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-12">
            <Link href="#form" className="inline-block px-8 py-4 bg-secondary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-secondary/90 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95">
              Falar com Consultor de Vendas
            </Link>
          </div>
        </div>
      </section>

      {/* FOLD 4: AUTHORITY & LOGISTICS (Desire) */}
      <section id="tradicao" ref={revealFold4} className="reveal-section py-20 md:py-32 border-b border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-secondary">
                  02 — Tradição & Confiança
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-foreground">
                  Mais de 30 anos de tradição em <span className="italic text-secondary">Campo Grande</span>.
                </h2>
              </div>

              <p className="text-foreground/80 leading-relaxed">
                A Estofatto Casa é referência em Campo Grande e Mato Grosso do Sul pela qualidade de seus produtos e pelo atendimento próximo e transparente. São mais de três décadas ajudando famílias a realizarem o sonho de ter uma casa linda e aconchegante.
              </p>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary-foreground">✓</span>
                    </div>
                    <p className="text-sm font-bold tracking-widest uppercase text-foreground">Entrega e Montagem Própria</p>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed ml-11">
                    Garantimos a segurança do seu móvel com frota de entrega própria e montadores internos altamente qualificados. Cuidamos de cada detalhe, desde o transporte até a montagem final na sua casa.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary-foreground">✓</span>
                    </div>
                    <p className="text-sm font-bold tracking-widest uppercase text-foreground">Atendimento em todo o Mato Grosso do Sul</p>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed ml-11">
                    Entregamos e montamos com segurança em todas as cidades do estado do Mato Grosso do Sul, com agilidade e compromisso com o prazo combinado.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    <OptimizedImage
                      src="/images/IMG_0641_95710857.JPG"
                      alt="Showroom monumental da Estofatto Casa em Campo Grande, MS"
                      width={500}
                      height={600}
                      className="w-full h-auto rounded border-4 border-secondary/60 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      onClick={() => setSelectedImage('/images/IMG_0641_95710857.JPG')}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <OptimizedImage
                    src="/images/IMG_0641_95710857.JPG"
                    alt="Showroom monumental da Estofatto Casa em Campo Grande, MS"
                    width={1200}
                    height={1400}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>

              <div className="absolute -bottom-8 -right-8 bg-white border-4 border-secondary/60 p-6 rounded shadow-lg max-w-xs">
                <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-2">30+ Anos de História</p>
                <p className="text-sm text-foreground font-semibold">
                  Gerações de famílias confiando na qualidade e no atendimento da Estofatto Casa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOLD 5: SOCIAL PROOF & MAP (Desire) */}
      <section id="depoimentos" ref={revealFold5} className="reveal-section py-20 md:py-32 border-b border-border/40">
        <div className="container">
          
          {/* Título e Info do Google - Centralizado em Cima */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-[#6B2C2C] border-2 border-secondary/30 p-8 md:p-10 shadow-lg relative rounded">
              {/* Detalhe de Canto Luxuoso */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-secondary" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-secondary" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-secondary" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-secondary" />

              {/* Título e Info do Google - Centralizado */}
              <div className="flex flex-col items-center gap-6 text-center mb-8">
                {/* Ícone do Google com destaque */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-primary" aria-hidden="true">
                    <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.185 15.427 1 12.24 1 5.48 1 0 6.48 0 13.2s5.48 12.2 12.24 12.2c7.055 0 11.75-4.96 11.75-11.94 0-.8-.085-1.41-.19-1.975H12.24z"/>
                  </svg>
                </div>
                
                <div>
                  <div className="flex flex-col items-center gap-3 mb-2">
                    <h3 className="text-lg md:text-xl font-serif font-bold tracking-wider text-white">
                      Avaliações no Google
                    </h3>
                    <span className="flex items-center gap-1.5 text-[10px] bg-secondary text-primary-foreground px-3 py-1 font-bold tracking-widest uppercase shadow-md">
                      <ShieldCheck size={14} className="stroke-[2.5]" /> Verificado
                    </span>
                  </div>
                  <p className="text-sm text-white/90 font-medium">
                    Feedback real dos nossos clientes do showroom de Campo Grande
                  </p>
                </div>
              </div>
              
              {/* CTA para Google Maps */}
              <div className="flex justify-center mb-8">
                <a 
                  href="https://www.google.com/maps/place/Estofatto+Casa+-+Loja+de+m%C3%B3veis+em+Campo+Grande+MS/data=!4m2!3m1!1s0x0:0x1c49450723dbd5b3?sa=X&ved=1t:2428&ictx=111&cshid=1780340855246497" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Ver perfil Estofatto Casa no Google Maps - abre em nova aba"
                  className="px-6 py-3 bg-secondary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-secondary/90 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                >
                  Ver no Google Maps
                </a>
              </div>
              
              {/* Google Meu Negócio - Localizador */}
              <div className="w-full h-96 border border-border rounded overflow-hidden">
                <iframe 
                  src="https://storage.googleapis.com/maps-solutions-pqc37h0fbo/locator-plus/cxlu/locator-plus.html"
                  width="100%" 
                  height="100%"
                  style={{
                    border: '0'
                  }}
                  loading="lazy"
                  title="Localização Estofatto Casa - Campo Grande, MS"
                />
              </div>
            </div>
          </div>

          {/* Header de Depoimentos */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 md:mb-24">
            <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-secondary">Quem Compra Recomenda</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-foreground">
              O que dizem os nossos <span className="italic text-secondary">clientes</span>
            </h2>
          </div>

          {/* Reviews Section - Placeholder */}
          <div className="space-y-6">
            {/* Reviews will be added here */}
          </div>
        </div>
      </section>

      {/* FOLD 6: FAQ (Desire) */}
      <section id="faq" ref={revealFold6} className="reveal-section py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 md:mb-24">
            <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-secondary">Dúvidas Frequentes</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-foreground">
              Perguntas e <span className="italic text-secondary">Respostas</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'Como funciona o frete e a montagem para Campo Grande e região?',
                a: 'Realizamos frete e montagem próprios para Campo Grande e cidades da região. O valor é calculado conforme a distância e o volume de móveis. Nossos montadores são treinados para garantir a qualidade e a segurança da entrega.'
              },
              {
                q: 'Quais são os prazos de entrega dos estofados?',
                a: 'Os prazos variam conforme a disponibilidade de tecido e a complexidade do projeto. Em média, oferecemos prazos de 30 a 60 dias para estofados personalizados. Consulte-nos para prazos específicos.'
              },
              {
                q: 'Qual é o prazo e a cobertura da garantia dos móveis?',
                a: 'Oferecemos garantia de 2 anos contra defeitos de fabricação. A cobertura inclui estrutura, espuma e acabamentos. Consulte os termos específicos para cada tipo de móvel.'
              },
              {
                q: 'É possível personalizar o tamanho e o tecido dos sofás?',
                a: 'Sim! Oferecemos ampla variedade de tecidos e tamanhos personalizados. Você pode escolher as medidas exatas para se ajustar ao seu espaço e selecionar entre linhos, couros e tecidos especiais.'
              },
              {
                q: 'O showroom físico está aberto para visitação? Onde fica?',
                a: 'Sim! Nosso showroom fica em Campo Grande, no endereço: Rua Treze de Maio, 1459 - Centro. Estamos abertos de segunda a sexta, das 9h às 18h, e sábados das 9h às 13h. Você pode agendar um atendimento personalizado.'
              }
            ].map((item, idx) => (
              <details key={idx} className="group border border-border rounded p-6 hover:border-secondary/50 transition-colors duration-200 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-foreground select-none">
                  {item.q}
                  <ChevronDown size={20} className="text-secondary group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <p className="text-foreground/80 mt-4 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Qualification Form - Placeholder */}
      {/* Support Chat - Placeholder */}
    </div>
  );
}
