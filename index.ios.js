import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root from './src/root';
import configureStore from './src/store/store';

const store = configureStore();

class RNBase extends Component {
  render() {
    return <Root {...this.props} store={store} />
  }
}

AppRegistry.registerComponent('MicFlags', () => RNBase);
