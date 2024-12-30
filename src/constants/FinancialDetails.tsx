import members from '../constants/Members';

const financialDetails = [
    { date: 'September 2024', name: 'Dhaniram Sharma Bhandari', status: 'Received' },
    { date: 'October 2024', name: 'Pashupati Sapkota', status: 'Received' },
    { date: 'November 2024', name: 'Saroj Niraula', status: 'Received' },
    { date: 'December 2024', name: 'Chudamani Parajuli', status: 'Receiving' },
    { date: 'January 2025', name: 'Lok Raj Dhungana', status: 'Will Receive' },
];

// Exclude Krishna Prasad Parajuli when marking remaining members as "Yet to Receive"
const excludedMembers = ['Krishna Prasad Adhikari'];

members.forEach((member) => {
    if (
        !financialDetails.some((detail) => detail.name === member) &&
        !excludedMembers.includes(member)
    ) {
        financialDetails.push({ date: 'Undecided', name: member, status: 'Yet to Receive' });
    }
});

export default financialDetails;
