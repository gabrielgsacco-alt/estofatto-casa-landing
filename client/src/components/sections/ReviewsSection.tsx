import React, { useEffect, useRef, useState } from "react";
import { Star, ShieldCheck } from "lucide-react";
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
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
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
      {/* Widget de Selo de Confiança Google */}
      <div className="bg-card border border-border p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#4285F4]/10 rounded-full flex items-center justify-center text-[#4285F4]">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.185 15.427 1 12.24 1 5.48 1 0 6.48 0 13.2s5.48 12.2 12.24 12.2c7.055 0 11.75-4.96 11.75-11.94 0-.8-.085-1.41-.19-1.975H12.24z"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold tracking-wider uppercase text-foreground">Avaliações no Google</h3>
              <span className="flex items-center gap-1 text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 font-bold tracking-widest uppercase">
                <ShieldCheck size={10} /> Verificado
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Feedback real dos nossos clientes do showroom de Campo Grande
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-center md:text-right">
            <div className="flex items-center gap-1 justify-center md:justify-end text-amber-500">
              <span className="text-xl font-black text-foreground mr-1">4.9</span>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" className="stroke-amber-500" />
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground tracking-wider uppercase mt-1">
              Com base em mais de 120 avaliações
            </p>
          </div>
          <a 
            href="https://g.page/r/estofattocasacg/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Avaliar no Google
          </a>
        </div>
      </div>

      {/* Grid de Avaliações */}
      <div
        ref={reviewsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {REVIEWS.map(review => {
          const isVisible = visibleReviews.has(review.id);
          return (
            <div
              key={review.id}
              data-review-id={review.id}
              className={`bg-card border border-border p-6 flex flex-col justify-between space-y-4 relative group hover:border-primary/30 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${review.id * 100}ms` : "0ms",
              }}
            >
              <div className="space-y-3">
                <div className="flex space-x-1 text-primary">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-border/40 flex flex-col justify-between space-y-1">
                <div>
                  <h4 className="text-xs font-bold tracking-wider uppercase text-foreground">
                    {review.author}
                  </h4>
                  <p
                    className="text-[10px] text-muted-foreground"
                    style={{ fontSize: "12px", fontWeight: "700" }}
                  >
                    {review.role}
                  </p>
                </div>
                <span className="text-[9px] text-muted-foreground tracking-widest uppercase">
                  {review.date}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewsSection;
