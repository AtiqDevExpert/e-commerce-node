import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backIcon: {
    width: 18,
    height: 18,
    marginHorizontal: 10,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
  },
  dummyText: {
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
    color: 'transparent',
  },
  dotsIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  subContainer: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  searchView: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    flex: 1,
    height: 50,
    backgroundColor: '#F2F3F5',
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F2F3F5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 70,
    fontSize: 20,
    color: 'black',
  },
  searchIcon: {
    width: 25,
    height: 25,
  },
  touch1: {
    marginTop: 8,
    marginHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#f00',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4ea',
  },
  msg: {
    fontSize: 12,
    color: '#798293',
    marginTop: 5,
  },
  name: {
    fontSize: 18,
    color: '#08101F',
  },
  img: {
    width: 48,
    height: 48,
  },
  view1: {
    flex: 1,
  },
  view2: {
    flexDirection: 'row',
  },
  view3: {
    marginHorizontal: 10,
    justifyContent: 'center',
  },
});
export default styles;
