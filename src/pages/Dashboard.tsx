import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ID from "../components/ID";
import { VenueMap } from "../components/VenueMap";
import { Leaderboard } from "../components/Leaderboard";
import { Sparkles, MapPin, Target, PieChart, X, Zap, Calendar, ArrowUpRight, Bell, Search, Menu, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MOCK_EVENTS, MOCK_PROFILE } from "../lib/mockData";

export function Dashboard() {
    const [showDailyBonus, setShowDailyBonus] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [showNotifications, setShowNotifications] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [focusMode, setFocusMode] = useState(false);
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

        const timer = setInterval(() => setCurrentTime(new Date()), 1000);

        // Keyboard shortcut for search
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setShowSearch(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            clearInterval(timer);
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

            {/* --- BENTO GRID LAYOUT --- */}
            <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-6 max-w-[1600px] mx-auto text-left">

                {/* 1. ID CARD WIDGET (3 cols) */}
                <div className="md:col-span-6 lg:col-span-3 row-span-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="card rounded-[2rem] border-4 p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[450px]"
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-pop-stripes opacity-20" />

                        <div className="transform scale-[0.85] origin-center hover:scale-[0.9] transition-transform duration-500 ease-out">
                            <ID />
                        </div>

                        <div className="mt-4 mb-2 text-center z-10 w-full px-4">
                            <Link to="/apps/org" className="inline-block px-4 py-2 bg-black dark:bg-[#0b1220] text-white rounded-full font-bold text-xs uppercase hover:bg-pop-purple transition-colors">
                                View Full Profile
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* 3. STATS & LEADERBOARD (3 cols) - Moved UP for tablet flow */}
                <div className="md:col-span-6 lg:col-span-3 row-span-2 flex flex-col gap-6">
                    {/* XP Card */}
                    <motion.div
                        initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                        className="rounded-[2rem] border-4 p-6 relative overflow-hidden flex-1 min-h-[180px] bg-[linear-gradient(180deg,#6b6bff,rgba(107,107,255,0.85))] text-white"
                    >
                        <div className="absolute -right-4 -top-4 text-white/10">
                            <Zap className="w-32 h-32 rotate-12" />
                        </div>
                        <h3 className="text-sm font-black uppercase tracking-widest opacity-80">Current XP</h3>
                        <p className="text-5xl font-black mt-2 mb-4">12,500</p>
                        <div className="w-full h-3 bg-black/30 rounded-full overflow-hidden border-2 border-black/20">
                            <div className="h-full bg-pop-yellow w-[70%]" />
                        </div>
                        <p className="text-xs font-bold mt-2 text-right">Lvl 5 • 2500 XP to next</p>
                    </motion.div>

                    {/* Mini Leaderboard */}
                    <div className="flex-1 card rounded-[2rem] overflow-hidden flex flex-col min-h-[300px]">
                        <div className="bg-pop-yellow p-4 border-b-4 border-black flex justify-between items-center">
                            <h3 className="font-black uppercase text-lg">Top 3 Ranking</h3>
                            <Target className="w-5 h-5" />
                        </div>
                        <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
                            <Leaderboard />
                        </div>
                    </div>
                </div>

                {/* 2. MAIN MAP WIDGET (6 cols) */}
                <div className="md:col-span-12 lg:col-span-6 row-span-1 h-[450px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
                        className="w-full h-full rounded-[2rem] border-4 overflow-hidden relative group card"
                    >
                        <div className="absolute top-4 left-4 z-10 flex gap-2">
                            <span className="px-3 py-1 rounded-full text-xs font-black uppercase border-2" style={{ background: 'var(--surface)', borderColor: 'var(--card-border)', color: 'var(--text)' }}>
                                Live Map
                            </span>
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-black uppercase border-2 border-red-600 animate-pulse">
                                4 Active Venues
                            </span>
                        </div>
                        <VenueMap />

                        {/* Overlay Controls */}
                        <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                            <Link to="/apps/booking" className="bg-white hover:bg-pop-yellow text-black w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center shadow-hard-sm transition-all group/btn">
                                <span className="absolute right-12 bg-black text-white px-2 py-1 rounded text-[10px] font-bold uppercase opacity-0 group-hover/btn:opacity-100 transition-opacity">
                                    Book Now
                                </span>
                                <ArrowUpRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* 4. HORIZONTAL EVENTS FEED (9 cols) */}
                <div className="md:col-span-8 lg:col-span-9">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-black uppercase flex items-center gap-2">
                            <Calendar className="w-6 h-6" /> Upcoming Events
                        </h2>
                        <Link to="/apps/calendar" className="text-sm font-bold underline hover:text-pop-purple">View All</Link>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x">
                        {MOCK_EVENTS.map((event, i) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.08) }}
                                className={`min-w-[320px] md:min-w-[360px] snap-center relative overflow-hidden group feature-panel ${event.bg_color === 'bg-pop-pink' ? 'pink' : event.bg_color === 'bg-pop-yellow' ? 'yellow' : event.bg_color === 'bg-pop-blue' ? 'blue' : 'white'}`}
                            >
                                <div className="feature-icon">
                                    <MapPin className="w-5 h-5" />
                                </div>

                                <div style={{ position: 'absolute', top: 18, right: 18 }}>
                                    <div className="px-3 py-1 rounded-md text-[12px] font-bold uppercase" style={{ background: 'rgba(0,0,0,0.85)', color: '#fff' }}>
                                        {new Date(event.event_date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    </div>
                                </div>

                                <div className="feature-bottom">
                                    <h3 className="feature-title">{event.title}</h3>
                                    <p className="feature-sub">{event.description}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Recruit Card */}
                        <div className="min-w-[320px] snap-center feature-panel white flex flex-col items-start justify-end p-6 cursor-pointer">
                            <div className="feature-icon"><Sparkles className="w-5 h-5" /></div>
                            <h3 className="feature-title">Explore More</h3>
                            <p className="feature-sub">Discover additional features and tools.</p>
                        </div>
                    </div>
                </div>

                {/* 5. QUICK LAUNCH DOCK (3 cols) */}
                <div className={`md:col-span-4 lg:col-span-3 flex flex-col transition-all duration-500 ${focusMode ? 'opacity-50 pointer-events-none blur-sm grayscale' : 'opacity-100'}`}>
                    <h2 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                        <Menu className="w-5 h-5" /> Quick Apps
                    </h2>
                    <div className="grid grid-cols-2 gap-4 flex-1">
                        <Link to="/apps" className="bg-black hover:bg-gray-800 text-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-hard-sm">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <Target className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-xs uppercase">App Store</span>
                        </Link>
                        <Link to="/polls" className="bg-pop-pink hover:bg-pink-400 text-black rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-hard-sm">
                            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                <PieChart className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-xs uppercase">Vote</span>
                        </Link>
                        <Link to="/recruitment" className="bg-pop-cyan hover:bg-cyan-300 text-black rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-hard-sm">
                            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-xs uppercase">Jobs</span>
                        </Link>
                        <Link to="/apps/docs" className="bg-white hover:bg-gray-50 text-black rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 border-2 border-black shadow-hard-sm">
                            <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                                <Search className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-xs uppercase">Files</span>
                        </Link>
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
