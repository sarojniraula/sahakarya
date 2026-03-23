export type EventItem = {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    fullDescription: string[];
    date: string;
    location: string;
    image?: string;
};

import teejImage from '../assets/teej-2025.jpg';
import tiharImage from '../assets/tihar-2025.jpg';

export const events: EventItem[] = [
    {
        id: 'teej-2025',
        title: 'Teej Celebration 2025',
        category: 'Cultural Event',
        shortDescription:
            'A joyful community gathering celebrating Teej with music, traditional dress, dancing, and togetherness.',
        fullDescription: [
            'Teej Celebration 2025 brought our community together in a warm and joyful atmosphere. Families and friends gathered to celebrate tradition, culture, and togetherness.',
            'The program included music, dancing, traditional attire, and shared moments that strengthened community bonds. It was a meaningful occasion for participants of all ages.',
            'Events like Teej are important to our community because they help preserve cultural identity while creating a welcoming space for connection and celebration in Finland.'
        ],
        date: '2025',
        location: 'Finland',
        image: teejImage
    },
    {
        id: 'tihar-2025',
        title: 'Tihar Celebration 2025',
        category: 'Cultural Event',
        shortDescription:
            'A vibrant celebration of lights, traditions, and togetherness, bringing the community together to honor Tihar with music, decorations, and cultural activities.',
        fullDescription: [
            'Tihar Celebration 2025 was a colorful and heartwarming event that brought our community together to celebrate one of the most beautiful festivals of lights. The venue was filled with traditional decorations, diyas, and a joyful atmosphere that reflected the spirit of Tihar.',
            'Participants enjoyed cultural programs including music, dancing, and traditional rituals that honored the different days of the festival. The celebration created a strong sense of connection, especially for families and individuals living away from home.',
            'Events like Tihar play an important role in preserving our cultural heritage while strengthening community bonds. It was a memorable gathering that highlighted unity, tradition, and the joy of celebrating together in Finland.'
        ],
        date: '2025',
        location: 'Finland',
        image: tiharImage
    }, 
    {
        id: 'family-meetup',
        title: 'Family Meetup',
        category: 'Community Gathering',
        shortDescription:
            'Bringing families together to build friendships, strengthen our network, and create shared memories.',
        fullDescription: [
            'Our family meetup focuses on connection, support, and meaningful time together.',
            'It provides a friendly setting where families can meet, share experiences, and strengthen relationships within the community.'
        ],
        date: 'Upcoming',
        location: 'To be announced'
    },
    {
        id: 'upcoming-cultural-program',
        title: 'Upcoming Cultural Program',
        category: 'Future Event',
        shortDescription:
            'More celebrations, gatherings, and community activities are being planned for the coming season.',
        fullDescription: [
            'We are currently planning more community activities and cultural programs.',
            'Further details will be shared as plans are finalized.'
        ],
        date: 'Upcoming',
        location: 'To be announced'
    }
];