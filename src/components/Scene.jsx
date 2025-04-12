import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AnimatedColorPlane } from "./shaders/ColorShiftMaterial";
import { useState } from "react";

export function Scene() {
  const [color, setColor] = useState([0.8, 0.2, 0.5]);

  // Change color when clicked
  const changeColor = () => {
    setColor([Math.random(), Math.random(), Math.random()]);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }} onClick={changeColor}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <AnimatedColorPlane color={color} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
