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
    width: 18,
    height: 18,
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
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    height: 102,
    width: 102,
  },
  text1: {color: '#08101F', fontSize: 17, fontWeight: '600'},
  text2: {color: '#798293', fontSize: 13},
});

export default styles;
