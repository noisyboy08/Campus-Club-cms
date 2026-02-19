import { ArrowLeft, Linkedin, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function LegacyHall() {
    const alumni = [
        { name: "David Chen", role: "Senior Engineer @ Google", class: "2023", quote: "Started the Robotics Club from a garage.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200", color: "border-amber-600" },
        { name: "Sarah Miller", role: "Product Manager @ Airbnb", class: "2022", quote: "CAM taught me how to lead teams effectively.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200", color: "border-blue-500" },
        { name: "James Wilson", role: "Founder @ TechStart", class: "2021", quote: "The network here is invaluable.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200", color: "border-purple-500" },
    ];

    return (
        <div className="min-h-screen bg-stone-900 p-8 pt-24 text-white font-serif overflow-x-hidden">
            <header className="max-w-6xl mx-auto mb-16 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase text-amber-500 tracking-widest font-serif">Legacy Hall</h1>
                        <p className="text-stone-400 font-sans tracking-[0.3em] uppercase text-sm mt-2">Honoring Our Distinguished Alumni</p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
                {alumni.map((alum, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        key={i}
                        className="relative group perspective-1000"
                    >
                        {/* Background Plaque */}
                        <div className="absolute inset-0 bg-stone-800 rounded-sm transform group-hover:rotate-1 transition-transform duration-500 shadow-2xl border border-stone-700"></div>

                        <div className="relative bg-stone-800 p-8 pt-12 rounded-sm border-[8px] border-double border-stone-600 shadow-xl text-center h-full flex flex-col items-center hover:-translate-y-2 transition-transform duration-500">

                            {/* Decorative Corner */}
                            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-500/50"></div>
                            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-500/50"></div>
                            <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-500/50"></div>
                            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-500/50"></div>

                            {/* Image */}
                            <div className={`w-32 h-32 mx-auto rounded-full border-4 ${alum.color} p-1 mb-6 relative`}>
                                <img src={alum.image} alt={alum.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-stone-900 border border-amber-500/50 px-3 py-1 rounded-full flex items-center gap-2">
                                    <GraduationCap className="w-3 h-3 text-amber-500" />
                                    <span className="text-[10px] font-bold tracking-widest text-amber-500">'{alum.class.slice(2)}</span>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-amber-50 mb-2 font-serif">{alum.name}</h2>

                            <div className="flex items-center justify-center gap-2 text-amber-500/80 mb-6 font-sans text-xs font-bold tracking-wider uppercase">
                                <Briefcase className="w-3 h-3" />
                                {alum.role}
                            </div>

                            <div className="relative mb-8 flex-grow">
                                <span className="absolute -top-4 -left-2 text-4xl text-stone-600 font-serif">"</span>
                                <p className="text-stone-400 font-serif italic text-lg leading-relaxed px-4">{alum.quote}</p>
                                <span className="absolute -bottom-8 -right-2 text-4xl text-stone-600 font-serif">"</span>
                            </div>

                            <button className="mt-auto group/btn flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-stone-500 hover:text-amber-500 transition-colors">
                                <Linkedin className="w-4 h-4" />
                                <span className="group-hover/btn:underline decoration-amber-500 underline-offset-4">Connect on LinkedIn</span>
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24 text-center">
                <div className="inline-flex items-center gap-4 text-stone-500 text-sm tracking-widest uppercase font-bold border-t border-stone-800 pt-8">
                    <Award className="w-5 h-5 text-amber-700" />
                    <span>Est. 2020 • Excellence in Leadership</span>
                    <Award className="w-5 h-5 text-amber-700" />
                </div>
            </div>
        </div>
    );
}
