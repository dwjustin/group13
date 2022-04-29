import { 
    Button,
    Box, 
    Input, 
    Container, 
    Stack, 
    Text, 
    HStack, 
    Heading, 
    useBreakpointValue, 
    useColorModeValue, 
    FormControl, 
    Image,
    Checkbox,
    FormLabel,
    Divider, 
    Flex} from "@chakra-ui/react";

import { useState } from "react";

const axios=require('axios').default;

const Signup=()=>{

    const [email, setEmail]=useState('');
    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }
    const [password, setPassword]=useState('');
    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }
    function link2questions(e){
        window.location.href="/Questions";
    }

    function handleSubmit(e){
        
        
        axios.get("/login/")
        .then(function(response){
            console.log(response);
            link2questions();
        })
        
    }
    return(
        <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useBreakpointValue({ base: 'white', sm: 'bg-surface' })}
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}
        >
            <Stack spacing="6">
                <Stack spacing="5">
                    <Heading>Sign up for Roomage</Heading>
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" type="email" onChange={handleEmail} value={email}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Password</FormLabel>
                        <Input id="password" type="password" onChange={handlePassword} value={password}/>
                    </FormControl>
                </Stack>
                <Stack spacing="6">
                    <Button onClick={link2questions} colorScheme='blue' >Sign up!</Button>
                </Stack>
            </Stack>
        </Box>
        )
    }
export default Signup;