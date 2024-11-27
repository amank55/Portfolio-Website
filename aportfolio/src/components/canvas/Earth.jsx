import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// Simplified CanvasLoader for better performance
const CanvasLoader = () => {
  return <div style={{ color: "white", textAlign: "center" }}>Loading...</div>;
};

const Earth = () => {
  // Load the GLTF model
  const earth = useGLTF("./planet/scene.gltf"); // Ensure this model is optimized
  return (
    <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand" // Render only on interactions to save performance
      dpr={[1]} // Reduce pixel density for faster rendering
      gl={{ preserveDrawingBuffer: false }} // Avoid unnecessary buffer preservation
      camera={{
        fov: 45,
        near: 0.1,
        far: 100, // Reduced far plane for optimization
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // Disable zoom for simplicity
          autoRotate // Keep autoRotate for animation
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all /> {/* Preload all assets */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
