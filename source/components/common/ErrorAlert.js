import {
  Alert,
} from 'react-native';

/**
 * Function for displaying error alerts
 * @param {string} title - title of the error
 * @param {string} message - error message
 */
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
