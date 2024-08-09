import React, { useState } from 'react';
import { View, Text, RadioButton, StyleSheet } from 'react-native';

const RadioButton = () => {
  const [selectedGender, setSelectedGender] = useState('male'); // Default value

  return (
    <View style={styles.container}>
      <View style={styles.optionContainer}>
        <RadioButton
          value="male"
          status={selectedGender === 'male' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedGender('male')}
        />
        <Text style={[styles.label, selectedGender === 'male' && styles.selectedLabel]}>
          Male
        </Text>
      </View>
      <View style={styles.optionContainer}>
        <RadioButton
          value="female"
          status={selectedGender === 'female' ? 'checked' : 'unchecked'}
          onPress={() => setSelectedGender('female')}
        />
        <Text style={[styles.label, selectedGender === 'female' && styles.selectedLabel]}>
          Female
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  label: {
    color: 'gray', // Default text color
  },
  selectedLabel: {
    color: 'green', // Selected text color
  },
});

export default GenderSelection;
