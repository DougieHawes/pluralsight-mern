import React from 'react';
import { Provider, connect } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './Dashboard';

export const Main = () => (
  <Provider store={store}>
    <ConnectedDashboard />
  </Provider>
);
