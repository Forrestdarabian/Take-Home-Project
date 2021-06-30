import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Combination of our state and reducer
import { createStore, applyMiddleware, combineReducers } from 'redux';
//Gives data to our component tree
import { Provider } from 'react-redux';
import servicesReducer from './reducers/servicesReducer';
//Importing thunk to create middleware
import thunk from 'redux-thunk';
import locationsReducer from './reducers/locationsReducer';

const rootReducer = combineReducers({
  services: servicesReducer,
  locations: locationsReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk))
ReactDOM.render(
  //Store is a prop in our provider so it can be distributed
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

