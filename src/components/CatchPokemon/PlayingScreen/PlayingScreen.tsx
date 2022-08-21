import {Box, Button, HStack, NumberInput, NumberInputField, Text, VStack} from '@chakra-ui/react';
import {FC, useState} from 'react';
import {Pokemon} from '~/components/Pokemon/Pokemon';
import {IPokemon} from '~/interfaces/pokemon';

type PlayingScreenProps = {
    currentPokemon: IPokemon;
    currentNumber: number;
    gameWinHandler: () => void;
    gameOverHandler: () => void;
};
export const PlayingScreen: FC<PlayingScreenProps> = ({
    currentPokemon,
    currentNumber,
    gameWinHandler,
    gameOverHandler,
}) => {
    const [guess, setGuess] = useState<number | undefined>();
    const [tries, setTries] = useState<number>(1);

    const [message, setMessage] = useState<string | undefined>();

    const setGuessHandler = (valueAsString: string, valueAsNumber: number) => {
        setGuess(valueAsNumber);
    };

    const setTriesHanlder = (value: number) => {
        setTries(value);
    };

    const guessHandler = (guess: number) => {
        console.log(currentNumber);
        setTriesHanlder(tries + 1);
        if (guess === currentNumber) {
            gameWinHandler();
        }

        if (guess > currentNumber) {
            setMessage('too high..');
        } else if (guess < currentNumber) {
            setMessage('too low..');
        }

        if (tries === 3) {
            gameOverHandler();
        }
    };
    return (
        <VStack>
            <Text pt={4}>Pick a number between 1 and 100.</Text>
            <Text>You will have {4 - tries} tries.</Text>
            {message && (
                <Text pb={4} fontSize="sm" color="tomato" fontWeight="semibold" fontStyle="italic">
                    Your guess is {message}.
                </Text>
            )}

            <Pokemon {...currentPokemon}></Pokemon>
            <Box p={8}>
                <HStack>
                    <NumberInput focusBorderColor="cyan.300" precision={0} min={1} max={100} onChange={setGuessHandler}>
                        <NumberInputField placeholder="Take a guess" aria-label="guess" />
                    </NumberInput>

                    <Button
                        color="cyan.700"
                        onClick={() => {
                            if (guess !== undefined) guessHandler(guess);
                        }}
                        minW="90px"
                    >
                        Set
                    </Button>
                </HStack>
            </Box>
        </VStack>
    );
};
