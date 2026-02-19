import ID from '../components/ID';
import { NotebookGrid, BentoItem } from '../components/NotebookGrid';
import { EventTicket } from '../components/EventTicket';
import { Trophy, Star, Zap, Award, Edit3, LogOut } from 'lucide-react';
import { Squiggle } from '../components/Scribbles';

export function Profile() {
    // Mock user stats
    const stats = {
        xp: 12500,
        level: 5,
        nextLevelXp: 15000,
        attended: 14,
        hosted: 2
    };

    const badges = [
        { id: 1, name: 'Early Adopter', icon: <Star className="w-6 h-6 text-white" />, color: 'bg-pop-yellow' },
        { id: 2, name: 'Event Host', icon: <Zap className="w-6 h-6 text-white" />, color: 'bg-pop-pink' },
        { id: 3, name: 'Hackathon Winner', icon: <Trophy className="w-6 h-6 text-white" />, color: 'bg-pop-purple' },
        { id: 4, name: 'Top Contributor', icon: <Award className="w-6 h-6 text-white" />, color: 'bg-black' },
    ];

    const progress = (stats.xp / stats.nextLevelXp) * 100;

    return (
        <main className="min-h-screen pb-20 pt-24 px-4 bg-pop-bg">
            <div className="mx-auto max-w-7xl">

                <h1 className="text-5xl font-black text-white uppercase mb-12 flex items-center gap-4">
                    Student Profile <Squiggle className="w-32 h-8 text-pop-yellow" />
                </h1>

                <div className="grid lg:grid-cols-12 gap-8">

                    {/* Left Column: ID Card & Actions */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="flex justify-center transform hover:scale-[1.02] transition-transform">
                            <ID className="shadow-hard-xl" />
                        </div>

                        <div className="bg-pop-white p-6 rounded-3xl border-3 border-black shadow-hard">
                            <h3 className="text-xl font-black uppercase mb-4">Account Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full neo-btn bg-white text-black text-sm flex items-center justify-center gap-2">
                                    <Edit3 className="w-4 h-4" /> Edit Profile
                                </button>
                                <button className="w-full neo-btn bg-black text-white text-sm flex items-center justify-center gap-2">
                                    <LogOut className="w-4 h-4" /> Sign Out
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Stats & Content */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* XP Bar */}
                        <div className="bg-pop-black rounded-[2rem] p-8 border-3 border-white/20 relative overflow-hidden">
                            <div className="relative z-10 flex justify-between items-end mb-4 text-white">
                                <div>
                                    <span className="text-sm font-bold uppercase text-pop-yellow">Current Level</span>
                                    <h2 className="text-6xl font-black leading-none">{stats.level}</h2>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-bold text-gray-400">{stats.xp.toLocaleString()} / {stats.nextLevelXp.toLocaleString()} XP</span>
                                </div>
                            </div>

                            {/* Progress Track */}
                            <div className="w-full h-8 bg-gray-800 rounded-full border-2 border-gray-600 overflow-hidden relative">
                                {/* Progress Fill */}
                                <div
                                    className="h-full bg-gradient-to-r from-pop-yellow to-pop-pink"
                                    style={{ width: `${progress}%` }}
                                />
                                {/* striped pattern overlay */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNLTEgMUwyIDQtMSA3IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-20" />
                            </div>
                        </div>

                        {/* Badges Grid */}
                        <NotebookGrid title="Earned Badges">
                            {badges.map((badge) => (
                                <BentoItem key={badge.id} className={`${badge.color} border-3 border-black shadow-hard flex flex-col items-center justify-center text-center p-6 bg-opacity-100`}>
                                    <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border-2 border-black/10">
                                        {badge.icon}
                                    </div>
                                    <h3 className={`font-black uppercase text-sm ${badge.color === 'bg-pop-yellow' ? 'text-black' : 'text-white'}`}>
                                        {badge.name}
                                    </h3>
                                </BentoItem>
                            ))}
                        </NotebookGrid>

                        {/* Ticket Wallet */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-white uppercase flex items-center gap-3">
                                <span className="text-pop-pink">My Wallet</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <EventTicket
                                    eventName="Hackathon 2026"
                                    clubName="Coding Club"
                                    date="March 15, 2026"
                                    location="Main Auditorium"
                                />
                                <div className="opacity-50 grayscale hover:grayscale-0 transition-all">
                                    <EventTicket
                                        eventName="Design Summit"
                                        clubName="Art & Design"
                                        date="Feb 20, 2026"
                                        location="Seminar Hall"
                                    />
                                    <p className="text-center font-bold text-white mt-2 uppercase text-xs">Past Event</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
