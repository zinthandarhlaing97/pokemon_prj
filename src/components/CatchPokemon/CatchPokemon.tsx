import {Heading} from '@chakra-ui/react';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '~/hooks/redux';
import {GameState} from '~/interfaces/pokemon';
import {addToPorfolio, generatePokemon} from '~/store/application/application.slice';
import {getRandomInt} from '~/utils/pokemon';
import {GameOverScreen} from './GameOverScreen/GameOverScreen';
import {GameWonScreen} from './GameWonScreen/GameWonScreen';
import {InitialScreen} from './InitialScreen/InitalScreen';
import {PlayingScreen} from './PlayingScreen/PlayingScreen';

export const CatchPokemon = () => {
    const [currentNumber, setCurrentNumber] = useState<number | undefined>();
    const [gameState, setGameState] = useState<GameState | undefined>(GameState.initial);

    const dispatch = useAppDispatch();
    const {current, unowned} = useAppSelector((state) => state.application);

    const startGameHandler = () => {
        // generate new pokemon
        dispatch(generatePokemon());
        // generate new number
        const newNumber = getRandomInt(1, 100);
        setCurrentNumber(newNumber);
        // set state to playing
        setGameState(GameState.playing);
    };

    const gameWinHandler = () => {
        // add pokemon to portfolio
        if (current) dispatch(addToPorfolio({pokemon: current}));

        // set state to game won or zero pokemon
        if (unowned.length > 1) {
            setGameState(GameState.gameWon);
        } else {
            setGameState(GameState.noPokemon);
        }
    };
    const gameOverHandler = () => {
        // set state to game won
        setGameState(GameState.gameOver);
    };

    return (
        <>
            {gameState === GameState.initial && <InitialScreen startGame={startGameHandler}></InitialScreen>}
            {gameState === GameState.playing && current && (
                <PlayingScreen
                    currentPokemon={current}
                    currentNumber={currentNumber!}
                    gameWinHandler={gameWinHandler}
                    gameOverHandler={gameOverHandler}
                ></PlayingScreen>
            )}
            {gameState === GameState.gameWon && <GameWonScreen startGame={startGameHandler}></GameWonScreen>}
            {gameState === GameState.gameOver && <GameOverScreen startGame={startGameHandler}></GameOverScreen>}
            {gameState === GameState.noPokemon && <Heading>No Pokemon left in the wild! Thanks for playing!</Heading>}
        </>
    );
};
