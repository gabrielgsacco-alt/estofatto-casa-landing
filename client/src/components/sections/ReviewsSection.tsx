import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '@/const';

export const ReviewsSection: React.FC = () => {
  const reviewsRef = useRef<HTMLDivElement>(null);
  const [visibleReviews, setVisibleReviews] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reviewId = parseInt(entry.target.getAttribute("data-review-id") || "0");
            setVisibleReviews((prev) => new Set(prev).add(reviewId));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (reviewsRef.current) {
      const reviewCards = reviewsRef.current.querySelectorAll("[data-review-id]");
      reviewCards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
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
                <h4 className="text-xs font-bold tracking-wider uppercase text-foreground">{review.author}</h4>
                <p className="text-[10px] text-muted-foreground" style={{fontSize: '12px', fontWeight: '700'}}>{review.role}</p>
              </div>
              <span className="text-[9px] text-muted-foreground tracking-widest uppercase">{review.date}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsSection;
