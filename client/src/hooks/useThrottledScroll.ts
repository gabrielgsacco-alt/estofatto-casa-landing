import { useEffect, useRef, useCallback } from 'react';

export const useThrottledScroll = (callback: () => void, delay: number = 100) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastCallRef = useRef<number>(0);

  const throttledCallback = useCallback(() => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallRef.current;

    if (timeSinceLastCall >= delay) {
      lastCallRef.current = now;
      callback();
    } else {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        lastCallRef.current = Date.now();
        callback();
      }, delay - timeSinceLastCall);
    }
  }, [callback, delay]);

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledCallback);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [throttledCallback]);
};

export default useThrottledScroll;
