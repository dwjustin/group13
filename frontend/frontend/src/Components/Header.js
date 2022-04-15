import {Container, Button} from '@chakra-ui/react'

const Header=()=>{

    function link2about(e){
        window.location.href="/About";
    }

    function link2result(e){
        window.location.href="/Result";
    }

    function link2profile(e){
        window.location.href="/Profile";
    }

    function link2login(e){
        window.location.href="/Login";
    }

    function link2home(e){
        window.location.href="/";
    }
    return (<Container>
        <Button onClick={link2about}>About</Button>
        <Button onClick={link2result}>Results</Button>
        <Button onClick={link2profile}>Profile</Button>
        <Button onClick={link2login}>Login</Button>
        <Button onClick={link2home}>Home</Button>

    </Container>)
    }
export default Header;