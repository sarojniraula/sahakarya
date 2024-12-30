import { useState } from 'react';
import meetingVenues from '../constants/MeetingVenues';
import financialDetails from '../constants/FinancialDetails';
import './ComponetCss.css';

function Activities() {
    const [activeActivity, setActiveActivity] = useState(null);

    return (
        <section id="activities" className="container">
            <h2>Our Activities</h2>

            {/* Navigation Links */}
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

            {/* Conditional Content */}
            {activeActivity === 'meetingVenues' && (
                <div>
                    <h3>Meeting Venues</h3>
                    <ul>
                        {meetingVenues.map((event, index) => (
                            <li
                                key={index}
                                className={`event-item ${new Date(event.date) < new Date() ? 'done' : 'upcoming'}`}
                            >
                                <strong>{event.date}:</strong> Organized by <em>{event.name}</em>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {activeActivity === 'financialDetails' && (
                <div>
                    <h3>Financial Details</h3>
                    <ul>
                        {financialDetails.map((detail, index) => (
                            <li
                                key={index}
                                className={`event-item ${detail.status === 'Received'
                                        ? 'done'
                                        : detail.status === 'Will Receive'
                                            ? 'upcoming'
                                            : detail.status === 'Receiving'
                                                ? 'receiving'
                                                : 'yet-to-receive'
                                    }`}
                            >
                                <strong>{detail.date}:</strong> {detail.status === 'Yet to Receive' ? 'Member ' : ''}
                                <em>{detail.name}</em> {detail.status === 'Yet to Receive' ? 'has yet to receive funds.' : ''}
                                {detail.status === 'Will Receive' ? ' will receive funds.' : ''}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default Activities;
