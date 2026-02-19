import { useParams, Link } from 'react-router-dom';
import { MOCK_CLUBS, MOCK_EVENTS } from '../lib/mockData';
import { NotebookGrid, BentoItem } from '../components/NotebookGrid';
import { EventTicket } from '../components/EventTicket';
import { Users, Calendar, Trophy, ArrowLeft, Mail, Globe, Instagram } from 'lucide-react';
import { Star4Point, Squiggle } from '../components/Scribbles';

export function ClubDetails() {
    const { id } = useParams();
    // In a real app, fetch by ID. For now, just grab the first one or specific index if needed.
    // Let's default to the "Robotics & AI" club for this demo if ID doesn't match
    const club = MOCK_CLUBS.find(c => c.id === id) || MOCK_CLUBS[1];
    const events = MOCK_EVENTS.filter(e => e.club_id === club.id);

    // Mock extra data
    const memberCount = 124;
    const established = 2023;

    return (
        <main className="min-h-screen pb-20 overflow-x-hidden bg-pop-bg">

            {/* 1. Club Header (Neo-Pop Banner) */}
            <section className="relative pt-32 pb-12 px-4 bg-pop-yellow border-b-3 border-black">
                <div className="absolute top-20 right-10 animate-spin-slow opacity-20 hidden md:block">
                    <Star4Point className="w-64 h-64 text-black" />
                </div>

                <div className="mx-auto max-w-7xl relative z-10">
                    <Link to="/dashboard" className="inline-flex items-center gap-2 font-bold text-black hover:underline mb-6">
                        <ArrowLeft className="w-5 h-5" /> Back to Dashboard
                    </Link>

                    <div className="flex flex-col md:flex-row items-end justify-between gap-6">
                        <div>
                            <span className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest rounded mb-2">
                                {club.category} Club
                            </span>
                            <h1 className="text-5xl md:text-8xl font-black text-black leading-none uppercase tracking-tighter mb-4">
                                {club.name}
                            </h1>
                            <p className="text-xl font-bold text-gray-800 max-w-2xl">
                                {club.description}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button className="neo-btn bg-pop-pink text-white border-white">
                                <Mail className="w-5 h-5 inline mr-2" /> Contact
                            </button>
                            <button className="w-12 h-12 bg-white rounded-full border-3 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                <Globe className="w-6 h-6" />
                            </button>
                            <button className="w-12 h-12 bg-white rounded-full border-3 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                                <Instagram className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bento Grid Stats */}
            <section className="mx-auto max-w-7xl px-4 mt-12 mb-12">
                <NotebookGrid title="Club Overview">

                    {/* Stat 1: Members */}
                    <BentoItem className="bg-pop-purple text-white border-3 border-black shadow-hard">
                        <Users className="w-8 h-8 mb-2" />
                        <h3 className="text-4xl font-black">{memberCount}</h3>
                        <p className="font-bold opacity-80">Active Members</p>
                    </BentoItem>

                    {/* Stat 2: Est */}
                    <BentoItem className="bg-pop-pink text-white border-3 border-black shadow-hard">
                        <Calendar className="w-8 h-8 mb-2" />
                        <h3 className="text-4xl font-black">{established}</h3>
                        <p className="font-bold opacity-80">Est. Year</p>
                    </BentoItem>

                    {/* Stat 3: Achievement */}
                    <BentoItem className="bg-white text-black border-3 border-black shadow-hard col-span-1 md:col-span-2">
                        <div className="flex items-center gap-4">
                            <div className="bg-pop-yellow p-3 rounded-xl border-2 border-black">
                                <Trophy className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black uppercase">Best Tech Club 2025</h3>
                                <p className="text-gray-600 font-bold text-sm">Awarded by Student Council for innovation in robotics.</p>
                            </div>
                        </div>
                    </BentoItem>

                    {/* Main Content Area */}
                    <BentoItem className="bg-white border-3 border-black shadow-hard col-span-1 md:col-span-2 lg:col-span-4 min-h-[300px]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl font-black uppercase">Recent Projects</h3>
                            <button className="text-sm font-bold underline">View All</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="group relative bg-gray-100 rounded-xl border-2 border-black h-48 overflow-hidden hover:shadow-hard-sm transition-all">
                                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                                        <span className="font-black text-gray-400 text-4xl opacity-20">IMG 0{i}</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full bg-white border-t-2 border-black p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                                        <p className="font-bold text-sm">Project Alpha</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </BentoItem>

                </NotebookGrid>
            </section>

            {/* 3. Events Section */}
            <section className="mx-auto max-w-7xl px-4 mb-20">
                <div className="bg-pop-white rounded-[2.5rem] p-8 border-3 border-black shadow-hard relative overflow-hidden">

                    {/* Decor */}
                    <div className="absolute top-10 right-10 md:right-32 animate-bounce">
                        <Squiggle className="w-24 h-8 text-pop-purple" />
                    </div>

                    <h2 className="text-4xl font-black text-black mb-12 uppercase flex items-center gap-3">
                        <span className="bg-pop-yellow px-2 border-2 border-black shadow-sm transform -rotate-2">
                            Upcoming
                        </span>
                        Events
                    </h2>

                    <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                        {/* If we have mock events, map them. Otherwise show placeholder */}
                        {events.length > 0 ? events.map(event => (
                            <div key={event.id} className="w-full md:w-auto">
                                <EventTicket
                                    eventName={event.title}
                                    clubName={club.name}
                                    date={new Date(event.event_date).toLocaleDateString()}
                                    location="Main Campus"
                                />
                            </div>
                        )) : (
                            // Fallback ticket
                            <>
                                <EventTicket
                                    eventName="Robotics Workshop"
                                    clubName={club.name}
                                    date="March 10, 2026"
                                    location="Lab 101"
                                />
                                <div className="opacity-50 pointer-events-none scale-95 blur-[1px]">
                                    <EventTicket
                                        eventName="Drone Racing"
                                        clubName={club.name}
                                        date="April 05, 2026"
                                        location="Sports Ground"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
