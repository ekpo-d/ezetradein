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
  message = 'Something went wrong. Please try again later',
) => {
  Alert.alert(
    title,
    message,
    [{ text: 'OK' }],
    { cancelable: false },
  );
};

export default ErrorAlert;
