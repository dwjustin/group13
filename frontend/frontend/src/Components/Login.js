import { Button, Container, Input, Link } from "@chakra-ui/react";
import { useState } from "react";

const Login=()=>{

    return (
        <Container>
            <Input placeholder="User ID"/>
            <Input placeholder="Password"/>
            <Button>Sign In</Button>
            
        </Container>
    )
}

export default Login;
