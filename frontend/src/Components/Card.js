import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react';

import {
  MoonIcon,
  SunIcon,
  CheckCircleIcon,
  NotAllowedIcon,
} from '@chakra-ui/icons';

import {useState, useEffect} from 'react';
import axios from 'axios';
  
export default function Card(props) {
    const id = props.id;
    const matchScore = props.matchScore;
    const [data, setData] = useState();

    const getData = () => {
      axios
          .get(`http://localhost:3002/api/profile/${id}`)
          .then((data) => setData(data.data))
          .catch((error) => console.log("hello"));
    };
    
    useEffect(() => {
      getData();
      /*
      console.log("set1"); 
      setData({
        "username": "testuser",
        "email": "testuser@berkeley.edu",
        "password": "abcd1234",
        "userID": 12345,
        "pictureURL": "https://tinder.com/static/tinder.png",
        "year" : "Freshman",
        "bio" : "Web development enjoyer",
        "data": {
            "cleanliness": 5,
            "morningPerson": true,
            "nightPerson": false,
            "smokingTolerance": false,
            "housing": {
                "unit1": true,
                "unit2": false,
                "unit3": true,
                "foothill": false,
                "clarkKerr": true,
                "martinez": false,
                "blackwell": true
            }
        }
    });
    */
    console.log("set2"); 
    }, []);

    console.log(data);

    
    let housingArr = [];
    if(data){
      if(data["user"]["data"]["housing"]["unit1"]){
        housingArr.push("Unit 1");
      }
      if(data["user"]["data"]["housing"]["unit2"]){
        housingArr.push("Unit 2");
      }
      if(data["user"]["data"]["housing"]["unit3"]){
        housingArr.push("Unit 3");
      }
      if(data["user"]["data"]["housing"]["foothill"]){
        housingArr.push("Foothill");
      }
      if(data["user"]["data"]["housing"]["clarkKerr"]){
        housingArr.push("Clark Kerr");
      }
      if(data["user"]["data"]["housing"]["martinez"]){
        housingArr.push("Martinez");
      }
      if(data["user"]["data"]["housing"]["blackwell"]){
        housingArr.push("Blackwell");
      }
    }
    

    const arr = [1,2,3,4];

    //console.log(data ? data['data'].housinglist[3] : 'loading');
    //const housingList = data ? data['data'].housinglist : 'loading'
    function getIcon(icon){
      if(icon == 'moon'){
        return <MoonIcon/>
      }
      if(icon == 'sun'){
        return <SunIcon/>
      }
      if(icon == 'check'){
        return <CheckCircleIcon/>
      }
      if(icon == 'notallowed'){
        return <NotAllowedIcon/>
      }
    }

    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
              data ? data['pictureURL'] : 'https://tinder.com/static/tinder.png'
            }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {data ? data["user"]['name'] : 'Loading'}
          </Heading>
          <Text fontWeight={600} color={'gray.500'}>
            {data ? data["user"]['year'] : 'Loading'}
          </Text>
          <Heading fontSize={'xs'} fontFamily={'body'}  mb={4}>
            {matchScore ? "Match Score: " + matchScore : 'Loading'}
          </Heading> 
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {data ? data["user"]['bio'] : 'Loading'}
          </Text>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6} flexWrap="wrap">
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              margin="10px"
              fontWeight={'400'}>
              {data ? (data["user"]['morningPerson'] ? 'Morning person ' : 'Night person ')  : 'Loading'} 
              {data ? (data["user"]['morningPerson'] ? getIcon('sun') : getIcon('moon'))  : 'Loading'}
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              margin="10px"
              fontWeight={'400'}>
              {data ? (data["user"]['smokingTolerance'] ? 'Smoke allowed ' : 'No smoking ')  : 'Loading'}
              {data ? (data["user"]['smokingTolerance'] ? getIcon('check') : getIcon('notallowed'))  : 'Loading'}
            </Badge>
            {
              housingArr.map(function(item){
                return <Badge
                px={2}
                py={1}
                fontWeight={'400'}
                margin="10px">
                {data ? item  : 'Loading'}
              </Badge>
              })
            } 
          </Stack>
          <Stack mt={8} direction={'row'} spacing={4}>
            <Popover>
              <PopoverTrigger>
              <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Message
            </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Email:</PopoverHeader>
                <PopoverBody>{data? data["user"]["email"] : "Loading"}</PopoverBody>
              </PopoverContent>
            </Popover>
            
          </Stack>
        </Box>
      </Center>
    );
  }