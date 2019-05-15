import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import Preferences from "./pages/Preferences";
import Basket from "./pages/Basket";
import ItemDetails from "./pages/ItemDetails";
import Profile from "./pages/Profile";
import MenuAppBar from "./components/MenuAppBar";
import theme from "./theme";
import { MuiThemeProvider } from "@material-ui/core";

import BasketItems from "./pages/BasketItems";

import {
  AppContextInterface,
  IPreferenceState,
  AppContextProvider
} from "./components/AppContext";

interface IAppInterface {
  update: () => void;
}
class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      preferences: {
        budget: "fuck this",
        dietType: "",
        allergies: [],
        favourites: {
          likes: [],
          dislikes: []
        }
      },
      personalInfo: {
        name: "Alisa yo",
        age: "21",
        weight: "160",
        height: "180"
      }
    };
  }
  update = (key: string, newPreference: string, type:string) => {
    console.log(type, "type")
    console.log(key, "key")
    if(type === "pers") {
      this.setState((prevState: any) => ({
        ...prevState,
        personalInfo: {...prevState.personalInfo, [key]: newPreference}
      }));   
    }
    if(type === "pref") {
    this.setState((prevState: any) => ({
      ...prevState,
      preferences: { ...prevState.preferences, [key]: newPreference },
    }));
  } 
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            {/* TODO: Render a different version of the user app bar when the user is not logged in */}
            <MenuAppBar> </MenuAppBar>

            <AppContextProvider
              value={{ ...this.state, update: this.update.bind(this) }}
            >
              <Route exact path="/" component={SignUp} />
              <Route path="/profile" component={Profile} />
              <Route path="/preferences" component={Preferences} />
              <Route path="/basket-items" component={BasketItems} />
              <Route path="/basket" component={Basket} />
              <Route path="/item-details" component={ItemDetails} />
            </AppContextProvider>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
