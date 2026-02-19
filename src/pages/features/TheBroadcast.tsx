import { ArrowLeft, Image, Type, Layout, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function TheBroadcast() {
    const [template, setTemplate] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-pop-bg p-8 pt-24 text-white font-sans overflow-x-hidden">
            <header className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase text-blue-500 tracking-tighter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">The Broadcast</h1>
                        <p className="text-black font-bold opacity-60 uppercase tracking-widest">Newsletter & Announcement Builder</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 bg-green-500 text-black px-6 py-3 rounded-xl font-black uppercase border-3 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all">
                    <Send className="w-5 h-5" /> Publish
                </button>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 h-[calc(100vh-200px)]">

                {/* Tools Sidebar */}
                <div className="bg-white text-black p-6 rounded-[2rem] border-3 border-black shadow-hard flex flex-col gap-6">
                    <div>
                        <h3 className="font-black uppercase text-gray-400 mb-4 text-sm">Structure</h3>
                        <div className="space-y-3">
                            <div className="p-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 hover:border-black cursor-grab flex items-center gap-3 font-bold group transition-colors">
                                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200"><Layout size={20} className="text-blue-600" /></div>
                                Hero Section
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 hover:border-black cursor-grab flex items-center gap-3 font-bold group transition-colors">
                                <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200"><Type size={20} className="text-purple-600" /></div>
                                Text Block
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 hover:border-black cursor-grab flex items-center gap-3 font-bold group transition-colors">
                                <div className="p-2 bg-pink-100 rounded-lg group-hover:bg-pink-200"><Image size={20} className="text-pink-600" /></div>
                                Image Gallery
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-black uppercase text-gray-400 mb-4 text-sm">Templates</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {[1, 2, 3, 4].map(i => (
                                <div
                                    key={i}
                                    onClick={() => setTemplate(i)}
                                    className={`aspect-[3/4] rounded-lg border-2 ${template === i ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-400'} cursor-pointer bg-gray-50 relative overflow-hidden transition-all`}
                                >
                                    <div className="absolute top-2 left-2 right-2 h-2 bg-gray-200 rounded-sm"></div>
                                    <div className="absolute top-6 left-2 right-2 h-12 bg-gray-200 rounded-sm"></div>
                                    <div className="absolute top-20 left-2 right-2 bottom-2 bg-gray-100 rounded-sm"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Canvas Area */}
                <div className="bg-gray-100 rounded-[2rem] border-3 border-black shadow-inner p-8 overflow-y-auto flex justify-center relative inner-shadow-lg">
                    {/* The "Paper" */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-2xl bg-white min-h-[800px] shadow-2xl p-12 flex flex-col gap-8 relative"
                    >
                        {/* Header Placeholder */}
                        <div className="w-full h-48 bg-blue-50 rounded-xl border-2 border-dashed border-blue-200 flex flex-col items-center justify-center text-blue-300 gap-2 hover:bg-blue-100 hover:border-blue-400 transition-colors cursor-pointer group">
                            <Image className="w-12 h-12 group-hover:scale-110 transition-transform" />
                            <span className="font-black uppercase tracking-widest text-sm">Drop Banner Image</span>
                        </div>

                        {/* Title Placeholder */}
                        <div className="space-y-2">
                            <div className="h-10 bg-gray-100 rounded w-3/4 animate-pulse"></div>
                            <div className="h-6 bg-gray-50 rounded w-1/2 animate-pulse"></div>
                        </div>

                        {/* Body Text Placeholder */}
                        <div className="space-y-3">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="h-4 bg-gray-100 rounded w-full"></div>
                            ))}
                            <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                        </div>

                        {/* Button Placeholder */}
                        <div className="self-center mt-8">
                            <div className="px-8 py-4 bg-black text-white rounded-lg font-bold opacity-20">Click to call-to-action</div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
}
