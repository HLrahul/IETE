"use client";

import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

export default function Torus() {
    const meshRef = useRef<THREE.Mesh>(null);

    function animate() {
        if (meshRef.current) {
            const rotation = meshRef.current.rotation;
            if (rotation) {
                rotation.z -= 0.01;
            }
        }
    }

    return (
        <Canvas>
            <mesh ref={meshRef}>
                <torusGeometry args={[10, 3, 16, 100]} />
                <meshBasicMaterial attach="material" color={0xffff00} />
            </mesh>
        </Canvas>
    );
}
