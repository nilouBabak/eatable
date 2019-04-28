import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import Preferences from './pages/Preferences';
import Basket from './pages/Basket';
import Profile from './pages/Profile';
import MenuAppBar from './components/MenuAppBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* TODO: Render a different version of the user app bar when the user is not logged in */}
          <MenuAppBar> </MenuAppBar>
          <Route exact path="/" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/preferences" component={Preferences} />
          <Route path="/basket" component={Basket} />
        </div>
      </Router>
    );
  }
}

export default App;
