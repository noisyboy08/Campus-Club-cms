import { useState } from "react";
import { useSpring, useTransform, motion } from "framer-motion";
import { QrCode, Fingerprint, Zap, ShieldCheck } from "lucide-react";
import { useGyroscope } from "../hooks/useGyroscope";
import { MOCK_PROFILE } from "../lib/mockData";

interface IDProps {
    className?: string;
}

export default function ID({ className = "" }: IDProps) {
    const { x, y } = useGyroscope();
    const [isFlipped, setIsFlipped] = useState(false);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    return (
        <div className={`relative w-full max-w-[320px] h-[480px] perspective-1000 mx-auto group ${className}`}>
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                onClick={() => setIsFlipped(!isFlipped)}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                className="relative w-full h-[420px] cursor-pointer"
            >
                {/* --- FRONT SIDE --- */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {/* Shadow Layer */}
                    <div className="absolute inset-0 bg-black rounded-3xl translate-x-4 translate-y-4 -z-10" />

                    <div className="absolute inset-0 rounded-3xl bg-white border-4 border-black overflow-hidden flex flex-col">
                        {/* Top Decoration */}
                        <div className="h-32 bg-pop-pink p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Zap className="w-24 h-24 text-black rotate-12" />
                            </div>
                            <div className="relative z-10 flex justify-between items-start">
                                <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border-2 border-white">
                                    Student ID
                                </div>
                                <ShieldCheck className="w-6 h-6 text-black" />
                            </div>
                        </div>

                        {/* Profile Image & Info */}
                        <div className="flex-1 p-6 relative">
                            <div className="w-24 h-24 rounded-2xl border-4 border-black bg-pop-yellow absolute -top-12 left-6 flex items-center justify-center text-4xl shadow-hard-sm">
                                👨‍🎓
                            </div>

                            <div className="mt-14 space-y-1">
                                <h2 className="text-3xl font-black text-black leading-none uppercase">
                                    {MOCK_PROFILE.full_name}
                                </h2>
                                <p className="text-sm font-bold text-pop-purple uppercase tracking-widest bg-pop-purple/10 inline-block px-2 py-1 rounded">
                                    {MOCK_PROFILE.department}
                                </p>
                            </div>

                            <div className="mt-8 space-y-4">
                                <div className="flex justify-between border-b-2 border-black/10 pb-2">
                                    <span className="font-bold text-gray-400 text-xs uppercase">Role</span>
                                    <span className="font-black text-black text-sm uppercase">{MOCK_PROFILE.role.replace('_', ' ')}</span>
                                </div>
                                <div className="flex justify-between border-b-2 border-black/10 pb-2">
                                    <span className="font-bold text-gray-400 text-xs uppercase">ID NO.</span>
                                    <span className="font-black text-black text-sm font-mono">8821-X-CAM</span>
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-gray-400">
                                <span className="text-[10px] font-bold uppercase">Tap to flip card</span>
                                <QrCode className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BACK SIDE --- */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    {/* Shadow Layer */}
                    <div className="absolute inset-0 bg-black rounded-3xl translate-x-4 translate-y-4 -z-10" />

                    <div className="absolute inset-0 rounded-3xl bg-pop-black border-4 border-black flex flex-col items-center justify-center p-8 relative overflow-hidden">

                        {/* Background Glitch Effects */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
                        <div className="absolute top-0 inset-x-0 h-1 bg-pop-pink animate-pulse"></div>

                        <div className="relative z-10 bg-white p-4 rounded-2xl border-4 border-pop-pink shadow-[0_0_30px_rgba(255,0,255,0.5)]">
                            <QrCode className="w-48 h-48 text-black" />
                        </div>

                        <div className="mt-8 text-center space-y-2 relative z-10">
                            <h3 className="text-white font-black uppercase text-xl">Access Pass</h3>
                            <div className="flex items-center justify-center gap-2 text-pop-green">
                                <Fingerprint className="w-5 h-5 animate-pulse" />
                                <span className="text-xs font-mono font-bold tracking-widest">BIOMETRIC_VERIFIED</span>
                            </div>
                        </div>

                        <div className="absolute bottom-8 text-white/40 text-[10px] font-mono text-center w-full">
                            SECURE ID: {Math.random().toString(36).substring(7).toUpperCase()}
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};
