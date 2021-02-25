import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const valid = ['DC Comics', 'Marvel Comics'];

    if(!valid.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no válido`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}