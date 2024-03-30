import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  searchView: {
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    width:"100%"
  },
  inputView: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 3,
    marginHorizontal:20
  },
  input: {
    flex: 1,
    height: 80,
    fontSize: 20,
    flexDirection: 'row',
    color: 'black',
  },
});
export default styles;
