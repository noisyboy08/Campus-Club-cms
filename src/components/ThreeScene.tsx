
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Float, Line } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";



function Node({ position, color, text, onClick }: { position: [number, number, number], color: string, text: string, onClick: () => void }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, hovered ? 1.5 : 1, 0.1);
            meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, hovered ? 1.5 : 1, 0.1);
            meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, hovered ? 1.5 : 1, 0.1);
        }
    });

    return (
        <Float>
            <group position={position}>
                <mesh
                    ref={meshRef}
                    onClick={onClick}
                    onPointerOver={() => { document.body.style.cursor = 'pointer'; setHover(true); }}
                    onPointerOut={() => { document.body.style.cursor = 'auto'; setHover(false); }}
                >
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
                </mesh>
                <Text
                    position={[0, 0.5, 0]}
                    fontSize={0.25}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    {text}
                </Text>
            </group>
        </Float>
    );
}

import { MOCK_CLUBS } from "../lib/mockData";

function Constellation() {
    const navigate = useNavigate();

    // Create connections (lines) between the first node (central) and others
    const points = useMemo(() => {
        const lines = [];
        // Assuming the first club is the 'center' or connected node for visual effect
        // In a real graph, we'd have an edges table
        if (MOCK_CLUBS.length > 0) {
            const center = new THREE.Vector3(
                MOCK_CLUBS[0].constellation_x,
                MOCK_CLUBS[0].constellation_y,
                MOCK_CLUBS[0].constellation_z
            );
            for (let i = 1; i < MOCK_CLUBS.length; i++) {
                lines.push(center);
                lines.push(new THREE.Vector3(
                    MOCK_CLUBS[i].constellation_x,
                    MOCK_CLUBS[i].constellation_y,
                    MOCK_CLUBS[i].constellation_z
                ));
            }
        }
        return lines;
    }, []);

    return (
        <group>
            {MOCK_CLUBS.map((club) => (
                <Node
                    key={club.id}
                    position={[club.constellation_x, club.constellation_y, club.constellation_z]}
                    color={club.category === 'Tech' ? "#06b6d4" : "#ec4899"} // Dynamic color based on category
                    text={club.name}
                    onClick={() => navigate('/dashboard')}
                />
            ))}

            <Line points={points} color="rgba(255,255,255,0.2)" lineWidth={1} transparent opacity={0.3} />
        </group>
    );
}

export function ThreeScene() {
    return (
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
            {/* Deep Space Lighting */}
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#4c1d95" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />

            <Constellation />

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
    );
}
