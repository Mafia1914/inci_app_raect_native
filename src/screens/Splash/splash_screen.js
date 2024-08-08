import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import ImageAssets from '../../utils/assets';
import COLORS from '../../utils/colors';
import AppConstants from '../../utils/Constants';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{AppConstants.Animal}</Text>
            <Image source={ImageAssets.appLogo} style={styles.imageStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primariColor, 
        justifyContent: 'center'
    },
    textStyle: {
        fontFamily: 'Inter',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500'
    },
    imageStyle: {
        width: 230,
        height: 241,
        margin: 20,
        borderColor: COLORS.primariColor, 
        alignSelf: 'center'
    }
});
