import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose,faWifi,faEnvelope, faHome, faProjectDiagram, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';  // Correct import for faLinkedin
import { useState } from 'react';


const Sidebar = () => {
    const[showNav, setShowNav] = useState(false);


    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" /> 
                {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>   */}
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact={true}  onClick= {() => setShowNav(false)}activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact={true}  onClick= {() => setShowNav(false)}activeClassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact={true}  onClick= {() => setShowNav(false)}activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

                <NavLink exact={true}  onClick= {() => setShowNav(false)} activeClassName="active" className="skills-link" to="/skills">
                    <FontAwesomeIcon icon={faWifi} color="#4d4d4e" />
                </NavLink>
                <NavLink exact={true}  onClick= {() => setShowNav(false)} activeClassName="active" className="projects-link" to="/portfolio">
                    <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
                </NavLink>


                <FontAwesomeIcon
                onClick= {() => setShowNav(false)}
                icon={faClose}
                color="#ffffff"
                size="3x"
                className='close-icon'
                />
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/kaleb-demissie-7a302a267/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://github.com/kaleb6737/'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                 
                </li>
            </ul>

            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="ffffff"
                size="3x"
                className="hamburger-icon"
            /> 
        </div>  
    );
};

export default Sidebar;

