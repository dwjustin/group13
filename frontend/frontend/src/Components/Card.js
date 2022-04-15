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
    //pfp, location preference, morning/night, room size bio
    const [data, setData] = useState();

    const getData = () => {
      console.log('helo');
      axios
          .get(`http://localhost:3002/api/profile/${id}`)
          .then((data) => setData(data.data))
          .catch((error) => console.log('hi'));
    };
    
    useEffect(() => {
      getData();
    }, []);

    /*const housingList = data["data"].housingList.map((item) => (
      <ListItem>{item}</ListItem>
    ));
                  data ? data['profileURL'] : 'https://tinder.com/static/tinder.png'

    console.log(data["data"]);
    {data ? data['name'] : 'Test'}
    */
    const housingArr = data ? data['data'].housinglist : 'loading';
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
            {data ? data['name'] : 'Loading'}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {data ? data['year'] : 'Loading'}
          </Text>
          <UnorderedList>
            
          </UnorderedList>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            {data ? data['bio'] : 'Loading'}
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              {data ? (data['morningPerson'] ? 'Morning person ' : 'Night person ')  : 'Loading'} 
              {data ? (data['morningPerson'] ? getIcon('sun') : getIcon('moon'))  : 'Loading'}
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              {data ? (data['smokingTolerance'] ? 'Smoke allowed ' : 'No smoking ')  : 'Loading'}
              {data ? (data['smokingTolerance'] ? getIcon('check') : getIcon('notallowed'))  : 'Loading'}
            </Badge>
          </Stack>
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
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
              Follow
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }