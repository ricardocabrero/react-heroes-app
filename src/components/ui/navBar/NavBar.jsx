import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../../../styles/navBar.module.css';

export const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Link 
                to="/"
                className={styles.title}>
                SuperHeroes
            </Link>
            <div className={styles.nav}>
                <NavLink 
                    activeClassName={styles.active}
                    className={styles.item} 
                    exact to="/marvel">
                    Marvel
                </NavLink>
                <NavLink 
                    activeClassName={styles.active}
                    className={styles.item} 
                    exact to="/dc">
                    DC
                </NavLink>
                <NavLink 
                    activeClassName={styles.active}
                    className={styles.item} 
                    exact to="/search">
                    Search
                </NavLink>
            </div>
        </nav>
    )
}

