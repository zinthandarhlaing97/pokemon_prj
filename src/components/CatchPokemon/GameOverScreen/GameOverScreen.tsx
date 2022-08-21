import {Button, Heading, VStack} from '@chakra-ui/react';
import {FC} from 'react';

type GameOverScreenProps = {
    startGame: () => void;
};
export const GameOverScreen: FC<GameOverScreenProps> = ({startGame}) => {
    return (
        <VStack>
            <Heading>Game Over!</Heading>
            <Button
                onClick={() => {
                    startGame();
                }}
            >
                Start a new game!
            </Button>
        </VStack>
    );
};
