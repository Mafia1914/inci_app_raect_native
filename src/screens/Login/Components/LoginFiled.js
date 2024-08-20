import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const TextInputLogin = ({ label, iconName, imageSource, error, password, onChangeText, value }) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (error) return 'red'; 
    if (isFocused) return '#B1E3D8';
    return 'transparent'; 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputWrapper}>
        <View style={[
          styles.inputContainer,
          { 
            borderColor: getBorderColor(), 
            borderWidth: 1,
          }
        ]}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={password && hidePassword}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={label}
            placeholderTextColor='gray'
          />
          {imageSource && (
            <Image
              source={imageSource}
              style={styles.icon}
            />
          )}
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={18}
              color={isFocused ? '#00BFFF' : 'gray'} 
              style={styles.icon}
            />
          )}
          {password && (
            <TouchableOpacity
              onPress={() => setHidePassword(!hidePassword)}
              style={styles.eyeIcon}
            >
              <MaterialCommunityIcons
                name={hidePassword ? 'eye' : 'eye-off'}
                size={18}
                color='#BCC9C6' 
              />
            </TouchableOpacity>
          )}
        </View>
        {error && (
          <Text style={styles.errorText}>
            {error}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  inputWrapper: {
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff', 
    width: 320,
    height: 46,
    position: 'relative', 
  },
  input: {
    flex: 1,
    width: 312, 
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff', 
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 8,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -11 }],
  },
  errorText: {
    marginTop: 7,
    color: 'red',
    fontSize: 12,
    textAlign: 'left',
    width: 312, 
  },
});

export default TextInputLogin;
