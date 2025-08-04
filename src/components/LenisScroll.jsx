import Lenis from "lenis";
import React, { useEffect, useRef } from "react";

const LenisScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const lenis = new Lenis({
        smooth: true,
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      lenisRef.current = lenis;

      const raf = (time) => {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };

      rafRef.current = requestAnimationFrame(raf);
    }, 8000); 

    return () => {
      clearTimeout(timeout);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return <div>{children}</div>;
};

export default LenisScroll;
