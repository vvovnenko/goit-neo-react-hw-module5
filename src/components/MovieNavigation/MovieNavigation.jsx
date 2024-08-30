import { NavLink } from "react-router-dom";
import styles from "./MovieNavigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const MovieNavigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="cast" className={buildLinkClass}>
        Cast
      </NavLink>
      <NavLink to="reviews" className={buildLinkClass}>
        Reviews
      </NavLink>
    </nav>
  );
};

export default MovieNavigation;
