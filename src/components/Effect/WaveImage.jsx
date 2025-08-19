// WaveImage.jsx
import * as THREE from "three";
import { useRef } from "react";
import { useFrame, useLoader, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

const WaveShaderMaterial = shaderMaterial(
  { uTime: 0, uTexture: null, uTriggerTime: -10.0, uDirection: 1.0 },
  // Vertex Shader
  `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uTriggerTime;
  uniform float uDirection;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float t = uTime - uTriggerTime;

    if (t > 0.0 && t < 2.0) {
      float diag = (uv.x + uv.y) * 0.5;
      if (uDirection < 0.0) {
        diag = (1.0 - uv.x + 1.0 - uv.y) * 0.5;
      }

      float waveCenter = t * 0.8;
      float wave = exp(-20.0 * pow(diag - waveCenter, 2.0)) * 0.15;
      pos.z += wave;
    }

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `,
  // Fragment Shader
  `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uTriggerTime;
  uniform float uDirection;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    float t = uTime - uTriggerTime;
    float strength = 0.0;

    if (t > 0.0 && t < 2.0) {
      strength = smoothstep(0.0, 1.0, t) * smoothstep(2.0, 1.5, t);
    }

    float split = 0.02 * strength;
    vec4 texR = texture2D(uTexture, uv + vec2(split, 0.0));
    vec4 texG = texture2D(uTexture, uv);
    vec4 texB = texture2D(uTexture, uv - vec2(split, 0.0));

    gl_FragColor = vec4(texR.r, texG.g, texB.b, 1.0);
  }
  `
);

extend({ WaveShaderMaterial });

const WaveImage = ({ url }) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, url);

  // Track queued animation
  const isAnimating = useRef(false);
  const nextDirection = useRef(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.uTime += delta;

      // Check if animation finished (after 2.0s)
      if (isAnimating.current) {
        const elapsed = ref.current.uTime - ref.current.uTriggerTime;
        if (elapsed > 2.0) {
          isAnimating.current = false;

          // If a new animation was requested during the last one, trigger it now
          if (nextDirection.current !== null) {
            trigger(nextDirection.current);
            nextDirection.current = null;
          }
        }
      }
    }
  });

  const trigger = (dir) => {
    if (!ref.current) return;

    if (isAnimating.current) {
      // Queue new animation if already running
      nextDirection.current = dir;
      return;
    }

    ref.current.uTriggerTime = ref.current.uTime;
    ref.current.uDirection = dir;
    isAnimating.current = true;
  };

  return (
    <mesh
      onPointerOver={() => trigger(1.0)}   // Forward wave
      onPointerOut={() => trigger(-1.0)}  // Backward wave
    >
      <planeGeometry args={[3, 3, 64, 64]} />
      <waveShaderMaterial ref={ref} uTexture={texture} />
    </mesh>
  );
};

export default WaveImage;
