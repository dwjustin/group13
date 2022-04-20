import {  Box, color, Heading, Link, useBreakpointValue, useColorModeValue} from "@chakra-ui/react";
import Header from "./Components/Header";


function Home()
{return(
    <Box >
        
        <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg='transparent'
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>   
            <Heading  color='black' size='2xl'>Welcome to Roommage!
                <br/>Where the Magic Happens...
                <br/>Find your roommate right now!!<br/>
                
                    Let's Go!
                
           
            </Heading>
     </Box> 
    </Box>
)}

export default Home;