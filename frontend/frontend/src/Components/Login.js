import { Button, Container,Box, Input} from "@chakra-ui/react";
import Header from './Header.js'

const Login=()=>{

    return (
        <Box>
            <Header/>
            <Input type='text' placeholder="User ID"/>
            <Input placeholder="Password"/>
            <Button>Sign In</Button>
            
        </Box>
    )
}

export default Login;
