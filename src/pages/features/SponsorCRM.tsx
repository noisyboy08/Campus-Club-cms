import { ArrowLeft, Mail, Phone, ExternalLink, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function SponsorCRM() {
    const pipelines = [
        {
            stage: "Prospects",
            color: "border-blue-400 bg-blue-400/10",
            items: [
                { name: "Notion", contact: "marketing@notion.so", value: "TBD", tag: "Tech" },
                { name: "Figma", contact: "community@figma.com", value: "TBD", tag: "Design" }
            ]
        },
        {
            stage: "In Negotiation",
            color: "border-yellow-400 bg-yellow-400/10",
            items: [
                { name: "Red Bull", contact: "wings@redbull.com", value: "₹50k", tag: "Beverage" }
            ]
        },
        {
            stage: "Signed",
            color: "border-green-400 bg-green-400/10",
            items: [
                { name: "GitHub", contact: "education@github.com", value: "Swag Kit", tag: "DevTools" },
                { name: "Devfolio", contact: "hello@devfolio.co", value: "Platform", tag: "Partner" }
            ]
        },
        {
            stage: "Lost",
            color: "border-red-400 bg-red-400/10",
            items: []
        }
    ];

    return (
        <div className="min-h-screen bg-pop-bg p-8 pt-24 text-white font-sans overflow-x-hidden">
            <header className="max-w-[1600px] mx-auto mb-12 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase text-blue-400 tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Sponsor CRM</h1>
                        <p className="text-black font-bold opacity-60 uppercase tracking-widest">Partnership Pipeline</p>
                    </div>
                </div>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-xl font-black uppercase border-3 border-black shadow-hard hover:translate-y-1 hover:shadow-none transition-all">
                    + New Lead
                </button>
            </header>

            <div className="max-w-[1600px] mx-auto overflow-x-auto pb-12">
                <div className="flex gap-6 min-w-max">
                    {pipelines.map((pipeline, i) => (
                        <div key={pipeline.stage} className={`w-[350px] flex-shrink-0 flex flex-col gap-4`}>

                            {/* Column Header */}
                            <div className={`p-4 rounded-xl border-l-4 ${pipeline.color} bg-white shadow-sm flex justify-between items-center`}>
                                <h3 className="font-black uppercase text-black tracking-wide">{pipeline.stage}</h3>
                                <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded-full">{pipeline.items.length}</span>
                            </div>

                            {/* Cards Container */}
                            <div className="flex flex-col gap-4 min-h-[500px]">
                                {pipeline.items.map((item, j) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 + j * 0.05 }}
                                        key={item.name}
                                        className="bg-white p-5 rounded-2xl border-2 border-black shadow-hard hover:-translate-y-1 hover:shadow-hard-xl transition-all group cursor-grab active:cursor-grabbing"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold uppercase text-gray-500 border border-gray-200">{item.tag}</div>
                                            <button className="text-gray-300 hover:text-black"><ExternalLink className="w-4 h-4" /></button>
                                        </div>

                                        <h4 className="font-black text-xl text-black mb-1">{item.name}</h4>
                                        <p className="text-xs font-bold text-gray-400 truncate mb-4">{item.contact}</p>

                                        <div className="pt-4 border-t-2 border-dashed border-gray-100 flex items-center justify-between">
                                            <span className="font-black text-blue-600 bg-blue-50 px-2 py-1 rounded">{item.value}</span>

                                            <div className="flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                                                <button className="p-1.5 bg-gray-100 rounded hover:bg-black hover:text-white transition-colors"><Mail className="w-3 h-3" /></button>
                                                <button className="p-1.5 bg-gray-100 rounded hover:bg-black hover:text-white transition-colors"><Phone className="w-3 h-3" /></button>
                                                <button className="p-1.5 bg-gray-100 rounded hover:bg-black hover:text-white transition-colors"><Calendar className="w-3 h-3" /></button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}

                                {pipeline.items.length === 0 && (
                                    <div className="h-32 border-2 border-dashed border-black/10 rounded-2xl flex items-center justify-center">
                                        <p className="text-black/20 font-black uppercase text-sm">No Leads</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Add Column Button */}
                    <div className="w-[100px] flex items-start justify-center pt-4 opacity-50 hover:opacity-100 cursor-pointer transition-opacity">
                        <div className="p-4 rounded-full border-2 border-dashed border-black hover:bg-white/20">
                            <PlusIcon className="w-6 h-6 text-black" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PlusIcon({ className }: { className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
}
