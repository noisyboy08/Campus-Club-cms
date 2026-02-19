
export const generateEventCopilot = (clubName: string) => {
    // Simple rule-based generation to simulate AI
    const keywords = clubName.toLowerCase().split(' ');

    let title = "General Club Gathering";
    let budget = 5000;

    if (keywords.includes('tech') || keywords.includes('coding')) {
        title = "Hackathon: Code the Future";
        budget = 25000;
    } else if (keywords.includes('art') || keywords.includes('design')) {
        title = "Canvas & Creativity Workshop";
        budget = 8000;
    } else if (keywords.includes('music') || keywords.includes('dance')) {
        title = "Rhythm Night: Live Performance";
        budget = 15000;
    } else if (keywords.includes('science') || keywords.includes('robo')) {
        title = "Robotics Showcase Expo";
        budget = 20000;
    }

    return {
        title,
        budget,
        forecast: `Estimated attendance: ${Math.floor(Math.random() * 100) + 50} students.`,
        description: `Join the ${clubName} for an exciting event! ${title} will be a great opportunity to learn and network.`
    };
};
