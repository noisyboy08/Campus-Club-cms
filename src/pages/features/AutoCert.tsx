import { ArrowLeft, Printer, Download, Award, FileCheck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function AutoCert() {
    return (
        <div className="min-h-screen bg-pop-bg p-8 pt-24 text-white font-sans overflow-x-hidden">
            <header className="max-w-6xl mx-auto mb-12 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase text-pink-400 tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Auto-Cert</h1>
                        <p className="text-black font-bold opacity-60 uppercase tracking-widest">Certificate Generator</p>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* Left: Preview Area */}
                <div className="bg-white p-8 rounded-[2.5rem] border-4 border-black shadow-hard text-black relative">
                    <div className="absolute top-6 left-8 bg-black text-white px-3 py-1 rounded font-bold uppercase text-xs z-10">Live Preview</div>

                    {/* The Certificate */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="aspect-[1.414] bg-white border-8 border-double border-gray-300 rounded shadow-sm flex flex-col items-center justify-center text-center p-8 relative overflow-hidden mt-8"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,#000_0,#000_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pop-yellow opacity-50 rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-pop-purple opacity-50 rounded-tr-full"></div>

                        <Award className="w-20 h-20 text-black mb-6 relative z-10" />

                        <h1 className="text-4xl font-serif font-black mb-2 relative z-10 uppercase tracking-widest">Certificate</h1>
                        <p className="text-sm font-serif italic text-gray-500 mb-8 relative z-10">of Appreciation</p>

                        <p className="text-xs font-bold uppercase text-gray-400 mb-2">This is proudly presented to</p>
                        <h2 className="text-3xl font-black border-b-4 border-black pb-2 mb-6 w-3/4 font-serif italic">Alex Johnson</h2>

                        <p className="text-xs text-gray-600 max-w-sm mb-8 font-serif leading-relaxed">For their outstanding participation and contribution to the Annual Tech Symposium 2026.</p>

                        <div className="w-full flex justify-between px-12 mt-auto">
                            <div className="text-center">
                                <div className="w-24 border-b border-black mb-2"></div>
                                <p className="text-[10px] font-bold uppercase">President</p>
                            </div>
                            <div className="text-center">
                                <div className="w-24 border-b border-black mb-2"></div>
                                <p className="text-[10px] font-bold uppercase">Coordinator</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Controls */}
                <div className="space-y-6">

                    <div className="bg-black text-white p-6 rounded-[2rem] border-4 border-pink-400 shadow-hard-xl">
                        <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2 text-pink-400">
                            <RefreshCw className="w-5 h-5" /> Bulk Generation
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">Upload a CSV file with names to generate certificates in bulk.</p>

                        <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-pink-400 hover:bg-gray-900 transition-colors cursor-pointer mb-6">
                            <FileCheck className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                            <span className="font-bold text-sm">Drag CSV here or Click to Upload</span>
                        </div>

                        <button className="w-full py-4 bg-pink-500 text-black font-black uppercase rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2">
                            <Printer className="w-5 h-5" /> Generate Batch (PDF)
                        </button>
                    </div>

                    <div className="bg-pop-white text-black p-6 rounded-[2rem] border-3 border-black shadow-hard-sm">
                        <h3 className="font-black uppercase mb-4">Quick Issue</h3>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                className="flex-1 bg-white border-2 border-black rounded-xl px-4 font-bold focus:outline-none focus:ring-2 focus:ring-pink-400"
                                placeholder="Student Name"
                            />
                            <button className="p-3 bg-black text-white rounded-xl hover:bg-gray-800">
                                <Download className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
