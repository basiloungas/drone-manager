import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import configureStore from './store';
import SessionManager from './modules/session-manager';
import generateEventsList from './modules/session-manager/events-list';

import App from './App';

const store = configureStore();

new SessionManager({
  url: 'http://localhost:4001', //TODO: should be process.env.URL
  eventsList: generateEventsList(store),
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
