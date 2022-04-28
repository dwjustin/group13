import { Flex, Box, Stack, color, Heading, Link, useBreakpointValue, useColorModeValue} from "@chakra-ui/react";
import Header from "./Components/Header";


function Home()
{return(
  
        
        <Flex py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg='white'
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>   
            <Stack>    
                <Heading  color='black' size='2xl'>Welcome to Roommage!</Heading>
                <Heading>Find your roommate right now!!</Heading>
            </Stack>
     </Flex>
)}

export default Home;