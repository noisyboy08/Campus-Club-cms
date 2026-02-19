import { useState } from 'react';
import { MOCK_EVENTS, MOCK_CLUBS } from '../lib/mockData';
import { MapPin, Clock, Ticket, CheckCircle, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

export function Events() {
    const [registering, setRegistering] = useState<string | null>(null);
    const [registered, setRegistered] = useState<string[]>(() => {
        const saved = localStorage.getItem('registeredEvents');
        return saved ? JSON.parse(saved) : [];
    });
    const [filter, setFilter] = useState('All');

    const handleRegister = (id: string) => {
        setRegistering(id);
        setTimeout(() => {
            const newRegistered = [...registered, id];
            setRegistered(newRegistered);
            localStorage.setItem('registeredEvents', JSON.stringify(newRegistered));
            setRegistering(null);
        }, 1500);
    };

    const getClubName = (clubId: string) => {
        return MOCK_CLUBS.find(c => c.id === clubId)?.name || 'Unknown Club';
    };

    const filteredEvents = MOCK_EVENTS.filter(event => {
        if (filter === 'All') return true;
        if (filter === 'My Tickets') return registered.includes(event.id);
        const club = MOCK_CLUBS.find(c => c.id === event.club_id);
        return club?.category === filter;
    });

    return (
        <main className="min-h-screen bg-pop-bg pb-20 pt-24 px-4 overflow-x-hidden text-white">
            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-4 drop-shadow-[4px_4px_0_#000]">
                        Upcoming <span className="text-pop-pink">Events</span>
                    </h1>
                    <p className="text-xl font-bold text-gray-400">
                        Don't miss out. concerts, hackathons, and workshops happening on campus.
                    </p>
                </div>

                {/* Filter Controls */}
                <div className="mb-12 flex justify-center flex-wrap gap-2">
                    {['All', 'Tech', 'Creative', 'Cultural', 'Sports', 'Business', 'My Tickets'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full font-bold border-2 border-black transition-all ${filter === cat ? 'bg-pop-pink text-white shadow-hard-sm' : 'bg-white text-black hover:bg-gray-100'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative border-l-4 border-dashed border-gray-700 ml-4 md:ml-1/2 space-y-12 pl-8 md:pl-0">

                    {filteredEvents.map((event, index) => {
                        const date = new Date(event.event_date);
                        const day = date.getDate();
                        const month = date.toLocaleString('default', { month: 'short' });
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`relative md:flex items-center justify-between ${isLeft ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-2.3rem] md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-pop-yellow border-4 border-black rounded-full z-10 box-content shadow-[0_0_0_4px_#1e1e1e]" />

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] mb-8 md:mb-0 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className={`bg-pop-white text-black p-6 rounded-3xl border-3 border-black shadow-hard hover:shadow-hard-xl transition-all relative overflow-hidden group`}>

                                        {/* Date Badge */}
                                        <div className={`absolute top-4 ${isLeft ? 'left-4' : 'right-4'} bg-black text-white px-3 py-2 rounded-xl text-center border-2 border-white/20`}>
                                            <span className="block text-xs font-black uppercase text-pop-yellow">{month}</span>
                                            <span className="block text-2xl font-black leading-none">{day}</span>
                                        </div>

                                        <div className="mb-4 pr-16">
                                            <span className="inline-block px-3 py-1 bg-pop-purple text-white text-[10px] font-black uppercase rounded-full mb-2">
                                                {getClubName(event.club_id)}
                                            </span>
                                            <h3 className="text-2xl font-black uppercase leading-tight mb-2">
                                                {event.title}
                                            </h3>
                                            <p className="text-sm font-bold text-gray-500 line-clamp-2">
                                                {event.description}
                                            </p>
                                        </div>

                                        <div className={`flex flex-wrap gap-4 text-xs font-bold uppercase text-gray-600 mb-6 ${isLeft ? 'md:justify-end' : ''}`}>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {event.location || 'TBA'}
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => !registered.includes(event.id) && handleRegister(event.id)}
                                            disabled={registering === event.id || registered.includes(event.id)}
                                            className={`w-full py-3 rounded-xl font-black text-sm uppercase flex items-center justify-center gap-2 border-2 border-black transition-all ${registered.includes(event.id)
                                                ? 'bg-green-400 text-black cursor-default'
                                                : registering === event.id
                                                    ? 'bg-gray-200 text-gray-500 cursor-wait'
                                                    : 'bg-pop-yellow text-black hover:bg-pop-pink hover:-translate-y-1 shadow-hard-sm hover:shadow-hard'
                                                }`}
                                        >
                                            {registered.includes(event.id) ? (
                                                <>
                                                    <CheckCircle className="w-5 h-5" /> Ticket Confirmed
                                                </>
                                            ) : registering === event.id ? (
                                                <>
                                                    <Loader className="w-5 h-5 animate-spin" /> Booking...
                                                </>
                                            ) : (
                                                <>
                                                    <Ticket className="w-5 h-5" /> Get Ticket
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="hidden md:block w-[45%]" /> {/* Spacer */}
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-20 text-center">
                    <button className="neo-btn bg-white text-black">
                        Load More Events
                    </button>
                </div>

            </div>
        </main>
    );
}
