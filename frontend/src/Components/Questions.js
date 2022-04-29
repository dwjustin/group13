import { 
    Container,
    Heading, 
    Box, 
    RadioGroup, 
    Stack, 
    Radio, 
    useBreakpointValue, 
    useRadioGroup,
    useColorModeValue, 
    Textarea,
    Button, 
    HStack,
    list,

    useRadio,
    chakra,
    useToast} from "@chakra-ui/react"
import { useState } from "react";

const Questions=()=>{
    

    // const [race, setRace]=useState();
    const [year, setYear]=useState();
    const [clean, setClean]=useState();
    const [type, setType]=useState();
    const [smoke, setSmoke]=useState();
    const [unit1,setUnit1]=useState();
    const [unit2,setUnit2]=useState();
    const [unit3,setUnit3]=useState();
    const [foothill,setFoothill]=useState();
    const [clarkKerr,setClark]=useState();
    const [martinez,setMartinez]=useState();
    const [blackwell,setBlackwell]=useState();

    function RadioCard(props) {
        const { getInputProps} = useRadio(props)
      
        const input = getInputProps()

      
        return (
          <Box as='label'>
            <input {...input} />
            <Box
        
      
              borderWidth='1px'
              borderRadius='md'
              boxShadow='md'
      
              _focus={{
                boxShadow: 'outline',
              }}
              px={5}
              py={3}
            >
              
            </Box>
          </Box>
        )
      }

  
    const house= ["unit1","unit2","unit3","foothill","clarkKerr"," martinez","blackwell",]
    
    // function Housing() {
    //     const { getRootProps, getRadioProps } = useRadioGroup({
    //       name: 'framework',
    //       defaultValue: 'none',
    //       onChange: console.log,
    //     })
    //     const group=getRootProps();
    //     return (
    //         <HStack {...group}>
    //           {house.map((value)=>{
    //             const x=getRadioProps({value})
    //             return(
    //                 <RadioCard key={value}{...x}>{value}
    //                 <RadioGroup onChange={setHome} value={home}>
    //                     <Radio value="True">True</Radio>
    //                     <Radio value="False">False</Radio>
    //                 </RadioGroup>
    //                 </RadioCard>
    //             )
    //         })}
              
    //         </HStack>
    //       )
    //     }
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
                <Heading>Choose your year.</Heading>
                <RadioGroup onChange={setYear} value={year}>
                    <Stack direction='row' flexWrap="wrap">
                        <Radio value='Freshman'>Freshman</Radio>
                        <Radio value='Sophomore'>Sophomore</Radio>
                        <Radio value='Junior'>Junior</Radio>
                        <Radio value='Senior'>Senior</Radio>
                        <Radio value='Grad Student'>Grad Student</Radio>
                    </Stack>
                </RadioGroup>
            </Box>    
            <Box  py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg='white'
            boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
            borderRadius={{ base: 'none', sm: 'xl' }}>    
                <Heading>Rate your Cleanliness.</Heading>
                <RadioGroup onChange={setClean} value={clean}>
                    <Stack direction='row'>
                        <Radio value='1'>1</Radio>
                        <Radio value='2'>2</Radio>
                        <Radio value='3'>3</Radio>
                        <Radio value='4'>4</Radio>
                        <Radio value='5'>5</Radio>
                    </Stack>
                </RadioGroup>
            </Box>
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
                <Heading>Choose all your Housing Preferences</Heading>
                <Box as='label'>
                <Stack>
                <Box borderWidth='1px' borderRadius='md' boxShadow='md' px={5} py={3}>
                <Heading>Unit 1</Heading>
                <RadioGroup onChange={setUnit1} value={unit1}>   
                    <Stack direction="row">
                        <Radio value="1">Yes</Radio>
                        <Radio value="0">No</Radio>
                    </Stack>
                </RadioGroup> 
                </Box>
                <Box borderWidth='1px' borderRadius='md' boxShadow='md' px={5} py={3}>
                <Heading>Unit 2</Heading>
                <RadioGroup onChange={setUnit2} value={unit2}>   
                    <Stack direction="row">
                        <Radio value="1">Yes</Radio>
                        <Radio value="0">No</Radio>
                    </Stack>
                </RadioGroup>
                </Box>
                <Box borderWidth='1px' borderRadius='md' boxShadow='md' px={5} py={3}>
                <Heading>Unit 3</Heading>
                <RadioGroup onChange={setUnit3} value={unit3}>   
                    <Stack direction="row">
                        <Radio value="1">Yes</Radio>
                        <Radio value="0">No</Radio>
                    </Stack>
                </RadioGroup>
                </Box>
                <Box borderWidth='1px' borderRadius='md' boxShadow='md' px={5} py={3}>
                <Heading>Foothill</Heading>
                <RadioGroup onChange={setFoothill} value={foothill}>   
                    <Stack direction="row">
                        <Radio value="1">Yes</Radio>
                        <Radio value="0">No</Radio>
                    </Stack>
                </RadioGroup>
                </Box>
                <Box borderWidth='1px' borderRadius='md' boxShadow='md' px={5} py={3}>
                <Heading>Clark Kerr</Heading>
                <RadioGroup onChange={setClark} value={clarkKerr}>   
                    <Stack direction="row">
                        <Radio value="1">Yes</Radio>
                        <Radio value="0">No</Radio>
                    </Stack>
                </RadioGroup>
                </Box>
                <Box borderWidth='1px' borderRadius='md' boxShadow='md' px={5} py={3}>
                <Heading>Martinez</Heading>
                <RadioGroup onChange={setMartinez} value={martinez}>   
                    <Stack direction="row">
                        <Radio value="1">Yes</Radio>
                        <Radio value="0">No</Radio>
                    </Stack>
                </RadioGroup>
                </Box>
                <Box borderWidth='1px' borderRadius='md' boxShadow='md' px={5} py={3}>
                <Heading>Blackwell</Heading>
                <RadioGroup onChange={setBlackwell} value={blackwell}>   
                    <Stack direction="row">
                        <Radio value="1">Yes</Radio>
                        <Radio value="0">No</Radio>
                    </Stack>
                </RadioGroup>
                </Box>
                </Stack>
          </Box>
              
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