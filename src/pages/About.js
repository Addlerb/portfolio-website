import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  const skills = [
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'PHP', level: 70 },
    { name: 'CSS', level: 85 },
    { name: 'MySQL', level: 65 },
    { name: 'HTML', level: 90 },
    { name: 'Git', level: 60 },
    { name: 'Node.js', level: 50 },
    { name: 'Bootstrap', level: 70 },
    { name: 'APIs', level: 65 },
    { name: 'Vercel', level: 55 },
  ];

  return (
    <div className="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm a passionate web developer skilled in React, PHP, and JavaScript. I’ve built projects like a Weather App and School Portal, and I’m excited to create user-friendly applications.
      </motion.p>
      <h3>Skills</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ delay: index * 0.15, duration: 1, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
          >
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;