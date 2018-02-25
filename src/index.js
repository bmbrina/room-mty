/* eslint-disable import/default */
import React from 'react';
import { persistStore } from 'redux-persist'
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import './styles/application.scss';
require('./favicon.ico'); // Tell webpack to load favicon.ico
const store = configureStore();
const persistor = persistStore(store);

render(
  <AppContainer>
    <Root store={store} history={history} persistor={persistor} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} persistor={persistor} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
