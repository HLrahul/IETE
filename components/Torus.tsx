'use client';

import { useRef } from 'react';
import { Mesh } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

function TorusGeometry() {
    const MeshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (!MeshRef.current) {
            return;    
        }

        MeshRef.current.rotation.z -= 0.01;
    });

    return (
      <>
        <mesh ref={MeshRef}>
          <torusGeometry args={[2, 0.25, 30, 64]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      </>
    );
}

export default function Torus() {
    return (
        <Canvas>
            <TorusGeometry />
        </Canvas>
    )
}