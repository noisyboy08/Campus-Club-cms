import { useState, useRef } from 'react';
import { ArrowLeft, Printer, Download, Award, FileCheck, RefreshCw, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function AutoCert() {
    const [studentName, setStudentName] = useState('Alex Johnson');
    const [eventName, setEventName] = useState('Annual Tech Symposium 2026');
    const [certDate, setCertDate] = useState('October 24, 2026');
    const [isMinting, setIsMinting] = useState(false);

    const handleMint = () => {
        setIsMinting(true);
        setTimeout(() => setIsMinting(false), 3000);
    };
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

                        <h1 className="text-4xl font-serif font-black mb-2 relative z-10 uppercase tracking-widest text-black">Certificate</h1>
                        <p className="text-sm font-serif italic text-gray-500 mb-8 relative z-10">of Appreciation</p>

                        <p className="text-xs font-bold uppercase text-gray-400 mb-2">This is proudly presented to</p>
                        <h2 className="text-3xl font-black border-b-4 border-black pb-2 mb-6 w-3/4 font-serif italic text-black truncate px-4">{studentName || 'Full Name'}</h2>

                        <p className="text-xs font-bold uppercase text-gray-400 mb-2">For participation in</p>
                        <h3 className="text-xl font-black text-pop-purple mb-8 uppercase tracking-wide truncate max-w-full px-4">{eventName || 'Event Name'}</h3>

                        <div className="w-full flex justify-between px-12 mt-auto text-black">
                            <div className="text-center">
                                <div className="text-xs font-mono font-bold mb-2">{certDate || 'Date'}</div>
                                <div className="w-24 border-b border-black mb-2 mx-auto"></div>
                                <p className="text-[10px] font-bold uppercase">Date</p>
                            </div>
                            <div className="text-center">
                                <div className="text-xs font-signature italic font-bold mb-2 opacity-50">Signed</div>
                                <div className="w-24 border-b border-black mb-2 mx-auto"></div>
                                <p className="text-[10px] font-bold uppercase">President</p>
                            </div>
                        </div>

                        {/* Minting Overlay */}
                        <AnimatePresence>
                            {isMinting && (
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-50 bg-pop-pink/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 border-8 border-black shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"
                                >
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
                                        <RefreshCw className="w-16 h-16 text-white mb-4" />
                                    </motion.div>
                                    <h2 className="text-4xl font-black uppercase text-white drop-shadow-hard tracking-widest text-center animate-pulse">Minting<br />Certificate</h2>
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
                                        <Sparkles className="w-64 h-64 text-yellow-400 opacity-20 absolute -z-10 animate-spin-slow" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Right: Controls */}
                <div className="space-y-6">

                    <div className="bg-pop-white text-black p-8 rounded-[2.5rem] border-4 border-black shadow-hard">
                        <h3 className="font-black uppercase mb-6 flex items-center gap-2 text-xl">
                            <FileCheck className="w-6 h-6" /> Live Canvas Editor
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-black uppercase text-gray-500 mb-1">Student Name</label>
                                <input
                                    type="text"
                                    value={studentName}
                                    onChange={(e) => setStudentName(e.target.value)}
                                    className="w-full bg-white border-3 border-black rounded-xl p-3 font-bold focus:outline-none focus:ring-4 focus:ring-pop-pink hover:border-pop-pink transition-colors text-black placeholder:text-gray-300"
                                    placeholder="Enter full name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase text-gray-500 mb-1">Event Name</label>
                                <input
                                    type="text"
                                    value={eventName}
                                    onChange={(e) => setEventName(e.target.value)}
                                    className="w-full bg-white border-3 border-black rounded-xl p-3 font-bold focus:outline-none focus:ring-4 focus:ring-pop-pink hover:border-pop-pink transition-colors text-black placeholder:text-gray-300"
                                    placeholder="Enter event name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase text-gray-500 mb-1">Date Issuance</label>
                                <input
                                    type="text"
                                    value={certDate}
                                    onChange={(e) => setCertDate(e.target.value)}
                                    className="w-full bg-white border-3 border-black rounded-xl p-3 font-bold focus:outline-none focus:ring-4 focus:ring-pop-pink hover:border-pop-pink transition-colors text-black placeholder:text-gray-300"
                                    placeholder="Enter date"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleMint}
                            disabled={isMinting}
                            className={`mt-8 w-full py-4 text-white font-black uppercase rounded-xl border-3 border-black shadow-hard hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2 ${isMinting ? 'bg-gray-400' : 'bg-pop-pink hover:bg-pink-400'}`}
                        >
                            <Zap className="w-5 h-5" />
                            {isMinting ? 'Minting...' : 'Mint Certificate'}
                        </button>
                    </div>

                    <div className="bg-black text-white p-6 rounded-[2rem] border-3 border-black shadow-hard-xl">
                        <h3 className="text-sm font-black uppercase mb-4 flex items-center gap-2 text-pop-yellow">
                            <RefreshCw className="w-4 h-4" /> Bulk Upload (CSV)
                        </h3>
                        <p className="text-gray-400 text-xs mb-4 font-bold max-w-[200px]">Have a list of 100+ students? Drop a CSV here.</p>

                        <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-pop-yellow hover:bg-gray-900 transition-colors cursor-pointer mb-4">
                            <span className="font-bold text-xs uppercase text-gray-500">Click to Upload</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
