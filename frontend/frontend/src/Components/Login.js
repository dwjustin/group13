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
import Home from "../Home";


const Login=()=>{
    function link2result(e){
        window.location.href="/Result";
    }
    function link2questions(e){
        window.location.href="/Questions";
    }
    return (
        
        
        <Stack direction={{base:'column', md:'row'}}>
           
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
                                <Button onClick={link2questions} variant="link" colorScheme="blue">
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
                                    <Input id="email" type="email" />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="email">Password</FormLabel>
                                    <Input id="password" type="password" />
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
