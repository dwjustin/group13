import React from 'react';
import {
  ChakraProvider,
  extendTheme, Box, Image
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
        <Box  width="100%" height="100%"> 
          <Image width="full" height="100vh" zIndex='-1'  position='absolute'  src='background.png' alt="No photo" objectFit='cover' /> 
          <Route exact path='/' component={Login}/>
          <Route exact path='/Profile' component={Profile}/>
          {/* <Route exact path='/Login' component={Login}/> */}
          <Route exact path='/Questions' component={Questions}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/Result' component={Result}/>
        </Box>
        </ChakraProvider>
        </Switch>
    </Router>
  );
}

export default App;
