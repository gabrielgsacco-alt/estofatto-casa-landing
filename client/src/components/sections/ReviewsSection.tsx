import React, { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
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
    <div className="space-y-8">
      {/* Selo de autenticidade */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <ShieldCheck size={18} className="text-secondary" aria-hidden="true" />
        <span className="font-semibold tracking-wide">
          Conversas reais de clientes via WhatsApp
        </span>
      </div>

      {/* Grid de Prints de WhatsApp - 4 colunas */}
      <div
        ref={reviewsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
      >
        {REVIEWS.map(review => {
          const isVisible = visibleReviews.has(review.id);
          return (
            <article
              key={review.id}
              data-review-id={review.id}
              className={`flex flex-col bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:border-primary transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${(review.id % 4) * 80}ms` : "0ms",
              }}
            >
              {/* Print real do WhatsApp - sem cabeçalho, apenas a imagem */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src={review.whatsappImage}
                  alt={`Depoimento real de cliente da Estofatto Casa enviado por WhatsApp - ${review.author}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewsSection;
