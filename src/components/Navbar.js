import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 className="navbar-brand">My Portfolio</h1>
      <ul className="navbar-links">
        {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.1, color: '#ff6b6b' }}
          >
            <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>{item}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;