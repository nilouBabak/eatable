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
        },
        personalInfo: {
          name: "Alisa yo",
          age: 0,
          weight: 0,
          height: 0
        }
      }
    };

    // this.state = {
    //   preferences: {
    //     budget: "you",
    //     dietType: "",
    //     allergies: [],
    //     favourites: {
    //       likes: [],
    //       dislikes: []
    //     },
    //     personalInfo: {
    //       name: "Alisa yo",
    //       age: 0,
    //       weight: 0,
    //       height: 0
    //     }
    //   },
    //   update:this.update
    //   }
  }
  update = (preference: string, newPreference: string) => {
    console.log("trying");
    console.log(preference, "preference");
    console.log(newPreference, "NEW value for preference");
    // this.setState(prevState => ({...prevState, [preference]: newPreference}));
    this.setState((prevState: any) => ({
      ...prevState,
      preferences: { ...prevState.preferences, budget: "fyck" }
    }));
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
