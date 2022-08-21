import {IPokemon} from '~/interfaces/pokemon';

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 * ref: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
export const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * remove pokemon from list of pokemon
 * return modified list
 * ref https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
 */
export const removePokemon = (list: IPokemon[], item: IPokemon) => {
    return list.filter(function (el) {
        return el.name !== item.name;
    });
};

export const dataset: IPokemon[] = [
    {
        name: 'Bulbasaur',
        hp: 45,
        attack: 49,
        defense: 49,
        type: 'Grass',
    },
    {
        name: 'Charmander',
        hp: 39,
        attack: 52,
        defense: 43,
        type: 'Fire',
    },
    {
        name: 'Squirtle',
        hp: 44,
        attack: 48,
        defense: 65,
        type: 'Water',
    },
    {
        name: 'Pidgey',
        hp: 40,
        attack: 45,
        defense: 40,
        type: 'Normal',
    },
    {
        name: 'Rattata',
        hp: 30,
        attack: 56,
        defense: 35,
        type: 'Normal',
    },
    {
        name: 'Pikachu',
        hp: 35,
        attack: 55,
        defense: 40,
        type: 'Electric',
    },
    {
        name: 'Jigglypuff',
        hp: 115,
        attack: 45,
        defense: 20,
        type: 'Normal',
    },
    {
        name: 'Diglett',
        hp: 10,
        attack: 55,
        defense: 25,
        type: 'Ground',
    },
    {
        name: 'Machop',
        hp: 70,
        attack: 80,
        defense: 50,
        type: 'Fighting',
    },
    {
        name: 'Tentacool',
        hp: 40,
        attack: 40,
        defense: 35,
        type: 'Water',
    },
    {
        name: 'Geodude',
        hp: 40,
        attack: 80,
        defense: 100,
        type: 'Rock',
    },
    {
        name: 'Slowpoke',
        hp: 90,
        attack: 65,
        defense: 65,
        type: 'Water',
    },
    {
        name: 'Magnemite',
        hp: 25,
        attack: 35,
        defense: 70,
        type: 'Electric',
    },
    {
        name: 'Hitmonlee',
        hp: 50,
        attack: 120,
        defense: 53,
        type: 'Fighting',
    },
    {
        name: 'Chansey',
        hp: 250,
        attack: 5,
        defense: 5,
        type: 'Normal',
    },
    {
        name: 'Mr. Mime',
        hp: 40,
        attack: 45,
        defense: 65,
        type: 'Psychic',
    },
];
