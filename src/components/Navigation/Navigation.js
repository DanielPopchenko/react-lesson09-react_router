import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Navigation}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${styles.Navigation_link_active}`
                  : `${styles.Navigation_link}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shows"
              className={({ isActive }) =>
                isActive
                  ? `${styles.Navigation_link_active}`
                  : `${styles.Navigation_link}`
              }
            >
              Shows
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
