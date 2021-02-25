import React from 'react';
import { HeroesList } from '../heroes/HeroesList';
import styles from '../../styles/mainScreen.module.css';

export const MarvelScreen = () => {
    return(
        <div className={styles.main}>
            <h1 className={styles.title}>Marvel Screen</h1>
            <HeroesList publisher={'Marvel Comics'}/>
        </div>
    )
}