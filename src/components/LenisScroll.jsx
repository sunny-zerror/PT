import Lenis from "lenis";
import React, { useEffect } from "react";

const LenisScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <div>{children}</div>;
};

export default LenisScroll;
