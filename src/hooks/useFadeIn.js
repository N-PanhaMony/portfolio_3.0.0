import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to fade in an element when it enters the viewport.
 * @param {number} delay - optional delay in milliseconds
 * @returns { ref, isVisible } - ref to attach to element, boolean for visibility
 */
export default function useFadeIn(delay = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(element); // only trigger once
        }
      },
      {
        threshold: 0.1, // 10% visible triggers fade-in
      }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [delay]);

  return { ref, isVisible };
}