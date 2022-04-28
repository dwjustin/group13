import Questions from "./Questions";
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    Flex,
    useBreakpointValue,
    useColorModeValue,
  } from '@chakra-ui/react'
import Card from "./Card";
import Header from './Header.js'
import About from "./About";


const Result=()=>{
    return( 
    <div>
        <Header/>
        <Flex width="100%" justifyContent="center">
            <Card id="1"></Card>  
        </Flex>
        <About/>
  </div>)
}
export default Result;