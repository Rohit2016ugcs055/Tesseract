import React from 'react';
import { Provider } from 'react-redux';

import HiristContainer from '../../modules/JobSeek/components/HiristContainer.js'

import configureStore from '../../store';

import RootWrapper from '../../components/RootWrapper';
import Routes from '../../routes';
import './App.css';

// Configure the store instance
const store = configureStore();

const App = () => (
  <RootWrapper>
    <Provider store={store}>
   {Routes}
    </Provider>
  </RootWrapper>
);

App.propTypes = {
};

export default App;
