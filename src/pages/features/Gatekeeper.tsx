import { ArrowLeft, ScanLine, Camera, Smartphone, Check, X, QrCode } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Gatekeeper() {
    const [scanState, setScanState] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');
    const [scannedData, setScannedData] = useState<string | null>(null);

    const startScan = () => {
        setScanState('scanning');

        // Simulation of scanning delay
        setTimeout(() => {
            const isSuccess = Math.random() > 0.2; // 80% success rate
            if (isSuccess) {
                setScannedData("Uday Doe | President | Access Lvl 5");
                setScanState('success');
            } else {
                setScanState('error');
            }
        }, 2500);
    };

    const resetScan = () => {
        setScanState('idle');
        setScannedData(null);
    };

    return (
        <div className="min-h-screen bg-black p-4 pt-24 text-white relative font-mono overflow-hidden">
            {/* HUD Overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

            <header className="max-w-4xl mx-auto mb-8 flex items-center gap-6 relative z-10">
                <Link to="/apps" className="p-3 bg-white hover:bg-gray-200 rounded-full border-2 border-cyan-500 transition-colors">
                    <ArrowLeft className="text-black" />
                </Link>
                <div>
                    <h1 className="text-4xl md:text-5xl font-black uppercase text-cyan-400 tracking-tighter shadow-cyan-glow">Gatekeeper</h1>
                    <p className="text-cyan-500/60 text-xs md:text-sm tracking-widest uppercase">Biometric & Ticket Verification System</p>
                </div>
            </header>

            <div className="max-w-md mx-auto relative mt-4">
                {/* Scanner Viewport */}
                <div className="aspect-[3/4] bg-gray-900 rounded-[2rem] border-4 border-cyan-500/30 relative overflow-hidden flex flex-col items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.1)] group">

                    {/* Background Camera Feed (Simulated) */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop)' }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>

                    {/* Scanning Grid Overlay */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10"></div>

                    <AnimatePresence mode='wait'>
                        {/* IDLE STATE */}
                        {scanState === 'idle' && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="z-10 flex flex-col items-center justify-center p-8 text-center"
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="w-32 h-32 border-2 border-dashed border-cyan-500/50 rounded-2xl flex items-center justify-center mb-6"
                                >
                                    <QrCode className="w-16 h-16 text-cyan-500/50" />
                                </motion.div>
                                <h3 className="text-2xl font-black uppercase text-white mb-2">Ready to Scan</h3>
                                <p className="text-cyan-400/60 text-sm font-bold max-w-[200px]">Align QR code within the frame to authenticate.</p>

                                <button
                                    onClick={startScan}
                                    className="mt-8 px-8 py-3 bg-cyan-500 text-black font-black uppercase rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all"
                                >
                                    Initiate Scan
                                </button>
                            </motion.div>
                        )}

                        {/* SCANNING STATE */}
                        {scanState === 'scanning' && (
                            <motion.div
                                key="scanning"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="absolute inset-0 z-20"
                            >
                                {/* Moving Laser Beam */}
                                <motion.div
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-x-0 h-1 bg-red-500 shadow-[0_0_30px_rgba(239,68,68,1)] z-10"
                                />
                                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
                                    <ScanLine className="w-32 h-32 text-cyan-400 animate-spin-slow opacity-50" />
                                    <div className="bg-black/50 backdrop-blur px-4 py-2 rounded-lg border border-cyan-500/30">
                                        <p className="font-mono text-cyan-400 animate-pulse text-xs tracking-[0.2em]">ANALYZING BIOMETRICS...</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* SUCCESS STATE */}
                        {scanState === 'success' && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="z-30 flex flex-col items-center justify-center w-full h-full bg-black/80 backdrop-blur-sm p-8"
                            >
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(34,197,94,0.6)]"
                                >
                                    <Check className="w-12 h-12 text-black" strokeWidth={4} />
                                </motion.div>
                                <h2 className="text-3xl font-black uppercase text-green-400 mb-2">Access Granted</h2>
                                <div className="bg-gray-900 border border-green-500/50 p-4 rounded-xl w-full text-center mb-6">
                                    <p className="text-green-300 font-bold font-mono text-sm">{scannedData}</p>
                                </div>
                                <button onClick={resetScan} className="text-gray-400 hover:text-white text-sm font-bold uppercase tracking-widest hover:underline">
                                    Scan Next Entry
                                </button>
                            </motion.div>
                        )}

                        {/* ERROR STATE */}
                        {scanState === 'error' && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="z-30 flex flex-col items-center justify-center w-full h-full bg-black/80 backdrop-blur-sm p-8"
                            >
                                <motion.div
                                    animate={{ x: [-10, 10, -10, 10, 0] }}
                                    className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(239,68,68,0.6)]"
                                >
                                    <X className="w-12 h-12 text-black" strokeWidth={4} />
                                </motion.div>
                                <h2 className="text-3xl font-black uppercase text-red-500 mb-2">Access Denied</h2>
                                <p className="text-red-400/60 font-bold mb-8">Ticket Invalid or Expired</p>
                                <button onClick={resetScan} className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-bold text-sm uppercase">
                                    Retry Scan
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Tactical Corners */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-cyan-500 rounded-tl-xl opacity-50"></div>
                    <div className="absolute top-6 right-6 w-12 h-12 border-t-4 border-r-4 border-cyan-500 rounded-tr-xl opacity-50"></div>
                    <div className="absolute bottom-6 left-6 w-12 h-12 border-b-4 border-l-4 border-cyan-500 rounded-bl-xl opacity-50"></div>
                    <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-cyan-500 rounded-br-xl opacity-50"></div>
                </div>

                {/* Footer Info */}
                <div className="mt-6 flex justify-between items-end text-[10px] text-gray-500 font-mono">
                    <div>
                        <p>ID: TERMINAL_04</p>
                        <p>ZONE: NORTH_GATE</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors">
                            <Camera className="w-5 h-5" />
                            <span>CAM</span>
                        </button>
                        <button className="flex flex-col items-center gap-1 hover:text-cyan-400 transition-colors">
                            <Smartphone className="w-5 h-5" />
                            <span>NFC</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
