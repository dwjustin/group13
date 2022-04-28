import { 
    Container,
    Heading, 
    Box, 
    RadioGroup, 
    Stack, 
    Radio, 
    useBreakpointValue, 
    useColorModeValue, 
    Textarea,
    Button } from "@chakra-ui/react"
import { useState } from "react";

const Questions=()=>{
    
    const [sex, setSex]=useState();
    // const [race, setRace]=useState();
    const [type, setType]=useState();
    const [smoke, setSmoke]=useState();
    const [house, setHouse]=useState([]);


    function ToResult(e){
        window.location.href="/Result";
    }

    return (
        <Container >
            <Stack>
            <Box  py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg='white'
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>    
                <Heading>Choose your Sexual Orientation</Heading>
                <RadioGroup onChange={setSex} value={sex}>
                    <Stack direction='column'>
                        <Radio value='1'>Heterosexual</Radio>
                        <Radio value='2'>Bisexual</Radio>
                        <Radio value='3'>Homosexual</Radio>
                        <Radio value='4'>Asexual</Radio>
                        <Radio value='5'>Pansexual</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
            {/* <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg='white'
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>    
                <Heading>Choose your race</Heading>
                <RadioGroup onChange={setRace} value={race}>
                    <Stack direction='column'>
                        <Radio value='1'>Caucasian</Radio>
                        <Radio value='2'>Mongolian</Radio>
                        <Radio value='3'>Negro</Radio>
                        <Radio value='4'>Malay</Radio>
                        <Radio value='5'>Polynesian</Radio>
                    </Stack>
                </RadioGroup>
            </Box> */}
            <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
                    bg='white'
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>    
                <Heading>Select your Sleep Schedule.</Heading>
                <RadioGroup onChange={setType} value={type}>   
                    <Stack direction="row">
                        <Radio value='1'>Early Bird</Radio>
                        <Radio value='2'>Night Owl</Radio>
                    </Stack>
                </RadioGroup> 
            </Box>
            <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
                    bg='white'
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>    
                <Heading>Do you Smoke?</Heading>
                <RadioGroup onChange={setSmoke} value={smoke}>   
                    <Stack direction="row">
                        <Radio value='1'>Yes</Radio>
                        <Radio value='0'>No</Radio>
                    </Stack>
                </RadioGroup> 
            </Box>
            <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
                    bg='white'
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>    
                <Heading>Choose your Housing Preference</Heading>
                <RadioGroup onChange={setSmoke} value={smoke}>   
                    <Stack direction="row">
                        <Radio value='1'>Yes</Radio>
                        <Radio value='0'>No</Radio>
                    </Stack>
                </RadioGroup> 
            </Box>
            <Box py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg='white'
                    boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
                    borderRadius={{ base: 'none', sm: 'xl' }}>    
                <Heading>Anything else you want to tell us?</Heading>
                <Textarea placeholder="ex) I can sleep well even with the lights turned on.">
                </Textarea>
            </Box>
            
            <Button onClick={ToResult}
                size='md'
                height='48px'
                width='200px'
                border='2px'
                borderColor='green.500'>
                Search!
            </Button>
            </Stack>
        </Container>
    )
}

export default Questions;