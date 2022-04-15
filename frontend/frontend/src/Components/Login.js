import { Button, Container, Input} from "@chakra-ui/react";
import Header from './Header.js'

const Login=()=>{

    return (
        <Container>
            <Header/>
            <Input type='text' placeholder="User ID"/>
            <Input placeholder="Password"/>
            <Button>Sign In</Button>
            
        </Container>
    )
}

export default Login;
