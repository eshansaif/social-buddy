import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';
import PostDetails from './components/PostDetails/PostDetails';
import { Container } from '@material-ui/core';

function App() {
  return (



    <React.Fragment>
      <Header className="fixed-top"></Header>
            <Container fixed>
    
    <Router>
      
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
    </Router>

      </Container>
    </React.Fragment>
    
  );
}

export default App;
