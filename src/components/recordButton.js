import React, { Component } from 'react';
import { View, StyleSheet, LayoutAnimation, Animated } from 'react-native';

class RecordButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hInner: 20,
      wInner: 20,
      radiusInner: 10,
      hOuter: 60,
      wOuter: 60,
      radiusOuter: 30,
      opacity: new Animated.Value(0.9)
    }
  }

  customLayoutAnimation() {
    let CustomLayoutLinear = {
      duration: 200,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.curveEaseInEaseOut,
      },
    };
    return CustomLayoutLinear;
  }

  // componentWillMount() {
  //   LayoutAnimation.spring();
  // }

  componentDidMount() {
    setTimeout(() => {
      LayoutAnimation.linear();
      this.setState({
        hInner: this.state.hInner + 1500,
        wInner: this.state.wInner + 1500,
        radiusInner: this.state.radiusInner + 1500,
        hOuter: this.state.hOuter + 1500,
        wOuter: this.state.wOuter + 1500,
        radiusOuter: this.state.radiusOuter + 1500
      })
    }, 10);
    this.fadeOutButton();
  }

  fadeOutButton() {
    Animated.timing(
      this.state.opacity,
      {toValue: 0, delay: 650, duration: 1000}
    ).start();
  }

  render() {
    return (
        <View style={[styles.floatView, {top: this.props.locationTop, left: this.props.locationLeft, right: this.props.locationRight, bottom: this.props.locationBottom}]}>
          <Animated.View style={[styles.outerCircle, { height: this.state.hOuter, width: this.state.wOuter, borderRadius: this.state.radiusOuter, opacity: this.state.opacity}]}>
            <Animated.View style={[styles.innerCircle, { height: this.state.hInner, width: this.state.wInner, borderRadius: this.state.radiusInner, opacity: this.state.opacity}]}></Animated.View>
          </Animated.View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  innerCircle: {
    backgroundColor: 'red'
  },
  outerCircle: {
    borderColor: 'red',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  floatView: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default RecordButton;
