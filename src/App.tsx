import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import AboutUs from './components/AboutUs';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/events/:eventId" element={<EventDetails />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
