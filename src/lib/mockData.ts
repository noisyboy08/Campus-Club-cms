
import { Club, Event, Profile } from "../types/database";

// Mock Data matching the SQL injection script
export const MOCK_PROFILE: Profile = {
    id: '11111111-1111-1111-1111-111111111111',
    full_name: 'Alex Sterling',
    department: 'Computer Science',
    role: 'club_president',
    e_id_active: true,
    created_at: new Date().toISOString()
};

export const MOCK_CLUBS: Club[] = [
    {
        id: '1',
        name: 'Cyber Defense Syndicate',
        description: 'Exploring browser vulnerabilities and system security. We hack to protect.',
        category: 'Tech',
        president_id: '11111111-1111-1111-1111-111111111111',
        constellation_x: 2.5,
        constellation_y: 1.2,
        constellation_z: 0,
        created_at: new Date().toISOString()
    },
    {
        id: '2',
        name: 'Robotics & AI',
        description: 'Building autonomous drones and battle bots. The future is automated.',
        category: 'Tech',
        president_id: null,
        constellation_x: -2.0,
        constellation_y: -1.5,
        constellation_z: 1.0,
        created_at: new Date().toISOString()
    },
    {
        id: '3',
        name: 'Creative Arts & Design',
        description: 'Digital art, 3D modeling, and traditional mediums. Unleash your inner artist.',
        category: 'Creative',
        president_id: null,
        constellation_x: 0,
        constellation_y: 3.0,
        constellation_z: -2.0,
        created_at: new Date().toISOString()
    },
    {
        id: '4',
        name: 'Debate & Oratory',
        description: 'Master the art of persuasion. Weekly debates and public speaking workshops.',
        category: 'Cultural',
        president_id: null,
        constellation_x: 1.5,
        constellation_y: -2.0,
        constellation_z: 0.5,
        created_at: new Date().toISOString()
    },
    {
        id: '5',
        name: 'Varsity Esports',
        description: 'Competitive gaming at the collegiate level. Valorant, League, and Rocket League.',
        category: 'Sports',
        president_id: null,
        constellation_x: -1.0,
        constellation_y: 2.5,
        constellation_z: 1.5,
        created_at: new Date().toISOString()
    },
    {
        id: '6',
        name: 'Entrepreneurship Cell',
        description: 'From idea to IPO. Networking, pitch competitions, and startup incubation.',
        category: 'Business',
        president_id: null,
        constellation_x: 3.0,
        constellation_y: 0,
        constellation_z: -1.0,
        created_at: new Date().toISOString()
    }
];

export const MOCK_EVENTS: Event[] = [
    {
        id: '101',
        club_id: '1',
        title: 'Zero-Day Exploit Workshop',
        description: 'Live demo of browser security flaws and how to patch them.',
        event_date: '2026-03-15T10:00:00Z',
        location: 'Lab 304',
        budget_allocated: 5000.00,
        is_published: true,
        bg_color: 'bg-green-400',
        created_at: new Date().toISOString()
    },
    {
        id: '102',
        club_id: '2',
        title: 'Bot Wars 2026',
        description: 'The ultimate robot combat tournament. 16 teams, one winner.',
        event_date: '2026-04-10T14:00:00Z',
        location: 'Main Auditorium',
        budget_allocated: 12000.00,
        is_published: true,
        bg_color: 'bg-pop-purple',
        created_at: new Date().toISOString()
    },
    {
        id: '103',
        club_id: '3',
        title: 'Digital Art Showcase',
        description: 'Exhibition of student artwork including VR experiences.',
        event_date: '2026-03-22T11:00:00Z',
        location: 'Art Gallery',
        budget_allocated: 3000.00,
        is_published: true,
        bg_color: 'bg-pop-pink',
        created_at: new Date().toISOString()
    },
    {
        id: '104',
        club_id: '5',
        title: 'Valorant LAN Party',
        description: 'All-nighter gaming session with prizes for top fraggers.',
        event_date: '2026-03-18T20:00:00Z',
        location: 'Student Hub',
        budget_allocated: 2000.00,
        is_published: true,
        bg_color: 'bg-pop-yellow',
        created_at: new Date().toISOString()
    },
    {
        id: '105',
        club_id: '6',
        title: 'Startup Pitch Night',
        description: 'Pitch your idea to real VCs and win seed funding.',
        event_date: '2026-04-05T18:00:00Z',
        location: 'Conference Hall A',
        budget_allocated: 8000.00,
        is_published: true,
        bg_color: 'bg-blue-400',
        created_at: new Date().toISOString()
    }
];
