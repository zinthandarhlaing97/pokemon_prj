import {SimpleGrid} from '@chakra-ui/react';
import {useAppSelector} from '~/hooks/redux';
import {Pokemon} from '../Pokemon/Pokemon';

export const Portfolio = () => {
    const {portfolio} = useAppSelector((state) => state.application);

    return (
        <SimpleGrid py={8} columns={2} spacing={5}>
            {portfolio.map((pokemon) => (
                <Pokemon key={'pokemon-' + pokemon.name} {...pokemon}></Pokemon>
                // <Pokemon
                //     key={'pokemon-' + pokemon.name}
                //     name={pokemon.name}
                //     hp={pokemon.hp}
                //     attack={pokemon.attack}
                //     defense={pokemon.defense}
                //     type={pokemon.type}
                // ></Pokemon>
            ))}
        </SimpleGrid>
    );
};
