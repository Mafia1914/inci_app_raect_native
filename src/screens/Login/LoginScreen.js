import React, { useState } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/Actions/action';
import ImageAssets from '../../utils/assets';
import AppConstants from '../../utils/Constants';
import CustomInput from '../../Components/CustomInput'; 
import Button from '../../Components/custom_button';
import styles from './LoginStyles/LoginStyles';
import CustomCheckBox from './Components/CustomCheckBox';
import COLORS from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { handleLogin } from './Data/LoginScreenLogic';
import ForgetPassword from '../Forgot/ForgetPassword';



export default function LoginScreen() {
  const navigation = useNavigation();
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
          <TouchableOpacity onPress={() =>{navigation.navigate(ForgetPassword)} }style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>{AppConstants.ForgetText}</Text>
          </TouchableOpacity>
        </View>

        <Button
          title={AppConstants.Login}
          color={COLORS.primariColor}
          textColor={COLORS.darkprimariColor}
          onPress={onLoginPress}
          disabled={loading}
        />

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


