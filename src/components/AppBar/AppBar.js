import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.css';

export default function AppBar({ children }) {
  return (
    <header className={styles.header}>
      <Navigation />

      {children}
    </header>
  );
}
