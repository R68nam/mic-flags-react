import { StyleSheet } from 'react-native';
import { fonts, metrics, colors } from '../../themes/';

const RootStyle = StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: fonts.base,
    margin: metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }

})

export default RootStyle
