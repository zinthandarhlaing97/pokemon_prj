import {Button, Heading, Text, VStack} from '@chakra-ui/react';
import {FC} from 'react';

type GameWonScreenProps = {
    startGame: () => void;
};
export const GameWonScreen: FC<GameWonScreenProps> = ({startGame}) => {
    return (
        <VStack>
            <Heading>Congratulations!</Heading>
            <Text>A pokemon has been added to your portfolio!</Text>
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
