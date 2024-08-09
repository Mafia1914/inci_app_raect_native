
// import { View, Text, StyleSheet, Image, Alert } from 'react-native';
// import React, { useEffect, useState, useRef } from 'react';
// import COLORS from '../../../utils/colors'; 
// import ImageAssets from '../../../utils/assets';
// import AppConstants from '../../../utils/Constants';
// import CustomInput from '../../../Components/CustomInput';
// import PhoneFiled from '../../../Components/phone_filed';
// import Button from '../../../Components/custom_button'

// export default function BackgroundContainer() {
 

//   return (
//     <View style={styles.container}>
//         <Image source={ImageAssets.centerIgnupImg} style={styles.imageStyle} />
//         <Text style={styles.welComStyle}>{AppConstants.WelcomeText}</Text>
//         <Text style={styles.LoginTextStyle}>{AppConstants.RegisterSinupText}</Text>
//         <View style={styles.inputContainer}>
//           <CustomInput
//             onChangeText={text => setUsername(text)}
//             label='First name*'
//             style={styles.input}
//           />
//           <CustomInput
//             onChangeText={text => setPassword(text)}
//             label='Last name*'
//             style={styles.input}
//           />
//         </View>
//         <CustomInput
//           onChangeText={text => setUsername(text)}
//           label='E-mail'
//           iconName="email-outline" 
//           style={styles.inputt}
//         />
//         <CustomInput
//           onChangeText={text => setUsername(text)}
//           label="Password"
//           password={true} 
//           style={styles.inputt}
//         />
//         <PhoneFiled/>
//         {/* <GenderSelection/> */}
//         <Button
//           title={AppConstants.Login}
//           color={COLORS.primariColor}
//           textColor={COLORS.darkprimariColor}
//           // onPress={onLoginPress}
//           // disabled={loading}
          
//         />
       
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderTopLeftRadius: 20, 
//     borderTopRightRadius: 20,
//     backgroundColor: COLORS.white,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative', 
//     zIndex: 1,
//     padding: 16, 
//   },
//   imageStyle: {
//     height: 108,
//     width: 108,
//     marginBottom: 20, 
//   },
//   welComStyle: {
//     marginVertical: 10,
//     fontFamily: 'Inter',
//     fontSize: 24,
//     textAlign: 'center',
//     fontWeight: '600',
//     color: COLORS.darkprimariColor,
//   },
//   LoginTextStyle: {
//     marginVertical: 10,
//     fontFamily: 'Inter',
//     fontSize: 14,
//     textAlign: 'center',
//     fontWeight: '400',
//     color: COLORS.darkprimariColor,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingHorizontal: 16, 
//   },
//   input: {
//     width: 148, 
//     marginHorizontal: 8,
//   },
//   inputt: {
//     width: 320, 
//     marginHorizontal: 8,
//   },

//   phoneInput: {
//     borderWidth: 1,
//     borderRadius: 5,
//     width: 320, 
//     height: 56,
//     padding: 5,
   
//   },
//   phoneInputText: {
//     color: '#FF4500',
  
//   containerinpu:{
  
//   },
//   }
 
// });





import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/Actions/autheSlice';
import COLORS from '../../../utils/colors';
import ImageAssets from '../../../utils/assets';
import AppConstants from '../../../utils/Constants';
import CustomInput from '../../../Components/CustomInput';
import PhoneFiled from '../../../Components/phone_filed';
import Button from '../../../Components/custom_button';

export default function BackgroundContainer() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('m'); 
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+92'); 
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('beautician'); 

  const handleRegister = () => {
    console.log('Registering with:', { firstName, lastName, gender, dateOfBirth, email, countryCode, phone, password, role });
    
    dispatch(registerUser({ firstName, lastName, gender, dateOfBirth, email, countryCode, phone, password, role }))
      .unwrap()
      .then((response) => {
        console.log('Registration successful:', response);
        Alert.alert('Success', 'Registration successful!');
      })
      .catch((err) => {
        console.error('Registration error:', err);
        Alert.alert('Error', err.message || 'Registration failed');
      });
  };

  return (
    <View style={styles.container}>
      <Image source={ImageAssets.centerIgnupImg} style={styles.imageStyle} />
      <Text style={styles.welComStyle}>{AppConstants.WelcomeText}</Text>
      <Text style={styles.LoginTextStyle}>{AppConstants.RegisterSinupText}</Text>
      <View style={styles.inputContainer}>
        <CustomInput
          onChangeText={text => setFirstName(text)}
          label='First name*'
          style={styles.input}
        />
        <CustomInput
          onChangeText={text => setLastName(text)}
          label='Last name*'
          style={styles.input}
        />
      </View>
      <CustomInput
        onChangeText={text => setEmail(text)}
        label='E-mail'
        iconName="email-outline" 
        style={styles.inputt}
      />
      <CustomInput
        onChangeText={text => setPassword(text)}
        label="Password"
        password={true} 
        style={styles.inputt}
      />
      <PhoneFiled
        onChangeText={text => setPhone(text)}
      />
      {/* <GenderSelection/> */}
      <Button
  title="Register"
  color={COLORS.primariColor}
  textColor={COLORS.darkprimariColor}
  onPress={handleRegister}
/>
      {loading && <Text>Loading...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
    zIndex: 1,
    padding: 16, 
  },
  imageStyle: {
    height: 108,
    width: 108,
    marginBottom: 20, 
  },
  welComStyle: {
    marginVertical: 10,
    fontFamily: 'Inter',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    color: COLORS.darkprimariColor,
  },
  LoginTextStyle: {
    marginVertical: 10,
    fontFamily: 'Inter',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
    color: COLORS.darkprimariColor,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16, 
  },
  input: {
    width: 148, 
    marginHorizontal: 8,
  },
  inputt: {
    width: 320, 
    marginHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
