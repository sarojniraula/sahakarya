import { useState } from 'react';
import meetingVenues from '../constants/MeetingVenues';
import financialDetails from '../constants/FinancialDetails';
import './ComponetCss.css';

function Activities() {
    const [activeActivity, setActiveActivity] = useState<"meetingVenues" | "financialDetails" | null>(null);

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
                    <ul>
                        {meetingVenues.map((event, index) => {
                            const [monthStr, yearStr] = event.date.split(" ");
                            const monthIndex = new Date(Date.parse(monthStr + " 1, " + yearStr)).getMonth();
                            const eventDate = new Date(yearStr, monthIndex, 1);
                            
                            const statusClass = eventDate < new Date() ? "done" : "upcoming";

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
                    <ul>
                        {financialDetails.map((detail, index) => {
                            const [monthStr, yearStr] = detail.date !== "Undecided" ? detail.date.split(" ") : [null, null];
                            const monthIndex = monthStr ? new Date(Date.parse(monthStr + " 1, " + yearStr)).getMonth() : null;
                            const eventDate = monthStr ? new Date(yearStr, monthIndex, 1) : null;
                            
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
                            
                            let displayText = "";
                            if (statusClass === "done") {
                                displayText = `Received by ${detail.name}`;
                            } else if (statusClass === "upcoming") {
                                displayText = `${detail.name} will receive funds.`;
                            } else if (statusClass === "receiving") {
                                displayText = `${detail.name} is currently receiving funds.`;
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
