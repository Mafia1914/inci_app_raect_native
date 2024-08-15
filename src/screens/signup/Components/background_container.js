import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import COLORS from '../../../utils/colors';
import ImageAssets from '../../../utils/assets';
import AppConstants from '../../../utils/Constants';
import CustomInput from '../../../Components/CustomInput';
import PhoneFiled from './phone_filed';
import Button from '../../../Components/custom_button';
import RadioButton from './radio_button';
import CalanderFiled from './calander';
import UserTypeButton from './user_type_slection';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import handleRegister from '../Data/SignupLogics';


export default function BackgroundContainer() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('m');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+92');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('beautician');
  const [errors, setErrors] = useState({});

  const onRegisterPress = async () => {
    const result = await handleRegister({ firstName, lastName, gender, dateOfBirth, email, countryCode, phone, password, role }, dispatch, navigation);
    
    if (!result.valid) {
      setErrors(result.errors || {});
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <View style={styles.conatinerstyle}>
              <Icon name="arrow-back" size={24} color={COLORS.white} />
            </View>
          </TouchableOpacity>
        </View>
        <Image source={ImageAssets.signupImg} style={styles.imageStylee} />
        <View style={styles.containerr}>
          <Image source={ImageAssets.centerIgnupImg} style={styles.imageStyle} />
          <Text style={styles.welComStyle}>{AppConstants.HelloText}</Text>
          <Text style={styles.LoginTextStyle}>{AppConstants.RegisterSinupText}</Text>

          <View style={styles.inputContainerr}>
            <View style={styles.inputWrapper}>
              <CustomInput
                onChangeText={text => setFirstName(text)}
                label='First name*'
                style={styles.input}
              />
              {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
            </View>
            <View style={styles.inputWrapper}>
              <CustomInput
                onChangeText={text => setLastName(text)}
                label='Last name*'
                style={styles.input}
              />
              {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
            </View>
          </View>

          <View style={styles.inputContainer}>
            <CustomInput
              onChangeText={text => setEmail(text)}
              label='E-mail'
              iconName="email-outline"
              style={styles.inputt}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
            <CustomInput
              onChangeText={text => setPassword(text)}
              label='Password'
              password
              style={styles.inputt}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            <PhoneFiled
              onChangePhone={(formattedPhone) => {
                const [code, number] = formattedPhone.split(' ', 2);
                setCountryCode(code);
                setPhone(number);
              }}
              onChangeCountryCode={(code) => setCountryCode(code)}
            />
            <RadioButton onChange={setGender} />
            <CalanderFiled onDateChange={date => setDateOfBirth(date)} />
            <UserTypeButton onChange={setRole} />
            <Button
              title="Register Now"
              color={COLORS.primariColor}
              textColor={COLORS.darkprimariColor}
              onPress={onRegisterPress}
              width={'90%'}
              iconRight={ImageAssets.icRightArrow}
            />
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>{AppConstants.alreadyText}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signUpLink}>{AppConstants.Login}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {loading && <Text>Loading...</Text>}
          {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  containerr: {
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 16,
    alignItems: 'center',
    marginTop: -100,
  },
  imageStylee: {
    width: '100%',
    height: 392,
    resizeMode: 'cover',
  },
  inputContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  inputContainerr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: 148,
    marginHorizontal: 8,
  },
  inputt: {
    width: 345,
    marginVertical: 8,
    marginLeft: 10,
  },
  imageStyle: {
    width: 150,
    height: 150,
    marginTop: -120,
  },
  welComStyle: {
    marginVertical: 10,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    color: COLORS.darkprimariColor,
  },
  LoginTextStyle: {
    marginVertical: 10,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
    color: COLORS.darkprimariColor,
    marginBottom:30,

  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '20%',
    marginVertical:'15%'
  },
  signUpLink: {
    color: COLORS.primariColor,
  },
  backButton: {
    width: 32, 
    height: 32, 
    borderRadius: 25,
    backgroundColor: 'rgba(52, 96, 86, 1)',
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute',
    left: 20,
    top: 60,
    zIndex: 1,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 10,
    zIndex: 1,
  },
  conatinerstyle: {
    width: '100%', 
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    borderRadius: 50,
  },
});
