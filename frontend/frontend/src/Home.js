import {  Box, Heading, Link, Img} from "@chakra-ui/react";
import Header from "./Components/Header";


function Home()
{return(
    <Box >
        
        <Box w='100%'>
            <Header/>
        </Box>
        <Heading  color='blue' size='2xl'>Welcome to Roommage!
            <br/>Where the Magic Happens...
            <br/>Find your roommate right now!!<br/>
            <Link href="Questions" size='2xl'>
                Let's Go!
            </Link>
        
        </Heading>
    
    </Box>
)}

export default Home;