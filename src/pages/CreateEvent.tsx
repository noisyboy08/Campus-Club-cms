import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VenueMap } from '../components/VenueMap';
import { ArrowLeft, Check, Calendar, MapPin, DollarSign, Type } from 'lucide-react';
import { Star4Point } from '../components/Scribbles';

export function CreateEvent() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        budget: '',
        venue: ''
    });

    const handleNext = () => setStep(s => s + 1);
    const handleBack = () => setStep(s => s - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would send data to Supabase
        console.log("Submitting:", formData);
        navigate('/dashboard');
    };

    return (
        <main className="min-h-screen pb-20 pt-32 px-4 bg-pop-bg">
            <div className="mx-auto max-w-4xl">

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => navigate('/dashboard')} className="p-2 bg-white rounded-full border-2 border-black hover:bg-gray-100">
                        <ArrowLeft className="w-6 h-6 text-black" />
                    </button>
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase">New Event Application</h1>
                </div>

                {/* Progress Bar */}
                <div className="mb-12 flex items-center justify-between relative">
                    <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-800 -z-10 rounded-full" />

                    {[1, 2, 3].map((s) => (
                        <div key={s} className="flex flex-col items-center gap-2">
                            <div className={`w-12 h-12 rounded-full border-3 border-black flex items-center justify-center font-black text-xl transition-colors ${step >= s ? 'bg-pop-yellow text-black' : 'bg-gray-700 text-gray-400'
                                }`}>
                                {step > s ? <Check className="w-6 h-6" /> : s}
                            </div>
                            <span className={`text-xs font-bold uppercase ${step >= s ? 'text-pop-yellow' : 'text-gray-600'}`}>
                                {s === 1 ? 'Details' : s === 2 ? 'Venue' : 'Review'}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Form Container */}
                <div className="bg-pop-white rounded-[2.5rem] p-8 md:p-12 border-3 border-black shadow-hard relative overflow-hidden">

                    {/* Decorative Binding */}
                    <div className="absolute top-0 left-8 w-4 h-full bg-black/5 border-r border-black/10 hidden md:block" />

                    <form onSubmit={handleSubmit} className="relative z-10 pl-0 md:pl-12">

                        {/* Step 1: Basic Details */}
                        {step === 1 && (
                            <div className="space-y-6">
                                <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-2">
                                    <Type className="w-8 h-8" /> Event Details
                                </h2>

                                <div className="space-y-2">
                                    <label className="font-bold text-sm uppercase text-gray-500">Event Title</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Hackathon 2026"
                                        className="neo-input"
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="font-bold text-sm uppercase text-gray-500">Description</label>
                                    <textarea
                                        placeholder="What is this event about?"
                                        className="neo-input min-h-[120px]"
                                        value={formData.description}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="font-bold text-sm uppercase text-gray-500">Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute top-3.5 left-4 text-gray-400 w-5 h-5" />
                                            <input
                                                type="date"
                                                className="neo-input pl-12"
                                                value={formData.date}
                                                onChange={e => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-bold text-sm uppercase text-gray-500">Budget (INR)</label>
                                        <div className="relative">
                                            <DollarSign className="absolute top-3.5 left-4 text-gray-400 w-5 h-5" />
                                            <input
                                                type="number"
                                                placeholder="5000"
                                                className="neo-input pl-12"
                                                value={formData.budget}
                                                onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 flex justify-end">
                                    <button type="button" onClick={handleNext} className="neo-btn neo-btn-primary">
                                        Next Step
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Venue Selection */}
                        {step === 2 && (
                            <div className="space-y-6">
                                <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-2">
                                    <MapPin className="w-8 h-8" /> Select Venue
                                </h2>

                                <div className="p-4 bg-gray-100 rounded-2xl border-2 border-black">
                                    <VenueMap />
                                </div>
                                <p className="text-sm font-bold text-gray-500 text-center">
                                    Click on a venue in the 3D map to select it.
                                </p>

                                <div className="pt-6 flex justify-between">
                                    <button type="button" onClick={handleBack} className="font-bold underline text-gray-500 hover:text-black">
                                        Back
                                    </button>
                                    <button type="button" onClick={handleNext} className="neo-btn neo-btn-primary">
                                        Confirm Venue
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Review */}
                        {step === 3 && (
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-3xl font-black uppercase">Review Application</h2>
                                    <Star4Point className="w-12 h-12 text-pop-yellow animate-spin-slow" />
                                </div>

                                <div className="bg-pop-purple text-white p-6 rounded-2xl border-3 border-black shadow-hard-sm space-y-4">
                                    <div>
                                        <span className="text-xs font-bold uppercase opacity-70">Event</span>
                                        <h3 className="text-2xl font-black">{formData.title || 'Untitled Event'}</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-xs font-bold uppercase opacity-70">Date</span>
                                            <p className="font-bold text-lg">{formData.date || 'TBD'}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold uppercase opacity-70">Budget</span>
                                            <p className="font-bold text-lg">₹{formData.budget || '0'}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 flex justify-between items-center">
                                    <button type="button" onClick={handleBack} className="font-bold underline text-gray-500 hover:text-black">
                                        Go Back
                                    </button>
                                    <button type="submit" className="neo-btn bg-pop-pink text-white border-black hover:bg-pop-black">
                                        Submit Application
                                    </button>
                                </div>
                            </div>
                        )}

                    </form>
                </div>
            </div>
        </main>
    );
}
