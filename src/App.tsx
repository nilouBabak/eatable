import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import Preferences from './pages/Preferences';
import Basket from './pages/Basket';
import Profile from './pages/Profile';
import MenuAppBar from './components/MenuAppBar';
import theme from "./theme";
import { MuiThemeProvider } from '@material-ui/core';

import BasketItems from './pages/BasketItems';

class App extends Component {
  state = {
    name: "",
    age: 0,
    likes: [],
    dislikes: [],
    userId: ""
  }
  render() {
    return (

    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          {/* TODO: Render a different version of the user app bar when the user is not logged in */}
          <MenuAppBar> </MenuAppBar>
          {/* <Route exact path="/" component={() => <SignUp props={state}/>} /> */}
          <Route exact path="/" component={SignUp} />
          <Route path="/profile" component={Profile}></Route>
          <Route path="/preferences" component={Preferences} />
          <Route path="/basket-items" component={BasketItems} />
          <Route path="/basket" component={Basket} />
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
