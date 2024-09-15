import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import { FaBars, FaTimes, FaEnvelope, FaHome, FaProjectDiagram, FaUser, FaGithub, FaLinkedin,FaCalculator} from 'react-icons/fa'; // Using react-icons for non-SVG icons
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" /> 
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" onClick={() => setShowNav(false)} activeClassName="active" to="/">
                    <FaHome color="#4d4d4e" size={30} />
                </NavLink>
                <NavLink exact="true" onClick={() => setShowNav(false)} activeClassName="active" className="about-link" to="/about">
                    <FaUser color="#4d4d4e" size={30} />
                </NavLink>
                <NavLink exact="true" onClick={() => setShowNav(false)} activeClassName="active" className="contact-link" to="/contact">
                    <FaEnvelope color="#4d4d4e" size={30} />
                </NavLink>
                <NavLink exact="true" onClick={() => setShowNav(false)} activeClassName="active" className="skills-link" to="/skills">
                    <FaCalculator color="#4d4d4e" size={30} />
                </NavLink>
                <NavLink exact="true" onClick={() => setShowNav(false)} activeClassName="active" className="projects-link" to="/portfolio">
                    <FaProjectDiagram color="#4d4d4e" size={30} />
                </NavLink>

                <FaTimes
                    onClick={() => setShowNav(false)}
                    color="#ffffff"
                    size={30}
                    className='close-icon'
                />
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/kaleb-demissie-7a302a267/'>
                        <FaLinkedin color="#4d4d4e" size={30} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://github.com/kaleb6737/'>
                        <FaGithub color="#4d4d4e" size={30} />
                    </a>
                </li>
            </ul>

            <FaBars
                onClick={() => setShowNav(true)}
                color="#ffffff"
                size={30}
                className="hamburger-icon"
            /> 
        </div>
    );
};

export default Sidebar;
