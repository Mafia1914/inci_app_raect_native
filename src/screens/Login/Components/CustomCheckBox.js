import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../../../utils/colors';

const CustomCheckBox = ({ checked, onPress, label }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
        <View style={[styles.checkbox, checked && styles.checked]}>
          {checked && <Text style={styles.checkmark}>✔</Text>}
        </View>
      </TouchableOpacity>
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    position: 'relative',
  },
  checked: {
    backgroundColor: COLORS.darkprimariColor, 
    borderColor: COLORS.darkprimariColor, 
  },
  checkmark: {
    color: COLORS.white, 
    fontSize: 14,
  },
  label: {
    fontSize: 16,
    color: COLORS.darkprimariColor,
  },
});

export default CustomCheckBox;
