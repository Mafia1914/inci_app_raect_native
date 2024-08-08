import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import COLORS from '../utils/colors'; 

const CustomInput = ({
  label,
  iconName, 
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
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
          mode="outlined"
          theme={{
            colors: {
              primary: COLORS.darkprimariColor, 
              text: COLORS.darkprimariColor,   
              placeholder: COLORS.grey,         
              background: 'white',              
              outline: isFocused ? COLORS.darkprimariColor : COLORS.darkprimariColor, 
              error: COLORS.red,               
            },
          }}
          error={Boolean(error)}
          style={styles.input}
        />
        {iconName && (
          <MaterialCommunityIcons
            name={iconName}
            size={22}
            color={COLORS.darkprimariColor}
            style={styles.icon}
          />
        )}
        {password && (
          <TouchableOpacity
            onPress={() => setHidePassword(!hidePassword)}
            style={styles.eyeIcon}
          >
            <MaterialCommunityIcons
              name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
              size={22}
              color={COLORS.darkprimariColor}
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
    marginVertical: 20,
    marginHorizontal: 20,
  },
  inputWrapper: {
    position: 'relative', 
  },
  input: {
    backgroundColor: 'white', 
    borderRadius: 20, 
    height: 60, 
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
