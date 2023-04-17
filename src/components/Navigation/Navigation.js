import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

// ! Обычный способ с activeClassName и exact не работает

const Navigation = () => (
  <nav>
    <NavLink
      exact="true"
      to="/"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Home
    </NavLink>

    <NavLink
      to="/authors"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Authors
    </NavLink>

    <NavLink
      to="/users"
      className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Users
    </NavLink>
  </nav>
);

export default Navigation;
