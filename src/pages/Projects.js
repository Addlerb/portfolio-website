import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';
import weatherAppImg from '../assets/weather-app.jpg';
import todoListImg from '../assets/todo-list.jpg';
import notesAppImg from '../assets/notes-app.jpg';
import expenseTrackerImg from '../assets/expense-tracker.jpg';
import quoteGeneratorImg from '../assets/quote-generator.jpg';
import blogAppImg from '../assets/blog-app.jpg';
import schoolPortalImg from '../assets/school-portal.jpg'; // Add if image exists

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    { id: 1, name: 'Weather App', description: 'Fetches real-time weather data using OpenWeatherMap API.', image: weatherAppImg, link: 'https://weather-app-theta-ebon-69.vercel.app/', category: 'React' },
    { id: 2, name: 'To-Do List', description: 'Manage tasks with add, edit, and delete functionality.', image: todoListImg, link: 'https://todo-app-eta-murex.vercel.app/', category: 'React' },
    { id: 3, name: 'Notes App', description: 'Create and organize personal notes.', image: notesAppImg, link: 'https://notes-app-mu-cyan.vercel.app/', category: 'React' },
    { id: 4, name: 'Expense Tracker', description: 'Track income and expenses with a clean UI.', image: expenseTrackerImg, link: 'https://expense-tracker-orpin-phi.vercel.app/', category: 'React' },
    { id: 5, name: 'Random Quote Generator', description: 'Displays random inspirational quotes.', image: quoteGeneratorImg, link: 'https://quote-generator-beryl-phi.vercel.app/', category: 'React' },
    { id: 6, name: 'Simple Blog App', description: 'A blog platform for posting and viewing articles.', image: blogAppImg, link: 'https://blog-app-six-amber.vercel.app/', category: 'React' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-filter">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('React')} className={filter === 'React' ? 'active' : ''}>React</button>
        <button onClick={() => setFilter('PHP')} className={filter === 'PHP' ? 'active' : ''}>PHP</button>
      </div>
      <div className="project-list">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            whileHover={{ rotateY: 10, boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}
          >
            <div className="project-image-wrapper">
              <motion.img
                src={project.image}
                alt={project.name}
                className="project-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
              <motion.div
                className="image-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.span
              className="project-category"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              {project.category}
            </motion.span>
            <h3>{project.name}</h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {project.description}
            </motion.p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;