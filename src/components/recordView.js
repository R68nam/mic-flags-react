import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import Dimensions from 'Dimensions';

// Project specific components
import MicFlagsImage from './micFlagsImage';
import RecordButton from './recordButton';
import AnimatedBorder from './animatedBorder';

class RecordView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showRecbtn: false,
      screenTop: 0,
      screenLeft: 0,
      screenRight: 0,
      screenBottom: 0,
      windowHeight: Dimensions.get('window').height,
      windowWidth: Dimensions.get('window').width
    }
  }

  toggleRecBtn(e) {
    this.setState({
      screenTop: Math.floor(e.nativeEvent.pageY - 45),
      screenLeft: Math.floor(e.nativeEvent.pageX - 40),
      screenRight: this.state.windowWidth - Math.floor(e.nativeEvent.pageX - 40) - 80,
      screenBottom: this.state.windowHeight - Math.floor(e.nativeEvent.pageY - 45) - 90,
      showRecbtn: !this.state.showRecbtn
    });
    setTimeout(() => {
      this.setState({
        showRecbtn: !this.state.showRecbtn
      });
    }, 1200)
  }

  render() {
    return (
      <TouchableOpacity onPress={(e) => this.toggleRecBtn(e)} style={styles.container}>
        <StatusBar hidden={true} />
        <MicFlagsImage />
        { this.state.showRecbtn ? <RecordButton locationTop={ this.state.screenTop } locationLeft={ this.state.screenLeft } locationRight={ this.state.screenRight } locationBottom={ this.state.screenBottom } /> : null }
        <AnimatedBorder />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default RecordView;
