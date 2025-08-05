import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const imageCache = useRef({});
  const totalFrames = 69;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Preload images
    let loaded = 0;
    for (let i = 1; i < totalFrames; i++) {
      const padded = String(i).padStart(4, '0');
      const src = `/frames/${padded}.jpg`;
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.current[i] = img;
        loaded++;
        if (loaded === totalFrames - 1) drawFrame(0); // Start at frame 0
      };
    }

    const drawFrame = (index) => {
      const img = imageCache.current[index];
      if (!img) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    // Setup ScrollTrigger
    gsap.to(frameRef, {
      current: totalFrames - 1,
      snap: 'current',
      ease: 'none',
      scrollTrigger: {
        trigger: canvas,
        start: 'top top',
        end: `+=2000`, // adjust based on how long you want the scroll to last
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: false
      },
      onUpdate: () => {
        drawFrame(Math.round(frameRef.current));
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block', pointerEvents: 'none' }}
      />
    </div>
  );
};

export default Index;
