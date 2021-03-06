import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';
import PostDetails from './components/PostDetails/PostDetails';
import { Container } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <Router>
      <Header></Header>
            <Container fixed> 
      <Switch>

        <Route exact path="/">
            <Home></Home>
        </Route>

        <Route path="/home">
            <Home></Home>
        </Route>

        <Route path="/post/:postId">
            <PostDetails />
        </Route>

        <Route path="*">
            <NoMatch />
        </Route>

      </Switch>
    

      </Container>
      </Router>
    </React.Fragment>
    
  );
}

export default App;
