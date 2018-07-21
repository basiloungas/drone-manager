import {createStore} from 'redux';

import rootReducer from './reducers';

export default extraReducers => createStore(
  rootReducer(extraReducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
