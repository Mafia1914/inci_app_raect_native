
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../utils/colors';
import AppConstants from '../../utils/Constants';
import Button from '../../Components/custom_button';
import { useNavigation, useRoute } from '@react-navigation/native';
import ImageAssets from '../../utils/assets';
import CustomInput from '../../Components/CustomInput';
import { useDispatch } from 'react-redux';
import { ResetPassword } from '../../redux/Actions/action';
import * as SecureStore from 'expo-secure-store';

const ResetPasswordScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const fetchEmailAndToken = async () => {
            try {
                const storedEmail = await SecureStore.getItemAsync('user_email');
                const routeToken = route.params?.token || '';

                if (storedEmail) {
                    setEmail(storedEmail);
                } else {
                    console.error('Email not found in storage');
                    navigation.goBack(); 
                    return;
                }

                if (routeToken) {
                    setToken(routeToken);
                } else {
                    console.error('Token not found in route parameters');
                    navigation.goBack(); 
                    return;
                }
            } catch (error) {
                console.error('Failed to retrieve email or token:', error);
                navigation.goBack(); 
            }
        };

        fetchEmailAndToken();
    }, [navigation, route.params]);

    const handleResetPassword = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        if (!email || !token) {
            Alert.alert('Error', 'Email or token is missing. Please try again.');
            return;
        }

        try {
            dispatch(ResetPassword({ email, password, token }));
            await SecureStore.deleteItemAsync('user_email');
            Alert.alert('Success', 'Password reset successfully');
            navigation.navigate('Login'); 
        } catch (error) {
            Alert.alert('Error', error.message || 'An error occurred');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <View style={styles.containerStyle}>
                        <Icon name="arrow-back" size={24} color={COLORS.white} />
                    </View>
                </TouchableOpacity> */}
            </View>
            <Image source={ImageAssets.forgetBackgroundImg} style={styles.imageStylee} />
            <View style={styles.bodyContinerStyle}>
                <Text style={styles.ForgetTextStyle}>{AppConstants.resetPasswordText}</Text>
                <Text style={styles.otpTextStyle}>{AppConstants.otpdetailsText}</Text>
            </View>

            <CustomInput
                onChangeText={text => setPassword(text)}
                label='Password'
                password
                style={styles.input}
            />

            <CustomInput
                onChangeText={text => setConfirmPassword(text)}
                label='Confirm Password'
                password
                style={styles.input}
            />

            <Button
                title="Confirm"
                color={COLORS.primariColor}
                textColor={COLORS.darkprimariColor}
                onPress={handleResetPassword}
                width={310}
            />

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>{AppConstants.OtpText}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.tapStyle}>{AppConstants.TaphereText}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStylee: {
        width: '100%',
        height: 260,
        resizeMode: 'cover',
    },
    backButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(52, 96, 86, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 20,
        top: 56,
        zIndex: 1,
    },
    bodyContinerStyle: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    ForgetTextStyle: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.darkprimariColor,
        marginTop: 10,
    },
    otpTextStyle: {
        marginTop: 10,
        fontSize: 14,
        marginHorizontal: '10%',
        textAlign: 'center',
        fontWeight: '400',
        color: COLORS.darkprimariColor,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '30%',
        marginVertical: '20%',
    },
    tapStyle: {
        color: COLORS.darkprimariColor,
    },
    input: {
      height: 46,
      width: '90%',
      maxWidth: 312,
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 50,
  },
    containerStyle: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(128, 128, 128, 0.1)',
      borderRadius: 50,
  },
});

export default ResetPasswordScreen;

