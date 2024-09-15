import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJs, faPython, faReact } from 'react-icons/fa'
import { faHtml5 as FaHtml, faCss3Alt as FaCss3, faAngular as FaAngular} from 'react-icons/fa'
import { faC } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => clearTimeout(timer);
    }, []);

    return(
        <>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idex={15}
                        />
                    </h1>
                    <p className='text-1'>
                        I'm Kaleb Demissie, a third-year Computer Science student dedicated to innovating and solving complex problems through technology. I specialize in full-stack development and have experience building everything from self-driving car simulations to advanced web applications using the MERN stack.
                    </p>
                    <p>
                        I love project based learning and implementing things that I set my minds to,I am continuing to learn complex things by trying to build them.
                    </p>
                    <p>
                        Driven by curiosity and a relentless pursuit of knowledge, I am eager to contribute to and grow within the tech industry, pushing the boundaries of what is possible.
                    </p>
                </div>
            
                <div className='stage-cube-cont'>
                    <div className= 'cubespinner'>
                        <div className="face1">
                            <FontAwesomeIcon icon={faJava} color="#F4A261" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faPython} color="#FCBF48" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={FaAngular} color="#DD0031" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={FaCss3} color="#2BA4D9" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;
