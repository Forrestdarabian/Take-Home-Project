import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Combination of our state and reducer
import { createStore, applyMiddlware } from 'redux';
//Gives data to our component tree
import { Provider } from 'react-redux';
import reducer from './reducers';
//Importing thunk to create middleware
import thunk from 'redux-thunk';

const store =  createStore(reducer, applyMiddlware(thunk));

ReactDOM.render(
  //Store is a prop in our provider so it can be distributed
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

