import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

const LEADERBOARD = [
    { rank: 1, name: "Alex Sterling", xp: 12500, tier: "Holographic" },
    { rank: 2, name: "Alex Carter", xp: 11200, tier: "Gold" },
    { rank: 3, name: "Sarah J.", xp: 9800, tier: "Gold" },
    { rank: 4, name: "Mike R.", xp: 8500, tier: "Silver" },
    { rank: 5, name: "Priya K.", xp: 7200, tier: "Silver" },
];

export function Leaderboard() {
    return (
        <div className="neo-card bg-white p-6">
            <div className="flex items-center gap-3 mb-6 bg-pop-yellow inline-flex px-4 py-2 border-3 border-black rounded-lg shadow-hard-sm -rotate-1">
                <Trophy className="text-black w-6 h-6 animate-bounce" />
                <h2 className="text-xl font-black text-black uppercase">Top Students</h2>
            </div>

            <div className="space-y-3">
                {LEADERBOARD.map((student, index) => (
                    <motion.div
                        key={student.rank}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center justify-between p-3 rounded-xl border-3 border-black shadow-sm ${index === 0
                            ? "bg-pop-purple text-white"
                            : "bg-gray-50 text-black hover:bg-gray-100"
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <span className={`font-black w-8 text-center bg-black text-white rounded-md py-1 text-sm ${index === 0 ? "bg-pop-yellow text-black" : ""}`}>
                                #{student.rank}
                            </span>
                            <div>
                                <p className="font-bold text-lg leading-none mb-1">
                                    {student.name}
                                </p>
                                <p className={`text-[10px] font-black uppercase tracking-wider ${index === 0 ? "text-pop-yellow" : "text-gray-500"}`}>{student.tier}</p>
                            </div>
                        </div>

                        <div className={`font-black font-mono text-lg ${index === 0 ? "text-pop-yellow" : "text-pop-purple"}`}>
                            {student.xp.toLocaleString()} <span className="text-[10px] opacity-70">XP</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
