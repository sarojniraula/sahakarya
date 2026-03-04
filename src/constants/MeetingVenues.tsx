type MeetingVenueEntry = { name: string; date: string };

type MeetingRound = {
  label: string;
  venues: MeetingVenueEntry[];
};

const meetingVenues: Record<string, MeetingRound> = {
  round1: {
    label: "Round 1 (Mar 2024 - Apr 2026)",
    venues: [
      { name: "Dipak Jung Rayamajhi", date: "March 2024" },
      { name: "Parbat Prasai", date: "April 2024" },
      { name: "Pashupati Nepali", date: "September 2024" },
      { name: "Sushil Panta", date: "October 2024" },
      { name: "Krishna Prasad Adhikari", date: "November 2024" },
      { name: "Loknath Timsina", date: "December 2024" },
      { name: "Bharat Giri", date: "January 2025" },
      { name: "Rajendra Timsina", date: "February 2025" },
      { name: "Chudamani Parajuli", date: "March 2025" },
      { name: "Lok Raj Dhungana", date: "April 2025" },
      { name: "Suman Pudasaini", date: "September 2025" },
      { name: "Yuba Raj Regmi", date: "October 2025" },
      { name: "Saroj Niraula", date: "November 2025" },
      { name: "Dhaniram Sharma Bhandari", date: "December 2025" },
      { name: "Pashupati Sapkota", date: "January 2026" },
      { name: "Prem Khatri", date: "February 2026" },
      { name: "Alok Yadav", date: "March 2026" },
      { name: "Lila Nath Adhikari", date: "April 2026" }
    ]
  },

  round2: {
    label: "Round 2 (May 2026 - ?)",
    venues: [
      { name: "Bhim Lal Neupane", date: "May 2026" },
      { name: "Krishna Pandey", date: "September 2026" },
      { name: "Rajesh Rayamajhi", date: "October 2026" }
    ]
  }
};

export function getMeetingVenues(roundKey: keyof typeof meetingVenues) {
  const round = meetingVenues[roundKey];
  return { label: round.label, venues: round.venues };
}

export default meetingVenues;