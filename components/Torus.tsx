"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

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
                <bufferGeometry attach="geometry">
                    <torusGeometry args={[2, 0.25, 30, 0]} />
                </bufferGeometry>
                <meshStandardMaterial color="black" />
            </mesh>
        </>
    );
}

export default function Torus() {
    return (
        <Canvas>
            <OrbitControls
                enableRotate={true}
                enablePan={true}
                enableZoom={false}
            />
            <ambientLight />
            <TorusGeometry />
        </Canvas>
    );
}
