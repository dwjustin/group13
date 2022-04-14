import { 
    Container,
    Heading, 
    Box, 
    RadioGroup, 
    Stack, 
    Radio, 
    useBreakpointValue, 
    useColorModeValue, 
    Select, 
    Textarea,
    Button } from "@chakra-ui/react"
import { useState } from "react";

const Questions=()=>{
    
    const [sex, setSex]=useState();
    const [race, setRace]=useState();
    const [type, setType]=useState();
    const [etc, setEtc]=useState();

    return (
        <Container>
            <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
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
            <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
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
            </Box>
            <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>    
                <Heading>Select your Routine type</Heading>
                <Select placeholder="Choose your routine type">
                    <option value='1' onChange={setType}>Early Bird</option>
                    <option value='2' onChange={setType}>Night Owl</option>
                </Select>
            </Box>
            <Box py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
                    boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
                    borderRadius={{ base: 'none', sm: 'xl' }}>    
                <Heading>Anything else you have to tell us?</Heading>
                <Textarea value={etc} onChange={setEtc} placeholder="ex) I can sleep well even with the lights turned on.">
                    
                </Textarea>
            </Box>
            <Button
                size='md'
                height='48px'
                width='200px'
                border='2px'
                borderColor='green.500'>
                Search!
            </Button>
        </Container>
    )
}

export default Questions;