import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/card.module.css'

export const HeroCard = ({hero}) => {
    const { id, superhero, alter_ego, first_appearance, characters } = hero;

    return(
        <div className={styles.card}>
            <div className={styles.image}>
                <img 
                src={`./assets/heroes/${id}.jpg`}
                alt={superhero}/>
            </div>
            <div className={styles.body}>
                <h5 className={styles.title}>{superhero}</h5>
                <p className={styles.text}>{alter_ego}</p>
                {(alter_ego !== characters) && 
                <p className={styles.characters}>{characters}</p>}
                <p className={styles.small}>
                {first_appearance}
                </p>
                <Link to={`./hero/${id}`} className={styles.link}>Más...</Link>
            </div>
        </div>
    )

}