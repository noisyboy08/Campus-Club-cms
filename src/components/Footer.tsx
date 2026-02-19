import { Link } from 'react-router-dom';
import { ArrowRight, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const LINKS = {
    Platform: [
        { label: 'Dashboard', to: '/dashboard' },
        { label: 'Clubs', to: '/clubs' },
        { label: 'Events', to: '/events' },
        { label: 'Recruitment', to: '/recruitment' },
        { label: 'All Apps', to: '/apps' },
    ],
    Features: [
        { label: 'Venue Booking', to: '/apps/booking' },
        { label: 'Finance', to: '/apps/finance' },
        { label: 'Live Polls', to: '/polls' },
        { label: 'Auto Certs', to: '/apps/certificates' },
        { label: 'Mission Control', to: '/apps/tasks' },
    ],
    Company: [
        { label: 'About', to: '/' },
        { label: 'Changelog', to: '/' },
        { label: 'Contact', to: '/' },
        { label: 'Privacy', to: '/' },
        { label: 'Terms', to: '/' },
    ],
};

const SOCIALS = [
    { Icon: Github, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Linkedin, href: '#' },
];

export function Footer() {
    return (
        <footer className="bg-black text-white overflow-hidden relative border-t-4 border-black">

            {/* Grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

            {/* ── Giant Wordmark ── */}
            <div className="relative z-10 pt-20 px-4 overflow-hidden select-none">
                <h2
                    className="text-[22vw] font-black leading-none uppercase tracking-tighter text-stroke-white pointer-events-none"
                    style={{ color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.12)' }}
                >
                    CAMS.OS
                </h2>
            </div>

            {/* ── Main grid ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-16">

                {/* Top: tagline + newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 pt-4 border-t-2 border-white/10">

                    <div className="max-w-sm">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black rounded-lg text-lg">C</div>
                            <span className="font-black text-xl tracking-tight">CAMS Operating System</span>
                        </div>
                        <p className="text-gray-400 font-semibold leading-relaxed mb-6">
                            The all-in-one campus management platform. Built for students, by students.
                        </p>
                        {/* Socials */}
                        <div className="flex gap-3">
                            {SOCIALS.map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-10 h-10 rounded-xl border-2 border-white/20 hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-center"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full max-w-sm">
                        <h3 className="font-black uppercase tracking-widest text-sm text-yellow-300 mb-3">Stay in the Loop</h3>
                        <p className="text-gray-400 font-semibold text-sm mb-4">Get campus updates, feature releases, and event highlights every week.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 font-semibold text-sm placeholder-gray-600 focus:outline-none focus:border-yellow-400 transition-colors"
                            />
                            <button className="bg-yellow-300 text-black px-4 rounded-xl hover:bg-white transition-colors border-2 border-yellow-300 hover:border-white font-black">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-gray-600 text-xs font-bold mt-2 uppercase tracking-wider">No spam. Unsubscribe anytime.</p>
                    </div>
                </div>

                {/* Links grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-16 border-t-2 border-white/10 pt-12">
                    {Object.entries(LINKS).map(([section, items]) => (
                        <div key={section}>
                            <h4 className="font-black uppercase tracking-widest text-sm text-gray-500 mb-5">{section}</h4>
                            <ul className="space-y-3">
                                {items.map(item => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.to}
                                            className="font-semibold text-gray-400 hover:text-white transition-colors text-sm hover:underline decoration-yellow-300 underline-offset-4 decoration-2"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="border-t-2 border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono uppercase tracking-widest">
                    <p>© 2026 CAMS OS Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
                        <span>Made with ♥ by students</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
