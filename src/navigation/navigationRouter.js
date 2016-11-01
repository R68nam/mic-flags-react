// All app routes are defined here

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'

// Scenes AKA app views
import RecordView from '../components/recordView'

// App router
class NavigationRouter extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Router>
        <Scene key="root">
          <Scene initial={true} key='RecordView' hideNavBar component={RecordView}></Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
