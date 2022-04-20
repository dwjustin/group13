import {  Box, Heading, Link, useBreakpointValue, useColorModeValue} from "@chakra-ui/react";
import Header from "./Components/Header";


function Home()
{return(
    <Box >
        <Box w='100%'>
            <Header/>
        </Box>
        <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>   
            <Heading  color='black' size='2xl'>Welcome to Roommage!
                <br/>Where the Magic Happens...
                <br/>Find your roommate right now!!<br/>
                <Link href="Questions" size='2xl'>
                    Let's Go!
                </Link>
           
            </Heading>
     </Box> 
    </Box>
)}

export default Home;