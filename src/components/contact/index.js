import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.css';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer); // Clear timeout on unmount
    }, []);

    return (
        <>
            <div className='container contact-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        For business inquiries or potential work opportunities, please do not hesitate to contact me at my personal email: <span>kalebdemissie61@gmail.com.</span> 
                        I am eager to explore collaborations and partnerships that can leverage our mutual interests and objectives.
                        Thank you for considering me for your professional endeavors.
                    </p>
                    
                    <p>
                        Alternatively, you can reach me by filling out the form on this website. Please provide the necessary details, and I will respond as promptly as possible.
                    </p>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <form action="https://formspree.io/f/mqazolbp" method="POST">
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input 
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input 
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                         
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input 
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
