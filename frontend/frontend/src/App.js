import React from 'react';
import {
  ChakraProvider,
  extendTheme, Box,Img
} from '@chakra-ui/react';
import Home from './Home';
import { Switch,Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Questions from './Components/Questions';
import About from './Components/About';
import Result from './Components/Result';

const theme=extendTheme({
  fonts:{
    heading: 'Heading Font Name, sans-serif'
  }
})

function App() {
  return (
    
    <Router>
      <Switch>  
        <ChakraProvider theme={theme}>
        <Box> 
          <Img zIndex='-1' height='868px' position='absolute'  src='background.png' alt="No photo" objectFit='cover' /> </Box>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Profile' component={Profile}/>
          <Route exact path='/Login' component={Login}/>
          <Route exact path='/Questions' component={Questions}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/Result' component={Result}/>
        
        </ChakraProvider>
        </Switch>
    </Router>
  );
}

export default App;
