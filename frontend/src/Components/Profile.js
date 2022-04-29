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

    const housingArr = ["Unit 1", "Unit 2", "Clark Kerr", "Blackwell"];//data ? data['data'].housinglist : 'loading';

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
                    Kai<br/>
                </Heading>
                <Text>
                    
                </Text>
                <Heading as='h5' size='md'>
                    <br/>Preferences
                </Heading>
                <Text>
                    Cleanliness: 5 <br/>
                    Smoke Tolerance: No Smoking<br/>
                    Sleep schedule: Night Owl<br/>
                    <br/>
                    Housing preferences:<br/>
                    Unit 1, Unit 2, Blackwell, Clark Kerr<br/>
                </Text>
            </Flex>
            <Flex>

            </Flex>
        </div>
    )}

    
export default Profile;