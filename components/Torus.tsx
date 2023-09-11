"use client";

import { useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useTheme } from 'next-themes';

function TorusMesh () {
    const MeshRef = useRef<Mesh>(null);

    useFrame(() => {
        if(!MeshRef.current) return;

        MeshRef.current.rotation.x -= 0.01;
        MeshRef.current.rotation.y -= 0.01;
    });

    const [color, setColor] = useState<string>("black");

    const {theme} = useTheme();

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const listener = (event: MediaQueryListEvent | MediaQueryList) => {
          setColor(event.matches ? "#ffffff" : "#000000");
        };
        listener(mediaQuery);
        mediaQuery.addEventListener("change", listener);

        return () => mediaQuery.removeEventListener("change", listener);
    }, [theme]);

    return (
        <mesh ref={MeshRef}>
            <torusGeometry args={[1.5, 0.15, 32, 64]} />
            <meshStandardMaterial color={color} />
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