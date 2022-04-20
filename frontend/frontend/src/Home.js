import {  Box, Stack, color, Heading, Link, useBreakpointValue, useColorModeValue} from "@chakra-ui/react";
import Header from "./Components/Header";


function Home()
{return(
    <Box >
        
        <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg='transparent'
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>   
            <Stack>    
                <Heading  color='black' size='2xl'>Welcome to Roommage!</Heading>
                <Heading>Find your roommate right now!!</Heading>
            </Stack>
     </Box> 
    </Box>
)}

export default Home;