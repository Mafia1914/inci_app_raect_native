import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import COLORS from '../../../utils/colors';

const RadioButton = ({ onChange }) => {
  const [selected, setSelected] = useState('');
  

  const options = [
    { label: 'Male', value: 'm' },
    { label: 'Female', value: 'f' }
  ];

  const handleSelection = option => {
    setSelected(option.value); 
    onChange(option.value); 
  };

  return (
    <View style={styles.container}>
      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          style={styles.singleOptionContainer}
          onPress={() => handleSelection(option)}>
          <View style={styles.outerCircle}>
            {selected === option.value ? <View style={styles.innerCircle} /> : null}
          </View>
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  singleOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingRight:50,
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.darkprimariColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 7,
    backgroundColor: COLORS.darkprimariColor,
  },
  optionText: {
    fontSize: 14,
    color: COLORS.darkprimariColor,
  },
});

export default RadioButton;
