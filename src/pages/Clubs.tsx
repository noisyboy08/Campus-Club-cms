import { useState } from 'react';
import { MOCK_CLUBS } from '../lib/mockData';
import { Search, Filter, Users, ArrowRight, Zap, Palette, Mic, Trophy, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
    { id: 'All', icon: Users, color: 'bg-black text-white' },
    { id: 'Tech', icon: Zap, color: 'bg-pop-yellow text-black' },
    { id: 'Creative', icon: Palette, color: 'bg-pop-pink text-white' },
    { id: 'Cultural', icon: Mic, color: 'bg-pop-purple text-white' },
    { id: 'Sports', icon: Trophy, color: 'bg-green-400 text-black' },
    { id: 'Business', icon: Briefcase, color: 'bg-blue-400 text-white' },
];

export function Clubs() {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');
    const [joinedClubs, setJoinedClubs] = useState<string[]>(() => {
        const saved = localStorage.getItem('joinedClubs');
        return saved ? JSON.parse(saved) : [];
    });

    const toggleJoin = (id: string) => {
        let newJoined;
        if (joinedClubs.includes(id)) {
            newJoined = joinedClubs.filter(clubId => clubId !== id);
        } else {
            newJoined = [...joinedClubs, id];
        }
        setJoinedClubs(newJoined);
        localStorage.setItem('joinedClubs', JSON.stringify(newJoined));
    };

    const filteredClubs = MOCK_CLUBS.filter(club => {
        const matchesCategory = filter === 'All' || club.category === filter;
        const matchesSearch = club.name.toLowerCase().includes(search.toLowerCase()) ||
            (club.description || '').toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-pop-bg pb-20 pt-24 px-4 overflow-x-hidden text-white">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-4 text-white drop-shadow-[4px_4px_0_#000]">
                        Explore <span className="text-pop-yellow">Clubs</span>
                    </h1>
                    <p className="text-xl font-bold text-gray-400 max-w-2xl">
                        Find your tribe. Join communities that match your vibe, from coding to karate.
                    </p>
                </div>

                {/* Controls */}
                <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-4 py-2 rounded-full font-black border-2 border-black shadow-hard-sm transition-all hover:-translate-y-1 ${filter === cat.id ? cat.color : 'bg-white text-black'}`}
                            >
                                <div className="flex items-center gap-2">
                                    <cat.icon className="w-4 h-4" />
                                    {cat.id}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search clubs..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white text-black font-bold border-3 border-black rounded-xl shadow-hard-sm focus:outline-none focus:shadow-hard transition-all"
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredClubs.map(club => (
                            <motion.div
                                key={club.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group relative bg-white text-black border-3 border-black rounded-3xl p-6 shadow-hard hover:shadow-hard-xl hover:-translate-y-1 transition-all"
                            >
                                {/* Category Badge */}
                                <div className="absolute -top-4 -right-4 rotate-3">
                                    <span className={`px-3 py-1 font-black text-xs uppercase border-2 border-black shadow-sm ${CATEGORIES.find(c => c.id === club.category)?.color || 'bg-gray-200'}`}>
                                        {club.category}
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <h2 className="text-3xl font-black uppercase leading-none mb-3 group-hover:text-pop-purple transition-colors">
                                        {club.name}
                                    </h2>
                                    <p className="font-bold text-gray-500 text-sm leading-relaxed">
                                        {club.description || 'No description available.'}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-auto pt-6 border-t-2 border-dashed border-gray-200">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-black z-[${4 - i}]`}>
                                                U{i}
                                            </div>
                                        ))}
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-[10px] font-black z-0">
                                            +42
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => toggleJoin(club.id)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-black text-sm border-2 border-black transition-all ${joinedClubs.includes(club.id) ? 'bg-green-400 text-black' : 'bg-pop-purple text-white hover:bg-pop-pink'}`}
                                    >
                                        {joinedClubs.includes(club.id) ? (
                                            'Joined!'
                                        ) : (
                                            <>Join <ArrowRight className="w-4 h-4" /></>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredClubs.length === 0 && (
                    <div className="text-center py-20 opacity-50">
                        <Filter className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-2xl font-black uppercase">No clubs found</h3>
                        <p className="font-bold">Try adjusting your filters.</p>
                    </div>
                )}

            </div>
        </main>
    );
}
