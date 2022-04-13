import { Button, Container, Input} from "@chakra-ui/react";


const Login=()=>{

    return (
        <Container>
            <Input type='text' placeholder="User ID"/>
            <Input placeholder="Password"/>
            <Button>Sign In</Button>
            
        </Container>
    )
}

export default Login;
