import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import configureStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// HYDRATE MANUALLY THE STORE FOR DEVELOPMENT OF UI
// TODO: remove after websockets are setup
import { hydrateDroneData } from './store/drones/actions';
import payload from './payload.json';

const store = configureStore();
store.dispatch( new hydrateDroneData(payload) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
