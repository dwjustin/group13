import {Container, Button} from '@chakra-ui/react'

const Header=()=>{

    function link2about(e){
        window.location.href="/About";
    }

    function link2profile(e){
        window.location.href="/Profile";
    }

    function link2login(e){
        window.location.href="/Login";
    }

    return (<Container>
        <Button onClick={link2about}>About</Button>
        <Button onClick={link2login}>Login</Button>
        <Button onClick={link2profile}>Profile</Button>
    </Container>)
    }
export default Header;