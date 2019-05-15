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
  
  export interface IPreferenceState {
    budget: string,
    dietType: string,
    allergies: string[],
    favourites: IFavouritesObject,
    personalInfo: IPersonalInfoObject
  }
  
  export interface AppContextInterface {
    preferences: any,
    update: () => void;//(preference:string, newPreference: string) => void;
  }
  

// const AppContext = React.createContext(initialState);

// class AppProvider extends Component<{}, AppContextInterface> {

// render() {
//     return <AppContext.Provider value={this.state}>
//       {this.props.children}
//     </AppContext.Provider>
//   }
// }



const ctxt = React.createContext<any | null>(null);

export const AppContextProvider = ctxt.Provider;
  
export const AppContextConsumer = ctxt.Consumer;

export const AppContext = ctxt;