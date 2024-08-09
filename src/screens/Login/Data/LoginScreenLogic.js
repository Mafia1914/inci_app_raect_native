import { Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { loginUser } from '../../../redux/Actions/autheSlice';

export const handleLogin = async (username, password, navigation, dispatch, setUsernameError, setPasswordError) => {
  setUsernameError('');
  setPasswordError('');

  if (!isValidEmail(username.trim())) {
    setUsernameError('Please enter a valid email');
    return;
  }

  if (password.trim() === '') {
    setPasswordError('Please enter password');
    return;
  }

  if (password.length < 5) {
    setPasswordError('Password should be at least 5 characters long.');
    return;
  }

  try {
    const resultAction = await dispatch(loginUser({ username, password })).unwrap();

    if (resultAction) {
      const token = String(resultAction.token);

      await SecureStore.setItemAsync('authToken', token);

      Alert.alert('Login Successful');
      navigation.reset({
        index: 0,
        routes: [{ name: 'home' }], 
      });
    }
  } catch (error) {
    Alert.alert('Error', error.message || 'User does not exist');
  }
};

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
