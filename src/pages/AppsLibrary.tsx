import { Link } from 'react-router-dom';
import {
    Backpack, DollarSign, Handshake, Scroll, Calendar,
    CheckSquare, Sword, Ghost, Users, ScanLine,
    FolderOpen, GraduationCap, Clock, Mail, GitGraph, ArrowLeft, Zap
} from 'lucide-react';

const FEATURES = [
    { id: 'inventory', icon: Backpack, title: 'Gear Vault', desc: 'Asset Inventory & Checkout', color: 'bg-pop-yellow' },
    { id: 'finance', icon: DollarSign, title: 'The Treasury', desc: 'Budget & Exp. Tracking', color: 'bg-green-400' },
    { id: 'sponsors', icon: Handshake, title: 'Sponsor CRM', desc: 'Corporate Pipeline', color: 'bg-blue-400' },
    { id: 'certificates', icon: Scroll, title: 'Auto-Cert', desc: 'Certificate Generator', color: 'bg-pink-400' },
    { id: 'booking', icon: Calendar, title: 'Venue Booker', desc: 'Room Reservations', color: 'bg-purple-400' },
    { id: 'tasks', icon: CheckSquare, title: 'Mission Ctrl', desc: 'Committee Tasks', color: 'bg-red-400' },
    { id: 'quests', icon: Sword, title: 'Daily Quests', desc: 'XP Challenges', color: 'bg-orange-400' },
    { id: 'feedback', icon: Ghost, title: 'Whisper Box', desc: 'Anon Feedback', color: 'bg-indigo-400' },
    { id: 'versus', icon: Users, title: 'Club Wars', desc: 'Comparative Stats', color: 'bg-yellow-400' },
    { id: 'scanner', icon: ScanLine, title: 'Gatekeeper', desc: 'QR Event Check-in', color: 'bg-cyan-400' },
    { id: 'docs', icon: FolderOpen, title: 'The Archives', desc: 'Document Cloud', color: 'bg-teal-400' },
    { id: 'alumni', icon: GraduationCap, title: 'Legacy Hall', desc: 'Alumni Directory', color: 'bg-emerald-400' },
    { id: 'meetings', icon: Clock, title: 'Sync Up', desc: 'Meeting Scheduler', color: 'bg-rose-400' },
    { id: 'newsletter', icon: Mail, title: ' The Broadcast', desc: 'Newsletter Builder', color: 'bg-blue-500' },
    { id: 'org', icon: GitGraph, title: 'Hierarchy', desc: 'Org Structure', color: 'bg-violet-400' },
    { id: 'voting', icon: Zap, title: 'Vote Bank', desc: 'Live Polling', color: 'bg-indigo-300' },
];

export function AppsLibrary() {
    return (
        <main className="min-h-screen bg-pop-bg pb-20 pt-24 px-4 overflow-x-hidden">

            {/* Header */}
            <div className="mx-auto max-w-6xl mb-12 flex items-center gap-6">
                <Link to="/dashboard" className="w-12 h-12 bg-white rounded-full border-3 border-black flex items-center justify-center shadow-hard hover:translate-y-[2px] hover:shadow-none transition-all">
                    <ArrowLeft className="w-6 h-6 text-black" />
                </Link>
                <div>
                    <h1 className="text-5xl font-black text-white uppercase leading-none mb-2">
                        App Store
                    </h1>
                    <p className="text-gray-400 font-bold">Install advanced modules for your club.</p>
                </div>
            </div>

            {/* Grid */}
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURES.map((feature) => (
                    <Link key={feature.id} to={`/apps/${feature.id}`} className="group bg-white rounded-2xl border-3 border-black shadow-hard hover:shadow-hard-xl hover:-translate-y-1 transition-all p-6 cursor-pointer relative overflow-hidden block">

                        {/* Coming Soon Overlay (for ones not built) */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-black text-white text-[10px] font-black px-2 py-1 rounded-full uppercase">
                                Install
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className={`w-16 h-16 ${feature.color} rounded-xl border-3 border-black flex items-center justify-center shrink-0`}>
                                <feature.icon className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <h3 className="font-black text-xl uppercase leading-tight mb-1">{feature.title}</h3>
                                <p className="text-xs font-bold text-gray-500 uppercase leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mx-auto max-w-6xl mt-12 text-center">
                <p className="text-gray-500 font-bold uppercase text-sm">More modules coming soon...</p>
            </div>

        </main>
    );
}
