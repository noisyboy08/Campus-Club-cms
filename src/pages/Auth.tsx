import { useState } from 'react';
import { Eye, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Squiggle, Star4Point } from '../components/Scribbles';

export function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate network request
        setTimeout(() => {
            setLoading(false);
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-pop-bg flex items-center justify-center p-4 relative overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-10 left-10 opacity-30 animate-spin-slow">
                <Star4Point className="w-48 h-48 text-pop-yellow" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-30 animate-pulse">
                <Squiggle className="w-48 h-48 text-pop-pink" />
            </div>

            <div className="grid md:grid-cols-2 max-w-4xl w-full bg-white rounded-[2rem] border-3 border-black shadow-hard overflow-hidden">

                {/* Visual Side */}
                <div className={`hidden md:flex flex-col justify-center p-12 relative overflow-hidden ${isLogin ? 'bg-pop-purple' : 'bg-pop-yellow'} transition-colors duration-500`}>
                    <div className="relative z-10 text-white mix-blend-difference">
                        <h1 className="text-6xl font-black uppercase leading-none mb-4">
                            {isLogin ? 'Welcome Back!' : 'Join the Club!'}
                        </h1>
                        <p className="text-xl font-bold opacity-90 max-w-xs">
                            {isLogin ? 'Ready to manage your events and crush some goals?' : 'Start your journey, earn XP, and lead the future.'}
                        </p>
                    </div>

                    {/* Decorative Circles */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full border-3 border-black opacity-20"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black rounded-full opacity-10"></div>
                </div>

                {/* Form Side */}
                <div className="p-8 md:p-12 bg-white flex flex-col justify-center relative">
                    <h2 className="text-3xl font-black uppercase mb-8 flex items-center gap-2">
                        {isLogin ? 'Sign In' : 'Sign Up'}
                        <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-wider">Full Name</label>
                                <input type="text" className="neo-input w-full" placeholder="John Doe" required />
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-wider">Email</label>
                            <input type="email" className="neo-input w-full" placeholder="you@university.edu" required />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <input type="password" className="neo-input w-full pr-10" placeholder="••••••••" required />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                                    <Eye className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-black text-white font-black uppercase tracking-widest text-sm hover:bg-pop-purple transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                        >
                            {loading ? 'Processing...' : (isLogin ? 'Enter Portal' : 'Create Account')}
                            {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm font-bold text-gray-500">
                            {isLogin ? "Don't have an account?" : "Already a member?"}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="ml-2 text-black underline decoration-2 decoration-pop-yellow hover:text-pop-purple hover:decoration-pop-purple transition-all"
                            >
                                {isLogin ? 'Sign Up' : 'Log In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
