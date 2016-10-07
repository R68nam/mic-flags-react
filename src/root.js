import React, { Component, PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import NavigationRouter from './navigation/navigationRouter';
import styles from './containers/styles/rootStyle';

export default class Root extends Component {

  componentWillMount() {
    const { dispatch } = this.props.store;
  }

  renderApp() {
    return (
      <Provider store={this.props.store}>
        <View style={styles.applicationView}>
          <StatusBar barStyle='light-content' />
          <NavigationRouter />
        </View>
      </Provider>
    )
  }

  render() {
    return this.renderApp()
  }
}

Root.PropTypes = {
  store: PropTypes.object.isRequired
}
