// BulgeImage.jsx
import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame, useLoader, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

const BulgeShaderMaterial = shaderMaterial(
  {
    uTexture: null,
    uMouse: new THREE.Vector2(0.5, 0.5),
    uStrength: 0.0,
    uTime: 0,
    uRippleOrigin: new THREE.Vector2(0.5, 0.5),
    uRippleStart: -10.0,
    uBrightness: 1.3, // default brighter (1.0 = normal)
  },
  // Vertex Shader
  `
varying vec2 vUv;

uniform vec2 uMouse;
uniform float uStrength;
uniform float uTime;
uniform vec2 uRippleOrigin;
uniform float uRippleStart;

void main() {
  vUv = uv;

  // --- Bulge displacement ---
  vec2 dir = uv - uMouse;
  float dist = length(dir);
  float bulge = smoothstep(0.4, 0.0, dist) * uStrength;
  vec3 displaced = position + normalize(vec3(dir, 0.0)) * bulge * 0.3; // push in XY

  // --- Ripple displacement ---
  float rippleAge = uTime - uRippleStart;
  if (rippleAge > 0.0 && rippleAge < 1.5) {
    float rippleRadius = rippleAge * 0.6;
    float d = distance(uv, uRippleOrigin);
    float wave = sin(35.0 * (d - rippleRadius)) * 0.05;
    float fade = 1.0 - smoothstep(0.0, 1.5, rippleAge);
    float mask = smoothstep(rippleRadius + 0.1, rippleRadius, d);
    displaced.z += wave * mask * fade;  // push vertices in Z
  }

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}

  `,
  // Fragment Shader
  `
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uStrength;
uniform float uTime;
uniform vec2 uRippleOrigin;
uniform float uRippleStart;
uniform float uBrightness;   // NEW

varying vec2 vUv;

void main() {
  vec2 dir = vUv - uMouse;
  float dist = length(dir);
  float bulge = smoothstep(0.4, 0.0, dist) * uStrength;
  vec2 distorted = vUv - normalize(dir) * bulge * 0.05;

  // --- Ripple UV distortion ---
  float rippleAge = uTime - uRippleStart;
  if (rippleAge > 0.0 && rippleAge < 1.0) {
    float rippleRadius = rippleAge * 0.4;
    float d = distance(vUv, uRippleOrigin);
    float wave = sin(35.0 * (d - rippleRadius)) * 0.02;
    float fade = 1.0 - smoothstep(0.0, 1.0, rippleAge);
    float mask = smoothstep(rippleRadius + 0.1, rippleRadius, d);
    distorted += normalize(dir) * wave * mask * fade;
  }

  // --- RGB Split ---
  vec2 rOffset = distorted + 0.002 * bulge;
  vec2 gOffset = distorted;
  vec2 bOffset = distorted - 0.002 * bulge;

  vec4 texR = texture2D(uTexture, rOffset);
  vec4 texG = texture2D(uTexture, gOffset);
  vec4 texB = texture2D(uTexture, bOffset);

  vec4 finalColor = vec4(texR.r, texG.g, texB.b, 1.0);

  // --- Brightness boost ---
  finalColor.rgb *= uBrightness;

  gl_FragColor = finalColor;
}


  `
);

extend({ BulgeShaderMaterial });

const BulgeImage = ({ url }) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, url);

  const lastMouse = useRef(new THREE.Vector2(0.5, 0.5));
  const velocity = useRef(0);
  const targetStrength = useRef(0);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.uTime = state.clock.getElapsedTime();

      // Smooth interpolation of bulge
      ref.current.uStrength = THREE.MathUtils.lerp(
        ref.current.uStrength,
        targetStrength.current,
        0.1 // easing factor
      );

      // Gradually decay target strength if no movement
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

      targetStrength.current = mapped; // store as target (not direct)
      lastMouse.current.set(uv.x, uv.y);

      // trigger ripple
      ref.current.uMouse.set(uv.x, uv.y);
      ref.current.uRippleOrigin.set(uv.x, uv.y);
      ref.current.uRippleStart = ref.current.uTime;
    }
  };

  return (
    <mesh onPointerMove={handleMove}>
      <planeGeometry args={[3.5, 4, 32, 32]} />
      <bulgeShaderMaterial ref={ref} uTexture={texture} />
    </mesh>
  );
};

export default BulgeImage;
