import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  view: {
    flex: 1,
    marginHorizontal: 15,
  },
  logo: {
    alignSelf: 'center',
      marginTop: 30,
      height: 180,
    width:200
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#08101F',
    textAlign: 'center',
    marginTop: 20,
  },
  text1: {
    fontSize: 15,
    color: '#798293',
    textAlign: 'center',
    marginTop: 8,
  },
  text2: {
    color: '#08101F',
    fontSize: 14,
    marginTop: 25,
  },
  forminputView: {
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  userIcon: {
    marginHorizontal: 10,
    height: 24,
    width: 24,
    alignSelf: 'center',
    flex: 1,
  },
  text3: {
    color: '#08101F',
    fontSize: 14,
    marginTop: 8,
  },
  forminputView2: {
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  eyeIcon: {
    marginHorizontal: 10,
    height: 24,
    width: 24,
    alignSelf: 'center',
    position: 'absolute',
    right: 0,
  },
  forgot: {
    color: '#08101F',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  or: {
    color: '#08101F',
    fontSize: 15,
    alignSelf: 'center',
    paddingHorizontal: 5,
  },
  leftLine: {
    backgroundColor: '#D7DADF',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  rightLine: {
    backgroundColor: '#D7DADF',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  lineView: {
    flexDirection: 'row',
    marginTop: 30,
  },
  socialview: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  footertext: {
    fontSize: 15,
    color: '#D7DADF',
  },
  footertext2: {
    fontSize: 15,
    color: '#4AB5E3',
    paddingHorizontal: 5,
  },
  textemail: {
    color: '#08101F',
    fontSize: 14,
    marginTop: 8,
  },
});
export default styles;
