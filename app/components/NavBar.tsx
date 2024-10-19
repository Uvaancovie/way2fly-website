import React from 'react';
import styles from '../styles/DarkTheme.module.css';

const Navbar = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;