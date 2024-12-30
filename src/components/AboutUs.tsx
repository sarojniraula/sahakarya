import { useState } from 'react';
import members from '../constants/members'; // Import the members array
import './ComponetCss.css'; // Optional: Move styles to a CSS file

function AboutUs() {
    // State to toggle between "About Us" content and "Teams" content
    const [showTeams, setShowTeams] = useState(false);

    return (
        <section id="about-us" className="container">
            <h2>About Us</h2>

            {/* Buttons to toggle between "About Us" and "Teams" */}
            <div className="toggle-buttons">
                <button
                    onClick={() => setShowTeams(false)}
                    className={`toggle-button ${!showTeams ? 'active' : ''}`}
                >
                    About Us
                </button>
                <button
                    onClick={() => setShowTeams(true)}
                    className={`toggle-button ${showTeams ? 'active' : ''}`}
                >
                    Teams
                </button>
            </div>

            {/* Conditional rendering for About Us or Teams content */}
            {!showTeams ? (
                <div>
                    <p>
                        We are a small group of individuals dedicated to collaboration and community
                        growth. Our mission is to create meaningful connections and empower people
                        within our community.
                    </p>
                </div>
            ) : (
                <div id="teams">
                    <h3>Our Team</h3>
                    <ul className="team-list">
                        {members.map((member, index) => (
                            <li key={index} className="team-member">
                                <h4>{member}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default AboutUs;
