import { Text, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";

const About=()=>{
    return <>
    <Heading>About the Application...</Heading>
    
    <Text>
        Finding a college dorm roommate is challenging,<br/> especially if you are not from the area or if you don’t have another high school friend going to the same college. <br/>We wanted to make the transition from highschool to college as smooth as possible.<br/> Gathering individualized data about students and utilizing an algorithm to measure their preferences, <br/>our app assists students to find their dorm friends.
    </Text>

    <Heading spacing={3}>Developers</Heading>
    <List spacing={3}>
        <ListItem>
        <ListIcon color='green.500' />Damien Toh
        </ListItem>
        <ListItem>
        <ListIcon color='green.500' />Noah Sedlik
        </ListItem>
        <ListItem>
        <ListIcon color='green.500' />Aditya Tummala
        </ListItem>
        <ListItem>
        <ListIcon color='green.500' />Dongwoo Kim
        </ListItem>
        <ListItem>
        <ListIcon color='green.500' />Kai Wen
        </ListItem>
        <ListItem>
        <ListIcon color='green.500' />Diana Seo
        </ListItem>
    </List>

    <Text>
        Special Thanks to Emir Karabeg
    </Text>
    </>
}

export default About;