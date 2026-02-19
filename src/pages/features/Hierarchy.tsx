import { ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Hierarchy() {
    return (
        <div className="min-h-screen bg-pop-bg p-8 pt-24 text-white font-sans overflow-x-hidden">
            <header className="max-w-6xl mx-auto mb-16 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase text-violet-400 tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Hierarchy</h1>
                        <p className="text-black font-bold opacity-60 uppercase tracking-widest">Org Chart & Roles</p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto pb-12 overflow-x-auto">
                <div className="flex flex-col items-center min-w-[800px]">

                    {/* Level 1: President */}
                    <div className="flex flex-col items-center mb-16 relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-32 h-32 rounded-full bg-pop-yellow border-4 border-black mb-4 flex items-center justify-center shadow-hard-xl relative"
                        >
                            <span className="text-5xl">👑</span>
                            <div className="absolute -top-6 -right-6">
                                <div className="bg-black text-white px-3 py-1 rounded-lg font-black uppercase text-xs border-2 border-white rotate-12">Leader</div>
                            </div>
                        </motion.div>
                        <div className="bg-white text-black px-8 py-3 rounded-2xl border-3 border-black font-black uppercase text-xl shadow-hard">
                            Sarah Connor
                        </div>
                        <div className="text-black/60 font-bold uppercase text-sm mt-2 tracking-widest">President</div>

                        {/* Connector Line Vertical */}
                        <div className="w-1 h-12 bg-black mt-4"></div>
                    </div>

                    {/* Level 2: VPs */}
                    <div className="flex gap-16 relative w-full justify-center">
                        {/* Horizontal Connector */}
                        <div className="absolute top-0 left-[20%] right-[20%] h-1 bg-black -translate-y-full"></div>

                        {[
                            { role: 'VP Tech', name: "John Doe", color: "bg-pop-blue", icon: "💻" },
                            { role: 'VP Operations', name: "Jane Smith", color: "bg-pop-pink", icon: "⚙️" },
                            { role: 'VP Design', name: "Mike Ross", color: "bg-pop-purple", icon: "🎨" }
                        ].map((vp) => (
                            <div key={vp.role} className="flex flex-col items-center relative group">
                                {/* Connector to Horizontal */}
                                <div className="absolute top-0 w-1 h-8 bg-black -translate-y-full"></div>

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className={`w-24 h-24 rounded-full ${vp.color} border-4 border-black mb-4 flex items-center justify-center text-4xl shadow-hard relative z-10`}
                                >
                                    {vp.icon}
                                </motion.div>

                                <div className="bg-white text-black px-6 py-2 rounded-xl border-3 border-black font-black uppercase text-sm shadow-hard-sm mb-1">
                                    {vp.name}
                                </div>
                                <div className="text-black/60 font-bold uppercase text-xs tracking-wider mb-8">{vp.role}</div>

                                {/* Level 3: Members */}
                                <div className="flex flex-col gap-3 relative">
                                    {/* Connector */}
                                    <div className="absolute top-0 left-1/2 -ml-0.5 w-1 h-4 bg-black/20 -translate-y-full"></div>

                                    {[1, 2, 3].map(j => (
                                        <div key={j} className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-lg border-2 border-black/10 hover:border-black hover:bg-white transition-all cursor-pointer">
                                            <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-black flex items-center justify-center text-xs font-black">
                                                {String.fromCharCode(64 + j)}
                                            </div>
                                            <span className="font-bold text-black text-xs uppercase">Member {j}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="fixed bottom-8 right-8">
                <button className="bg-black text-white px-6 py-4 rounded-full font-black uppercase shadow-hard-xl hover:scale-105 transition-transform flex items-center gap-2 border-4 border-violet-400">
                    <Users className="w-5 h-5" /> Total Members: 42
                </button>
            </div>
        </div>
    );
}
