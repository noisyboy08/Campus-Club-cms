
export const Star4Point = ({ className = "w-6 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
    <svg viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" stroke="black" strokeWidth="1.5" />
    </svg>
);

export const Squiggle = ({ className = "w-20 h-6", color = "currentColor" }: { className?: string, color?: string }) => (
    <svg viewBox="0 0 100 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 10C10 10 10 2.5 17.5 2.5C25 2.5 25 10 32.5 10C40 10 40 2.5 47.5 2.5C55 2.5 55 10 62.5 10C70 10 70 2.5 77.5 2.5C85 2.5 85 10 92.5 10" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
);

export const PaperClip = ({ className = "w-8 h-8", color = "#F0F0F0" }: { className?: string, color?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M16 11V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16V9" stroke="black" strokeWidth="2" strokeLinecap="round" />
        <rect x="7" y="5" width="10" height="15" rx="5" stroke="black" strokeWidth="0" fill={color} fillOpacity="0.4" />
    </svg>
);

export const Flower = ({ className = "w-10 h-10", color = "#FF3385" }: { className?: string, color?: string }) => (
    <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="6" fill="#FFF033" stroke="black" strokeWidth="2" />
        <path d="M20 12C20 6 14 6 14 12C14 18 20 18 20 12Z" fill={color} stroke="black" strokeWidth="2" />
        <path d="M20 28C20 34 26 34 26 28C26 22 20 22 20 28Z" fill={color} stroke="black" strokeWidth="2" />
        <path d="M28 20C34 20 34 26 34 26C28 26 28 20 28 20Z" fill={color} stroke="black" strokeWidth="2" />
        <path d="M12 20C6 20 6 14 6 14C12 14 12 20 12 20Z" fill={color} stroke="black" strokeWidth="2" />
    </svg>
);

export const SpiralBinding = () => (
    <div className="flex flex-col gap-3 py-6 h-full items-center">
        {[...Array(8)].map((_, i) => (
            <div key={i} className="relative w-8 h-4">
                {/* The wire loop */}
                <div className="absolute inset-x-0 h-4 border-t-4 border-b-4 border-black rounded-full skew-y-12 bg-gray-400 z-10"></div>
                {/* Hole Punch shadows */}
                <div className="absolute -left-4 top-1 w-4 h-4 bg-black rounded-full"></div>
                <div className="absolute -right-4 top-1 w-4 h-4 bg-black rounded-full"></div>
            </div>
        ))}
    </div>
)
