import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 85,
  },
  header: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  cart: {
    flexDirection: 'row-reverse',
    marginHorizontal: 30,
    marginVertical: 1,
  },
});
export default styles;
