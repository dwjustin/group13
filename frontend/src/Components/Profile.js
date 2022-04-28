import { 
    Text,
    Heading, 
    Image,  
    Flex, 
    Button,
    Input, 

} from "@chakra-ui/react";

import Header from './Header.js'

import {useState, useEffect} from 'react';
import axios from 'axios';

function Profile(){
    //const id = props.id; will make each profile page unique to id/route
    const id = 1;

    //using dummy person for now
    const [data, setData] = useState();

    const onImgChange=(e)=>{

    }

    const getData = () => {
        axios
          .get(`http://localhost:3002/api/profile/${id}`)
          .then((data) => setData(data.data))
          .catch((error) => console.log('hi'));
        console.log('helo');
    };
    
    useEffect(() => {
      getData();
    }, []);

    const housingArr = data ? data['data'].housinglist : 'loading';

    return(
        <div>
            <Header/>
            <Flex align="center" w="100%" justify="center" flexDirection="column">
                <Image 
                    boxSize='200px'
                    borderRadius='100px'
                    display='flex'
                    justifyContent='center'
                    margin='20px'
                    src={
                        data ? data['pictureURL'] : 'https://tinder.com/static/tinder.png'
                      } alt='default pic'
                />
                <Button margin="20px">Change Profile Pic</Button>
                <Heading as='h3' size='lg'>
                    {data ? data['name'] : 'Loading'}<br/>
                </Heading>
                <Text>
                    <em>{data ? data['year'] : 'Loading'}</em><br/>
                    {data ? data['bio'] : 'Loading'}<br/>
                </Text>
                <Heading as='h5' size='md'>
                    <br/>Preferences
                </Heading>
                <Text>
                    Smoke Tolerance: {data ? (data['smokingTolerance'] ? 'Smoke allowed ' : 'No smoking') : 'Loading'}<br/>
                    Sleep schedule: {data ? (data['nightPerson'] ? 'Night person' : 'Morning person') : 'Loading'}<br/>
                    <br/>
                    Housing preferences:<br/>
                    {data ? (housingArr.map((item) => (
                        <div>
                            <Text>{item}</Text>
                        </div>
                    ))) : 'Loading'}
                </Text>
                <Input type='file' accept="image/*" onChange={onImgChange}/>
                <Button margin="20px">Edit Profile</Button>
            </Flex>
            <Flex>

            </Flex>
        </div>
    )}

    
export default Profile;