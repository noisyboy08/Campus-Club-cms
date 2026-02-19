import { ArrowLeft, Calendar, MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export function VenueBooker() {
    const venues = [
        { id: 1, name: "Grand Auditorium", capacity: 500, type: "Hall", color: "bg-purple-100 border-purple-300" },
        { id: 2, name: "Innovation Lab 101", capacity: 40, type: "Lab", color: "bg-blue-100 border-blue-300" },
        { id: 3, name: "Conference Room B", capacity: 15, type: "Meeting", color: "bg-yellow-100 border-yellow-300" },
        { id: 4, name: "Open Amphitheater", capacity: 200, type: "Outdoor", color: "bg-green-100 border-green-300" },
    ];

    const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-pop-bg p-8 pt-24 text-white font-sans overflow-x-hidden">
            <header className="max-w-6xl mx-auto mb-12 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase text-purple-400 tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Venue Booker</h1>
                        <p className="text-black font-bold opacity-60 uppercase tracking-widest">Campus Space Management</p>
                    </div>
                </div>

                <div className="flex bg-white rounded-xl border-2 border-black p-1 shadow-hard-sm">
                    <button className="px-4 py-2 bg-black text-white rounded-lg font-bold uppercase text-xs">Day View</button>
                    <button className="px-4 py-2 text-black font-bold uppercase text-xs hover:bg-gray-100 rounded-lg">Week View</button>
                </div>
            </header>

            <div className="max-w-6xl mx-auto bg-white text-black rounded-[2rem] border-4 border-black shadow-hard overflow-hidden flex flex-col md:flex-row">

                {/* Sidebar: Venues */}
                <div className="w-full md:w-80 border-b md:border-b-0 md:border-r-4 border-black bg-gray-50 flex flex-col">
                    <div className="p-6 border-b-2 border-black/10">
                        <div className="relative w-full">
                            <Search className="absolute top-3 left-3 w-4 h-4 text-gray-400" />
                            <input type="text" placeholder="Find a room..." className="w-full pl-10 pr-4 py-2 rounded-xl border-2 border-black font-bold text-sm focus:outline-none focus:ring-2 focus:ring-purple-400" />
                        </div>
                    </div>

                    <div className="overflow-y-auto flex-1 p-4 space-y-3">
                        {venues.map(venue => (
                            <div key={venue.id} className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:translate-x-1 ${venue.color} group`}>
                                <h3 className="font-black uppercase text-sm mb-1">{venue.name}</h3>
                                <div className="flex gap-2 text-[10px] font-bold text-gray-500 uppercase">
                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {venue.type}</span>
                                    <span>•</span>
                                    <span>Cap: {venue.capacity}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main: Timeline */}
                <div className="flex-1 flex flex-col overflow-hidden relative">
                    {/* Header Dates */}
                    <div className="h-16 border-b-2 border-black/10 flex items-center px-6 bg-white sticky top-0 z-20">
                        <div className="flex items-center gap-2 font-black uppercase text-lg">
                            <Calendar className="w-5 h-5 text-purple-500" />
                            <span>Today, Feb 24</span>
                        </div>
                    </div>

                    {/* Timeline Grid */}
                    <div className="flex-1 overflow-x-auto overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]">
                        <div className="min-w-[800px] p-6">

                            {/* Time Header */}
                            <div className="flex ml-32 mb-4">
                                {timeSlots.map(time => (
                                    <div key={time} className="flex-1 text-center font-bold text-gray-400 text-xs uppercase">{time}</div>
                                ))}
                            </div>

                            <div className="space-y-6">
                                {venues.map(venue => (
                                    <div key={venue.id} className="flex items-center relative h-16 group">
                                        {/* Row Label */}
                                        <div className="w-32 flex-shrink-0 font-bold text-xs uppercase pr-4 text-right text-gray-500 group-hover:text-black transition-colors">
                                            {venue.name}
                                        </div>

                                        {/* Slots Track */}
                                        <div className="flex-1 h-12 bg-gray-100 rounded-lg border-2 border-gray-200 relative flex overflow-hidden">
                                            {timeSlots.map((time, idx) => (
                                                <div
                                                    key={`${venue.id}-${time}`}
                                                    className={`
                                                        flex-1 border-r border-gray-200/50 hover:bg-purple-100 cursor-pointer transition-colors relative
                                                        ${selectedSlot === `${venue.id}-${time}` ? 'bg-purple-500 !border-purple-600' : ''}
                                                    `}
                                                    onClick={() => setSelectedSlot(`${venue.id}-${time}`)}
                                                >
                                                    {/* Random "Booked" Simulation */}
                                                    {(venue.id + idx) % 5 === 0 && (
                                                        <div className="absolute inset-1 bg-gray-300 rounded md:flex items-center justify-center hidden pointer-events-none">
                                                            <span className="text-[10px] font-black text-gray-500 uppercase rotate-[-5deg]">Booked</span>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Action */}
                    <div className="p-4 border-t-2 border-black/10 bg-gray-50 flex justify-between items-center">
                        <div className="text-sm font-bold text-gray-500">
                            {selectedSlot ? '1 Slot Selected' : 'Select a time slot to book'}
                        </div>
                        <button
                            disabled={!selectedSlot}
                            className={`px-8 py-3 rounded-xl font-black uppercase text-white shadow-hard-sm transition-all ${selectedSlot ? 'bg-purple-500 hover:bg-purple-400 hover:-translate-y-1' : 'bg-gray-400 cursor-not-allowed'}`}
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
