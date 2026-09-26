import members from "./Members";

type Entry = { date: string; name: string };

type Round = {
  label: string;
  payouts: Entry[];
  excluded: string[];
  exited: string[];
};

function buildRound(round: Round) {
  const details: Entry[] = [...round.payouts];

  members.forEach((member) => {
    if (
      !details.some((d) => d.name === member) &&
      !round.excluded.includes(member) &&
      !round.exited.includes(member)
    ) {
      details.push({ date: "Undecided", name: member });
    }
  });

  return details;
}

const financialDetails: Record<string, Round> = {
  round1: {
    label: "Round 1 (Sept 2024 - Jan 2026)",
    exited: ["Satya Prakash Sharma Kandel", "Bharat Giri"],
    excluded: [
      "Krishna Bahadur Adhikari",
      "Rajesh Rayamajhi",
      "Krishna Pandey",
      "Bhim Lal Neupane"
    ],
    payouts: [
      { date: "September 2024", name: "Dhaniram Sharma Bhandari" },
      { date: "October 2024", name: "Pashupati Sapkota" },
      { date: "November 2024", name: "Saroj Niraula" },
      { date: "December 2024", name: "Chudamani Parajuli" },
      { date: "January 2025", name: "Lok Raj Dhungana" },
      { date: "February 2025", name: "Pashupati Nepali" },
      { date: "March 2025", name: "Parbat Prasai" },
      { date: "April 2025", name: "Alok Yadav" },
      { date: "May 2025", name: "Suman Pudasaini" },
      { date: "June 2025", name: "Lila Nath Adhikari" },
      { date: "July 2025", name: "Satya Prakash Sharma Kandel" },
      { date: "August 2025", name: "Dipak Jung Rayamajhi" },
      { date: "September 2025", name: "Rajendra Timsina" },
      { date: "September 2025", name: "Bharat Giri" },
      { date: "October 2025", name: "Sushil Panta" },
      { date: "November 2025", name: "Prem Khatri" },
      { date: "December 2025", name: "Yuba Raj Regmi" },
      { date: "January 2026", name: "Loknath Timsina" }
    ]
  },

  round2: {
    label: "Round 2 (2026 - 2027)",
    exited: [],
    excluded: ["Krishna Bahadur Adhikari", "Lila Nath Adhikari"],
    payouts: [
      { date: "January 2026", name: "Yuba Raj Regmi" },
      { date: "February 2026", name: "Loknath Timsina" },
      { date: "March 2026", name: "Lok Raj Dhungana" },
      { date: "April 2026", name: "Pashupati Nepali" },
      { date: "May 2026", name: "Saroj Niraula" },
      { date: "June 2026", name: "Suman Pudasaini" },
      { date: "July 2026", name: "Rajesh Rayamajhi" },
      { date: "August 2026", name: "Parbat Prasai" },
      { date: "September 2026", name: "Pashupati Sapkota" },
      { date: "October 2026", name: "Rajendra Timsina" },
      { date: "October 2026", name: "Sushil Panta" }
    ]
  }
};

export function getFinancialDetails(roundKey: keyof typeof financialDetails) {
  const round = financialDetails[roundKey];
  return {
    label: round.label,
    exitedMembers: round.exited,
    details: buildRound(round)
  };
}

export default financialDetails;