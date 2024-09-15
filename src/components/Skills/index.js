import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGit, FaAws, FaDocker } from 'react-icons/fa';
import { SiRedux, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiMysql, SiWebpack, SiJenkins } from 'react-icons/si';
import AnimatedLetters from '../AnimatedLetters';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const frontendSkills = [
        { name: 'HTML', level: 90, icon: <FaHtml5 className="text-red-500" size={40} /> },
        { name: 'CSS', level: 85, icon: <FaCss3Alt className="text-blue-500" size={40} /> },
        { name: 'JavaScript', level: 80, icon: <FaJs className="text-yellow-500" size={40} /> },
        { name: 'React.Js', level: 75, icon: <FaReact className="text-blue-400" size={40} /> },
        { name: 'Redux', level: 72, icon: <SiRedux className="text-purple-500" size={40} /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript className="text-blue-600" size={40} /> },
        { name: 'Next.JS', level: 85, icon: <SiNextdotjs className="text-black" size={40} /> },
    ];

    const backendSkills = [
        { name: 'Node.js', level: 70, icon: <FaNodeJs className="text-green-500" size={40} /> },
        { name: 'Python', level: 95, icon: <FaPython className="text-blue-300" size={40} /> },
        { name: 'Express', level: 70, icon: <SiExpress className="text-black" size={40} /> },
        { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-green-700" size={40} /> },
        { name: 'PostgreSQL', level: 78, icon: <SiPostgresql className="text-blue-700" size={40} /> },
        { name: 'Firebase', level: 78, icon: <SiFirebase className="text-yellow-500" size={40} /> },
        { name: 'MySQL', level: 80, icon: <SiMysql className="text-blue-500" size={40} /> },
    ];

    const toolsSkills = [
        { name: 'Git', level: 85, icon: <FaGit className="text-orange-500" size={40} /> },
        { name: 'AWS', level: 70, icon: <FaAws className="text-yellow-500" size={40} /> },
        { name: 'Docker', level: 80, icon: <FaDocker className="text-blue-500" size={40} /> },
        { name: 'Webpack', level: 75, icon: <SiWebpack className="text-blue-400" size={40} /> },
        { name: 'Jenkins', level: 65, icon: <SiJenkins className="text-gray-700" size={40} /> },
    ];

    return (
        <section className="py-20 relative bg-transparent text-white">
            <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-7xl px-6 lg:px-8 mx-auto">
                {/* Left Side: Description */}
                <motion.div
                    className="lg:w-2/5 w-full mb-10 lg:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-manrope font-medium text-4xl mb-6 ml-9">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'My Skills'.split('')}
                            idx={15}
                        />
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed ml-10">
                        My skill set spans across both frontend and backend technologies, allowing me to build comprehensive and scalable web applications. 
                        Whether it's creating rich user interfaces with technologies like React and Next.js, or building efficient, server-side applications with Node.js, 
                        Express, and Python, I ensure the best practices in coding, security, and performance.
                    </p>
                    <p className="text-lg text-bold text-gray-300 leading-relaxed mt-4 ml-10">
                        My expertise also extends to utilizing modern development tools and methodologies like Git, Docker, and Webpack for faster and more reliable 
                        project delivery. I'm always keen to expand my skill set with the latest technologies and innovations.
                    </p>
                </motion.div>

                {/* Right Side: Skills */}
                <motion.div
                    className="lg:w-3/5 w-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Frontend Skills */}
                    <h2 className="font-manrope font-medium text-3xl text-white mb-6">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Frontend'.split('')}
                            idx={15}
                        />
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {frontendSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="group flex items-center gap-4 bg-gray-800 shadow-lg rounded-lg p-4 hover:bg-gray-700 transition-transform duration-300 ease-in-out hover:scale-105"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                                <div>{skill.icon}</div>
                                <div className="w-full">
                                    <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                                        <motion.div
                                            className="bg-white h-2.5 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Backend Skills */}
                    <h2 className="font-manrope font-medium text-3xl text-white mb-6">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Backend'.split('')}
                            idx={15}
                        />
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {backendSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="group flex items-center gap-4 bg-gray-800 shadow-lg rounded-lg p-4 hover:bg-gray-700 transition-transform duration-300 ease-in-out hover:scale-105"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                                <div>{skill.icon}</div>
                                <div className="w-full">
                                    <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                                        <motion.div
                                            className="bg-white h-2.5 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tools Skills */}
                    <h2 className="font-manrope font-medium text-3xl text-white mb-6">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Tools'.split('')}
                            idx={15}
                        />
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {toolsSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="group flex items-center gap-4 bg-gray-800 shadow-lg rounded-lg p-4 hover:bg-gray-700 transition-transform duration-300 ease-in-out hover:scale-105"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                            >
                                <div>{skill.icon}</div>
                                <div className="w-full">
                                    <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                                        <motion.div
                                            className="bg-white h-2.5 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
