import { Container,Heading, Box, RadioGroup, Stack, Radio, useBreakpointValue, useColorModeValue, Select } from "@chakra-ui/react"
import { useState } from "react";

const Questions=()=>{
    
    const [sex, setSex]=useState();
    const [race, setRace]=useState();
    const [type, setType]=useState();

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
                        <Radio sex='1'>Heterosexual</Radio>
                        <Radio sex='2'>Bisexual</Radio>
                        <Radio sex='3'>Homosexual</Radio>
                        <Radio sex='4'>Asexual</Radio>
                        <Radio sex='5'>Pansexual</Radio>
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
                        <Radio race='1'>Caucasian</Radio>
                        <Radio race='2'>Mongolian</Radio>
                        <Radio race='3'>Negro</Radio>
                        <Radio race='4'>Malay</Radio>
                        <Radio race='5'>Polynesian</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
            <Box py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>    
                <Heading>Select your type</Heading>
                <Select placeholder="Choose your type">
                    <option type='morning' onChange={setType}>Early Bird</option>
                    <option type='night' onChange={setType}>Night Owl</option>
                </Select>
            </Box>
        </Container>
    )
}

export default Questions;