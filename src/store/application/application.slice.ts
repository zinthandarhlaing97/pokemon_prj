import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IApplicationState, IPokemon} from '~/interfaces/pokemon';
import {dataset, getRandomInt, removePokemon} from '~/utils/pokemon';
export const initialState: IApplicationState = {
    counter: 0,
    portfolio: [],
    unowned: dataset,
};

interface ICounterPayload {
    counter: number;
}
interface IAddToProfolioPayload {
    pokemon: IPokemon;
}

const slice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.counter += 1;
        },
        decrementCounter: (state) => {
            state.counter > 0 ? (state.counter -= 1) : (state.counter = 0);
        },
        setCounter: (state, action: PayloadAction<ICounterPayload>) => {
            state.counter = action.payload.counter;
        },
        addToPorfolio: (state, action: PayloadAction<IAddToProfolioPayload>) => {
            state.portfolio.push(action.payload.pokemon);
            if (state.current) state.unowned = removePokemon(state.unowned, state.current);
        },
        generatePokemon: (state) => {
            const index = getRandomInt(0, state.unowned.length - 1);
            const pokemon = {...state.unowned[index], level: getRandomInt(1, 100)};

            state.current = pokemon;
        },
    },
});

export const {incrementCounter, decrementCounter, setCounter, addToPorfolio, generatePokemon} = slice.actions;

export default slice.reducer;
