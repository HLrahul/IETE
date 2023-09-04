"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

function TorusGeometry() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.z -= 0.01;
  });

  return (
    <>
      <mesh ref={meshRef}>
        <torusGeometry args={[2, 0.25, 30, 64]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </>
  );
}

export default function Torus() {
  return (
    <Canvas>
      <OrbitControls 
        enableRotate={false}
        enablePan={true}
        enableZoom={false}
      />
      <ambientLight />
      <TorusGeometry />
      <Text scale={0.3} position={[1.5, 1, 1]} >
        Institute of Electronics and Telecommunication Engineers, Chennai.
      </Text>
    </Canvas>
  );
}
