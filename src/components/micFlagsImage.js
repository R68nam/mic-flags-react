import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions'

class MicFlagsImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      width: 0
    }
  }

  componentWillMount() {
    let { width: windowWidth, height: windowHeight } = Dimensions.get('window');

    Image.getSize('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/National_Public_Radio_logo.svg/1280px-National_Public_Radio_logo.svg.png', (width, height) => {
      if (width > windowWidth) {
        let newWidth = width - (width - windowWidth) - 40;
        let newHeight = newWidth * (height / width);
        this.setState({ width: newWidth, height: newHeight });
      } else {
        this.setState({ width, height });
      }
    });

  }

  render() {
    return (
      <Image
      style={{
        width: this.state.width,
        height: this.state.height
      }}
      resizeMode={'cover'}
      source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/National_Public_Radio_logo.svg/1280px-National_Public_Radio_logo.svg.png'}} />
    )
  }
}

const styles = StyleSheet.create({

})

export default MicFlagsImage
