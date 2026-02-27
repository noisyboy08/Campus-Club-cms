import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Users, Maximize, ZoomIn, ZoomOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const INITIAL_NODES = [
    { id: 'president', x: 400, y: 50, role: 'President', name: 'Sarah Connor', color: 'bg-pop-yellow', icon: '👑', type: 'root' },

    { id: 'vp-tech', x: 150, y: 250, role: 'VP Tech', name: 'John Doe', color: 'bg-pop-blue', icon: '💻', parent: 'president' },
    { id: 'vp-ops', x: 400, y: 250, role: 'VP Operations', name: 'Jane Smith', color: 'bg-pop-pink', icon: '⚙️', parent: 'president' },
    { id: 'vp-design', x: 650, y: 250, role: 'VP Design', name: 'Mike Ross', color: 'bg-pop-purple', icon: '🎨', parent: 'president' },

    { id: 'dev-1', x: 50, y: 450, role: 'Lead Dev', name: 'Alice', color: 'bg-pop-cyan', icon: '👩‍💻', parent: 'vp-tech' },
    { id: 'dev-2', x: 250, y: 450, role: 'Backend', name: 'Bob', color: 'bg-pop-cyan', icon: '👨‍💻', parent: 'vp-tech' },

    { id: 'ops-1', x: 320, y: 450, role: 'Logistics', name: 'Charlie', color: 'bg-white', icon: '📦', parent: 'vp-ops' },
    { id: 'ops-2', x: 480, y: 450, role: 'Finance', name: 'Diana', color: 'bg-white', icon: '💰', parent: 'vp-ops' },

    { id: 'des-1', x: 650, y: 450, role: 'UI/UX', name: 'Eve', color: 'bg-pop-pink', icon: '✨', parent: 'vp-design' },
];

export function Hierarchy() {
    const [nodes, setNodes] = useState(INITIAL_NODES);
    const containerRef = useRef<HTMLDivElement>(null);
    const [lines, setLines] = useState<{ x1: number, y1: number, x2: number, y2: number, id: string }[]>([]);

    const updateLines = () => {
        const newLines: any[] = [];
        nodes.forEach(node => {
            if (node.parent) {
                const parent = nodes.find(n => n.id === node.parent);
                if (parent) {
                    newLines.push({
                        id: `${parent.id}-${node.id}`,
                        x1: parent.x + 80, // half of node width
                        y1: parent.y + 120, // bottom of node basically
                        x2: node.x + 80,
                        y2: node.y,
                    });
                }
            }
        });
        setLines(newLines);
    };

    useEffect(() => {
        updateLines();
    }, [nodes]);

    const handleDrag = (id: string, e: any, info: any) => {
        setNodes(prev => prev.map(n => {
            if (n.id === id) {
                return { ...n, x: n.x + info.delta.x, y: n.y + info.delta.y };
            }
            return n;
        }));
    };

    return (
        <div className="min-h-screen bg-pop-bg p-8 pt-24 text-white font-sans overflow-hidden flex flex-col">
            <header className="max-w-7xl w-full mx-auto mb-8 flex items-center justify-between z-20 shrink-0">
                <div className="flex items-center gap-6">
                    <Link to="/apps" className="p-3 bg-white rounded-full border-2 border-black hover:bg-gray-100 transition-transform hover:scale-105 shadow-hard-sm">
                        <ArrowLeft className="text-black" />
                    </Link>
                    <div>
                        <h1 className="text-5xl font-black uppercase text-violet-400 tracking-tighter drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">Hierarchy</h1>
                        <p className="text-black font-bold opacity-60 uppercase tracking-widest">Interactive Org Chart</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-white text-black p-2 rounded-xl border-3 border-black shadow-hard-sm">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><ZoomOut className="w-5 h-5" /></button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Maximize className="w-5 h-5" /></button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><ZoomIn className="w-5 h-5" /></button>
                </div>
            </header>

            <div className="flex-1 w-full max-w-[1200px] mx-auto bg-gray-50 rounded-[3rem] border-4 border-black shadow-hard-xl relative overflow-hidden cursor-move" ref={containerRef}>

                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {lines.map(line => (
                        <path
                            key={line.id}
                            d={`M ${line.x1} ${line.y1} C ${line.x1} ${line.y1 + 50}, ${line.x2} ${line.y2 - 50}, ${line.x2} ${line.y2}`}
                            fill="none"
                            stroke="black"
                            strokeWidth="4"
                            className="drop-shadow-sm"
                        />
                    ))}
                </svg>

                {/* Nodes */}
                {nodes.map(node => (
                    <motion.div
                        key={node.id}
                        drag
                        dragConstraints={containerRef}
                        dragElastic={0}
                        dragMomentum={false}
                        onDrag={(e, info) => handleDrag(node.id, e, info)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ x: node.x, y: node.y, position: 'absolute' }}
                        className="w-40 flex flex-col items-center z-10 cursor-grab active:cursor-grabbing group hover:z-50"
                    >
                        {/* Avatar */}
                        <div className={`w-20 h-20 rounded-full ${node.color} border-4 border-black shadow-[4px_4px_0_#000] flex items-center justify-center text-4xl mb-3 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_#000] transition-all relative`}>
                            {node.icon}
                            {node.type === 'root' && (
                                <div className="absolute -top-4 -right-4 bg-black text-white px-2 py-1 rounded-lg font-black uppercase text-[10px] border-2 border-white rotate-12">
                                    Leader
                                </div>
                            )}
                        </div>

                        {/* Details */}
                        <div className="bg-white text-black px-4 py-2 rounded-xl border-3 border-black font-black uppercase text-sm shadow-[4px_4px_0_#000] text-center w-full truncate mb-1 pointer-events-none">
                            {node.name}
                        </div>
                        <div className="bg-black text-white px-3 py-1 rounded-md font-bold uppercase text-[10px] tracking-widest text-center shadow-sm pointer-events-none">
                            {node.role}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="absolute bottom-8 right-8 z-30">
                <button className="bg-black text-white px-6 py-4 rounded-full font-black uppercase shadow-[8px_8px_0_rgba(167,139,250,1)] hover:translate-y-1 hover:shadow-[4px_4px_0_rgba(167,139,250,1)] transition-all flex items-center gap-2 border-4 border-black">
                    <Users className="w-5 h-5" /> Total Members: {nodes.length}
                </button>
            </div>
        </div>
    );
}
