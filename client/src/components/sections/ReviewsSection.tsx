import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck, MessageCircle } from "lucide-react";
import { REVIEWS } from "@/const";

export const ReviewsSection: React.FC = () => {
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [visibleReviews, setVisibleReviews] = useState<Set<number>>(new Set());

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
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    if (reviewsRef.current) {
      const reviewCards =
        reviewsRef.current.querySelectorAll("[data-review-id]");
      reviewCards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-10">
      {/* Selo de autenticidade */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <ShieldCheck size={18} className="text-secondary" aria-hidden="true" />
        <span className="font-semibold tracking-wide">
          Conversas reais de clientes via WhatsApp
        </span>
      </div>

      {/* Grid de Prints de WhatsApp */}
      <div
        ref={reviewsRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto"
      >
        {REVIEWS.map(review => {
          const isVisible = visibleReviews.has(review.id);
          return (
            <article
              key={review.id}
              data-review-id={review.id}
              className={`flex flex-col bg-card border-2 border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${(review.id % 4) * 100}ms` : "0ms",
              }}
            >
              {/* Cabeçalho estilo WhatsApp */}
              <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-white" aria-hidden="true" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-white text-sm font-bold truncate">
                    {review.author}
                  </span>
                  <span className="text-white/70 text-xs truncate">
                    {review.role}
                  </span>
                </div>
              </div>

              {/* Print real do WhatsApp */}
              <div className="bg-[#ECE5DD] p-3">
                <img
                  src={review.whatsappImage}
                  alt={`Depoimento real de cliente da Estofatto Casa enviado por WhatsApp - ${review.author}`}
                  loading="lazy"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Rodapé com a transcrição do depoimento */}
              <div className="p-5 flex flex-col gap-2 border-t-2 border-border">
                <p className="text-sm text-foreground leading-relaxed italic">
                  "{review.text}"
                </p>
                <span className="text-xs text-muted-foreground tracking-widest uppercase font-semibold pt-2">
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
