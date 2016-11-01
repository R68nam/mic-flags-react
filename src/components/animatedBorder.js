import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

class AnimatedBorder extends Component {

  constructor(props) {
    super(props)
    this.state = {
      segmentLength: 0,
      windowHeight: Dimensions.get('window').height,
      windowWidth: Dimensions.get('window').width,
      segments: [
        {
          id: 1,
          top: 0,
          left: 0,
          side: 'top',
          traveled: 0
        }
      ]
    }
  }

  componentWillMount() {
    let { width, height } = Dimensions.get('window');
    let segmentLength = ( (2 * width) + (2 * height) ) / 120;
    this.setState({
      segmentLength
    })
    this.animateSegments();
  }

  animateSegments() {
    // every 500 milliseconds update the position of the segement
    setInterval(() => {
      let updatedSegements = this.state.segments.map((segment,i) => {
        if (segment.side === 'top') { return this.moveSegementRight(segment) }
        if (segment.side === 'right') { return this.moveSegementDown(segment) }
        if (segment.side === 'bottom') { return this.moveSegmentLeft(segment) }
        if (segment.side === 'left') { return this.moveSegementUp(segment) }
      })
      this.setState({
        segments: updatedSegements
      })
    }, 500)
  }

  moveSegementRight(segment) {
    segment.left = segment.left + this.state.segmentLength;
    segment.traveled = segment.traveled + this.state.segmentLength;

    if (segment.traveled > (this.state.windowWidth - this.state.segmentLength)) {
      segment.side = 'right';
      segment.top = segment.top + this.state.segmentLength;
      segment.traveled = 0;
    }
    return segment;
  }

  moveSegmentLeft(segment) {
    segment.left = segment.left - this.state.segmentLength;
    segment.traveled = segment.traveled + this.state.segmentLength;

    if (segment.traveled > (this.state.windowWidth - (2 * this.state.segmentLength))) {
      segment.side = 'left';
      segment.top = segment.top - this.state.segmentLength;
      segment.traveled = 0;
    }

    return segment;
  }

  moveSegementUp(segment) {
    segment.top = segment.top - this.state.segmentLength;
    segment.traveled = segment.traveled + this.state.segmentLength;

    if (segment.traveled > this.state.windowHeight - (2 * this.state.segmentLength)) {
      segment.side = 'top';
      segment.left = segment.left + this.state.segmentLength;
      segment.traveled = 0;
    }

    return segment;
  }

  moveSegementDown(segment) {
    segment.top = segment.top + this.state.segmentLength;
    segment.traveled = segment.traveled + this.state.segmentLength;

    if (segment.traveled > this.state.windowHeight - (2 * this.state.segmentLength)) {
      segment.side = 'bottom';
      segment.left = segment.left - this.state.segmentLength;
      segment.traveled = 0;
    }

    return segment;
  }

  componentDidMount() {

  }

  displaySegements() {
    return this.state.segments.map((a,i) => {

        if ( a.side === 'top' ) {
          return <View
            key={i}
            style={{ height: this.state.segmentLength, width: this.state.segmentLength, borderBottomColor: 'red', borderBottomWidth: 2, top: a.top, left: a.left }}
            ></View>
        }

        if ( a.side === 'right') {
          return <View
            key={i}
            style={{ height: this.state.segmentLength, width: this.state.segmentLength, borderLeftColor: 'red', borderLeftWidth: 2, top: a.top, left: a.left }}
            ></View>
        }

        if ( a.side === 'bottom') {
          return <View
            key={i}
            style={{ height: this.state.segmentLength, width: this.state.segmentLength, borderTopColor: 'red', borderTopWidth: 2, top: a.top, left: a.left }}
            ></View>
        }

        if ( a.side === 'left') {
          return <View
            key={i}
            style={{ height: this.state.segmentLength, width: this.state.segmentLength, borderRightColor: 'red', borderRightWidth: 2, top: a.top, left: a.left }}
            ></View>
        }
    })
  }

  calcSegementLengths() {
    let { width, height } = Dimensions.get('window');
    let segmentLengths = ( (2 * width) + (2 * height) - 40 ) / 120;
    return Math.floor(segmentLengths);
  }

  render() {
    return (
      <View style={styles.container}>

        {this.displaySegements()}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // borderColor: 'blue',
    // borderWidth: 5,
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
})

export default AnimatedBorder;
