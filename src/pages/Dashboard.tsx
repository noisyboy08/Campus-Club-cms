import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ID from "../components/ID";
import { VenueMap } from "../components/VenueMap";
import { Leaderboard } from "../components/Leaderboard";
import { Sparkles, MapPin, Target, PieChart, X, Zap, Calendar, ArrowUpRight, Bell, Search, Menu, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_EVENTS } from "../lib/mockData";

export function Dashboard() {
    const [showDailyBonus, setShowDailyBonus] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [focusMode] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, title: 'Venue Booking Confirmed', message: 'Your request for "Main Auditorium" has been approved.', time: '2m ago', type: 'success' },
        { id: 2, title: 'New Event: Bot Wars', message: 'Robotics Club just published a new event.', time: '1h ago', type: 'info' },
        { id: 3, title: 'XP Boost Active', message: 'Double XP is active for the next 24 hours!', time: '5h ago', type: 'warn' }
    ]);

    useEffect(() => {
        const lastLogin = localStorage.getItem('lastLoginDate');
        const today = new Date().toDateString();

        if (lastLogin !== today) {
            setShowDailyBonus(true);
            localStorage.setItem('lastLoginDate', today);
        }



        // Keyboard shortcut for search
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setShowSearch(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {

            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <main className="min-h-screen bg-pop-bg dark:bg-[#071021] text-black dark:text-[#e6eef2] p-4 md:p-6 pb-24 font-sans">

            {/* --- TOP BAR (HUD) --- */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b-4 border-black pb-4 relative z-50">
                <div>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.8]">
                        Morning,
                    </h1>
                    <div className="relative">
                        <button
                            onClick={() => setShowNotifications(!showNotifications)}
                            className={`w-12 h-12 border-2 border-black rounded-full flex items-center justify-center relative hover:scale-105 transition-transform shadow-hard-sm ${showNotifications ? 'bg-black text-white' : 'bg-pop-yellow text-black'}`}
                        >
                            <Bell className="w-5 h-5" />
                            {notifications.length > 0 && (
                                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border border-black animate-bounce" />
                            )}
                        </button>

                        {/* Notification Dropdown */}
                        <AnimatePresence>
                            {showNotifications && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute top-14 right-0 w-80 bg-white border-4 border-black shadow-hard-xl rounded-2xl overflow-hidden z-[100]"
                                >
                                    <div className="bg-gray-100 p-3 border-b-2 border-black flex justify-between items-center">
                                        <span className="font-black uppercase text-xs">Notifications</span>
                                        <button onClick={() => setNotifications([])} className="text-[10px] font-bold underline hover:text-red-500">Clear All</button>
                                    </div>
                                    <div className="max-h-64 overflow-y-auto">
                                        {notifications.length === 0 ? (
                                            <div className="p-8 text-center opacity-50 font-bold text-sm">No new alerts</div>
                                        ) : (
                                            notifications.map(notif => (
                                                <div key={notif.id} className="p-4 border-b border-gray-100 hover:bg-pop-stripes hover:bg-opacity-5 transition-colors cursor-pointer group">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-bold text-sm leading-tight group-hover:text-pop-purple">{notif.title}</h4>
                                                        <span className="text-[10px] text-gray-400 font-mono">{notif.time}</span>
                                                    </div>
                                                    <p className="text-xs text-gray-600 leading-snug">{notif.message}</p>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                    <div className="p-2 bg-gray-50 text-center border-t-2 border-black">
                                        <Link to="#" className="text-[10px] font-black uppercase tracking-widest hover:text-pop-purple">View History</Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </header>

            {/* --- THREE COLUMN LAYOUT --- */}
            <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 max-w-[1600px] mx-auto items-stretch text-left">

                {/* COLUMN 1: Identity & Launchpad */}
                <div className="w-full xl:w-[320px] flex flex-col gap-6 shrink-0">
                    {/* ID CARD */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                        className="card rounded-[2.5rem] border-4 p-4 flex flex-col items-center justify-center relative overflow-hidden group shadow-[8px_8px_0_#000]"
                    >
                        <div className="absolute top-0 left-0 w-full h-8 bg-pop-stripes opacity-20" />
                        <div className="transform origin-center hover:scale-[1.02] transition-transform duration-500 ease-out w-full flex justify-center mt-2 z-10">
                            <ID />
                        </div>
                        <div className="mt-6 mb-2 text-center z-10 w-full px-4">
                            <Link to="/apps/org" className="inline-block w-full py-3 bg-black dark:bg-[#0b1220] text-white rounded-full font-black text-sm uppercase hover:bg-pop-purple transition-colors border-2 border-transparent hover:border-black shadow-hard-sm">
                                View Full Profile
                            </Link>
                        </div>
                    </motion.div>

                    {/* QUICK APPS */}
                    <div className={`flex flex-col transition-all duration-500 mt-2 ${focusMode ? 'opacity-50 blur-sm grayscale' : ''}`}>
                        <h2 className="text-xl font-black uppercase mb-4 flex items-center gap-2 tracking-tight">
                            <Menu className="w-5 h-5" /> Quick Apps
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Link to="/apps" className="bg-black hover:bg-gray-800 text-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1 shadow-hard-sm">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <Target className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-xs uppercase">App Store</span>
                            </Link>
                            <Link to="/polls" className="bg-pop-pink hover:bg-pink-400 text-black rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1 border-2 border-black shadow-[4px_4px_0_#000]">
                                <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                    <PieChart className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-xs uppercase">Vote</span>
                            </Link>
                            <Link to="/recruitment" className="bg-pop-cyan hover:bg-cyan-300 text-black rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1 border-2 border-black shadow-[4px_4px_0_#000]">
                                <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-xs uppercase">Jobs</span>
                            </Link>
                            <Link to="/apps/docs" className="bg-white hover:bg-gray-50 text-black rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1 border-2 border-black shadow-[4px_4px_0_#000]">
                                <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                    <Search className="w-5 h-5" />
                                </div>
                                <span className="font-bold text-xs uppercase">Files</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* COLUMN 2: Main Content */}
                <div className="w-full xl:flex-1 flex flex-col gap-6 min-w-0">
                    {/* MAP */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="w-full h-[400px] md:h-[450px] xl:h-[500px] rounded-[2.5rem] border-4 border-black overflow-hidden relative group card shadow-[8px_8px_0_#000]"
                    >
                        <div className="absolute top-4 left-4 z-10 flex gap-2">
                            <span className="px-3 py-1 bg-white text-black rounded-full text-[10px] md:text-xs font-black uppercase border-2 shadow-hard-sm border-black">
                                Live Map
                            </span>
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-black uppercase border-2 border-black shadow-hard-sm animate-pulse whitespace-nowrap">
                                4 Active Venues
                            </span>
                        </div>
                        <VenueMap />

                        {/* Overlay Controls */}
                        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                            <Link to="/apps/booking" className="bg-white hover:bg-pop-yellow text-black w-10 h-10 md:w-12 md:h-12 rounded-xl border-2 border-black flex items-center justify-center shadow-hard-sm transition-all group/btn">
                                <span className="absolute right-14 bg-black text-white px-2 py-1 rounded text-[10px] font-bold uppercase opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    Book Now
                                </span>
                                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* EVENTS FEED */}
                    <div className="flex flex-col mt-4">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl md:text-2xl font-black uppercase flex items-center gap-2 tracking-tight">
                                <Calendar className="w-5 h-5 md:w-6 md:h-6" /> Upcoming Events
                            </h2>
                            <Link to="/apps/calendar" className="text-xs md:text-sm font-bold underline hover:text-pop-purple">View All</Link>
                        </div>

                        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x px-1">
                            {MOCK_EVENTS.map((event, i) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.08) }}
                                    className={`min-w-[280px] md:min-w-[320px] snap-center bg-white border-4 border-black rounded-[2rem] p-5 shadow-[4px_4px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between min-h-[160px]`}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 border-black shadow-[2px_2px_0_#000] ${event.bg_color === 'bg-pop-pink' ? 'bg-pop-pink' : event.bg_color === 'bg-pop-yellow' ? 'bg-pop-yellow' : 'bg-pop-blue'}`}>
                                            <MapPin className="w-5 h-5 text-black" />
                                        </div>
                                        <div className="px-3 py-1 bg-black text-white rounded-md text-[10px] font-black uppercase tracking-widest border-2 border-black shadow-[2px_2px_0_#000]">
                                            {new Date(event.event_date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-lg leading-tight uppercase mb-1 line-clamp-2">{event.title}</h3>
                                        <p className="text-sm font-bold text-gray-500 line-clamp-1 dark:text-gray-400">{event.description}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Recruit Card */}
                            <div className="min-w-[280px] snap-center bg-gray-50 dark:bg-gray-900 border-4 border-black rounded-[2rem] p-5 shadow-[4px_4px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between border-dashed min-h-[160px]">
                                <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border-2 border-black shadow-[2px_2px_0_#000] flex items-center justify-center mb-4 text-black dark:text-white">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg uppercase mb-1 opacity-60">Explore More</h3>
                                    <p className="text-sm font-bold opacity-50">Discover additional tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COLUMN 3: Social & Progression */}
                <div className="w-full xl:w-[320px] flex flex-col gap-6 shrink-0 h-[800px] xl:h-auto pb-8 xl:pb-0">
                    {/* XP Card */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                        className="rounded-[2.5rem] border-4 border-black p-6 relative overflow-hidden bg-pop-purple text-white shadow-[8px_8px_0_#000] min-h-[200px] flex flex-col justify-center shrink-0"
                    >
                        <div className="absolute -right-4 -top-4 text-white/10 pointer-events-none">
                            <Zap className="w-32 h-32 rotate-12" />
                        </div>
                        <h3 className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">Current XP</h3>
                        <div className="flex items-baseline gap-2 mb-4">
                            <p className="text-5xl md:text-6xl xl:text-5xl font-black">12,500</p>
                            <span className="text-sm font-bold text-pop-yellow">XP</span>
                        </div>
                        <div className="w-full h-4 bg-black/40 rounded-full overflow-hidden border-2 border-black/50 shadow-inner">
                            <div className="h-full bg-pop-yellow w-[70%] border-r-2 border-black" />
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <p className="text-[10px] font-black uppercase tracking-widest">Level 5</p>
                            <p className="text-[10px] font-bold opacity-80">2500 XP to next</p>
                        </div>
                    </motion.div>

                    {/* Mini Leaderboard */}
                    <div className="flex-1 rounded-[2.5rem] border-4 border-black shadow-[8px_8px_0_#000] overflow-hidden flex flex-col min-h-[400px]">
                        <div className="bg-pop-yellow p-5 border-b-4 border-black flex justify-between items-center z-10 relative">
                            <h3 className="font-black uppercase text-xl tracking-tight text-black">Top 3 Ranking</h3>
                            <Target className="w-6 h-6 text-black" />
                        </div>
                        <div className="p-4 overflow-y-auto custom-scrollbar flex-1 bg-white relative">
                            <Leaderboard />
                        </div>
                    </div>
                </div>

            </div>

            {/* Daily Bonus Modal */}
            <AnimatePresence>
                {showDailyBonus && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0.8, rotate: 10 }}
                            className="bg-white w-full max-w-md p-8 rounded-[2rem] border-4 border-black shadow-hard-xl text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-4 bg-pop-stripes opacity-20" />
                            <button
                                onClick={() => setShowDailyBonus(false)}
                                className="absolute top-4 right-4 p-2 bg-black text-white rounded-full hover:scale-110 transition-transform"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-24 h-24 bg-pop-yellow rounded-full mx-auto mb-6 border-4 border-black flex items-center justify-center shadow-hard"
                            >
                                <span className="text-4xl">🎁</span>
                            </motion.div>
                            <h2 className="text-3xl font-black uppercase mb-2">Daily Streak!</h2>
                            <p className="font-bold text-gray-500 mb-6">You're on fire! Keep logging in to unlock exclusive badges.</p>
                            <div className="flex justify-center gap-2 mb-8">
                                {[1, 2, 3, 4, 5].map(day => (
                                    <div key={day} className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-black text-xs ${day <= 3 ? 'bg-green-400 text-black' : 'bg-gray-200 text-gray-400'}`}>
                                        {day <= 3 ? '✓' : day}
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => setShowDailyBonus(false)}
                                className="w-full py-4 bg-pop-purple hover:bg-pop-pink text-white font-black uppercase rounded-xl border-3 border-black shadow-hard hover:translate-y-[2px] hover:shadow-none transition-all"
                            >
                                Claim +50 XP
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Command Modal */}
            <AnimatePresence>
                {showSearch && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-start pt-32 justify-center bg-white/50 backdrop-blur-md p-4"
                    >
                        {/* Overlay to close */}
                        <div className="absolute inset-0" onClick={() => setShowSearch(false)} />

                        <motion.div
                            initial={{ scale: 0.95, y: -20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: -20 }}
                            className="bg-white w-full max-w-2xl rounded-2xl border-4 border-black shadow-hard-2xl overflow-hidden relative z-10 font-sans"
                        >
                            <div className="flex items-center gap-4 p-4 border-b-2 border-gray-100">
                                <Search className="w-6 h-6 text-gray-400" />
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Search apps, students, or events..."
                                    className="flex-1 text-xl font-bold outline-none placeholder:text-gray-300"
                                />
                                <div className="flex gap-2">
                                    <span className="px-2 py-1 bg-gray-100 rounded-md text-[10px] font-bold text-gray-500 border border-gray-200 uppercase">ESC</span>
                                </div>
                            </div>

                            <div className="p-2 bg-gray-50">
                                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-4 py-2">Quick Actions</div>
                                <div className="grid gap-1">
                                    {[
                                        { icon: Target, label: 'Go to App Store', shortcut: 'A' },
                                        { icon: PieChart, label: 'Create New Poll', shortcut: 'P' },
                                        { icon: Calendar, label: 'View Calendar', shortcut: 'C' },
                                    ].map((action, i) => (
                                        <button key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white hover:shadow-sm hover:border border-transparent hover:border-gray-200 transition-all group text-left">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-pop-purple group-hover:text-white transition-colors">
                                                    <action.icon className="w-4 h-4" />
                                                </div>
                                                <span className="font-bold">{action.label}</span>
                                            </div>
                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-[10px] font-bold text-gray-300">Jump to</span>
                                                <ChevronRight className="w-4 h-4" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
