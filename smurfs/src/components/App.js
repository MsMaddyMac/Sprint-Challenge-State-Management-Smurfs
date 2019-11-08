import React from 'react'
import "./App.css";
// // Redux imports
import { createStore } from 'redux';
// react-redux imports
import { Provider } from 'react-redux';
// component imports
import reducer from '../reducers';
import SmurfCard from './SmurfCard';

const store = createStore(reducer);

function App () {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfCard />
      </div>
    </Provider>
  )
}


export default App;
