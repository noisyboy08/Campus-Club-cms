
import { motion } from "framer-motion";
import { ScanBarcode } from "lucide-react";

interface EventTicketProps {
    eventName: string;
    clubName: string;
    date: string;
    location: string;
}

export const EventTicket = ({ eventName, clubName, date, location }: EventTicketProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-sm mx-auto overflow-hidden rounded-3xl border-3 border-black shadow-hard hover:shadow-hard-xl transition-all bg-pop-white"
        >
            {/* Top Section (Ticket Info) */}
            <div className="p-6 relative z-10 bg-pop-purple flex flex-col items-center text-center">
                <div className="w-full flex justify-between items-start mb-6">
                    <span className="px-3 py-1 text-xs font-black rounded-full bg-white text-pop-black border-2 border-black uppercase transform -rotate-2">
                        E-TICKET
                    </span>
                    <div className="w-8 h-8 rounded-full bg-pop-yellow border-2 border-black" />
                </div>

                <h3 className="text-3xl font-black text-white mb-2 drop-shadow-[2px_2px_0_#000]">{eventName}</h3>
                <p className="inline-block bg-pop-black text-pop-yellow font-bold px-3 py-1 text-sm rounded-lg rotate-1 mb-6 border-2 border-white/20">{clubName}</p>

                <div className="w-full bg-white border-2 border-black rounded-xl p-4 flex justify-between gap-4 text-left shadow-hard-sm">
                    <div>
                        <p className="text-[10px] font-black uppercase text-pop-purple">Date</p>
                        <p className="font-bold text-pop-black text-sm">{date}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-black uppercase text-pop-purple">Location</p>
                        <p className="font-bold text-pop-black text-sm">{location}</p>
                    </div>
                </div>
            </div>

            {/* Perforation Line */}
            <div className="relative flex items-center justify-between px-0 bg-pop-purple -my-[1px]">
                <div className="w-6 h-6 rounded-full bg-pop-bg border-r-2 border-black -ml-3 z-10" />
                <div className="flex-1 border-t-4 border-dashed border-black/20 mx-2" />
                <div className="w-6 h-6 rounded-full bg-pop-bg border-l-2 border-black -mr-3 z-10" />
            </div>

            {/* Bottom Section (Scanner) */}
            <div className="p-6 bg-white flex flex-col items-center justify-center gap-4 border-t-0">
                <motion.div
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-pop-yellow border-2 border-black rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-hard-sm hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                    <ScanBarcode className="w-5 h-5 text-black" />
                    <span className="text-black font-black uppercase tracking-wide">Tap to Scan</span>
                </motion.div>
                <p className="text-[10px] text-gray-400 font-mono uppercase tracking-widest font-bold">Entry ID: #88219-X</p>
            </div>
        </motion.div>
    );
};
