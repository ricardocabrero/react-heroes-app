import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/list.module.css';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return(
        <div className={`${styles.list} animate__animated animate__fadeIn`}>
            {heroes.map(hero => 
                (<HeroCard key={hero.id} hero={hero}/>)
            )}
        </div>
    )
}

HeroesList.propTypes = {
    publisher: PropTypes.string.isRequired,
}