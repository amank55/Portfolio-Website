import Rimport React, { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const EarthCanvas = memo(() => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      {/* Simplify models or replace with lightweight ones */}
    </Canvas>
  );
});

export default EarthCanvas;
