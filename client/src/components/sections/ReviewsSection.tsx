import React, { useEffect, useRef, useState } from "react";
import { Star, ShieldCheck } from "lucide-react";
import { REVIEWS } from "@/const";

// Declare global for Google Business Card
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'g:businesscard': any;
    }
  }
}

export const ReviewsSection: React.FC = () => {
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [visibleReviews, setVisibleReviews] = useState<Set<number>>(new Set());
  const googleWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const reviewId = parseInt(
              entry.target.getAttribute("data-review-id") || "0"
            );
            setVisibleReviews(prev => new Set(prev).add(reviewId));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (reviewsRef.current) {
      const reviewCards =
        reviewsRef.current.querySelectorAll("[data-review-id]");
      reviewCards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  // Carregar widget oficial do Google Meu Negócio
  useEffect(() => {
    if (!(window as any).gapi) {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/business-card/js/client.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if ((window as any).gapi && (window as any).gapi.businesscard) {
          (window as any).gapi.businesscard.go();
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="space-y-12">
      {/* Widget Oficial do Google Meu Negócio */}
      <div 
        ref={googleWidgetRef}
        className="flex justify-center"
        dangerouslySetInnerHTML={{
          __html: `<g:businesscard name="Estofatto Casa - Loja de móveis em Campo Grande MS" itemid="10938569232415454368"></g:businesscard>`
        }}
      />

      {/* Fallback se o widget não carregar - Card customizado com cores Estofatto */}
      <div className="bg-gradient-to-r from-[#8B3A3A] to-[#6B2C2C] border-2 border-[#6B2C2C] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
        <div className="flex items-center gap-6">
          {/* Ícone do Google com destaque */}
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#8B3A3A]" aria-hidden="true">
              <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.185 15.427 1 12.24 1 5.48 1 0 6.48 0 13.2s5.48 12.2 12.24 12.2c7.055 0 11.75-4.96 11.75-11.94 0-.8-.085-1.41-.19-1.975H12.24z"/>
            </svg>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg md:text-xl font-black tracking-wider uppercase text-white">
                Avaliações no Google
              </h3>
              <span className="flex items-center gap-1.5 text-xs bg-white text-[#8B3A3A] px-3 py-1 font-bold tracking-widest uppercase shadow-md">
                <ShieldCheck size={14} className="stroke-[2.5]" /> Verificado
              </span>
            </div>
            <p className="text-sm text-white/90 font-medium">
              Feedback real dos nossos clientes do showroom de Campo Grande
            </p>
          </div>
        </div>
        
        {/* CTA para Google Maps */}
        <div className="flex justify-center">
          <a 
            href="https://www.google.com/maps/place/Estofatto+Casa+-+Loja+de+m%C3%B3veis+em+Campo+Grande+MS/data=!4m2!3m1!1s0x0:0x1c49450723dbd5b3?sa=X&ved=1t:2428&ictx=111&cshid=1780340855246497" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Ver perfil Estofatto Casa no Google Maps - abre em nova aba"
            className="px-6 py-3 bg-white text-[#8B3A3A] text-xs font-black tracking-widest uppercase hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>

      {/* Título da seção de depoimentos com hierarquia correta */}
      <div className="space-y-2">
        <h3 className="text-2xl md:text-3xl font-serif font-light tracking-tight text-foreground">
          O que nossos clientes dizem
        </h3>
        <div className="w-12 h-1 bg-primary"></div>
      </div>

      {/* Grid de Avaliações */}
      <div
        ref={reviewsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {REVIEWS.map(review => {
          const isVisible = visibleReviews.has(review.id);
          return (
            <article
              key={review.id}
              data-review-id={review.id}
              className={`bg-card border-2 border-border p-6 flex flex-col justify-between space-y-4 relative group hover:border-primary hover:shadow-lg transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${review.id * 100}ms` : "0ms",
              }}
            >
              {/* Estrelas com role="img" para acessibilidade */}
              <div 
                className="flex space-x-1 text-secondary"
                role="img"
                aria-label={`Avaliação: ${review.rating} de 5 estrelas`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < review.rating ? "currentColor" : "none"}
                    className={i < review.rating ? "stroke-secondary" : "stroke-border"}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Texto do depoimento com contraste melhorado */}
              <p className="text-sm text-foreground leading-relaxed font-medium">
                "{review.text}"
              </p>

              {/* Informações do autor */}
              <div className="pt-4 border-t-2 border-border flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-sm font-black tracking-wider uppercase text-foreground">
                    {review.author}
                  </h3>
                  {review.role && (
                    <p className="text-xs text-muted-foreground font-semibold">
                      {review.role}
                    </p>
                  )}
                </div>
                <span className="text-xs text-muted-foreground tracking-widest uppercase font-semibold">
                  {review.date}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewsSection;
