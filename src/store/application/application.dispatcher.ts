import {Dispatch} from 'react';
import {IPokemon} from '~/interfaces/pokemon';
import {RootActions} from '~/store';
import {addToPorfolio, setCounter} from './application.slice';

export const dispatchCounter = (counter: number) => (dispatch: Dispatch<RootActions>) =>
    dispatch({type: setCounter.type, payload: {counter}});

export const dispatchAddToPortfolio = (pokemon: IPokemon) => (dispatch: Dispatch<RootActions>) =>
    dispatch({type: addToPorfolio.type, payload: {pokemon}});
