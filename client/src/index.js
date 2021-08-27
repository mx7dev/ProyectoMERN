import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import rootReducer from './store/reducers';

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
