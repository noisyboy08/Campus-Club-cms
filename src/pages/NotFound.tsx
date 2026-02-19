
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center bg-graph-paper relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pop-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pop-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

            <div className="relative z-10">
                <h1 className="text-[10rem] font-black leading-none tracking-tighter text-transparent text-stroke-black opacity-50 select-none">
                    404
                </h1>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] bg-black text-white px-8 py-4 rounded-xl shadow-hard border-3 border-white">
                    <h2 className="text-4xl font-black uppercase">Lost Signal</h2>
                </div>
            </div>

            <p className="max-w-md text-xl font-bold mt-8 mb-8 text-gray-600">
                The page you are looking for has disconnected from the server. It might have been moved to the <span className="text-pop-pink underline">Archives</span>.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
                <Link to="/" className="neo-btn neo-btn-primary">
                    Return Home
                </Link>
                <Link to="/apps" className="neo-btn bg-white hover:bg-gray-50 text-black">
                    <Search className="w-5 h-5" /> Search Apps
                </Link>
            </div>
        </div>
    );
}
