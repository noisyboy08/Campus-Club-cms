import { ArrowLeft, Clock, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TEAM_MEMBERS = [
    { name: "Sarah (President)", avatar: "bg-pop-pink", availability: [1, 1, 0, 1, 1, 0, 0] },
    { name: "Mike (VP)", avatar: "bg-pop-blue", availability: [0, 1, 1, 1, 0, 1, 0] },
    { name: "Jessica (Treasury)", avatar: "bg-pop-yellow", availability: [1, 0, 1, 1, 0, 0, 0] },
    { name: "David (Events)", avatar: "bg-pop-purple", availability: [1, 1, 1, 1, 1, 0, 0] },
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const TIME_SLOTS = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

export function SyncUp() {
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-pop-bg p-8 pt-24 text-white font-sans overflow-x-hidden">
            <header className="max-w-6xl mx-auto mb-12 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase text-rose-400 tracking-tighter drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">Sync Up</h1>
                        <p className="text-black font-bold opacity-60 uppercase tracking-widest">Meeting Scheduler AI</p>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Panel: Participants */}
                <div className="lg:col-span-4 bg-white text-black p-6 rounded-[2rem] border-3 border-black shadow-hard">
                    <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
                        <CalendarDays className="w-6 h-6" /> Participants
                    </h2>
                    <div className="space-y-4">
                        {TEAM_MEMBERS.map((member, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full border-2 border-black ${member.avatar} flex items-center justify-center font-black text-white`}>
                                        {member.name[0]}
                                    </div>
                                    <span className="font-bold">{member.name}</span>
                                </div>
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                        ))}
                        <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl font-bold text-gray-400 hover:border-black hover:text-black transition-colors">
                            + Add Member
                        </button>
                    </div>
                </div>

                {/* Right Panel: Heatmap */}
                <div className="lg:col-span-8 bg-black p-8 rounded-[2rem] border-4 border-rose-500 shadow-hard relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                        <Clock className="w-32 h-32 text-rose-500" />
                    </div>

                    <h2 className="text-2xl font-black text-rose-400 uppercase mb-8 relative z-10">Optimal Time Slots</h2>

                    <div className="relative z-10 overflow-x-auto">
                        <div className="grid grid-cols-8 gap-2 min-w-[600px]">
                            {/* Header Row */}
                            <div className="col-span-1"></div>
                            {DAYS.map(day => (
                                <div key={day} className="text-center font-bold text-gray-500 text-sm uppercase">{day}</div>
                            ))}

                            {/* Time Rows */}
                            {TIME_SLOTS.map((time, timeIndex) => (
                                <>
                                    <div className="text-right pr-4 font-mono text-gray-400 text-xs py-2">{time}</div>
                                    {DAYS.map((_, dayIndex) => {
                                        // Random "heat" for demo purposes
                                        const availability = Math.random();
                                        const isBest = availability > 0.8;

                                        return (
                                            <button
                                                key={`${dayIndex}-${timeIndex}`}
                                                onClick={() => setSelectedSlot(`${DAYS[dayIndex]} @ ${time}`)}
                                                className={`
                                                    rounded-lg h-10 transition-all border border-black/20 relative group
                                                    ${isBest ? 'bg-green-500 hover:bg-green-400' : availability > 0.4 ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-gray-800 hover:bg-gray-700'}
                                                    ${selectedSlot === `${DAYS[dayIndex]} @ ${time}` ? 'ring-2 ring-white scale-110 z-20' : ''}
                                                `}
                                            >
                                                {isBest && (
                                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-black"></div>
                                                )}
                                            </button>
                                        );
                                    })}
                                </>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 flex justify-between items-center border-t border-rose-500/30 pt-6">
                        <div className="flex gap-4 text-sm font-bold">
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500 rounded-sm"></div> Best</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-500 rounded-sm"></div> Okay</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 bg-gray-800 rounded-sm"></div> Bad</div>
                        </div>

                        <button
                            disabled={!selectedSlot}
                            className={`
                                px-8 py-3 rounded-xl font-black uppercase text-black transition-all border-2 border-transparent
                                ${selectedSlot ? 'bg-rose-500 hover:bg-white cursor-pointer' : 'bg-gray-700 cursor-not-allowed opacity-50'}
                            `}
                        >
                            {selectedSlot ? `Confirm: ${selectedSlot}` : 'Select a Slot'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
