import { ArrowLeft, Users, DollarSign, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function MissionControl() {
    return (
        <div className="min-h-screen bg-pop-bg p-8 pt-24 text-white font-sans">
            <header className="max-w-7xl mx-auto mb-12 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase text-red-500 tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Mission Control</h1>
                        <p className="text-black font-bold opacity-60 uppercase tracking-widest">Club Admin Dashboard • v2.0</p>
                    </div>
                </div>
                <div className="bg-black text-white px-6 py-2 rounded-xl font-mono text-sm border-2 border-white/20">
                    STATUS: <span className="text-green-400 animate-pulse">LIVE</span>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Key Metrics - Row 1 */}
                <div className="lg:col-span-8 grid grid-cols-3 gap-4">
                    <div className="bg-pop-white p-6 rounded-[2rem] border-3 border-black shadow-hard hover:-translate-y-1 transition-transform group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-pop-purple rounded-xl border-2 border-black">
                                <Users className="text-white" />
                            </div>
                            <span className="text-sm font-black text-gray-400 bg-gray-100 px-2 py-1 rounded">+12%</span>
                        </div>
                        <h3 className="text-4xl font-black text-black mb-1">1,240</h3>
                        <p className="text-gray-500 font-bold text-sm uppercase">Active Members</p>
                    </div>

                    <div className="bg-pop-white p-6 rounded-[2rem] border-3 border-black shadow-hard hover:-translate-y-1 transition-transform group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-pop-yellow rounded-xl border-2 border-black">
                                <DollarSign className="text-black" />
                            </div>
                            <span className="text-sm font-black text-gray-400 bg-gray-100 px-2 py-1 rounded">-5%</span>
                        </div>
                        <h3 className="text-4xl font-black text-black mb-1">$4.2k</h3>
                        <p className="text-gray-500 font-bold text-sm uppercase">Budget Remaining</p>
                    </div>

                    <div className="bg-pop-white p-6 rounded-[2rem] border-3 border-black shadow-hard hover:-translate-y-1 transition-transform group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-pop-pink rounded-xl border-2 border-black">
                                <Calendar className="text-white" />
                            </div>
                            <span className="text-sm font-black text-gray-400 bg-gray-100 px-2 py-1 rounded">Next: 2 Days</span>
                        </div>
                        <h3 className="text-4xl font-black text-black mb-1">3</h3>
                        <p className="text-gray-500 font-bold text-sm uppercase">Pending Approvals</p>
                    </div>
                </div>

                {/* Notifications / Alerts - Row 1 Right */}
                <div className="lg:col-span-4 bg-black rounded-[2rem] border-4 border-red-500 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-20">
                        <AlertTriangle className="w-24 h-24 text-red-500" />
                    </div>
                    <h3 className="text-red-500 font-black text-xl mb-6 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" /> CRITICAL ACTIONS
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-xl">
                            <p className="text-red-200 font-bold text-sm">Approve "Hackathon" Budget</p>
                            <p className="text-red-500/60 text-xs mt-1">Request by: Sara T.</p>
                        </div>
                        <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-xl">
                            <p className="text-yellow-200 font-bold text-sm">Venue Clash: Room 304</p>
                            <p className="text-yellow-500/60 text-xs mt-1">Conflict with Debate Club</p>
                        </div>
                    </div>
                    <button className="w-full mt-6 py-3 bg-red-500 text-black font-black uppercase rounded-xl hover:bg-white transition-colors">
                        Resolve All
                    </button>
                </div>

                {/* Analytics Graph Placeholder - Row 2 */}
                <div className="lg:col-span-8 bg-white rounded-[2rem] border-3 border-black shadow-hard p-8 h-80 relative flex flex-col justify-between overflow-hidden">
                    <div className="flex justify-between items-center z-10">
                        <h3 className="text-2xl font-black text-black">Engagement Trends</h3>
                        <div className="flex gap-2">
                            {['1W', '1M', '3M', '1Y'].map(t => (
                                <button key={t} className="px-3 py-1 rounded-lg font-bold text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">{t}</button>
                            ))}
                        </div>
                    </div>

                    {/* Simulated CSS Graph */}
                    <div className="flex items-end justify-between h-48 gap-2 relative z-10">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`w-full rounded-t-lg border-x-2 border-t-2 border-black ${i % 2 === 0 ? 'bg-pop-purple' : 'bg-pop-yellow'}`}
                            />
                        ))}
                    </div>

                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>
                </div>

                {/* Quick Shortcuts - Row 2 Right */}
                <div className="lg:col-span-4 grid grid-rows-2 gap-4">
                    <button className="bg-pop-blue rounded-[2rem] border-3 border-black shadow-hard p-6 flex flex-col justify-center gap-2 hover:scale-[1.02] transition-transform text-left group overflow-hidden relative">
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-20 group-hover:opacity-40 transition-opacity">
                            <TrendingUp className="w-32 h-32 text-black" />
                        </div>
                        <h3 className="text-white font-black text-2xl uppercase relative z-10">Generate Report</h3>
                        <p className="text-white/80 font-bold relative z-10">Export PDF Summary</p>
                    </button>

                    <button className="bg-pop-green rounded-[2rem] border-3 border-black shadow-hard p-6 flex flex-col justify-center gap-2 hover:scale-[1.02] transition-transform text-left group overflow-hidden relative">
                        <div className="absolute right-[-20px] bottom-[-20px] opacity-20 group-hover:opacity-40 transition-opacity">
                            <Users className="w-32 h-32 text-black" />
                        </div>
                        <h3 className="text-black font-black text-2xl uppercase relative z-10">Recruit Mode</h3>
                        <p className="text-black/60 font-bold relative z-10">Open Applications</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
