import { useState } from 'react';
import members from '../constants/Members';
import './ComponetCss.css';

function AboutUs() {
    const [showTeams, setShowTeams] = useState(false);

    return (
        <section id="about-us" className="container">
            <h2>About Us</h2>

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
