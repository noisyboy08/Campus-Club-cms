
import { Star4Point } from "./Scribbles";

export const SpiralNotebook = () => {
    return (
        <section className="mx-auto max-w-5xl px-4 mt-24 mb-24">
            <div className="text-center mb-12">
                <div className="inline-block bg-pop-yellow border-2 border-black px-4 py-1 rounded-full font-bold uppercase text-sm mb-4 shadow-hard-sm rotate-[-2deg]">
                    Membership Tiers
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white">Choose Your Path</h2>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-0 max-w-4xl mx-auto">

                {/* Left Page (Standard) */}
                <div className="flex-1 bg-white rounded-l-3xl border-3 border-black border-r-0 shadow-[-10px_10px_0_#000] p-8 relative">
                    <div className="bg-pop-purple/20 absolute inset-0 rounded-l-3xl pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8C9EFF 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    <div className="relative z-10">
                        <div className="bg-pop-purple text-white px-4 py-2 inline-block font-black uppercase text-xl border-3 border-black -rotate-2 shadow-hard-sm mb-6">
                            Standard
                        </div>
                        <ul className="space-y-4 font-bold text-pop-black">
                            <li className="flex items-center gap-3 border-b-2 border-dashed border-gray-200 pb-2">
                                <span className="text-green-500 text-xl">✓</span> Access all Public Events
                            </li>
                            <li className="flex items-center gap-3 border-b-2 border-dashed border-gray-200 pb-2">
                                <span className="text-green-500 text-xl">✓</span> Basic E-ID Card
                            </li>
                            <li className="flex items-center gap-3 border-b-2 border-dashed border-gray-200 pb-2">
                                <span className="text-green-500 text-xl">✓</span> Vote in one club
                            </li>
                        </ul>
                        <div className="mt-8">
                            <button className="w-full neo-btn bg-white hover:bg-gray-50 border-3 border-black">
                                Free
                            </button>
                        </div>
                    </div>
                </div>

                {/* Spiral Binding Column */}
                <div className="w-12 md:w-16 bg-gray-800 relative z-20 flex flex-col items-center justify-between py-6 border-y-3 border-black">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-16 h-6 bg-gray-300 rounded-full border-3 border-black shadow-inner"></div>
                    ))}
                </div>

                {/* Right Page (Pro) */}
                <div className="flex-1 bg-white rounded-r-3xl border-3 border-black border-l-0 shadow-[10px_10px_0_#000] p-8 relative overflow-hidden">
                    {/* Pink accents */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-pop-pink rounded-bl-full border-l-3 border-b-3 border-black -mr-1 -mt-1 z-0"></div>
                    <Star4Point className="absolute bottom-4 right-4 w-12 h-12 text-pop-pink animate-spin-slow z-0" />

                    <div className="relative z-10">
                        <div className="bg-pop-pink text-white px-4 py-2 inline-block font-black uppercase text-xl border-3 border-black rotate-2 shadow-hard-sm mb-6">
                            Pro Access
                        </div>
                        <ul className="space-y-4 font-bold text-pop-black">
                            <li className="flex items-center gap-3 border-b-2 border-dashed border-gray-200 pb-2">
                                <span className="text-pop-pink text-xl">★</span> Everything in Standard
                            </li>
                            <li className="flex items-center gap-3 border-b-2 border-dashed border-gray-200 pb-2">
                                <span className="text-pop-pink text-xl">★</span> Holographic E-ID
                            </li>
                            <li className="flex items-center gap-3 border-b-2 border-dashed border-gray-200 pb-2">
                                <span className="text-pop-pink text-xl">★</span> Priority Venue Booking
                            </li>
                            <li className="flex items-center gap-3 border-b-2 border-dashed border-gray-200 pb-2">
                                <span className="text-pop-pink text-xl">★</span> 20% Merch Discount
                            </li>
                        </ul>
                        <div className="mt-8">
                            <button className="w-full neo-btn bg-pop-pink text-white hover:brightness-110">
                                4,999 / Year
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
