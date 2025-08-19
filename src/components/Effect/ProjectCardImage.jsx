import { Canvas } from "@react-three/fiber";
import WaveImage from "./WaveImage";
import BulgeImage from "./BulgeImage";

export default function ProjectCard({imgUrl}) {
  return (
    <Canvas camera={{ position: [0, 0, 2.5] }} className="w-full h-full " >
      <BulgeImage url={imgUrl} />
    </Canvas>
  );
}
