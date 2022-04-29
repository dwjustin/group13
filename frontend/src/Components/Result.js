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
import {useState, useEffect} from 'react';
import axios from 'axios';

const Result=(props)=>{
    const id = 4166207;//props.id; //id of the user whose results should be displayed
    const [data, setData] = useState();
    const getData = () => {
      axios
          .get(`http://localhost:3002/api/match/${id}`)
          .then((data) => setData(data.data))
          .catch((error) => console.log("getmatcherror"));
    };

    useEffect(() => {
      getData();
    }, []);

    const matches_length = data?.length;

    const ints = [1,2,3,4,5,6,7];

    return( 
    <div>
        <Header/>
        <Flex width="100%" justifyContent="space-evenly" flexWrap="wrap">
            {
                data?.map(function(person){
                  console.log(person["matchScore"]);
                  return <Card key="uniqueid1" id={person["user"][1]["userID"]} matchScore={person["matchScore"]}></Card>
                  //person["user"][1]["userID"]
                })
            } 
        </Flex>
        <About/>
  </div>)
}
export default Result;