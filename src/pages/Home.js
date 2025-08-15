import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import profileImg from '../assets/Profile.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={profileImg} alt="Abdulsalam" className="hero-image" />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Welcome to My Portfolio
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Hi, I'm Abdulsalam, a web developer skilled in React and PHP. Explore my projects to see my work!
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <Link to="/projects" className="hero-button">
            View My Projects
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;