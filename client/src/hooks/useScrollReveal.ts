import { useEffect, useRef } from "react";

/**
 * Hook que observa elementos e adiciona a classe `reveal-visible`
 * quando eles entram no viewport, ativando a animação de surgimento.
 *
 * Uso:
 *   const ref = useScrollReveal();
 *   <section ref={ref} className="reveal-section">...</section>
 *
 * Variantes de animação disponíveis (adicionar ao elemento):
 *   reveal-section         → fade-in + slide-up (padrão)
 *   reveal-section-left    → fade-in + slide da esquerda
 *   reveal-section-right   → fade-in + slide da direita
 *   reveal-section-scale   → fade-in + scale up
 */
export function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respeitar preferência de movimento reduzido
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.add("reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
        ...options,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref as React.RefObject<any>;
}

/**
 * Hook para revelar múltiplos filhos em cascata (stagger).
 * Adiciona `reveal-child` nos filhos diretos e `reveal-visible` quando visíveis.
 */
export function useScrollRevealStagger(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const children = Array.from(el.children) as HTMLElement[];

    if (prefersReduced) {
      children.forEach((child) => child.classList.add("reveal-visible"));
      return;
    }

    children.forEach((child, i) => {
      child.classList.add("reveal-child");
      child.style.transitionDelay = `${i * 80}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const kids = Array.from(entry.target.children) as HTMLElement[];
            kids.forEach((child) => child.classList.add("reveal-visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
        ...options,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref as React.RefObject<any>;
}
