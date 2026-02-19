import { createContext, useState, useCallback, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

type ToastVariant = 'success' | 'error' | 'warning' | 'info';

interface Toast {
    id: string;
    message: string;
    variant: ToastVariant;
}

interface ToastContextValue {
    toast: (message: string, variant?: ToastVariant) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);

const ICONS: Record<ToastVariant, typeof CheckCircle> = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: Info,
};

const COLORS: Record<ToastVariant, string> = {
    success: 'border-green-500 bg-black',
    error: 'border-red-500   bg-black',
    warning: 'border-yellow-400 bg-black',
    info: 'border-blue-500  bg-black',
};

const ICON_COLORS: Record<ToastVariant, string> = {
    success: 'text-green-400',
    error: 'text-red-400',
    warning: 'text-yellow-400',
    info: 'text-blue-400',
};

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const toast = useCallback((message: string, variant: ToastVariant = 'info') => {
        const id = Math.random().toString(36).slice(2);
        setToasts(prev => [...prev, { id, message, variant }]);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== id));
        }, 4000);
    }, []);

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
                <AnimatePresence>
                    {toasts.map(t => {
                        const Icon = ICONS[t.variant];
                        return (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, x: 60, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 60, scale: 0.9 }}
                                className={`pointer-events-auto flex items-start gap-3 px-5 py-4 rounded-2xl border-3 shadow-hard-xl text-white font-semibold text-sm ${COLORS[t.variant]}`}
                            >
                                <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${ICON_COLORS[t.variant]}`} />
                                <span className="flex-1">{t.message}</span>
                                <button
                                    onClick={() => setToasts(prev => prev.filter(x => x.id !== t.id))}
                                    className="flex-shrink-0 text-gray-500 hover:text-white transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
}

 
