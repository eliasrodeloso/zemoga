import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { compose, createStore } from 'redux';
import Router from '../config/routes.config';
import reducers from '../core/reducers/index';

let store;

if (process.env.NODE_ENV === 'development') {
  const composedStore = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line
      ? window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
      : f => f
  )(createStore);
  store = composedStore(reducers);
} else {
  store = createStore(reducers);
}

function App() {
  return (
    <ReduxProvider store={store}>
      <Router />
    </ReduxProvider>
  );
}

export default App;
