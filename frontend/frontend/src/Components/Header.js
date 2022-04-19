import {Container, Button, color, Box, Grid} from '@chakra-ui/react'

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
    return (<Box width="100%" backgroundColor='#333'>
        <Button sx=
        {{
            borderRadius:'0px',
            float: 'center',
            color: 'white',
            padding:'14px 30px',
            backgroundColor:'#333',
         }} onClick={link2about}>About</Button>
        <Button sx=
        {{
            borderRadius:'0px',
            float: 'center',
            color: 'white',
            padding:'14px 30px',
            backgroundColor:'#333',
         }} onClick={link2result}>Results</Button>
        <Button sx=
        {{
            borderRadius:'0px',
            float: 'center',
            color: 'white',
            padding:'14px 30px',
            backgroundColor:'#333',
         }} onClick={link2profile}>Profile</Button>
        <Button sx=
        {{
            borderRadius:'0px',
            float: 'center',
            color: 'white',
            padding:'14px 30px',
            backgroundColor:'#333',
         }} onClick={link2login}>Login</Button>
        <Button sx=
        {{
            borderRadius:'0px',
            float: 'center',
            color: 'white',
            padding:'14px 30px',
            backgroundColor:'#333',
         }} onClick={link2home}>Home</Button>

    </Box>)
    }
export default Header;