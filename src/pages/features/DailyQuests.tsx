import { ArrowLeft, Shield, Flame, Code, UserPlus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function DailyQuests() {
    return (
        <div className="min-h-screen bg-pop-bg p-8 pt-24 text-white font-sans overflow-x-hidden">
            <header className="max-w-5xl mx-auto mb-12 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase text-orange-400 tracking-tighter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">Daily Quests</h1>
                        <p className="text-black font-bold opacity-60 uppercase tracking-widest">Complete & Earn XP</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-2xl border-3 border-black shadow-hard">
                    <div className="p-2 bg-orange-500 rounded-lg text-white">
                        <Flame className="w-6 h-6 fill-current animate-pulse" />
                    </div>
                    <div>
                        <p className="font-black text-2xl leading-none">12</p>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Day Streak</p>
                    </div>
                </div>
            </header>

            <div className="max-w-5xl mx-auto space-y-6">

                {/* Progress Bar */}
                <div className="bg-white/50 p-6 rounded-[2rem] border-3 border-white/20 mb-12 backdrop-blur-sm">
                    <div className="flex justify-between text-black font-black uppercase mb-2 px-2">
                        <span>Daily Progress</span>
                        <span>2/3 Completed</span>
                    </div>
                    <div className="h-6 bg-white rounded-full border-2 border-black overflow-hidden p-1">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "66%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-orange-400 rounded-full border border-black relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:10px_10px] animate-[slide_1s_linear_infinite]"></div>
                        </motion.div>
                    </div>
                </div>

                {/* Quests */}
                {[
                    { id: 1, title: "Social Butterfly", xp: 50, icon: UserPlus, color: "bg-pop-yellow", desc: "Bring a friend to a club meeting.", status: 'completed' },
                    { id: 2, title: "Code Warrior", xp: 100, icon: Code, color: "bg-pop-pink", desc: "Submit a PR to the club repo.", status: 'active' },
                    { id: 3, title: "Event Guardian", xp: 75, icon: Shield, color: "bg-pop-purple", desc: "Volunteer for setup duty.", status: 'active' }
                ].map((quest, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={quest.id}
                        className={`
                            relative bg-white text-black p-6 rounded-[2rem] border-3 border-black shadow-hard hover:shadow-hard-xl transition-all cursor-pointer group overflow-hidden
                            ${quest.status === 'completed' ? 'opacity-60 saturate-50' : 'hover:-translate-y-1'}
                        `}
                    >
                        {quest.status === 'completed' && (
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full font-black text-xs uppercase border-2 border-black z-10">
                                Completed
                            </div>
                        )}

                        <div className="flex items-center gap-6 relative z-10">
                            <div className={`w-20 h-20 ${quest.color} rounded-2xl border-3 border-black flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform`}>
                                <quest.icon className="w-10 h-10 text-black stroke-[2.5px]" />
                            </div>

                            <div className="flex-1">
                                <h2 className="text-2xl font-black uppercase mb-1 flex items-center gap-2">
                                    {quest.title}
                                    {quest.status === 'active' && <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>}
                                </h2>
                                <p className="font-bold text-gray-500 text-lg">{quest.desc}</p>
                            </div>

                            <div className="text-right pl-4 border-l-2 border-gray-100">
                                <span className={`block text-5xl font-black ${quest.status === 'completed' ? 'text-gray-400' : 'text-pop-purple'}`}>+{quest.xp}</span>
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">XP Reward</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bonus Banner */}
            <div className="max-w-5xl mx-auto mt-12 bg-black text-white p-8 rounded-[2rem] border-4 border-yellow-400 relative overflow-hidden flex items-center justify-between">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                    <Star className="w-48 h-48 text-yellow-400 animate-spin-slow" />
                </div>

                <div className="relative z-10">
                    <h3 className="text-3xl font-black uppercase text-yellow-400 mb-2">Weekly Bonus Chest</h3>
                    <p className="font-bold text-gray-400">Complete all daily quests for 7 days to unlock.</p>
                </div>

                <div className="relative z-10">
                    <button className="bg-white text-black px-8 py-4 rounded-xl font-black uppercase hover:bg-yellow-400 transition-colors">View Rewards</button>
                </div>
            </div>

        </div>
    );
}
