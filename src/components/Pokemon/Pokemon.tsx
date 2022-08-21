import {Box, Flex, Heading, Text} from '@chakra-ui/react';
import {FC} from 'react';
import {IPokemon} from '~/interfaces/pokemon';

export const Pokemon: FC<IPokemon> = ({name, hp, attack, defense, type, level}) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
            <>
                <Heading>{name}</Heading>
                <Heading as="h4" size="md" marginBottom={5}>
                    Level: {level}
                </Heading>

                <Flex>
                    <Text flex={1}>HP</Text>
                    <Text flex={2}>- {hp}</Text>
                </Flex>
                <Flex>
                    <Text flex={1}>Attack</Text>
                    <Text flex={2}>- {attack}</Text>
                </Flex>
                <Flex>
                    <Text flex={1}>Defense</Text>
                    <Text flex={2}>- {defense}</Text>
                </Flex>
                <Flex>
                    <Text flex={1}>Type</Text>
                    <Text flex={2}>- {type}</Text>
                </Flex>
            </>
        </Box>
    );
};
