import {SimpleGrid} from '@chakra-ui/react';
import {useAppSelector} from '~/hooks/redux';
import {Pokemon} from '../Pokemon/Pokemon';

export const Wild = () => {
    const {unowned} = useAppSelector((state) => state.application);

    return (
        <SimpleGrid py={8} columns={2} spacing={5}>
            {unowned.map((pokemon) => (
                <Pokemon key={'pokemon-' + pokemon.name} {...pokemon}></Pokemon>
            ))}
        </SimpleGrid>
    );
};
