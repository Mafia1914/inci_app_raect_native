import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../utils/colors'; 

const Button = ({ title, onPress = () => {}, color = Colors.primariColor, textColor = Colors.white }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.button, { backgroundColor: color }]}>
      <Text style={[styles.text, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
     marginHorizontal:'5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical:20,
 
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Button;
