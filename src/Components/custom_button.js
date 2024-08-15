import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import Colors from '../utils/colors'; 

const Button = ({ title, onPress = () => {}, color = Colors.primariColor, textColor = Colors.white, width, iconRight }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.button, { backgroundColor: color }, { width: width }]}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: textColor }]}>
          {title}
        </Text>
        {iconRight && (
          <Image source={iconRight} style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: 'row',
  },
  textContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  icon: {
    width: 24, 
    height: 24,
    marginLeft: 10, 
  }
});

export default Button;
