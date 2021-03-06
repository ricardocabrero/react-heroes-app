import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import styles from '../../styles/card.module.css'

export const HeroCard = ({hero, classCard}) => {
    const { id, superhero, alter_ego, first_appearance, characters } = hero;

    const theClass = classCard === 'normal' 
    ?`${styles.card}` 
    : `${styles.card} ${styles.special}`

    return(
        <div className={theClass}>
            <div className={styles.image}> 
            <LazyLoad height={200}>
                <img 
                src={`./assets/heroes/${id}.jpg`}
                alt={superhero}
                className='animate__animated animate__fadeIn'/>
            </LazyLoad>
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

HeroCard.propTypes = {
    hero: PropTypes.object.isRequired,
}