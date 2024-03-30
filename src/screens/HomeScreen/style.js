import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    display: 'flex',
  },
  header: {
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 10,
    textAlign: 'center',
  },
});
export default styles;
