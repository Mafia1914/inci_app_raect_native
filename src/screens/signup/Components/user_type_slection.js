import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import COLORS from '../../../utils/colors';

const UserTypeButton = ({ onChange }) => {
  const [selected, setSelected] = useState(''); 
  const EUserType = [
    { label: 'Beautician', value: 'beautician' },
    { label: 'Common Person', value: 'user' } 
  ];

  const handleSelection = option => {
    setSelected(option.value);
    onChange(option.value); 
  };

  return (
    <View style={styles.container}>
      {EUserType.map(option => (
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
    paddingRight: 12,
    marginHorizontal: 10,
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

export default UserTypeButton;
