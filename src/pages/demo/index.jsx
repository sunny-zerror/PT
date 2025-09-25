import gsap from "gsap";
import React, { useRef } from "react";

const Index = () => {
  const parRef = useRef(null);
  const innerRef = useRef(null);

  const animate = () => {
    const scrollY = window.scrollY || 0;

    var tl = gsap.timeline();

    tl.set(innerRef.current, {
      position: "fixed",
      css: { "--scroll-top": `-${scrollY}px` },
    });
    
    tl.to(parRef.current, {
      height: "100vh",
      position: "fixed",
      overflow: "hidden",
      duration: 1,
    });

    tl.to(parRef.current, {
      scale: 0.6,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      duration: 1,
    });
  };

  return (
    <div onClick={animate}>
      <div ref={parRef} className="w-full">
        <div ref={innerRef} className="w-full scroll-container">
          <div className="w-full text-8xl h-screen bg-blue-100 center">
            <p>Center</p>
          </div>
          <div className="w-full text-8xl h-screen bg-red-100 center">
            <p>Center</p>
          </div>
          <div className="w-full text-8xl h-screen bg-yellow-100 center">
            <p>Center</p>
          </div>
          <div className="w-full text-8xl h-screen bg-green-100 center">
            <p>Center</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
