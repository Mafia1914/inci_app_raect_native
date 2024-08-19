import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../utils/colors';
import ImageAssets from '../../utils/assets';
import AppConstants from '../../utils/Constants';
import CustomInput from '../../Components/CustomInput';
import Button from '../../Components/custom_button';
import useForgetPassword from './Data/ForgetScreenLogic';
import { useNavigation } from '@react-navigation/native';
import { saveEmailToStorage, retrieveEmailFromStorage } from '../../utils/storageUtils'; 

const ForgetPassword = () => {
    const navigation = useNavigation();
    const {
        email,
        setEmail,
        emailError,
        handleForgetPassword,
    } = useForgetPassword();

    const handleSendOtp = async () => {
        try {
            console.log('Attempting to save email and send OTP...');
            await saveEmailToStorage(email); 
            const result = await handleForgetPassword(); 
            console.log('OTP sending result:', result);
            Alert.alert('Success', 'OTP sent successfully!');
        } catch (error) {
            console.error('Error in handleSendOtp:', error);
            Alert.alert('Error', error.message || 'An error occurred');
        }
    };

    useEffect(() => {
        const loadEmail = async () => {
            try {
                const storedEmail = await getemailStorage();
                if (storedEmail) {
                    setEmail(storedEmail);
                }
            } catch (error) {
                console.error('Failed to retrieve email from storage:', error);
            }
        };

        loadEmail();
    }, [setEmail]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <View style={styles.containerStyle}>
                        <Icon name="arrow-back" size={24} color={COLORS.white} />
                    </View>
                </TouchableOpacity>
            </View>
            <Image source={ImageAssets.forgetBackgroundImg} style={styles.imageStyle} />
            <View style={styles.bodyContainer}>
                <Text style={styles.forgetText}>{AppConstants.ForgetText}</Text>
                <Text style={styles.otpText}>{AppConstants.OtpTextEmail}</Text>
            </View>
            <View style={styles.inputContainer}>
                <CustomInput
                    onChangeText={text => setEmail(text)}
                    value={email}
                    label='E-mail'
                    iconName="email-outline"
                    error={emailError}
                    style={styles.input}
                />
                <Button
                    title="Send Now"
                    color={COLORS.primaryColor}
                    textColor={COLORS.darkPrimaryColor}
                    onPress={handleSendOtp}
                    width={300}
                />
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>{AppConstants.OtpText}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')}>
                        <Text style={styles.tapStyle}>{AppConstants.TapHereText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    imageStyle: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
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
    bodyContainer: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    forgetText: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.darkPrimaryColor,
        marginTop: 10,
    },
    otpText: {
        marginTop: 10,
        fontSize: 14,
        marginHorizontal: '10%',
        textAlign: 'center',
        fontWeight: '400',
        color: COLORS.darkPrimaryColor,
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    input: {
        height: 46,
        width: '90%',
        maxWidth: 312,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 50,
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '30%',
        marginVertical: '10%',
    },
    tapStyle: {
        color: COLORS.darkPrimaryColor,
    },
    containerStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(128, 128, 128, 0.1)',
        borderRadius: 50,
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
});

export default ForgetPassword;

