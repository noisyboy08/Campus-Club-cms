
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Hidden on home page
    if (pathnames.length === 0) return null;

    return (
        <nav className="flex items-center gap-2 mb-6 text-sm overflow-x-auto pb-2 pl-1 select-none">
            <Link to="/" className="breadcrumb-link group">
                <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline">Home</span>
            </Link>

            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return (
                    <div key={to} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-gray-400" />

                        {isLast ? (
                            <span className="breadcrumb-active" aria-current="page">
                                {value.replace(/-/g, ' ')}
                            </span>
                        ) : (
                            <Link to={to} className="breadcrumb-link">
                                {value.replace(/-/g, ' ')}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
