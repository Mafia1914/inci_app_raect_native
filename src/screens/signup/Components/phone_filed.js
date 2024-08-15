
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

export default function PhoneField({ onChangePhone, onChangeCountryCode }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('us');
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const phoneInputRef = useRef(null);

  const onSelectCountry = (country) => {
    const code = country.cca2.toLowerCase();
    const callingCode = `+${country.callingCode[0]}`; 

    setCountryCode(code);
    setPhoneNumber(phoneNumber.replace(/^\+\d+\s*/, '')); 
    setCountryPickerVisible(false);

    if (onChangeCountryCode) {
      onChangeCountryCode(callingCode);
    }
  };

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  useEffect(() => {
    if (phoneInputRef.current) {
      phoneInputRef.current.selectCountry(countryCode);
    }
  }, [countryCode]);

  useEffect(() => {
   
    if (onChangePhone) {
      onChangePhone(`${phoneInputRef.current.getCountryCode()} ${phoneNumber}`);
    }
  }, [phoneNumber, countryCode]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCountryPicker} style={styles.countryPickerButton}>
        <PhoneInput
          ref={phoneInputRef}
          initialCountry={countryCode}
          onChangePhoneNumber={number => setPhoneNumber(number.replace(/^\+\d+\s*/, ''))}
          style={styles.phoneInput}
          textStyle={styles.phoneInputText}
        />
      </TouchableOpacity>

      {countryPickerVisible && (
        <CountryPicker
          withFilter
          withFlag
          withCountryNameButton
          onSelect={onSelectCountry}
          onClose={() => setCountryPickerVisible(false)}
          visible={countryPickerVisible}
        />
      )}

      <TextInput
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        style={styles.phoneInputt}
        placeholder="(555) 000-0000"
        keyboardType = 'numeric'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
  },
  phoneInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: 140,
    height: 56,
    padding: 20,
  },
  phoneInputText: {
    color: '#FF4500',
  },
  phoneInputt: {
    borderWidth: 1,
    borderRadius: 5,
    width: 195,
    height: 56,
    padding: 5,
    marginLeft: 10,
    padding: 20,
  },
});
