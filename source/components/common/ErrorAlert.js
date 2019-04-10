import {
  Alert,
} from 'react-native';

const ErrorAlert = (
  title = 'Error',
  message = 'Something Went Wrong. Please try Again Later',
) => {
  Alert.alert(
    title,
    message,
    [{ text: 'OK' }],
    { cancelable: false },
  );
};

export default ErrorAlert;
