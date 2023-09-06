"use client";

import { useRef } from 'react';
import { Mesh } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function TriangleMesh () {
    return (
        <mesh>
           
        </mesh>
    )
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
            <TorusMesh />
        </Canvas>
    )
}