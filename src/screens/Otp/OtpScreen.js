import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../utils/colors';
import ImageAssets from '../../utils/assets';
import AppConstants from '../../utils/Constants';
import CustomInput from '../../Components/CustomInput';
import Button from '../../Components/custom_button';


const OtpScreen = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const onLoginPress = () => {
        console.log('Login button pressed');
        handelforgevalidation(email, setEmailError,dispatch);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <View style={styles.conatinerstyle}>
                        <Icon name="arrow-back" size={24} color={COLORS.white} />
                    </View>
                </TouchableOpacity>
            </View>
            <Image source={ImageAssets.forgetBackgroundImg} style={styles.imageStylee} />
            <View style={styles.bodyContinerStyle}>
                <Text style={styles.ForgetTextStyle}>{AppConstants.ForgetText}</Text>
                <Text style={styles.otpTextStyle}>{AppConstants.OtpTextEmail}</Text>
            </View>
            <View style={styles.inputContainer}>
                <CustomInput
                    onChangeText={text => setEmail(text)}
                    label='E-mail'
                    iconName="email-outline"
                    error={emailError} 
                    style={styles.inputt}
                />
                <Button
                    title="Send Now"
                    color={COLORS.primariColor}
                    textColor={COLORS.darkprimariColor}
                    onPress={onLoginPress}
                    width={300}
                />
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>{AppConstants.OtpText}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.tapStyle}>{AppConstants.TaphereText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

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
    inputContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    inputt: {
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
        marginVertical: '20%',
    },
    tapStyle: {
        color: COLORS.darkprimariColor,
    },
});
export default OtpScreen