import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";

// Define the shader material using GLSL
const ColorShiftMaterial = shaderMaterial(
  // Uniforms (variables passed to the shader)
  {
    time: 0,
    color: [1, 0, 0], // Default red color
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;

    void main() {
      vec3 finalColor = vec3(
        color.r * sin(time) * 0.5 + 0.5,
        color.g * cos(time) * 0.5 + 0.5,
        color.b * sin(time + 3.14) * 0.5 + 0.5
      );
      gl_FragColor = vec4(finalColor * vUv.y, 1.0);
    }
  `
);

// Extend the React Three Fiber with our custom material
extend({ ColorShiftMaterial });

// Create a component that uses the shader
export function AnimatedColorPlane({ color = [0.5, 1.0, 0.5] }) {
  const materialRef = useRef();

  // Update the time uniform on each frame
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.time = state.clock.elapsedTime;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <colorShiftMaterial ref={materialRef} color={color} />
    </mesh>
  );
}
