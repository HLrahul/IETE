"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

function TriangleGeometry() {
  const meshRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.z -= 0.01;
  })
  
  return (
    <mesh>
      <torusGeometry args={[2, 0.25, 30, 0]} />
    </mesh>
  )
}

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
        <torusGeometry args={[2, 0.25, 30, 0]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </>
  );
}

export default function Torus() {
  return (
    <Canvas>
      <OrbitControls enableRotate={true} enablePan={true} enableZoom={false} />
      <ambientLight />
      <TorusGeometry />
      <group position={[0, 2, 0]}>
        <Text
          fontSize={0.5}
          position={[0, 0.5, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          Institute of Electronics and Telecommunication Engineers, Chennai.
        </Text>
      </group>
    </Canvas>
  );
}
