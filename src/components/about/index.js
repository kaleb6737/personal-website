import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';
import { FaNodeJs, FaJs, FaPython, FaReact, FaAngular, FaCss3Alt } from 'react-icons/fa'; // Import icons from react-icons

import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            index={15}  // Fixed typo here, changed from `idex` to `index`
                        />
                    </h1>
                    <p className='text-1'>
                        I'm Kaleb Demissie, a third-year Computer Science student dedicated to innovating and solving complex problems through technology. I specialize in full-stack development and have experience building everything from self-driving car simulations to advanced web applications using the MERN stack.
                    </p>
                    <p>
                        I love project-based learning and implementing things that I set my mind to. I am continuing to learn complex things by trying to build them.
                    </p>
                    <p>
                        Driven by curiosity and a relentless pursuit of knowledge, I am eager to contribute to and grow within the tech industry, pushing the boundaries of what is possible.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className="face1">
                            <FaNodeJs color="#F4A261" size={70} />  {/* Updated icon usage */}
                        </div>
                        <div className="face2">
                            <FaPython color="#FCBF48" size={70} />
                        </div>
                        <div className="face3">
                            <FaReact color="#5ED4F4" size={70} />
                        </div>
                        <div className="face4">
                            <FaJs color="#EFD81D" size={70} />
                        </div>
                        <div className="face5">
                            <FaAngular color="#DD0031" size={70} />
                        </div>
                        <div className="face6">
                            <FaCss3Alt color="#2BA4D9" size={70} />  {/* Corrected to FaCss3Alt */}
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default About;
