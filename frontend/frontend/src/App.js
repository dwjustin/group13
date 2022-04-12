import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Switch,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Home from './Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './Components/Profile';
import Login from './Components/Login';

function App() {
  return (
    
    <Router>
      <Switch>  
        <ChakraProvider theme={theme}>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Profile' component={Profile}/>
          <Route exact path='/Login' component={Login}/>
        </ChakraProvider>
        </Switch>
    </Router>
  );
}

export default App;
