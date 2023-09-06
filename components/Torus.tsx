"use client";

import { useRef } from 'react';
import { BufferAttribute, BufferGeometry, Mesh } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function HollowTriangleGeometry() {
  const geometry = new BufferGeometry();
  const vertices = new Float32Array([
    -1, 1, 0, 1, 1, 0, 0, -1, 0, -0.8, 0.8, 0, 0.8, 0.8, 0, 0, -0.8, 0,
  ]);
  const indices = new Uint16Array([0, 1, 2, 3, 4, 5]);
  geometry.setAttribute("position", new BufferAttribute(vertices, 5));
  geometry.setIndex(new BufferAttribute(indices, 1));

  useFrame(() => {
    if (!geometry) {
      return;
    }

    // geometry.rotateX(0.01);
    // geometry.rotateY(0.01);
  });

  return (
    <mesh>
      <bufferGeometry attach="geometry" {...geometry} />
    </mesh>
  );
}

function TorusMesh () {
    const MeshRef = useRef<Mesh>(null);

    useFrame(() => {
        if(!MeshRef.current) return;

        MeshRef.current.rotation.z -= 0.01;
    });

    return (
        <mesh ref={MeshRef}>
            <torusGeometry args={[1.5, 0.15, 32, 64]} />
            <meshStandardMaterial color="black" />
        </mesh>
    )
}

export default function Torus () {
    return (
        <Canvas>
            <OrbitControls
                enableRotate={true}
                enablePan={true}
                enableZoom={false}
            />
            <ambientLight />
            <HollowTriangleGeometry />
            <TorusMesh />
        </Canvas>
    )
}