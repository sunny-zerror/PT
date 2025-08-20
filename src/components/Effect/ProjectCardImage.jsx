import { Canvas } from "@react-three/fiber";
import WaveImage from "./WaveImage";
import BulgeImage from "./BulgeImage";

export default function ProjectCardImage({imgUrl}) {
  return (
    <Canvas camera={{ position: [0, 0, 1] }} className="  w-full h-full  " >
      <BulgeImage url={imgUrl} />
    </Canvas>
  );
}


