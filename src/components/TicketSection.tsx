
import { Star4Point } from "./Scribbles";

export const TicketSection = () => {
    return (
        <section className="mx-auto max-w-5xl px-4 mt-24">
            <div className="relative bg-pop-purple rounded-3xl min-h-[400px] flex overflow-hidden border-3 border-pop-black shadow-hard-xl">

                {/* Decorative Paper Clip */}
                <div className="absolute top-[-10px] right-20 z-20 rotate-12">
                    <div className="w-8 h-16 border-4 border-black rounded-full bg-gray-200"></div>
                </div>

                {/* Left Side (Content) */}
                <div className="flex-1 p-8 md:p-12 relative flex flex-col justify-center text-white">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight drop-shadow-[4px_4px_0_#000]">
                        Get Your Pass <br /> To The Future
                    </h2>
                    <p className="text-lg font-bold mb-8 max-w-md drop-shadow-[2px_2px_0_#000]">
                        Sign up now to access 3D venue maps, AI recruitment, and exclusive club events.
                    </p>

                    {/* "Tear" visual effect via SVG Mask or Border */}
                    <div className="absolute right-0 top-0 bottom-0 w-8 h-full">
                        <div className="h-full w-full border-r-4 border-dashed border-black/30"></div>
                    </div>
                </div>

                {/* Zig Zag Divider (CSS trick) */}
                <div className="relative w-12 bg-pop-bg flex flex-col justify-between items-center overflow-hidden">
                    {/* Circles mask to create punched look */}
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-pop-bg -ml-4 border-r-2 border-pop-purple"></div>
                    ))}
                </div>

                {/* Right Side (Form) */}
                <div className="w-full md:w-[45%] bg-pop-purple p-8 md:p-12 flex flex-col justify-center border-l-4 border-dashed border-black/20">
                    <div className="bg-white p-6 rounded-2xl border-3 border-pop-black shadow-hard rotate-1">
                        <form className="space-y-4">
                            <div>
                                <label className="text-xs font-black uppercase tracking-wider mb-1 block text-pop-black">Student Email</label>
                                <input type="email" placeholder="john@university.edu" className="neo-input" />
                            </div>
                            <div>
                                <label className="text-xs font-black uppercase tracking-wider mb-1 block text-pop-black">Your Name</label>
                                <input type="text" placeholder="John Doe" className="neo-input" />
                            </div>
                            <button className="w-full mt-2 neo-btn neo-btn-primary flex justify-center items-center gap-2">
                                Join Now <Star4Point className="w-4 h-4 fill-black" />
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};
