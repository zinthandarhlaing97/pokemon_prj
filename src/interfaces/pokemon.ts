export interface IPokemon {
    name: string;
    hp: number;
    attack: number;
    defense: number;
    type: string;
    level?: number;
}

export interface IApplicationState {
    counter: number;
    portfolio: IPokemon[];
    unowned: IPokemon[];
    current?: IPokemon;
}

export enum GameState {
    initial,
    playing,
    gameOver,
    gameWon,
    noPokemon,
}
