import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import Router from '../config/routes.config';
import reducers from '../core/reducers/index';

let store;

const createDevStoreWithMiddleware = compose(
  applyMiddleware(save({ debounce: 500 })),
  window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line
    ? window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    : f => f
)(createStore);

const createStoreWithMiddleware = compose(applyMiddleware(save()))(createStore);

if (process.env.NODE_ENV === 'development') {
  store = createDevStoreWithMiddleware(reducers, load());
} else {
  store = createStoreWithMiddleware(reducers, load());
}

function App() {
  return (
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  );
}

export default App;
