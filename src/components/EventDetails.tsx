import { Link, useParams } from 'react-router-dom';
import { events } from '../data/events';

function EventDetails() {
    const { eventId } = useParams<{ eventId: string }>();

    const event = events.find((item) => item.id === eventId);
    const otherEvents = events.filter((item) => item.id !== eventId);

    if (!event) {
        return (
            <section className="event-details-page">
                <div className="container">
                    <div className="section-heading">
                        <p className="section-label">Event</p>
                        <h2>Event Not Found</h2>
                    </div>
                    <p className="section-text">
                        The event you are looking for does not exist.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <div className="event-details-page">
            <section className="event-hero-section">
                <div className="container">
                    <div className="event-details-card">
                        <p className="section-label">{event.category}</p>
                        <h1 className="event-title">{event.title}</h1>

                        <div className="event-meta">
                            <span><strong>Date:</strong> {event.date}</span>
                            <span><strong>Location:</strong> {event.location}</span>
                        </div>

                        {event.image && (
                            <div className="event-image-wrap">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="event-image"
                                />
                            </div>
                        )}

                        <div className="event-description">
                            {event.fullDescription.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="more-events-section">
                <div className="container">
                    <div className="section-heading">
                        <p className="section-label">More Events</p>
                        <h2>Explore Other Community Events</h2>
                    </div>

                    <div className="card-grid">
                        {otherEvents.map((item) => (
                            <article className="card" key={item.id}>
                                <span className="card-tag">{item.category}</span>
                                <h3>{item.title}</h3>
                                <p>{item.shortDescription}</p>
                                <Link to={`/events/${item.id}`} className="card-link">
                                    Read More
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EventDetails;