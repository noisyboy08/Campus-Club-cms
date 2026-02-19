import { useState } from 'react';
import { ArrowLeft, Plus, Search, Camera, Battery, Music, Info, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function GearVault() {
    const [filter, setFilter] = useState('All');
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const items = [
        { id: 1, name: "Sony A7III", type: "Camera", status: "Available", color: "bg-pop-yellow", icon: Camera, battery: 85, condition: "Good" },
        { id: 2, name: "DJI Ronin S", type: "Stabilizer", status: "Checked Out", color: "bg-pop-pink", icon: Camera, battery: 42, condition: "Fair" }, // Stabilizer icon fallback
        { id: 3, name: "Rode NTG-3", type: "Audio", status: "Available", color: "bg-pop-purple", icon: Music, battery: null, condition: "Excellent" },
        { id: 4, name: "Blackmagic 6K", type: "Camera", status: "Maintenance", color: "bg-pop-blue", icon: Camera, battery: 10, condition: "Service Needed" },
        { id: 5, name: "Zoom H6", type: "Audio", status: "Available", color: "bg-pop-green", icon: Music, battery: 90, condition: "Good" },
    ];

    const filteredItems = filter === 'All' ? items : items.filter(i => i.type === filter);

    return (
        <div className="min-h-screen bg-pop-bg p-4 md:p-8 pt-24 text-white font-sans overflow-x-hidden">
            <header className="max-w-7xl mx-auto mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase tracking-tighter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">Gear Vault</h1>
                        <p className="text-black font-bold opacity-60 uppercase tracking-widest">Equipment Inventory</p>
                    </div>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                        <input type="text" placeholder="Search gear..." className="w-full pl-10 pr-4 py-2 rounded-xl border-2 border-black font-bold focus:outline-none shadow-hard-sm" />
                    </div>
                    <button className="bg-black text-white px-6 py-2 rounded-xl font-black uppercase flex items-center gap-2 border-2 border-transparent hover:border-white hover:bg-gray-900 transition-all shadow-hard-sm">
                        <Plus className="w-5 h-5" /> Add
                    </button>
                </div>
            </header>

            <div className="max-w-7xl mx-auto">
                {/* Filters */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                    {['All', 'Camera', 'Audio', 'Stabilizer', 'Lighting'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-lg font-black uppercase border-2 border-black whitespace-nowrap transition-all ${filter === f ? 'bg-black text-white shadow-hard-sm' : 'bg-white text-black hover:bg-gray-100'}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {filteredItems.map(item => (
                            <motion.div
                                layoutId={`item-${item.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={item.id}
                                onClick={() => setSelectedItem(item.id)}
                                className={`
                                    relative p-6 rounded-[2rem] border-3 border-black shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all cursor-pointer overflow-hidden group
                                    ${item.color}
                                `}
                            >
                                <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className="p-3 bg-black/10 rounded-xl backdrop-blur-sm border border-black/5">
                                        <item.icon className="w-8 h-8 text-black" />
                                    </div>
                                    <span className={`
                                        text-[10px] font-black uppercase px-2 py-1 rounded-md border border-black
                                        ${item.status === 'Available' ? 'bg-green-400 text-black' : item.status === 'Maintenance' ? 'bg-red-400 text-white' : 'bg-gray-800 text-white'}
                                    `}>
                                        {item.status}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-black uppercase text-black leading-none mb-2 relative z-10">{item.name}</h2>
                                <p className="font-bold text-black/60 text-sm uppercase relative z-10">{item.type}</p>

                                <div className="mt-6 flex items-center justify-between relative z-10">
                                    {item.battery !== null && (
                                        <div className="flex items-center gap-1 text-black/70 font-bold text-xs" title="Battery Level">
                                            <Battery className="w-4 h-4" /> {item.battery}%
                                        </div>
                                    )}
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-black shadow-sm group-hover:scale-110 transition-transform">
                                        <Info className="w-4 h-4 text-black" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            layoutId={`item-${selectedItem}`}
                            className="bg-white w-full max-w-lg rounded-[2.5rem] border-4 border-black p-8 relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Content based on selected item lookup would go here. Using static for demo. */}
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-pop-yellow rounded-2xl border-2 border-black flex items-center justify-center shadow-hard">
                                    <Camera className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black uppercase text-black">Sony A7III</h2>
                                    <p className="font-bold text-gray-500 uppercase">Serial: #SN-8842-XJ</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <span className="font-bold text-gray-500">Status</span>
                                    <span className="font-black text-green-600 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Available</span>
                                </div>
                                <div className="flex justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <span className="font-bold text-gray-500">Condition</span>
                                    <span className="font-black text-black">Good (Minor scratches)</span>
                                </div>
                                <div className="flex justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                                    <span className="font-bold text-gray-500">Last User</span>
                                    <span className="font-black text-black">Mike Ross</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button className="flex-1 py-4 bg-black text-white font-black uppercase rounded-xl hover:bg-gray-800 transition-colors">
                                    Check Out
                                </button>
                                <button className="px-6 py-4 bg-white border-2 border-black text-black font-black uppercase rounded-xl hover:bg-gray-50 transition-colors">
                                    Report Issue
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
