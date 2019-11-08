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


const store = createStore(
  reducer, 
  (applyMiddleware(thunk, logger))
);


function App () {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>Meet the Smurfs!</h1>
        <SmurfCard />
      </div>
    </Provider>
  )
}


export default App;
