import { ArrowLeft, Download, Folder, Search, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function TheArchives() {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const files = [
        { name: "Meeting_Notes_Feb24.pdf", size: "2.4 MB", type: "pdf", date: "Feb 24, 2026" },
        { name: "Sponsorship_Deck_v3.ppt", size: "15 MB", type: "ppt", date: "Feb 20, 2026" },
        { name: "Event_Budget_Sheet.xlsx", size: "450 KB", type: "xls", date: "Feb 18, 2026" },
        { name: "Club_Logo_Assets.zip", size: "45 MB", type: "zip", date: "Jan 10, 2026" },
        { name: "Constitution_Draft.docx", size: "1.2 MB", type: "doc", date: "Jan 05, 2026" },
    ];

    const folders = ["2026 Records", "2025 Legacy", "Event Photos", "Legal Docs"];

    return (
        <div className="min-h-screen bg-pop-bg p-8 pt-24 text-white font-sans overflow-x-hidden">
            <header className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase text-teal-400 tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">The Archives</h1>
                        <p className="text-black font-bold opacity-60 uppercase tracking-widest">Document Repository</p>
                    </div>
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute top-3 left-3 w-5 h-5 text-gray-500" />
                        <input type="text" placeholder="Search docs..." className="w-full pl-10 pr-4 py-2 rounded-xl border-2 border-black font-bold text-black focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-hard-sm" />
                    </div>
                    <div className="flex bg-white rounded-xl border-2 border-black p-1 shadow-hard-sm shrink-0">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto space-y-8">

                {/* Folders Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {folders.map((folder, i) => (
                        <motion.div
                            whileHover={{ y: -5 }}
                            key={i}
                            className="bg-orange-100 text-black p-6 pt-10 rounded-t-xl rounded-br-2xl rounded-bl-lg border-3 border-black shadow-hard-sm cursor-pointer hover:bg-orange-200 h-40 flex flex-col justify-between relative group"
                        >
                            <div className="absolute -top-3 left-0 bg-orange-200 w-2/5 h-4 border-t-3 border-l-3 border-r-3 border-black rounded-t-lg group-hover:bg-orange-300 transition-colors"></div>

                            <Folder className="w-12 h-12 text-orange-500 group-hover:text-orange-600 transition-colors" fill="currentColor" fillOpacity={0.2} />

                            <div className="flex justify-between items-end">
                                <span className="font-black uppercase text-lg leading-tight w-2/3">{folder}</span>
                                <span className="text-[10px] font-bold bg-black/10 px-2 py-1 rounded">12 Files</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Files Section */}
                <div className="bg-white rounded-[2rem] border-3 border-black shadow-hard p-8 min-h-[400px]">
                    <h2 className="text-black font-black uppercase mb-6 flex items-center gap-2">
                        <ClockIcon className="w-5 h-5" /> Recent Uploads
                    </h2>

                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {files.map((file, i) => (
                                <div key={i} className="p-4 border-2 border-gray-200 rounded-xl hover:border-teal-400 hover:bg-teal-50 transition-all cursor-pointer group relative">
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="p-2 bg-white rounded-full border border-black shadow-sm hover:scale-110 transition-transform">
                                            <Download className="w-4 h-4 text-black" />
                                        </div>
                                    </div>

                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-xs font-bold uppercase text-gray-500 border border-gray-300">
                                        {file.type}
                                    </div>
                                    <h3 className="font-bold text-black text-sm truncate mb-1">{file.name}</h3>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase">
                                        <span>{file.size}</span>
                                        <span>{file.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {files.map((file, i) => (
                                <div key={i} className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-[10px] font-black uppercase text-gray-500 border border-gray-200">
                                            {file.type}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-black text-sm">{file.name}</h3>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase md:hidden">{file.size} • {file.date}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:flex items-center gap-8 text-xs font-bold text-gray-500 uppercase">
                                        <span className="w-24 text-right">{file.size}</span>
                                        <span className="w-24 text-right">{file.date}</span>
                                        <button className="p-2 hover:bg-black hover:text-white rounded-lg transition-colors">
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

function ClockIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
}
