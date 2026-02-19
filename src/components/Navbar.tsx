import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Navbar() {
    const [theme, toggle] = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-pop-white border-b-3 border-black shadow-hard-sm">
            <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between relative">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group z-50">
                    <div className="w-10 h-10 bg-pop-black text-white flex items-center justify-center font-black rounded-lg transform group-hover:rotate-6 transition-transform border-2 border-transparent group-hover:border-pop-yellow">
                        C
                    </div>
                    <span className="font-black text-xl text-black uppercase tracking-tight">
                        CAMS<span className="text-pop-pink">.OS</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/dashboard" className="font-bold text-black border-2 border-transparent hover:border-b-black transition-all px-1">
                        Dashboard
                    </Link>
                    <Link to="/clubs" className="font-bold text-gray-500 hover:text-black transition-colors">
                        Clubs
                    </Link>
                    <Link to="/events" className="font-bold text-gray-500 hover:text-black transition-colors">
                        Events
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4 z-50">
                    <button onClick={toggle} className="p-2 rounded-lg border-2 border-black hover:bg-pop-yellow transition-colors relative shadow-[2px_2px_0_#000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
                        {theme === 'dark' ? <Sun size={20} className="text-black" /> : <Moon size={20} className="text-black" />}
                    </button>

                    <button
                        className="md:hidden p-2 text-black border-2 border-black rounded-lg hover:bg-pop-pink"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Link
                        to="/auth"
                        className="hidden md:block px-6 py-2 bg-pop-black text-white font-black uppercase tracking-wider text-sm border-2 border-transparent hover:bg-white hover:text-pop-black hover:border-pop-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-y-[-2px] hover:translate-y-[0px]"
                    >
                        Sign In
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-pop-white border-b-3 border-black p-4 flex flex-col gap-4 shadow-hard md:hidden animate-in slide-in-from-top-2">
                    <Link
                        to="/dashboard"
                        className="p-3 font-black text-xl text-black border-2 border-transparent hover:bg-pop-yellow hover:border-black rounded-xl transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/clubs"
                        className="p-3 font-black text-xl text-black border-2 border-transparent hover:bg-pop-pink hover:border-black rounded-xl transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Clubs
                    </Link>
                    <Link
                        to="/events"
                        className="p-3 font-black text-xl text-black border-2 border-transparent hover:bg-pop-purple hover:border-black rounded-xl transition-all"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Events
                    </Link>
                    <Link
                        to="/auth"
                        className="p-3 font-black text-xl text-white bg-black border-2 border-black hover:bg-gray-800 rounded-xl transition-all text-center"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Sign In
                    </Link>
                </div>
            )}
        </header>
    );
}
