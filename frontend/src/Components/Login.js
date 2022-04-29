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
import Home from "../Home";
const axios=require('axios').default;

const Login=()=>{
    function link2result(e){
        window.location.href="/Result";
    }
    
    function link2signup(e){
        window.location.href="/Signup";
    }

    const [email, setEmail]=useState('');
    const handleEmail=(event)=>{
        setEmail(event.target.value);
    }
    const [password, setPassword]=useState('');
    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }

    const user={"email": "kaiwen129@berkeley.edu",
                "password": "asdf123"
            }
    /*
    function handleSubmit(e){
        var axios = require('axios');
        var data = JSON.stringify({
        "email": "kaiwen129@berkeley.edu",
        "password": "asdf123"
        });

        var config = {
        method: 'get',
        url: 'http://localhost:3002/api/login',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
        
    }
    */
    return (
        
        
        <Stack direction={{base:'column', md:'row'}} spacing='10px'>
           
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Home/>
            </Flex>
            
           
            
            <Flex  p={8} flex={1} align={'center'} justify={'center'}>
                
                <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg='white'
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>
                <Stack spacing="8">
                    <Stack spacing="6">
                        <Stack  spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
                            Log in to your account
                            </Heading>
                            <HStack spacing="1" justify="center">
                                <Text color="muted">Don't have an account?</Text>
                                <Button onClick={link2signup} variant="link" colorScheme="blue">
                                Sign up
                                </Button>
                            </HStack>
                        </Stack>
                    </Stack>
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
                        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        <Stack spacing="6">
                            <Stack spacing="5">
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
                                <Button onClick={link2result} colorScheme='blue' >Sign in</Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
                </Box>
            </Flex>
        </Stack>
            
      
    )
}

export default Login;
