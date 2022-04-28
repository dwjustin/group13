import {Container,Flex, Button, Box, Grid, Avatar, Img, bgImg, Spacer} from '@chakra-ui/react'


const Header=()=>{


    function link2result(e){
        window.location.href="/Result";
    }

    function link2profile(e){
        window.location.href="/Profile";
    }


    return (<Flex >
        {/* <Button sx=
        {{
            borderRadius:'0px',
            float: 'center',
            color: 'white',
            padding:'14px 30px',
            backgroundColor:'#333',
         }} onClick={link2about}>About</Button> */}
        <Button background='transparent' _hover={{background:"none"}} onClick={link2result}>
             <Avatar background='transparent' src="home.png"/>
         </Button>
         <Spacer/>
        <Button sx=
        {{
            backgroundColor:'transparent',
         }} _hover={{background:"none"}} onClick={link2profile}>
             <Avatar  name='' src=''/>
         </Button>
        {/* <Button sx=
        {{
            borderRadius:'0px',
            float: 'center',
            color: 'white',
            padding:'14px 30px',
            backgroundColor:'#333',
         }} onClick={link2login}>Login</Button> */}
        

    </Flex>)
    }
export default Header;