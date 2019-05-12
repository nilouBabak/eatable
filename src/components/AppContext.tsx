import React, {Component} from 'react';


interface IFavouritesObject {
    likes: string[],
    dislikes: string[]
  }
  
  interface IPersonalInfoObject {
    name: string,
    age: number,
    weight: number,
    height: number
  }
  
  interface IPreferenceState {
    budget: number,
    dietType: string,
    allergies: string[],
    favourites: IFavouritesObject,
    personalInfo: IPersonalInfoObject
  }
  
  export interface AppContextInterface {
    preferences: IPreferenceState,
  
  }
  

// const AppContext = React.createContext(initialState);

// class AppProvider extends Component<{}, AppContextInterface> {

// render() {
//     return <AppContext.Provider value={this.state}>
//       {this.props.children}
//     </AppContext.Provider>
//   }
// }



const ctxt = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;
  
export const AppContextConsumer = ctxt.Consumer;