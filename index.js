import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

// Import the App container component
import App from './app/App';
import {name as appName} from './app.json';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import the reducer and create a store
import { reducer } from './app/redux/todoListRedux'
const store = createStore(reducer)

// Pass the store into the Provider

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => AppWithStore);
