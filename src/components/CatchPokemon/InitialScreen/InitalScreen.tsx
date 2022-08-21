import {Button} from '@chakra-ui/react';
import {FC} from 'react';

type InitialScreenProps = {
    startGame: () => void;
};
export const InitialScreen: FC<InitialScreenProps> = ({startGame}) => {
    return (
        <Button
            my="8px"
            color="cyan.700"
            onClick={() => {
                startGame();
            }}
        >
            Start a new game!
        </Button>
    );
};
