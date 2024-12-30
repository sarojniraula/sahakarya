import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <h1>Hamro Sahakarya Samuha</h1>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/activities" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Activities
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
