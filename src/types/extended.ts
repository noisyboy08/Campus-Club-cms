
import { Event, Profile } from "./database";

// Extended Types

export type EventStatus = 'draft' | 'pending_mentor' | 'pending_dean' | 'approved' | 'rejected';

export interface ExtendedEvent extends Event {
    status: EventStatus;
    mentor_approval_at: string | null;
    dean_approval_at: string | null;
    rejection_reason: string | null;
}

export interface Venue {
    id: string;
    name: string;
    capacity: number;
    location_x: number;
    location_y: number;
    location_z: number;
    is_available: boolean;
}

export interface RecruitmentRole {
    id: string;
    club_id: string;
    title: string;
    description: string | null;
    required_skills: string[];
    is_open: boolean;
}

export interface Expense {
    id: string;
    club_id: string;
    description: string;
    amount: number;
    receipt_url: string | null;
    category: string;
    expense_date: string;
}

export interface GamifiedProfile extends Profile {
    xp_points: number;
    badge_tier: 'Standard' | 'Bronze' | 'Silver' | 'Gold' | 'Holographic';
}
