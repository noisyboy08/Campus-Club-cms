import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, MapPin, Ticket, Trophy, BarChart2, Shield, Megaphone, ChevronDown } from 'lucide-react';

const FEATURES = [
    {
        title: "Event\nE-Tags",
        desc: "QR-based entry passes that live in your pocket.",
        variant: 'feature-card--pink',
        icon: Ticket,
        iconBg: 'bg-black/20',
        iconColor: 'text-white',
        titleColor: 'text-white',
        descColor: 'text-white',
    },
    {
        title: "Next-Gen\nE-ID",
        desc: "Verifiable digital student identity.",
        variant: 'feature-card--purple',
        icon: Shield,
        iconBg: 'bg-black/20',
        iconColor: 'text-white',
        titleColor: 'text-white',
        descColor: 'text-white',
    },
    {
        title: "Gamified XP",
        desc: "Climb the leaderboard.",
        variant: 'feature-card--yellow',
        icon: Trophy,
        iconBg: 'bg-black/10',
        iconColor: 'text-black',
        titleColor: 'text-black',
        descColor: 'text-black',
    },
    {
        title: "AI Hiring",
        desc: "Find talent instantly.",
        variant: 'feature-card--white',
        icon: Users,
        iconBg: 'bg-gray-100',
        iconColor: 'text-black',
        titleColor: 'text-black',
        descColor: 'text-gray-600',
    },
];

const STATS = [
    { label: "Active Clubs", value: "120+" },
    { label: "Events Hosted", value: "500+" },
    { label: "Students", value: "12k+" },
    { label: "Uptime", value: "99.9%" },
];

const TICKER_ITEMS = [
    "Events", "Recruitment", "Clubs", "Finance", "Voting",
    "Analytics", "Venue Booking", "Certificates", "Broadcasts", "Leaderboards",
];

const FAQS = [
    { q: "What is CAMS OS?", a: "CAMS OS is an all-in-one campus activities management platform — covering events, clubs, recruitment, finance, and more." },
    { q: "Is it free to use?", a: "Yes, CAMS OS is free for all registered students. Premium club plans are available for advanced analytics." },
    { q: "How do E-Tags work?", a: "Each event generates unique QR-coded E-Tags that are scanned at entry using the Gatekeeper app — zero paper required." },
];

export function Landing() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="bg-pop-bg text-black overflow-x-hidden">

            {/* ══════════════════════════════════
                HERO
            ══════════════════════════════════ */}
            <section className="relative flex flex-col items-center justify-center min-h-[92vh] px-4 pt-28 pb-16 overflow-hidden">

                {/* grid background */}
                <div className="absolute inset-0 bg-graph-paper pointer-events-none opacity-60" />

                {/* blobs */}
                <div className="absolute top-[8%]  left-[10%]  w-72 h-72 bg-yellow-300 rounded-full blur-[80px] opacity-40 animate-blob" />
                <div className="absolute bottom-[15%] right-[8%]  w-80 h-80 bg-pink-400   rounded-full blur-[80px] opacity-30 animate-blob" style={{ animationDelay: '3s' }} />
                <div className="absolute top-[40%]  right-[25%] w-56 h-56 bg-purple-400  rounded-full blur-[80px] opacity-25 animate-blob" style={{ animationDelay: '6s' }} />

                <div className="relative z-10 max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-8 border-2 border-black shadow-hard-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        System Online v2.0
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[14vw] md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-8 select-none"
                    >
                        <span className="block text-black">Campus</span>
                        <span className="block text-stroke-black">Matters</span>
                    </motion.h1>

                    {/* Sub */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="text-lg md:text-2xl font-semibold text-gray-600 max-w-2xl mx-auto mb-12"
                    >
                        One platform for every campus activity — clubs, events, recruitment, finance, and beyond.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="/dashboard"
                            className="neo-btn neo-btn-primary text-lg px-10 py-4"
                        >
                            Launch App <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/clubs"
                            className="neo-btn bg-white text-black text-lg px-10 py-4"
                        >
                            Explore Clubs
                        </Link>
                    </motion.div>
                </div>

                {/* Floating stickers */}
                <motion.div
                    animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="hidden md:flex absolute top-28 right-[8%] bg-yellow-300 text-black w-28 h-28 rounded-full items-center justify-center text-center font-black text-sm uppercase leading-tight border-4 border-black shadow-hard rotate-[-8deg] cursor-default"
                >
                    Start<br />Creating!
                </motion.div>
                <motion.div
                    animate={{ y: [0, 14, 0] }}
                    transition={{ repeat: Infinity, duration: 6, delay: 2 }}
                    className="hidden md:flex absolute bottom-24 left-[6%] bg-pink-500 text-white px-5 py-2 rounded-full font-black uppercase tracking-widest text-xs border-3 border-black shadow-hard rotate-[10deg] cursor-default"
                >
                    Free Forever
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 text-xs font-bold uppercase tracking-widest"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </section>

            {/* ══════════════════════════════════
                MARQUEE TICKER
            ══════════════════════════════════ */}
            <div className="bg-black text-yellow-300 py-4 border-y-4 border-black overflow-hidden select-none">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                        <span key={i} className="flex items-center gap-4 text-2xl font-black uppercase tracking-widest mx-6">
                            <span className="text-pink-500">✦</span> {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* ══════════════════════════════════
                STATS ROW
            ══════════════════════════════════ */}
            <section className="bg-yellow-300 border-b-4 border-black py-12">
                <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {STATS.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <p className="text-5xl font-black text-black">{s.value}</p>
                            <p className="text-sm font-bold uppercase tracking-widest text-black/60 mt-1">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════
                EVERYTHING YOU NEED (Features)
            ══════════════════════════════════ */}
            <section className="max-w-[1400px] mx-auto px-4 py-28">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-3"
                    >
                        Everything You Need
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black uppercase"
                    >
                        Built For<br />Campus Life
                    </motion.h2>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 h-auto md:h-[420px] mb-8">
                    {FEATURES.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ scale: 0.97 }}
                            className={`feature-card relative overflow-hidden group ${f.variant ?? ''}`}
                        >
                            {/* Decorative Background Icon */}
                            <f.icon className={`absolute -right-8 top-1/2 -translate-y-1/2 w-56 h-56 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500 ease-out ${f.iconColor ?? ''}`} />

                            <div className={`feature-icon relative z-10 ${f.iconBg ?? ''}`}>
                                <f.icon className={`w-6 h-6 ${f.iconColor ?? ''}`} />
                            </div>
                            <div className="relative z-10">
                                <h3 className={`feature-title ${f.titleColor ?? ''}`}>
                                    {f.title}
                                </h3>
                                <p className={`feature-desc ${f.descColor ?? ''}`}>{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Wide Card — Venue Booking */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border-4 border-black shadow-[8px_8px_0_#000] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div>
                        <span className="inline-block bg-black text-white text-[10px] font-black px-2 py-1 uppercase rounded mb-3 tracking-widest">3D Feature</span>
                        <h3 className="text-3xl md:text-4xl font-black uppercase mb-2">Interactive Venue Booking</h3>
                        <p className="text-gray-500 font-semibold max-w-md">Spin the campus map, check availability in real-time, and book the auditorium in seconds.</p>
                    </div>
                    <Link
                        to="/apps/booking"
                        className="flex-shrink-0 flex items-center gap-2 bg-[#6699ff] text-white px-10 py-4 rounded-full font-black uppercase border-4 border-black shadow-[6px_6px_0_black] hover:shadow-none hover:translate-y-1 transition-all text-lg"
                    >
                        Explore Map <MapPin className="w-5 h-5" />
                    </Link>
                </motion.div>
            </section>

            {/* ══════════════════════════════════
                HOW IT WORKS
            ══════════════════════════════════ */}
            <section className="bg-black text-white py-28 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-3">Simple Process</p>
                        <h2 className="text-5xl font-black uppercase">How It Works</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Sign Up", desc: "Create your account using your college email. Takes 30 seconds.", color: "border-yellow-400" },
                            { step: "02", title: "Join Clubs", desc: "Browse and join clubs, RSVPs for events, and track your XP.", color: "border-pink-500" },
                            { step: "03", title: "Lead", desc: "Create events, recruit, manage budgets — all from one dashboard.", color: "border-purple-500" },
                        ].map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className={`p-8 rounded-2xl border-2 ${step.color} bg-white/5 hover:bg-white/10 transition-colors`}
                            >
                                <p className="text-6xl font-black text-white/10 mb-4">{step.step}</p>
                                <h3 className="text-2xl font-black mb-2">{step.title}</h3>
                                <p className="text-gray-400 font-semibold">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                OTHER FEATURES GRID
            ══════════════════════════════════ */}
            <section className="py-28 px-4 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black uppercase">More Power Tools</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { label: "Live Polls", icon: BarChart2, color: "bg-purple-100 hover:bg-purple-200", link: "/polls" },
                        { label: "Sponsor CRM", icon: Megaphone, color: "bg-yellow-100 hover:bg-yellow-200", link: "/apps/sponsors" },
                        { label: "Auto Certificates", icon: Zap, color: "bg-green-100  hover:bg-green-200", link: "/apps/certificates" },
                        { label: "Mission Control", icon: Trophy, color: "bg-blue-100   hover:bg-blue-200", link: "/apps/tasks" },
                        { label: "Gear Vault", icon: Shield, color: "bg-red-100    hover:bg-red-200", link: "/apps/inventory" },
                        { label: "Club Wars", icon: Users, color: "bg-orange-100 hover:bg-orange-200", link: "/apps/versus" },
                    ].map((f, i) => (
                        <motion.div
                            key={f.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07 }}
                        >
                            <Link to={f.link} className={`flex items-center gap-4 p-5 rounded-2xl border-3 border-black ${f.color} transition-all hover:-translate-y-1 hover:shadow-hard font-black uppercase text-sm`}>
                                <f.icon className="w-6 h-6" />
                                {f.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════
                FAQ
            ══════════════════════════════════ */}
            <section className="bg-yellow-300 border-y-4 border-black py-28 px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl font-black uppercase mb-12 text-center">FAQs</h2>
                    <div className="space-y-3">
                        {FAQS.map((f, i) => (
                            <div
                                key={i}
                                className="bg-white border-3 border-black rounded-2xl overflow-hidden shadow-hard-sm"
                            >
                                <button
                                    className="w-full flex items-center justify-between px-6 py-5 font-black text-left"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span>{f.q}</span>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-6 font-semibold text-gray-600">{f.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════
                CTA BANNER
            ══════════════════════════════════ */}
            <section className="bg-black text-white py-28 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-8">
                        Ready to<br /><span className="text-yellow-300">Level Up?</span>
                    </h2>
                    <p className="text-gray-400 text-xl font-semibold mb-10 max-w-xl mx-auto">
                        Join 12,000+ students already using CAMS OS to run their campus life like a pro.
                    </p>
                    <Link
                        to="/auth"
                        className="inline-flex items-center gap-3 bg-yellow-300 text-black px-12 py-5 rounded-full font-black uppercase text-xl border-4 border-white shadow-[8px_8px_0_white] hover:shadow-none hover:translate-y-2 transition-all"
                    >
                        Get Started Free <ArrowRight className="w-6 h-6" />
                    </Link>
                </motion.div>
            </section>

        </div>
    );
}
