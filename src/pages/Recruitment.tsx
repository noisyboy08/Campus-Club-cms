import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, X, Search, Filter, Briefcase, User, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

// Types
type Status = 'applied' | 'interview' | 'shortlisted' | 'accepted' | 'rejected';

interface Applicant {
    id: string;
    name: string;
    role: string;
    skills: string[];
    status: Status;
    avatar_color: string;
    match_score: number;
}

// Mock Data
const MOCK_APPLICANTS: Applicant[] = [
    { id: '1', name: 'Alice Chen', role: 'Frontend Dev', skills: ['React', 'TypeScript', 'Figma'], status: 'applied', avatar_color: 'bg-pop-pink', match_score: 92 },
    { id: '2', name: 'Bob Smith', role: 'Backend Dev', skills: ['Node.js', 'PostgreSQL'], status: 'interview', avatar_color: 'bg-pop-purple', match_score: 85 },
    { id: '3', name: 'Charlie Kim', role: 'Designer', skills: ['UI/UX', 'Illustrator'], status: 'shortlisted', avatar_color: 'bg-pop-yellow', match_score: 88 },
    { id: '4', name: 'Dana Lee', role: 'Marketing', skills: ['Social Media', 'Content'], status: 'applied', avatar_color: 'bg-pop-blue', match_score: 74 },
    { id: '5', name: 'Evan Wright', role: 'Frontend Dev', skills: ['Vue', 'CSS'], status: 'rejected', avatar_color: 'bg-gray-400', match_score: 45 },
    { id: '6', name: 'Fiona Gallagher', role: 'Manager', skills: ['Leadership', 'Agile'], status: 'accepted', avatar_color: 'bg-green-500', match_score: 98 },
];

const COLUMNS: { id: Status; title: string; color: string; borderColor: string }[] = [
    { id: 'applied', title: 'New Applications', color: 'bg-white', borderColor: 'border-black' },
    { id: 'interview', title: 'Interviewing', color: 'bg-yellow-100', borderColor: 'border-yellow-400' },
    { id: 'shortlisted', title: 'Shortlisted', color: 'bg-purple-100', borderColor: 'border-purple-400' },
    { id: 'accepted', title: 'Hired!', color: 'bg-green-100', borderColor: 'border-green-400' },
];

export function Recruitment() {
    const [applicants, setApplicants] = useState(MOCK_APPLICANTS);
    const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
    const [filter, setFilter] = useState('');

    const moveApplicant = (id: string, newStatus: Status) => {
        setApplicants(prev => prev.map(app =>
            app.id === id ? { ...app, status: newStatus } : app
        ));
    };

    return (
        <main className="min-h-screen bg-pop-bg pb-20 pt-24 px-8 overflow-x-hidden font-sans">

            {/* Header */}
            <div className="mx-auto max-w-[1600px] mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase text-black tracking-tighter drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
                            War Room
                        </h1>
                        <p className="font-bold text-black/60 uppercase tracking-widest text-sm">Recruitment Season 2026</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Find talent..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-black font-bold focus:outline-none focus:shadow-hard-sm transition-shadow"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                    <button className="p-3 bg-black text-white rounded-xl border-2 border-transparent hover:border-black hover:bg-gray-800 transition-colors shadow-hard-sm">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Kanban Board */}
            <div className="mx-auto max-w-[1600px] pb-8 overflow-x-auto">
                <div className="flex gap-8 min-w-[1200px]">
                    {COLUMNS.map((column, colIndex) => (
                        <div key={column.id} className="flex-1 min-w-[320px] flex flex-col gap-4">

                            {/* Column Header */}
                            <div className={`p-4 rounded-2xl border-b-4 ${column.borderColor} bg-white flex justify-between items-center shadow-sm`}>
                                <h2 className="font-black text-lg uppercase tracking-wide flex items-center gap-2">
                                    {column.title}
                                </h2>
                                <span className={`text-xs font-black px-3 py-1 rounded-full ${column.color} border border-black/10`}>
                                    {applicants.filter(a => a.status === column.id).length}
                                </span>
                            </div>

                            {/* Cards Area */}
                            <div className="flex flex-col gap-4 min-h-[500px]">
                                <AnimatePresence mode='popLayout'>
                                    {applicants
                                        .filter(a => a.status === column.id)
                                        .filter(a => a.name.toLowerCase().includes(filter.toLowerCase()) || a.role.toLowerCase().includes(filter.toLowerCase()))
                                        .map(applicant => (
                                            <motion.div
                                                key={applicant.id}
                                                layoutId={applicant.id}
                                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                className="bg-white p-5 rounded-2xl border-2 border-black shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all group relative overflow-hidden"
                                            >
                                                {/* Top Row */}
                                                <div className="flex justify-between items-start mb-4 relative z-10">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-xl border-2 border-black flex items-center justify-center text-sm font-black ${applicant.avatar_color} shadow-sm`}>
                                                            {applicant.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-black text-base uppercase leading-none mb-1">{applicant.name}</h3>
                                                            <p className="text-[10px] text-gray-500 font-bold uppercase flex items-center gap-1">
                                                                <Briefcase className="w-3 h-3" /> {applicant.role}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => setSelectedApplicant(applicant)}
                                                        className="text-gray-400 hover:text-pop-purple transition-colors flex items-center gap-1 text-[10px] font-bold uppercase"
                                                    >
                                                        <FileText className="w-4 h-4" /> Resume
                                                    </button>
                                                </div>

                                                {/* Skills */}
                                                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                                                    {applicant.skills.map(skill => (
                                                        <span key={skill} className="bg-gray-50 border border-black/10 px-2 py-1 rounded-md text-[10px] font-bold text-gray-600 uppercase">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Actions & Stats */}
                                                <div className="flex items-center justify-between pt-3 border-t-2 border-dashed border-gray-100 relative z-10">
                                                    <div className="flex items-center gap-2">
                                                        <span className={`text-xs font-black px-2 py-1 rounded ${applicant.match_score > 90 ? 'bg-green-100 text-green-700' : applicant.match_score > 70 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                                                            {applicant.match_score}% Match
                                                        </span>
                                                    </div>

                                                    <div className="flex gap-2">
                                                        {colIndex > 0 && (
                                                            <button
                                                                onClick={() => moveApplicant(applicant.id, COLUMNS[colIndex - 1].id)}
                                                                className="p-2 bg-gray-100 rounded-lg hover:bg-black hover:text-white transition-colors"
                                                                title="Move Back"
                                                            >
                                                                <ArrowLeft className="w-3 h-3" />
                                                            </button>
                                                        )}

                                                        {column.id === 'applied' && (
                                                            <button
                                                                onClick={() => moveApplicant(applicant.id, 'rejected')}
                                                                className="p-2 bg-red-50 rounded-lg hover:bg-red-500 hover:text-white text-red-500 transition-colors"
                                                                title="Reject"
                                                            >
                                                                <X className="w-3 h-3" />
                                                            </button>
                                                        )}

                                                        {colIndex < COLUMNS.length - 1 && (
                                                            <button
                                                                onClick={() => moveApplicant(applicant.id, COLUMNS[colIndex + 1].id)}
                                                                className="p-2 bg-green-50 rounded-lg hover:bg-green-500 hover:text-white text-green-500 transition-colors"
                                                                title="Move Forward"
                                                            >
                                                                <Check className="w-3 h-3" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Background Decor for Accepted */}
                                                {column.id === 'accepted' && (
                                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                                        <Check className="w-24 h-24 text-green-500 rotate-12" />
                                                    </div>
                                                )}

                                            </motion.div>
                                        ))}
                                </AnimatePresence>

                                {applicants.filter(a => a.status === column.id).length === 0 && (
                                    <div className="h-32 border-3 border-dashed border-black/5 rounded-2xl flex flex-col items-center justify-center text-black/20 gap-2">
                                        <User className="w-8 h-8" />
                                        <p className="font-black text-xs uppercase">No Candidates</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Resume Modal */}
            <AnimatePresence>
                {selectedApplicant && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedApplicant(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border-4 border-black shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={`h-32 ${selectedApplicant.avatar_color} border-b-4 border-black relative`}>
                                <button
                                    onClick={() => setSelectedApplicant(null)}
                                    className="absolute top-4 right-4 p-2 bg-black text-white rounded-full hover:scale-110 transition-transform"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                                <div className="absolute -bottom-12 left-8 w-24 h-24 bg-white rounded-2xl border-4 border-black flex items-center justify-center text-4xl font-black shadow-hard">
                                    {selectedApplicant.name.charAt(0)}
                                </div>
                            </div>

                            <div className="pt-16 pb-8 px-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-3xl font-black uppercase leading-none mb-1">{selectedApplicant.name}</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-bold bg-black text-white px-2 py-1 rounded uppercase">
                                                {selectedApplicant.role}
                                            </span>
                                            <span className="text-sm font-bold text-gray-500 uppercase">
                                                Match: {selectedApplicant.match_score}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-3 bg-gray-100 rounded-xl hover:bg-black hover:text-white transition-colors border-2 border-transparent hover:border-black">
                                            <Download className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="font-black uppercase text-gray-400 mb-2 text-xs tracking-widest">About</h3>
                                        <p className="text-sm font-bold text-gray-800 leading-relaxed">
                                            Passionate {selectedApplicant.role} with a knack for building clean, user-centric interfaces.
                                            Currently looking for opportunities to leverage skills in {selectedApplicant.skills.join(', ')}.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-black uppercase text-gray-400 mb-2 text-xs tracking-widest">Skills</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedApplicant.skills.map(skill => (
                                                <span key={skill} className="bg-pop-stripes bg-opacity-10 border-2 border-black px-3 py-1 rounded-lg text-xs font-black uppercase">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t-2 border-dashed border-gray-200 pt-6">
                                    <h3 className="font-black uppercase text-lg mb-4">Application History</h3>
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <div className="w-2 bg-green-500 rounded-full" />
                                            <div>
                                                <p className="font-bold text-sm">Application Submitted</p>
                                                <p className="text-xs text-gray-500">2 days ago</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-2 bg-gray-200 rounded-full" />
                                            <div>
                                                <p className="font-bold text-sm text-gray-400">Resume Review</p>
                                                <p className="text-xs text-gray-400">Pending</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 flex gap-4">
                                    <button
                                        onClick={() => { moveApplicant(selectedApplicant.id, 'interview'); setSelectedApplicant(null); }}
                                        className="flex-1 py-4 bg-pop-purple hover:bg-pop-pink text-white font-black uppercase rounded-xl border-3 border-black shadow-hard hover:-translate-y-1 transition-all"
                                    >
                                        Shortlist for Interview
                                    </button>
                                    <button
                                        onClick={() => { moveApplicant(selectedApplicant.id, 'rejected'); setSelectedApplicant(null); }}
                                        className="px-6 py-4 bg-gray-100 hover:bg-red-500 hover:text-white text-gray-600 font-black uppercase rounded-xl border-3 border-transparent hover:border-black transition-all"
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
