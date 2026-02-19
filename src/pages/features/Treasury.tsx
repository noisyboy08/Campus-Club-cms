import { useState } from 'react';
import { ArrowLeft, TrendingUp, DollarSign, Wallet, FileText, Download, RefreshCw, ShoppingCart, Music, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TRANSACTIONS = [
    { title: "Hackathon Prizes", type: "Expense", amount: -15000, date: "Feb 18, 2026", status: "Approved", category: "Events" },
    { title: "Sponsorship: Red Bull", type: "Income", amount: +25000, date: "Feb 15, 2026", status: "Received", category: "Sponsor" },
    { title: "Venue Booking", type: "Expense", amount: -5000, date: "Feb 12, 2026", status: "Pending", category: "Venue" },
    { title: "T-Shirt Merch Sales", type: "Income", amount: +8000, date: "Feb 10, 2026", status: "Received", category: "Merch" },
    { title: "Equipment Rental", type: "Expense", amount: -3500, date: "Feb 08, 2026", status: "Approved", category: "Ops" },
];

const CATEGORIES = [
    { label: "Events", pct: 45, color: "bg-yellow-400" },
    { label: "Venue", pct: 20, color: "bg-pink-500" },
    { label: "Merch", pct: 15, color: "bg-blue-500" },
    { label: "Ops", pct: 12, color: "bg-purple-500" },
    { label: "Misc", pct: 8, color: "bg-gray-400" },
];

const SUBSCRIPTIONS = [
    { name: "Canva Pro (Club)", icon: Globe, amount: 499, billing: "Monthly", color: "bg-yellow-100" },
    { name: "Notion Team", icon: FileText, amount: 800, billing: "Monthly", color: "bg-gray-100" },
    { name: "Spotify Events", icon: Music, amount: 199, billing: "Monthly", color: "bg-green-100" },
    { name: "AWS Credits", icon: Zap, amount: 1200, billing: "Quarterly", color: "bg-blue-100" },
];

export function Treasury() {
    const [activeTab, setActiveTab] = useState<'overview' | 'breakdown' | 'subscriptions'>('overview');

    const handleCSVExport = () => {
        const rows = [
            ['Title', 'Type', 'Amount (₹)', 'Date', 'Status', 'Category'],
            ...TRANSACTIONS.map(t => [t.title, t.type, String(t.amount), t.date, t.status, t.category]),
        ];
        const csv = rows.map(r => r.join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'treasury_report.csv'; a.click();
    };

    const totalBalance = 45000;
    const totalBudget = 100000;
    const utilizedPct = Math.round((totalBalance / totalBudget) * 100);

    return (
        <div className="min-h-screen bg-pop-bg p-4 md:p-8 pt-8 font-sans overflow-x-hidden">
            <div className="max-w-6xl mx-auto">

                {/* ── Header ── */}
                <header className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105">
                            <ArrowLeft className="text-black w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black uppercase text-green-600 tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,0.15)]">
                                The Treasury
                            </h1>
                            <p className="text-gray-500 font-semibold uppercase tracking-widest text-sm">Financial Dashboard • FY 2026</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="bg-green-500 text-white px-4 py-2 rounded-xl font-bold border-2 border-black shadow-hard-sm flex items-center gap-2 text-sm">
                            <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                            Live Data
                        </div>
                        <button onClick={handleCSVExport} className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl border-2 border-black hover:bg-gray-800 font-bold text-sm shadow-hard-sm transition-all hover:-translate-y-0.5">
                            <Download className="w-4 h-4" /> Export CSV
                        </button>
                    </div>
                </header>

                {/* ── KPI Row ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: "Total Balance", value: "₹45,000", icon: Wallet, bg: "bg-white", text: "text-black" },
                        { label: "Income (Feb)", value: "₹33,000", icon: TrendingUp, bg: "bg-green-400", text: "text-white" },
                        { label: "Expenses (Feb)", value: "₹23,500", icon: ShoppingCart, bg: "bg-pink-500", text: "text-white" },
                        { label: "Transactions", value: "24", icon: RefreshCw, bg: "bg-yellow-300", text: "text-black" },
                    ].map((kpi, i) => (
                        <motion.div
                            key={kpi.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ scale: 1.02 }}
                            className={`${kpi.bg} ${kpi.text} p-5 rounded-2xl border-3 border-black shadow-hard-sm flex flex-col gap-2`}
                        >
                            <kpi.icon className="w-6 h-6 opacity-80" />
                            <p className="text-3xl font-black">{kpi.value}</p>
                            <p className="text-xs font-bold uppercase tracking-wider opacity-70">{kpi.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* ── Budget Bar ── */}
                <div className="bg-white p-6 rounded-2xl border-3 border-black shadow-hard mb-8">
                    <div className="flex justify-between text-sm font-bold uppercase mb-3">
                        <span>Budget Utilized</span>
                        <span>{utilizedPct}%</span>
                    </div>
                    <div className="w-full h-6 bg-gray-100 rounded-full border-2 border-black overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${utilizedPct}%` }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                            className="h-full bg-green-400 border-r-2 border-black relative"
                        >
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.4)_4px,rgba(255,255,255,0.4)_8px)]" />
                        </motion.div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs font-bold text-gray-500 uppercase">
                        <span>Used: ₹45k</span><span>Cap: ₹100k</span>
                    </div>
                </div>

                {/* ── Tabs ── */}
                <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-2xl border-2 border-black w-fit">
                    {(['overview', 'breakdown', 'subscriptions'] as const).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-xl font-black uppercase text-xs tracking-widest transition-all ${activeTab === tab
                                    ? 'bg-black text-white shadow-hard-sm'
                                    : 'hover:bg-white hover:text-black text-gray-500'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* ── Tab: Overview (Recent Transactions) ── */}
                {activeTab === 'overview' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-black text-white p-6 md:p-8 rounded-2xl border-3 border-gray-800"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-black uppercase text-gray-300">Recent Activity</h2>
                            <button className="text-xs font-bold bg-white/10 hover:bg-white hover:text-black text-gray-300 px-4 py-2 rounded-xl transition-colors">View All</button>
                        </div>
                        <div className="space-y-3">
                            {TRANSACTIONS.map((tx, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                    className="flex items-center justify-between p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-600 transition-colors group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-lg ${tx.type === 'Income' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                            <FileText className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{tx.title}</h4>
                                            <p className="text-xs text-gray-500 uppercase font-bold">{tx.date} • {tx.status} • {tx.category}</p>
                                        </div>
                                    </div>
                                    <div className={`text-xl font-black ${tx.type === 'Income' ? 'text-green-400' : 'text-red-400'}`}>
                                        {tx.type === 'Income' ? '+' : ''}₹{Math.abs(tx.amount).toLocaleString()}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-800 flex justify-end">
                            <button onClick={handleCSVExport} className="flex items-center gap-2 text-gray-500 hover:text-white font-bold uppercase text-xs transition-colors">
                                <Download className="w-4 h-4" /> Download Report (CSV)
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* ── Tab: Spending Breakdown ── */}
                {activeTab === 'breakdown' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-6 md:p-8 rounded-2xl border-3 border-black shadow-hard"
                    >
                        <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
                            <DollarSign className="w-5 h-5" /> Spending By Category
                        </h2>
                        <div className="space-y-5">
                            {CATEGORIES.map((cat, i) => (
                                <div key={cat.label}>
                                    <div className="flex justify-between text-sm font-black uppercase mb-2">
                                        <span>{cat.label}</span>
                                        <span>{cat.pct}%</span>
                                    </div>
                                    <div className="w-full h-8 bg-gray-100 rounded-full border-2 border-black overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${cat.pct}%` }}
                                            transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                                            className={`h-full ${cat.color} rounded-full relative`}
                                        >
                                            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(255,255,255,0.3)_6px,rgba(255,255,255,0.3)_12px)] rounded-full" />
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Legend */}
                        <div className="flex flex-wrap gap-3 mt-8">
                            {CATEGORIES.map(cat => (
                                <div key={cat.label} className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${cat.color} border border-black`} />
                                    <span className="text-xs font-bold uppercase">{cat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* ── Tab: Subscriptions ── */}
                {activeTab === 'subscriptions' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-black uppercase">Recurring Subscriptions</h2>
                            <div className="bg-yellow-300 px-3 py-1 rounded-lg border-2 border-black text-xs font-black">
                                ₹{SUBSCRIPTIONS.reduce((s, x) => s + x.amount, 0).toLocaleString()} / mo
                            </div>
                        </div>
                        {SUBSCRIPTIONS.map((sub, i) => (
                            <motion.div
                                key={sub.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 }}
                                className={`${sub.color} p-5 rounded-2xl border-3 border-black shadow-hard-sm flex items-center justify-between group hover:-translate-y-0.5 transition-transform`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl border-2 border-black flex items-center justify-center shadow-sm">
                                        <sub.icon className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-black">{sub.name}</h4>
                                        <p className="text-xs font-bold uppercase text-gray-500">{sub.billing}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-black text-black">₹{sub.amount}</p>
                                    <p className="text-[10px] text-gray-500 font-bold uppercase">per {sub.billing.toLowerCase().replace('ly', '')}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

            </div>
        </div>
    );
}
