import {Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, VStack} from '@chakra-ui/react';
import type {NextPage} from 'next';
import {CatchPokemon} from '~/components/CatchPokemon/CatchPokemon';
import {Portfolio} from '~/components/Portfolio/Portfolio';
import {Wild} from '~/components/Wild/Wild';

const Home: NextPage = () => {
    return (
        <Box w="800px" m="20px auto">
            <VStack align="left">
                <Heading marginBottom={10}>Gotta Catch ‘em All</Heading>

                <Tabs colorScheme="cyan">
                    <TabList>
                        <Tab>Pokemon in the wild</Tab>
                        <Tab>Portfolio</Tab>
                        <Tab>Catch Pokemons</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Wild />
                        </TabPanel>
                        <TabPanel>
                            <Portfolio />
                        </TabPanel>
                        <TabPanel>
                            <CatchPokemon />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </VStack>
        </Box>
    );
};

export default Home;
// Bulbasaur,45,49,49,Grass
