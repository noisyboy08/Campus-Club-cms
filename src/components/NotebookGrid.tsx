
interface NotebookGridProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export const NotebookGrid = ({ children, title, className = "" }: NotebookGridProps) => {
    return (
        <div className={`relative bg-pop-white rounded-[2.5rem] p-2 md:p-4 border-3 border-black shadow-hard ${className}`}>
            {/* Notebook Binder Holes Top */}
            <div className="absolute top-4 left-0 w-full flex justify-between px-8 md:px-16 z-10">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-pop-bg border-2 border-gray-400 shadow-inner" />
                ))}
            </div>

            {/* Content Container */}
            <div className="bg-pop-white w-full h-full rounded-[2rem] pt-12 md:pt-16 pb-8 px-4 md:px-8">
                {title && (
                    <h2 className="text-4xl font-black text-pop-black mb-8 text-center uppercase tracking-tight">
                        {title}
                    </h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const BentoItem = ({ children, className = "", span = 1 }: { children: React.ReactNode, className?: string, span?: number }) => {
    return (
        <div className={`rounded-xl p-6 text-pop-black flex flex-col justify-between h-full min-h-[180px] ${span === 2 ? 'col-span-2' : 'col-span-1'} ${className}`}>
            {children}
        </div>
    );
};
