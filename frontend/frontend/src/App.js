import React from 'react';
import {
  ChakraProvider,
  theme,
  Switch,
} from '@chakra-ui/react';
import Home from './Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Questions from './Components/Questions';

function App() {
  return (
    
    <Router>
      <Switch>  
        <ChakraProvider theme={theme}>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Profile' component={Profile}/>
          <Route exact path='/Login' component={Login}/>
          <Route exact path='/Questions' component={Questions}/>
        </ChakraProvider>
        </Switch>
    </Router>
  );
}

export default App;
