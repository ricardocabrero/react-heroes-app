import React from 'react';
import { HeroesList } from '../heroes/HeroesList';
import styles from '../../styles/mainScreen.module.css';

export const DcScreen = () => {
    return(
        <div className={styles.main}>
            <h1 className={styles.title}>DC Screen</h1>
            <HeroesList publisher={'DC Comics'}/>
        </div>
    )
}