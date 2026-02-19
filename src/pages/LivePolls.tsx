import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, PieChart, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Star4Point } from '../components/Scribbles';

export function LivePolls() {
    // Mock Poll Data
    const [activePoll, setActivePoll] = useState({
        id: 1,
        question: "What theme should we choose for the Hackathon?",
        options: [
            { id: 'A', text: "Cyberpunk 2077", votes: 124, color: 'bg-pop-yellow', textColor: 'text-black' },
            { id: 'B', text: "Retro Wave 80s", votes: 98, color: 'bg-pop-pink', textColor: 'text-white' },
            { id: 'C', text: "Eco-Futurism", votes: 45, color: 'bg-pop-purple', textColor: 'text-white' },
        ],
        totalVotes: 267,
        timeLeft: "2h 15m"
    });

    const [hasVoted, setHasVoted] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleVote = (optionId: string) => {
        if (hasVoted) return;

        // Optimistic UI update
        const updatedOptions = activePoll.options.map(opt =>
            opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
        );

        setActivePoll(prev => ({
            ...prev,
            options: updatedOptions,
            totalVotes: prev.totalVotes + 1
        }));

        setSelectedOption(optionId);
        setHasVoted(true);
    };

    return (
        <main className="min-h-screen bg-pop-bg text-white pb-20 pt-24 px-4 overflow-x-hidden relative">

            {/* Background Decor */}
            <div className="fixed top-20 left-10 opacity-20 pointer-events-none animate-spin-slow">
                <Star4Point className="w-32 h-32 text-pop-yellow" />
            </div>

            <div className="mx-auto max-w-4xl relative z-10">

                {/* Header */}
                <div className="flex items-center gap-4 mb-12">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-colors">
                        <ArrowLeft className="w-6 h-6 text-black" />
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-black uppercase leading-none">
                        Live <span className="text-pop-pink">Democracy</span>
                    </h1>
                </div>

                {/* Main Poll Card */}
                <div className="bg-pop-white text-black rounded-[3rem] p-8 md:p-12 border-3 border-black shadow-hard relative overflow-hidden">

                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-8 font-bold uppercase text-sm tracking-wider">
                        <div className="flex items-center gap-2 text-red-500 animate-pulse">
                            <Clock className="w-4 h-4" />
                            <span>Ends in {activePoll.timeLeft}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                            <Users className="w-4 h-4" />
                            <span>{activePoll.totalVotes} Votes</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black uppercase text-center mb-12 leading-tight">
                        {activePoll.question}
                    </h2>

                    <div className="space-y-6">
                        {activePoll.options.map((option) => {
                            const percentage = Math.round((option.votes / activePoll.totalVotes) * 100);
                            const isSelected = selectedOption === option.id;

                            return (
                                <motion.button
                                    key={option.id}
                                    onClick={() => handleVote(option.id)}
                                    disabled={hasVoted}
                                    whileHover={!hasVoted ? { scale: 1.02, rotate: -1 } : {}}
                                    whileTap={!hasVoted ? { scale: 0.98 } : {}}
                                    className={`relative w-full h-24 rounded-2xl border-3 border-black shadow-hard-sm overflow-hidden group transition-all ${hasVoted && !isSelected ? 'opacity-50 grayscale' : ''
                                        }`}
                                >
                                    {/* Progress Bar Background */}
                                    {hasVoted && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className={`absolute inset-0 ${option.color} opacity-20`}
                                        />
                                    )}

                                    <div className="absolute inset-0 flex items-center justify-between px-8 z-10">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center font-black text-2xl ${option.color} ${option.textColor}`}>
                                                {option.id}
                                            </div>
                                            <span className="font-black text-xl uppercase tracking-wide">{option.text}</span>
                                        </div>

                                        {hasVoted && (
                                            <div className="text-right">
                                                <span className="block text-3xl font-black">{percentage}%</span>
                                                <span className="text-xs font-bold uppercase opacity-60">{option.votes} votes</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Selection Checkmark */}
                                    {isSelected && (
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full border-2 border-white">
                                            <Zap className="w-6 h-6 fill-current animate-bounce" />
                                        </div>
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>

                    {hasVoted && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 text-center"
                        >
                            <p className="font-bold text-gray-500 uppercase text-sm mb-2">Thanks for voting!</p>
                            <div className="inline-block px-4 py-2 bg-black text-white rounded-lg font-black text-xs uppercase animate-pulse">
                                +50 XP Earned
                            </div>
                        </motion.div>
                    )}

                </div>

                {/* Past Polls List */}
                <div className="mt-20">
                    <h3 className="text-2xl font-black uppercase flex items-center gap-3 mb-8">
                        <PieChart className="w-8 h-8 text-pop-purple" /> Past Decisions
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[1, 2].map((i) => (
                            <div key={i} className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-gray-800 text-gray-400 text-xs font-bold px-2 py-1 rounded">ENDED</span>
                                    <span className="text-gray-500 text-xs font-bold">2 weeks ago</span>
                                </div>
                                <h4 className="font-bold text-lg mb-2">End of Semester Party Location?</h4>
                                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="w-[70%] h-full bg-pop-purple" />
                                </div>
                                <p className="text-right text-xs font-bold text-pop-purple mt-1">Rooftop Lounge (70%)</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
