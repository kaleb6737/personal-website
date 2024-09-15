import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import ProjectsData from '../../data/Projects.json';

const ProjectsGallery = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [isVisible, setIsVisible] = useState(false); // For triggering the fade-in effect on page load

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
        // Trigger the fade-in after a slight delay when the component mounts
        setTimeout(() => {
            setIsVisible(true);
        }, 500); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    const renderProjects = () => {
        if (!ProjectsData.Projects || !Array.isArray(ProjectsData.Projects)) {
            return <p className="text-center text-gray-300">No projects available or data is not an array.</p>;
        }

        return (
            <div className={`images-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {ProjectsData.Projects.map((project, idx) => (
                    <div
                        className={`pictures group relative flex items-center justify-center overflow-hidden rounded-lg shadow-xl bg-gray-900 transform transition-all duration-1000 ease-in-out ${isVisible ? 'scale-100' : 'scale-75'}`}
                        key={idx}
                    >
                        <img
                            src={project.image}
                            className="project-image w-full h-full object-cover  transition-all duration-500 group-hover:blur-none group-hover:scale-110"
                            alt={project.title}
                        />
                        <div className="content absolute inset-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 backdrop-blur-md transition-opacity duration-500 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                            <p className="title text-white text-lg font-extrabold drop-shadow-lg">{project.title}</p>
                            <h4 className="description text-white opacity-80 text-sm mb-2">{project.description}</h4>
                            <button
                                className="btn mt-4 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-5 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                                aria-label={`View ${project.title}`}
                                onClick={() => window.open(project.url)}
                            >
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="container mx-auto px-6 lg:px-20 py-10 project-page">
                <h1 className="page-title text-center text-5xl text-white mb-10 font-extrabold">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split('')}
                        idx={15}
                    />
                </h1>
                {renderProjects()}
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default ProjectsGallery;
