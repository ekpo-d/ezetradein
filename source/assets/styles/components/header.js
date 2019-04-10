import { StyleSheet } from 'react-native';
import placeholders from '../base/placeholders';

export default StyleSheet.create({
  container: {
    backgroundColor: placeholders.orange,
    paddingHorizontal: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 34,
    right: 2,
  },
  icon: {
    width: 25,
    height: 30,
    marginRight: 15,
  },
  input: {
    backgroundColor: 'white',
    top: 4,
    paddingHorizontal: 5,
    height: 25,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
});
