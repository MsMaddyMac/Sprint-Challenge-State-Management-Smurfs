import React from 'react'
import "./App.css";
// // Redux imports
import { applyMiddleware, createStore } from 'redux';
// react-redux imports
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// component imports
import reducer from '../reducers';
import SmurfCard from './SmurfCard';
import SmurfForm from './SmurfForm';
// image imports
import Brainey from '../images/Brainey.jpeg';
import Papa from '../images/Papa.png';




const store = createStore(
  reducer, 
  (applyMiddleware(thunk, logger))
);

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <img className="papa" alt="Papa Smurf" src={Papa}></img>
          <h1>Meet the Smurfs!</h1>
          <img className="brainey" alt="Brainey Smurf" src={Brainey}></img>
        </header>
        <div className="container">    
          <SmurfCard />
          <SmurfForm /> 
        </div>
      </div>
    </Provider>
  )
}


export default App;
