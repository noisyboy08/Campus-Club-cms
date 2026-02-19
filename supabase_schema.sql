
-- 1. Database Schema: Core Tables

-- Create an ENUM for strict Role-Based Access Control (RBAC)
CREATE TYPE user_role AS ENUM ('student', 'club_president', 'admin');

-- 1. Profiles Table (Extends Supabase Auth)
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT NOT NULL,
    department TEXT,
    role user_role DEFAULT 'student'::user_role,
    e_id_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Clubs Table
CREATE TABLE public.clubs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    category TEXT,
    president_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    -- Storing 3D coordinates for your floating constellation UI
    constellation_x FLOAT DEFAULT 0,
    constellation_y FLOAT DEFAULT 0,
    constellation_z FLOAT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Events Table
CREATE TABLE public.events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    club_id UUID REFERENCES public.clubs(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    event_date TIMESTAMPTZ NOT NULL,
    budget_allocated DECIMAL(10, 2) DEFAULT 0.00,
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Event Passes (The Antigravity E-Tags)
CREATE TABLE public.event_passes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
    student_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    qr_hash TEXT UNIQUE NOT NULL, -- Dynamic hash for secure scanning
    is_scanned BOOLEAN DEFAULT false,
    scanned_at TIMESTAMPTZ,
    UNIQUE(event_id, student_id) -- A student can only have one pass per event
);

-- 2. Row Level Security (RLS) Policies

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clubs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_passes ENABLE ROW LEVEL SECURITY;

-- PROFILES: Anyone can view profiles (for networking), but users can only update their own
CREATE POLICY "Profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- CLUBS: Anyone can view clubs. Only Admins can create them. Presidents can update their own.
CREATE POLICY "Clubs are viewable by everyone" ON public.clubs FOR SELECT USING (true);
CREATE POLICY "Presidents can update their club" ON public.clubs FOR UPDATE USING (auth.uid() = president_id);

-- EVENTS: Anyone can view published events. Presidents can manage events for their club.
CREATE POLICY "Published events are viewable by everyone" ON public.events FOR SELECT USING (is_published = true);
CREATE POLICY "Presidents can manage club events" ON public.events FOR ALL USING (
    EXISTS (SELECT 1 FROM public.clubs WHERE clubs.id = events.club_id AND clubs.president_id = auth.uid())
);

-- EVENT PASSES (E-TAGS): Students see their own passes. Presidents can view/scan passes for their events.
CREATE POLICY "Students can view own passes" ON public.event_passes FOR SELECT USING (auth.uid() = student_id);
CREATE POLICY "Presidents can scan/update passes" ON public.event_passes FOR UPDATE USING (
    EXISTS (
        SELECT 1 FROM public.events 
        JOIN public.clubs ON events.club_id = clubs.id 
        WHERE events.id = event_passes.event_id AND clubs.president_id = auth.uid()
    )
);

-- 3. Injecting Initial Mock Data

-- Note: In a live environment, the profile ID must match an active Supabase Auth User ID.
-- For local UI testing, you can insert dummy data like this:

-- INSERT INTO public.profiles (id, full_name, department, role) 
-- VALUES 
-- ('11111111-1111-1111-1111-111111111111', 'Uday Babasaheb Dolas', 'B.Tech CT', 'club_president'),
-- ('22222222-2222-2222-2222-222222222222', 'Alex Carter', 'Computer Science', 'student');

-- INSERT INTO public.clubs (id, name, description, category, president_id, constellation_x, constellation_y, constellation_z)
-- VALUES 
-- ('33333333-3333-3333-3333-333333333333', 'Cyber Defense Syndicate', 'Exploring browser vulnerabilities and system security.', 'Tech', '11111111-1111-1111-1111-111111111111', 2.5, 1.2, -5.0);
