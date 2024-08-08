// LoginScreen.js
import React, { useState } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import ImageAssets from '../../utils/assets';
import AppConstants from '../../utils/Constants';
import CustomInput from '../../Components/CustomInput'; 
import Button from '../../Components/custom_button';
import styles from './LoginStyles/LoginStyles';
import CustomCheckBox from './Components/CustomCheckBox';
import COLORS from '../../utils/colors';
import { handleLogin } from './Data/LoginScreenLogic';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

export default function LoginScreen() {
  const navigation = useNavigation(); // Initialize navigation hook

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onLoginPress = async () => {
    console.log('Login button pressed'); // Debug log
    await handleLogin(username, password, navigation, setUsernameError, setPasswordError);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={ImageAssets.loinImg} style={styles.imageStyle} />
        <Text style={styles.welComStyle}>{AppConstants.WelcomeText}</Text>
        <Text style={styles.LoginTextStyle}>{AppConstants.LoginText}</Text>

        <CustomInput
          onChangeText={text => setUsername(text)}
          label='E-mail'
          iconName="email-outline" 
          error={usernameError} 
          style={{ margin: 16 }}
        />
        
        <CustomInput
          onChangeText={text => setPassword(text)}
          label="Password"
          password={true} 
          error={passwordError} 
          style={{ margin: 16 }}
        />

        <View style={styles.rememberMeContainer}>
          <CustomCheckBox
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            label="Remember Me"
          />
          <TouchableOpacity onPress={() => console.log("Forgot Password")} style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>{AppConstants.ForgetText}</Text>
          </TouchableOpacity>
        </View>

        <Button
          title={AppConstants.Login}
          color={COLORS.primariColor}
          textColor={COLORS.darkprimariColor}
          onPress={onLoginPress}
        />

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>{AppConstants.DontHaveAccount}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.signUpLink}>{AppConstants.RegisterText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
