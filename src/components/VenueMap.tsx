
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Box } from "@react-three/drei";
import { useState } from "react";

const VENUES = [
    { id: '1', name: 'Main Auditorium', x: 0, y: 0, z: 0, available: false },
    { id: '2', name: 'Lab 101', x: -2, y: 0, z: -2, available: true },
    { id: '3', name: 'Seminar Hall', x: 2, y: 1, z: 2, available: true },
    { id: '4', name: 'Open Amphitheater', x: 0, y: -1, z: 3, available: true },
];

interface VenueNodeProps {
    position: [number, number, number];
    name: string;
    available: boolean;
    onClick: () => void;
}

function VenueNode({ position, name, available, onClick }: VenueNodeProps) {
    const [hovered, setHover] = useState(false);

    return (
        <group position={position}>
            <Box
                args={[1, 1, 1]}
                onClick={onClick}
                onPointerOver={() => { document.body.style.cursor = 'pointer'; setHover(true); }}
                onPointerOut={() => { document.body.style.cursor = 'auto'; setHover(false); }}
            >
                <meshStandardMaterial
                    color={available ? "#4ade80" : "#ef4444"}
                    emissive={available ? "#22c55e" : "#b91c1c"}
                    emissiveIntensity={hovered ? 2 : 1}
                    transparent opacity={0.9}
                />
            </Box>
            <Text
                position={[0, 1.4, 0]}
                fontSize={0.5}
                color="white"
                anchorX="center"
                anchorY="bottom"
                outlineWidth={0.05}
                outlineColor="#000000"
            >
                {name}
            </Text>
            {!available && (
                <Text
                    position={[0, 0, 1.1]}
                    fontSize={0.3}
                    color="#fca5a5"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    BOOKED
                </Text>
            )}
        </group>
    );
}

export function VenueMap() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="h-[400px] w-full rounded-3xl overflow-hidden border-3 border-black shadow-hard relative bg-gray-900">
            <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-xl border-3 border-black shadow-hard-sm max-w-[200px]">
                <h3 className="text-black font-black text-sm uppercase mb-3 border-b-2 border-black/10 pb-2">Campus Map (Live)</h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-[#4ade80] border-2 border-black rounded-full" />
                        <span className="text-xs font-bold text-gray-600">Available</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 bg-[#ef4444] border-2 border-black rounded-full" />
                        <span className="text-xs font-bold text-gray-600">Booked</span>
                    </div>
                </div>
                {selected && (
                    <div className="mt-3 pt-3 border-t-2 border-dashed border-gray-200">
                        <p className="text-[10px] uppercase font-bold text-gray-400">Selected</p>
                        <p className="text-pop-purple font-black leading-tight">{VENUES.find(v => v.id === selected)?.name}</p>
                    </div>
                )}
            </div>

            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />

                {VENUES.map(venue => (
                    <VenueNode
                        key={venue.id}
                        position={[venue.x, venue.y, venue.z]}
                        name={venue.name}
                        available={venue.available}
                        onClick={() => setSelected(venue.id)}
                    />
                ))}

                <gridHelper args={[20, 20, 0x444444, 0x222222]} />
                <OrbitControls autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
