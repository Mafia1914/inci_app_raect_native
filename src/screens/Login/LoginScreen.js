import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AppConstants from '../../utils/Constants';
import Button from '../../components/CustomButton';
import styles from './LoginStyles/LoginStyles';
import COLORS from '../../utils/colors';
import { handleLogin } from './Data/LoginScreenLogic';
import ForgetPassword from '../Forgot/ForgetPassword';
import TextInputLogin from './Components/LoginFiled';


const loinImg = require('../../assets/images/login_background_img.png');
const icEmail = require('../../assets/images/email_icon.png');
const icEye = require('../../assets/images/eye_icon.png');


export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onLoginPress = async () => {
    console.log('Login button pressed');
    await handleLogin(username, password, navigation, dispatch, setUsernameError, setPasswordError, isAuthenticated);
  };

  return (
 
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <StatusBar
        barStyle="light-content" 
        backgroundColor={COLORS.darkprimariColor} 
      />
        <View style={styles.container}>
          <Image source={loinImg} style={styles.imageStyle} />
          <Text style={styles.welComStyle}>{AppConstants.WelcomeText}</Text>
          <Text style={styles.LoginTextStyle}>{AppConstants.LoginText}</Text>
          <TextInputLogin
            label="Email"
            imageSource={icEmail}
            error={usernameError}
            onChangeText={setUsername}
            value={username}
          />
    
          <TextInputLogin
            label="Password"
            error={passwordError}
            onChangeText={setPassword}
            value={password}
            password
          />
          <TouchableOpacity 
            onPress={() => navigation.navigate(ForgetPassword)} 
            style={styles.forgotPasswordContainer}
          >
            <Text style={styles.forgotPasswordText}>{AppConstants.ForgetText}</Text>
          </TouchableOpacity>
          
          <View style={styles.buttonContainer}>
            <Button
              title={AppConstants.Login}
              color={COLORS.primariColor}
              textColor={COLORS.darkprimariColor}
              onPress={onLoginPress}
              disabled={loading}
              width={300}
            />
          </View>
          
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>{AppConstants.DontHaveAccount}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
              <Text style={styles.signUpLink}>{AppConstants.RegisterText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

  );
}



