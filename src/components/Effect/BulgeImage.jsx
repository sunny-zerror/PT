// BulgeImage.jsx
import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { useFrame, useLoader, extend, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { fragmentShader, vertexShader } from "./shaders";

const BulgeShaderMaterial = shaderMaterial(
  {
    uTexture: null,
    uMouse: new THREE.Vector2(0.5, 0.5),
    uStrength: 0.0,
    uTime: 0,
    uRippleOrigin: new THREE.Vector2(0.5, 0.5),
    uRippleStart: -10.0,
    uBrightness: 1.0, // default brighter (1.0 = normal)
    uResolution: new THREE.Vector2(7, 1), // 👈 must exist
  },
  vertexShader,
  fragmentShader
);

extend({ BulgeShaderMaterial });

const BulgeImage = ({ url }) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, url);
 const { viewport } = useThree();

  const lastMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const targetMouse = useRef(new THREE.Vector2(0.5, 0.5)); // 👈 NEW
  const targetStrength = useRef(0);

  const aspect = texture.image.width / texture.image.height;
  const planeWidth = viewport.width * 0.95; // 90% of screen width
  const planeHeight = planeWidth / aspect;

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.uTime = state.clock.getElapsedTime();

      // --- Smooth bulge strength ---
      ref.current.uStrength = THREE.MathUtils.lerp(
        ref.current.uStrength,
        targetStrength.current,
        0.1
      );

      // --- Smooth mouse movement ---
      ref.current.uMouse.lerp(targetMouse.current, 0.1); // 👈 NEW smooth follow

      // --- Decay bulge strength ---
      targetStrength.current = THREE.MathUtils.lerp(
        targetStrength.current,
        0,
        0.05
      );
    }
  });

  const handleMove = (e) => {
    if (!ref.current) return;
    const uv = e.uv;
    if (uv) {
      // compute velocity
      const dx = uv.x - lastMouse.current.x;
      const dy = uv.y - lastMouse.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // map speed to bulge strength
      const mapped = THREE.MathUtils.clamp(speed * 20.0, 0, 1.5);
      targetStrength.current = mapped;

      lastMouse.current.set(uv.x, uv.y);
      targetMouse.current.set(uv.x, uv.y); // 👈 store as target

      // trigger ripple
      ref.current.uRippleOrigin.set(uv.x, uv.y);
      ref.current.uRippleStart = ref.current.uTime;
    }
  };

  return (
    <Suspense fallback={null}>
    <mesh onPointerMove={handleMove}>
      <planeGeometry args={[planeWidth, planeHeight, 32, 32]} />
      <bulgeShaderMaterial
        ref={ref}
        uTexture={texture}
        uResolution={[9.15, 1.5]}
        transparent={true}
        alphaTest={0.001}
      />
    </mesh>
  </Suspense>
  );
};


export default BulgeImage;
