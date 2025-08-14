import members from '../constants/Members';

const financialDetails = [
    { date: 'September 2024', name: 'Dhaniram Sharma Bhandari' },
    { date: 'October 2024', name: 'Pashupati Sapkota' },
    { date: 'November 2024', name: 'Saroj Niraula' },
    { date: 'December 2024', name: 'Chudamani Parajuli' },
    { date: 'January 2025', name: 'Lok Raj Dhungana' },
    { date: 'February 2025', name: 'Pashupati Nepali' },
    { date: 'March 2025', name: 'Parbat Prasai' },
    { date: 'April 2025', name: 'Alok Yadav' },
    { date: 'May 2025', name: 'Suman Pudasaini' },
    { date: 'June 2025', name: 'Lila Nath Adhikari' },
    { date: 'July 2025', name: 'Satya Sharma Prakash Kandel' },
];

// Exclude Krishna Prasad Parajuli when marking remaining members as "Yet to Receive"
const excludedMembers = ['Krishna Prasad Adhikari'];

members.forEach((member) => {
    if (
        !financialDetails.some((detail) => detail.name === member) &&
        !excludedMembers.includes(member)
    ) {
        financialDetails.push({ date: 'Undecided', name: member });
    }
});

export default financialDetails;
