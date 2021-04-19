import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { useLocation } from 'react-router-dom';

import styles from '../../styles/search.module.css';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({history}) => {

    const { search } = useLocation();
    const { q = '' } = queryString.parse(search);
  
    const [values, handleChange] = useForm({
        text: q,
    });
     
    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`?q=${text}`);
    }
    
    const { text } = values;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    return(
        <div className={`${styles.search} animate__animated animate__fadeIn`}>
            <h1 className={styles.title}>Search Screen</h1>
            <div className={styles.main}>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                    <legend>Search Form</legend>
                    <input 
                    value={text}
                    onChange={handleChange}
                    autoComplete="off"
                    type="text"
                    name="text"
                    placeholder="Find your hero"/>
                    <button type="submit">
                    Search
                    </button>
                    </form>
                </div>
                <div className={styles.results}>
                    <h4 className={styles.subtitle}>Results</h4>

                    {(q === '') && 
                    <div className={styles.info}>Please search a hero</div>}

                    {(q !== '' && heroesFiltered.length === 0) && 
                    <div className={styles.warning}>There is no a hero with "{q}"</div>}

                    {heroesFiltered.map(hero => 
                    <HeroCard key={hero.id} hero={hero}/>
                    )}
                </div>
            </div>
        </div>
    )
}

SearchScreen.propTypes = {
    history: PropTypes.object.isRequired,
}