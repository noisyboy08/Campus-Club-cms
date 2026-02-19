
-- EXTENDED SCHEMA: Advanced Features

-- 1. Multi-Tiered Event Approval
CREATE TYPE event_status AS ENUM ('draft', 'pending_mentor', 'pending_dean', 'approved', 'rejected');

ALTER TABLE public.events 
ADD COLUMN status event_status DEFAULT 'draft'::event_status,
ADD COLUMN mentor_approval_at TIMESTAMPTZ,
ADD COLUMN dean_approval_at TIMESTAMPTZ,
ADD COLUMN rejection_reason TEXT;

-- Audit Log for Approvals
CREATE TABLE public.event_audit_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE,
    changed_by UUID REFERENCES public.profiles(id),
    old_status event_status,
    new_status event_status,
    changed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Interactive 3D Venue Booking
CREATE TABLE public.venues (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    capacity INT,
    location_x FLOAT DEFAULT 0,
    location_y FLOAT DEFAULT 0,
    location_z FLOAT DEFAULT 0,
    is_available BOOLEAN DEFAULT true
);

CREATE TABLE public.venue_bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    venue_id UUID REFERENCES public.venues(id),
    event_id UUID REFERENCES public.events(id),
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    status TEXT DEFAULT 'confirmed',
    UNIQUE(venue_id, start_time, end_time) -- Simple conflict prevention
);

-- 3. AI-Driven Recruitment (Talent Matching)
CREATE TABLE public.recruitment_roles (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    club_id UUID REFERENCES public.clubs(id),
    title TEXT NOT NULL, -- e.g. "UI Desginer"
    description TEXT,
    required_skills TEXT[], -- Array of strings e.g. ['Figma', 'React']
    is_open BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.student_skills (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    student_id UUID REFERENCES public.profiles(id),
    skill_name TEXT NOT NULL,
    proficiency_level INT DEFAULT 1, -- 1-5 scale
    UNIQUE(student_id, skill_name)
);

-- 4. Smart Budgeting & Expenses
CREATE TABLE public.expenses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    club_id UUID REFERENCES public.clubs(id),
    description TEXT NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    receipt_url TEXT,
    category TEXT, -- 'Food', 'Logistics', etc.
    expense_date TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Gamified Attendance & Leaderboards
ALTER TABLE public.profiles
ADD COLUMN xp_points INT DEFAULT 0,
ADD COLUMN badge_tier TEXT DEFAULT 'Standard'; -- 'Bronze', 'Silver', 'Gold', 'Holographic'

ALTER TABLE public.clubs
ADD COLUMN total_engagement_score INT DEFAULT 0;

-- Trigger to update XP on event scanning (Pseudocode logic)
-- CREATE OR REPLACE FUNCTION award_xp() ...
