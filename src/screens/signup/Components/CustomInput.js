import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../../../utils/colors'; 

const CustomInput = ({
  label,
  iconName, 
  error,
  password,
  onFocus = () => {},
  style,
  labelFontSize,
  placeholderFontSize,
  imageSource,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputWrapper}>
        <PaperInput
          {...props}
          secureTextEntry={password && hidePassword}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          label={label}
          placeholder={label}
          placeholderTextColor="#BCC9C6"
          mode="outlined"
          theme={{
            colors: {
              primary: COLORS.primariColor,
              text: COLORS.primariColor,
              placeholder: '#BCC9C6',
              background: 'white',
              outline: 'transparent', 
              error: COLORS.red,
            },
          }}
          style={[
            styles.input,
            {
              borderColor: isFocused ? COLORS.darkprimariColor : 'transparent',
              paddingRight: password ? 40 : 10,
              fontSize: placeholderFontSize,
            },
          ]}
          labelStyle={{ fontSize: labelFontSize }}
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
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  inputWrapper: {
    position: 'relative',
  
    overflow: 'hidden', 
  },
  input: {
    backgroundColor: 'white',
    height: 46,
    paddingHorizontal: 10,
    borderRadius: 10, 
    fontSize: 16, 
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -11 }],
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -11 }],
  },
  errorText: {
    marginTop: 7,
    color: COLORS.red,
    fontSize: 12,
  },
});

export default CustomInput;
