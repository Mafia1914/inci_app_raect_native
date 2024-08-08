
import { Alert } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

export const handleLogin = async (username, password, navigation, setUsernameError, setPasswordError) => {
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
    const isAuthenticated = true; 

    if (isAuthenticated) {
      Alert.alert('Login Successful');
      const token = 'mafial123'; 
      await SecureStore.setItemAsync('token', token);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'SlectionScreen' }], 
        })
      );
    } else {
      Alert.alert('Invalid credentials. Please try again.');
    }
  } catch (error) {
    console.error('Error during login:', error);
    Alert.alert('Error', 'Something went wrong');
  }
};

export const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
