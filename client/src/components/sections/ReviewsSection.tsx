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

              {/* Imagem do WhatsApp se disponível */}
              {review.whatsappImage && (
                <div className="my-4 rounded-lg overflow-hidden border-2 border-border">
                  <img 
                    src={review.whatsappImage} 
                    alt={`Depoimento de ${review.author} no WhatsApp`}
                    className="w-full h-auto object-cover max-h-96"
                  />
                </div>
              )}

              {/* Texto do depoimento com contraste melhorado */}
              {!review.whatsappImage && (
                <p className="text-sm text-foreground leading-relaxed font-medium">
                  "{review.text}"
                </p>
              )}

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
