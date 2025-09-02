import logo from '../assets/logo.png';

function Welcome() {
    return (
        <section className="hero">
            <img src={logo} alt="Hamro Sahakarya Samuha Logo" className="hero-logo" />
            <h2>Welcome to Hamro Sahakarya Samuha</h2>
            <p>Connecting people and fostering collaboration.</p>
        </section>
    );
}
export default Welcome;
