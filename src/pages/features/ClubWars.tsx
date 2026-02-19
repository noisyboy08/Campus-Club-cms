import { ArrowLeft, Swords, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function ClubWars() {
    return (
        <div className="min-h-screen bg-pop-bg p-8 pt-24 text-white overflow-hidden relative selection:bg-yellow-400 selection:text-black">
            {/* Animated Background */}
            <div className="fixed inset-0 pointer-events-none">
                <motion.div
                    animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-2/3 h-full bg-red-600/20 -skew-x-12 transform origin-top-right backdrop-blur-[2px]"
                />
                <motion.div
                    animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-2/3 h-full bg-blue-600/20 -skew-x-12 transform origin-top-left backdrop-blur-[2px]"
                />
            </div>

            <header className="max-w-7xl mx-auto mb-16 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 shadow-hard-sm transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-6xl font-black uppercase text-yellow-400 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] tracking-tighter italic">Club Wars</h1>
                        <p className="text-black font-black uppercase bg-white inline-block px-2 transform -skew-x-12 border-2 border-black">Season 4: Tech vs. Arts</p>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-end">
                    <div className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg border-2 border-white/20 mb-2">
                        <Zap className="text-yellow-400 fill-current animate-pulse" />
                        <span className="font-mono font-bold">LIVE BATTLE</span>
                    </div>
                    <p className="text-black font-bold opacity-60">Ends in: 12h 45m</p>
                </div>
            </header>

            <div className="max-w-6xl mx-auto relative z-10 mt-12">

                {/* VS Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-32 h-32 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center shadow-hard-xl"
                    >
                        <Swords className="w-16 h-16 text-black" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32">

                    {/* Team Blue: Robotics */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-blue-600/90 p-8 rounded-[3rem] border-4 border-black shadow-hard-xl relative overflow-hidden group"
                    >
                        {/* Team Mascot */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-40 h-40 bg-white rounded-2xl border-4 border-black shadow-hard mb-6 flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform">
                                <span className="text-7xl">🤖</span>
                            </div>
                            <h2 className="text-5xl font-black uppercase text-white drop-shadow-md mb-2">Robotics</h2>
                            <div className="px-4 py-1 bg-black/30 rounded-full border border-white/20 mb-6">
                                <span className="text-blue-200 font-mono font-bold">The Automatons</span>
                            </div>

                            {/* Stats */}
                            <div className="w-full bg-black/20 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                                <div className="flex justify-between text-sm font-bold text-blue-200 mb-2">
                                    <span>Dominance</span>
                                    <span>54%</span>
                                </div>
                                <div className="w-full h-4 bg-black/40 rounded-full overflow-hidden border border-white/10">
                                    <div className="h-full bg-blue-400 w-[54%] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:10px_10px]"></div>
                                    </div>
                                </div>
                                <p className="text-5xl font-black mt-4 text-white">1,250 <span className="text-lg text-blue-300">XP</span></p>
                            </div>

                            <button className="mt-8 w-full py-4 bg-white text-blue-600 font-black uppercase rounded-xl border-3 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all">
                                Support Faction
                            </button>
                        </div>
                    </motion.div>

                    {/* Team Red: Drama */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-red-600/90 p-8 rounded-[3rem] border-4 border-black shadow-hard-xl relative overflow-hidden group"
                    >
                        {/* Team Mascot */}
                        <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-40 h-40 bg-white rounded-2xl border-4 border-black shadow-hard mb-6 flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform">
                                <span className="text-7xl">🎭</span>
                            </div>
                            <h2 className="text-5xl font-black uppercase text-white drop-shadow-md mb-2">Drama</h2>
                            <div className="px-4 py-1 bg-black/30 rounded-full border border-white/20 mb-6">
                                <span className="text-red-200 font-mono font-bold">The Thespians</span>
                            </div>

                            {/* Stats */}
                            <div className="w-full bg-black/20 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                                <div className="flex justify-between text-sm font-bold text-red-200 mb-2">
                                    <span>Dominance</span>
                                    <span>46%</span>
                                </div>
                                <div className="w-full h-4 bg-black/40 rounded-full overflow-hidden border border-white/10">
                                    <div className="h-full bg-red-400 w-[46%] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:10px_10px]"></div>
                                    </div>
                                </div>
                                <p className="text-5xl font-black mt-4 text-white">1,100 <span className="text-lg text-red-300">XP</span></p>
                            </div>

                            <button className="mt-8 w-full py-4 bg-white text-red-600 font-black uppercase rounded-xl border-3 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all">
                                Support Faction
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className="max-w-md mx-auto mt-20 text-center relative z-10">
                <div className="bg-black/80 backdrop-blur-md p-6 rounded-2xl border-2 border-yellow-400 inline-block">
                    <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-2 animate-bounce" />
                    <p className="text-xl font-black uppercase text-white">Current Season Leader</p>
                    <p className="text-3xl font-black text-yellow-400">ROBOTICS CLUB</p>
                </div>
            </div>
        </div>
    );
}
