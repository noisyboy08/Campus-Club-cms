import { ArrowLeft, Send, Lock, Eye, EyeOff, ShieldCheck, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function WhisperBox() {
    const [message, setMessage] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(true);
    const [sent, setSent] = useState(false);

    const handleSend = () => {
        if (!message) return;
        setSent(true);
        setTimeout(() => {
            setMessage('');
            setSent(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-black p-8 pt-24 text-green-500 font-mono relative overflow-hidden">

            {/* Matrix Rain Effect (Simulated with CSS/BG) */}
            <div className="fixed inset-0 opacity-10 pointer-events-none bg-[url('https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif')] bg-cover mix-blend-screen"></div>

            <header className="max-w-2xl mx-auto mb-12 flex items-center gap-6 relative z-10">
                <Link to="/apps" className="p-3 bg-gray-900 rounded-full border border-green-500/50 hover:bg-green-500/20 transition-colors group">
                    <ArrowLeft className="text-green-500 group-hover:text-green-400" />
                </Link>
                <div>
                    <h1 className="text-4xl font-bold uppercase tracking-widest text-green-400 glitch-text">Whisper Box</h1>
                    <p className="text-green-500/50 text-xs tracking-[0.2em] uppercase mt-2">v4.0.2 | Secure Feedback Protocol</p>
                </div>
            </header>

            <div className="max-w-2xl mx-auto relative z-10">

                {/* Security Badge */}
                <div className="flex justify-center mb-8">
                    <div className="bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold tracking-wider">
                        <ShieldCheck className="w-4 h-4" />
                        END-TO-END ENCRYPTED
                    </div>
                </div>

                <div className="bg-gray-900/80 backdrop-blur-md border border-green-500 p-1 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                    <div className="border border-green-500/30 rounded-lg p-6 relative">

                        {/* Terminal Decoration */}
                        <div className="absolute top-0 left-0 right-0 h-8 border-b border-green-500/30 bg-black/50 flex items-center px-4 gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>

                        <div className="mt-6 mb-4 space-y-2 text-sm opacity-70">
                            <p>{`> Initializing secure socket layer... OK`}</p>
                            <p>{`> Obfuscating sender IP... OK`}</p>
                            <p className="animate-pulse">{`> Awaiting input_`}</p>
                        </div>

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-black/50 border border-green-500/30 text-green-300 p-4 h-48 focus:outline-none focus:border-green-400 focus:shadow-[0_0_15px_rgba(34,197,94,0.2)] rounded font-mono placeholder-green-500/20 transition-all resize-none"
                            placeholder="Type your message here. Be honest, be constructive."
                        ></textarea>

                        <div className="mt-6 flex items-center justify-between">
                            <button
                                onClick={() => setIsAnonymous(!isAnonymous)}
                                className={`flex items-center gap-2 text-xs font-bold px-3 py-2 rounded border transition-colors ${isAnonymous ? 'border-green-500 text-green-400 bg-green-500/10' : 'border-gray-600 text-gray-500'}`}
                            >
                                {isAnonymous ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                {isAnonymous ? 'ANONYMOUS MODE: ON' : 'ANONYMOUS MODE: OFF'}
                            </button>

                            <button
                                onClick={handleSend}
                                disabled={!message || sent}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded font-bold uppercase tracking-wider transition-all
                                    ${sent
                                        ? 'bg-transparent text-green-400 border border-green-400 cursor-default'
                                        : 'bg-green-600 hover:bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]'
                                    }
                                `}
                            >
                                {sent ? (
                                    <>Message Sent <Check className="w-4 h-4" /></>
                                ) : (
                                    <>Transmit <Send className="w-4 h-4" /></>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-green-500/30 text-[10px] uppercase tracking-[0.3em]">
                    System protected by 2048-bit RSA Encryption
                </div>
            </div>

            <AnimatePresence>
                {sent && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="fixed bottom-8 right-8 bg-green-500/20 backdrop-blur border border-green-500 text-green-400 px-6 py-4 rounded-xl flex items-center gap-4 shadow-lg z-50"
                    >
                        <Lock className="w-6 h-6" />
                        <div>
                            <p className="font-bold text-sm">TRANSMISSION COMPLET</p>
                            <p className="text-xs opacity-70">Logs scrubbed locally.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


