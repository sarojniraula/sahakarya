import { useState } from 'react';
import { getMeetingVenues } from '../constants/MeetingVenues';
import { getFinancialDetails } from '../constants/FinancialDetails';
import './ComponetCss.css';

function Activities() {
    const [activeRound, setActiveRound] = useState<'round1' | 'round2'>('round2');
    const { details: financialDetailsList, exitedMembers } = getFinancialDetails(activeRound);
    const [activeActivity, setActiveActivity] = useState<"meetingVenues" | "financialDetails" | null>(null);
    const [activeMeetingRound, setActiveMeetingRound] = useState<'round1' | 'round2'>('round2');
    const { venues: meetingVenuesList } = getMeetingVenues(activeMeetingRound);

    return (
        <section id="activities" className="container">
            <h2>Our Activities</h2>

            <ul>
                <li>
                    <button
                        onClick={() => setActiveActivity('meetingVenues')}
                        className={activeActivity === 'meetingVenues' ? 'active' : ''}
                    >
                        Meeting Venues
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setActiveActivity('financialDetails')}
                        className={activeActivity === 'financialDetails' ? 'active' : ''}
                    >
                        Financial Details
                    </button>
                </li>
            </ul>

            {activeActivity === 'meetingVenues' && (
                <div>
                    <h3>Meeting Venues</h3>
                    <div className="toggle-buttons">
                        <button
                            onClick={() => setActiveMeetingRound('round2')}
                            className={`toggle-button ${activeMeetingRound === 'round2' ? 'active' : ''}`}
                        >
                            Current Round
                        </button>
                        <button
                            onClick={() => setActiveMeetingRound('round1')}
                            className={`toggle-button ${activeMeetingRound === 'round1' ? 'active' : ''}`}
                        >
                            Archive
                        </button>
                    </div>
                    <ul>
                        {meetingVenuesList.map((event, index) => {
                            const [monthStr, yearStr] = event.date.split(" ");
                            
                            const yearNum = parseInt(yearStr, 10);
                            
                            const monthIndex = new Date(Date.parse(monthStr + " 1, " + yearNum)).getMonth();
                            
                            const eventDate = new Date(yearNum, monthIndex, 1);
                            
                            const today = new Date();
                            today.setDate(1);
                            
                            let statusClass = "";

                            const sameMonth =
                                eventDate.getFullYear() === today.getFullYear() &&
                                eventDate.getMonth() === today.getMonth();

                            if (sameMonth) {
                                statusClass = "current-month";
                            } else if (eventDate < today) {
                                statusClass = "done";
                            } else {
                                statusClass = "upcoming";
                            }
                            return (
                                <li key={index} className={`event-item ${statusClass}`}>
                                    <strong>{event.date}:</strong> Organized by <em>{event.name}</em>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

            {activeActivity === 'financialDetails' && (
                <div>
                    <h3>Financial Details</h3>
                    <div className="toggle-buttons">
                        <button
                            onClick={() => setActiveRound('round2')}
                            className={`toggle-button ${activeRound === 'round2' ? 'active' : ''}`}
                        >
                            Current Round
                        </button>
                        <button
                            onClick={() => setActiveRound('round1')}
                            className={`toggle-button ${activeRound === 'round1' ? 'active' : ''}`}
                        >
                            Archive
                        </button>
                    </div>
                    <ul>
                        {financialDetailsList.map((detail, index) => {
                            const [monthStr, yearStr] = detail.date !== "Undecided" ? detail.date.split(" ") : [null, null];
                            
                            const yearNum = yearStr ? parseInt(yearStr, 10) : null;
                            
                            const monthIndex = monthStr ? new Date(Date.parse(monthStr + " 1, " + yearNum)).getMonth() : null;
                            
                            const eventDate = (yearNum !== null && monthIndex !== null) ? new Date(yearNum, monthIndex, 1) : null;
                            
                            const today = new Date();
                            today.setDate(1);
                            
                            let statusClass = "";

                            if (eventDate) {
                                if (eventDate.getFullYear() === today.getFullYear() && eventDate.getMonth() === today.getMonth()) {
                                    statusClass = "receiving";
                                } else if (eventDate < today) {
                                    statusClass = "done";
                                } else {
                                    statusClass = "upcoming";
                                }
                            } else {
                                statusClass = "yet-to-receive";
                            }

                            if (exitedMembers.includes(detail.name)) {
                                statusClass = "exited";
                            }
                            
                            let displayText = "";
                            if (statusClass === "done") {
                                displayText = `Received by ${detail.name}`;
                            } else if (statusClass === "upcoming") {
                                displayText = `${detail.name} will receive funds.`;
                            } else if (statusClass === "receiving") {
                                displayText = `${detail.name} is currently receiving funds.`;
                            } else if (statusClass === "exited") {
                                displayText = `${detail.name} has exited after clearing funds.`;
                            } else {
                                displayText = `Member ${detail.name} has yet to receive funds.`;
                            }

                            return (
                                <li key={index} className={`event-item ${statusClass}`}>
                                    <strong>{detail.date}:</strong> {displayText}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default Activities;
