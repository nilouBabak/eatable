import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import Preferences from './pages/Preferences';
import Basket from './pages/Basket';
import ItemDetails from './pages/ItemDetails';
import Profile from './pages/Profile';
import MenuAppBar from './components/MenuAppBar';
import theme from "./theme";
import { MuiThemeProvider } from '@material-ui/core';

import BasketItems from './pages/BasketItems';

import { AppContextInterface, AppContextProvider } from './components/AppContext';

const initialState: AppContextInterface = {
  preferences: {
    budget: 0,
    dietType: "",
    allergies: [],
    favourites: {
      likes: [],
      dislikes: []
    },
    personalInfo: {
      name: "Alisa yo",
      age: 0,
      weight: 0,
      height: 0
    }
  }
}

class App extends Component {
  render() {
    return (
    <MuiThemeProvider theme={theme}>
    <AppContextProvider value={initialState}>
      <Router>
        <div>
          {/* TODO: Render a different version of the user app bar when the user is not logged in */}
          <MenuAppBar> </MenuAppBar>
          <Route exact path="/" component={SignUp} />
          <Route path="/profile" component={Profile}></Route>
          <Route path="/preferences" component={Preferences} />
          <Route path="/basket-items" component={BasketItems} />
          <Route path="/basket" component={Basket} />
          <Route path="/item-details" component={ItemDetails} />
        </div>
      </Router>
      </AppContextProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
