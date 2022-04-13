import {Container, Button} from '@chakra-ui/react'

const Header=()=>{

    function link2profile(e){
        window.location.href="/Profile";
    }

    function link2login(e){
        window.location.href="/Login";
    }

    return (<Container>
        <Button>About</Button>
        <Button onClick={link2login}>Login</Button>
        <Button onClick={link2profile}>Profile</Button>
    </Container>)
    }
export default Header;