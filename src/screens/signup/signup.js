import React, { useState } from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ImageAssets from '../../utils/assets';

import BackgroundContainer from './Components/backgroun_container'; 


export default function SignupScreen() {
 
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onLoginPress = async () => {
    console.log('Login button pressed');
    await handleLogin(username, password, navigation, dispatch, setUsernameError, setPasswordError, isAuthenticated);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View>
        <Image source={ImageAssets.signupImg} style={styles.imageStyle} />
        <BackgroundContainer /> 
      
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    position: 'relative', 
  },
  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});
