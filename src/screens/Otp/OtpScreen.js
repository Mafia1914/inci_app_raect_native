
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/CustomButton';
import AppConstants from '../../utils/Constants';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { VerifyOTP } from '../../redux/Actions/action';
import * as SecureStore from 'expo-secure-store';
import COLORS from '../../utils/colors';


const forgetBackgroundImg = require('../../assets/images/forget_bakground_img.png');

const OtpScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [email, setEmail] = useState('');
    const inputs = useRef([]);
    const { loading, error, otpData } = useSelector(state => state.auth);

    useEffect(() => {
        const fetchEmail = async () => {
            try {
                const storedEmail = await SecureStore.getItemAsync('user_email');
                if (storedEmail) {
                    setEmail(storedEmail);
                } else {
                    console.error('Email not found in storage');
                    navigation.goBack();
                }
            } catch (error) {
                console.error('Failed to retrieve email from storage:', error);
                navigation.goBack();
            }
        };

        fetchEmail();
    }, [navigation]);

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < newOtp.length - 1) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleVerifyOtp = () => {
        if (otp.join('').length === 6) {
            dispatch(VerifyOTP({ email, otp: otp.join('') }));
        } else {
            Alert.alert('Error', 'Please enter a valid 6-digit OTP.');
        }
    };

    useEffect(() => {
        if (otpData?.success) {
            console.log('OTP verified successfully, navigating to ResetPasswordScreen...');
            navigation.navigate('ResetPasswordScreen', { token: otpData?.data?.token });
        }
    }, [otpData, navigation]);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <View style={styles.containerStyle}>
                        <Icon name="arrow-back" size={24} color={COLORS.white} />
                    </View>
                </TouchableOpacity>
            </View>
            <Image source={forgetBackgroundImg} style={styles.imageStylee} />
            <View style={styles.bodyContinerStyle}>
                <Text style={styles.ForgetTextStyle}>{AppConstants.otpText}</Text>
                <Text style={styles.otpTextStyle}>{AppConstants.otpdetailsText}</Text>
            </View>

            <View style={styles.containerr}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.box}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(value) => handleOtpChange(value, index)}
                        value={digit}
                        ref={(input) => {
                            inputs.current[index] = input;
                        }}
                    />
                ))}
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title={loading ? 'Loading...' : 'Confirm'}
                    color={COLORS.primariColor}
                    textColor={COLORS.darkprimariColor}
                    onPress={handleVerifyOtp}
                    disabled={loading}
                    width={300}
                />
            </View>

            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>{AppConstants.OtpText}</Text>
                <TouchableOpacity>
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
    },
    imageStylee: {
        width: '100%',
        height: 250,
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

    },
    tapStyle: {
        color: COLORS.darkprimariColor,
    },
    containerr: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    box: {
        borderWidth: 1,
        borderColor: '#BCC9C6',
        width: 50,
        height: 60,
        margin: 5,
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 10,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginTop: 10,
    },
    successText: {
        color: 'green',
        textAlign: 'center',
        marginTop: 10,
    },
    buttonContainer: {
        marginVertical: 40,
        alignItems: 'center',
        width: '100%', 
        height:48
      },
});

export default OtpScreen;





