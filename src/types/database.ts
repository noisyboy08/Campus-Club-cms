
export type UserRole = 'student' | 'club_president' | 'admin';

export interface Profile {
    id: string; // UUID
    full_name: string;
    department: string | null;
    role: UserRole;
    e_id_active: boolean;
    created_at: string;
}

export interface Club {
    id: string; // UUID
    name: string;
    description: string | null;
    category: string | null;
    president_id: string | null; // UUID
    constellation_x: number;
    constellation_y: number;
    constellation_z: number;
    created_at: string;
}

export interface Event {
    id: string; // UUID
    club_id: string; // UUID
    title: string;
    description: string | null;
    event_date: string;
    location?: string;
    bg_color?: string;
    budget_allocated: number;
    is_published: boolean;
    created_at: string;
}

export interface EventPass {
    id: string; // UUID
    event_id: string; // UUID
    student_id: string; // UUID
    qr_hash: string;
    is_scanned: boolean;
    scanned_at: string | null;
}
