import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';
import styles from '../../styles/detail.module.css';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const {heroId} = useParams();

    const hero = useMemo(() => getHeroesById(heroId), [heroId]);

    if(!hero) {
        return <Redirect to='/'/>
    }

    const {superhero, publisher, alter_ego, first_appearance, characters} = hero;

    const handleReturn = () => {
        history.length <= 2 
        ? history.push('/')
        : history.goBack()
    }

    return(
        <div className={`${styles.detail} animate__animated animate__fadeIn`}>
            <div className={`${styles.image} animate__animated animate__fadeInLeft`}>
                <img 
                src={`../assets/heroes/${heroId}.jpg`}
                alt={superhero}/>
            </div>
            <div className={styles.text}>
                <h3 className={styles.title}>{superhero}</h3>
                <ul className={styles.list}>
                    <li>
                        <strong>Alter Ego:</strong> {alter_ego}
                    </li>
                    <li>
                        <strong>Publisher:</strong> {publisher}
                    </li>
                    <li>
                        <strong>First Appearance:</strong> {first_appearance}
                    </li>
                </ul>
                <h5 className={styles.characters}>Characters</h5>
                <p className={styles.subtext}>{characters}</p>
                <button 
                onClick={handleReturn}
                className={styles.btn}>
                    Return
                </button>
            </div>
        </div>
    )
}

HeroScreen.propTypes = {
    history: PropTypes.object.isRequired,
}