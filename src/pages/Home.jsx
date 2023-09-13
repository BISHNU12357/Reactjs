import { Box, Container, Heading, Stack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import MyCarousel from '../components/MyCarousel';
import img5 from "../assets/5.png"

const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={ 'container.xl' } minH={ "100vh" } p="16">
                <Heading textTransform={ "uppercase" } m="auto" py="2" w={ "fit-content" } borderBottom={ "2px solid" } margin={ 'auto' }>Services</Heading>
                <Stack h="full" p={ "4" } alignItems={ "center" } direction={ ["column", "row"] }>
                    <Image src={ img5 } h={ ['40', '400'] } filter={ "hue-rotate(-130deg)" } />
                    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nihil, numquam accusamus sit iusto quam minima aspernatur 
                        quibusdam atque a eos natus ducimus unde tempore reprehenderit 
                        qui beatae veniam doloremque ea.
                    </Text>
                </Stack>
            </Container>

        </Box>
    )
}

export default Home
