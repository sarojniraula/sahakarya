import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { events } from '../data/events';

function Welcome() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-logo-wrap">
                        <img
                            src={logo}
                            alt="Hamro Sahakarya Samuha Logo"
                            className="hero-logo"
                        />
                    </div>

                    <p className="hero-kicker">Community • Culture • Collaboration</p>
                    <h2>Welcome to Hamro Sahakarya Samuha</h2>
                    <p className="hero-text">
                        Bringing people together through community activities, cultural
                        celebrations, and shared support in Finland.
                    </p>

                    <div className="hero-actions">
                        <a href="#about" className="btn btn-primary">Learn More</a>
                        <a href="#events" className="btn btn-secondary">View Events</a>
                    </div>
                </div>
            </section>

            <section id="about" className="info-section">
                <div className="container">
                    <div className="section-heading">
                        <p className="section-label">About Us</p>
                        <h2>Who We Are</h2>
                    </div>
                    <p className="section-text">
                        Hamro Sahakarya Samuha is a community-based organization that
                        connects people through cultural events, social activities,
                        and meaningful collaboration. Our goal is to strengthen bonds,
                        celebrate identity, and support one another in Finland.
                    </p>
                </div>
            </section>

            <section id="events" className="events-section">
                <div className="container">
                    <div className="section-heading">
                        <p className="section-label">Featured Events</p>
                        <h2>Community Events and Celebrations</h2>
                    </div>

                    <div className="card-grid">
                        {events.map((event) => (
                            <article className="card" key={event.id}>
                                <span className="card-tag">{event.category}</span>
                                <h3>{event.title}</h3>
                                <p>{event.shortDescription}</p>
                                <Link to={`/events/${event.id}`} className="card-link">
                                    Read More
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="highlights-section">
                <div className="container">
                    <div className="section-heading">
                        <p className="section-label">Highlights</p>
                        <h2>What Our Community Values</h2>
                    </div>

                    <div className="highlight-grid">
                        <div className="highlight-box">
                            <h3>Cultural Connection</h3>
                            <p>Celebrating traditions and keeping our cultural identity alive.</p>
                        </div>
                        <div className="highlight-box">
                            <h3>Community Support</h3>
                            <p>Creating a supportive space where people can connect and help each other.</p>
                        </div>
                        <div className="highlight-box">
                            <h3>Togetherness</h3>
                            <p>Building friendships and meaningful relationships through shared events.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Welcome;