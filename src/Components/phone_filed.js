import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Alert, View, TextInput, Button } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

export default function PhoneFiled() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('ng');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);
  const phoneInputRef = useRef(null);
  const secondPhoneInputRef = useRef(null);

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setSelectedCountry(country);
    setCountryPickerVisible(false);
    setPhoneNumber(country.callingCode.toString());
    if (phoneInputRef.current) {
      phoneInputRef.current.selectCountry(country.cca2.toLowerCase());
    }
  };

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  const onSubmit = () => {
    Alert.alert('Form Submitted', `Phone Number: ${phoneNumber}\nCountry Code: ${countryCode}`);
  };

  useEffect(() => {
    if (phoneInputRef.current) {
      phoneInputRef.current.selectCountry(countryCode.toLowerCase());
    }
  }, [countryCode]);

  return (
    <View style={styles.container}>
      <PhoneInput
        initialCountry={countryCode.toLowerCase()}
        ref={phoneInputRef}
        onChangePhoneNumber={(number) => setPhoneNumber(number)}
        onPressFlag={toggleCountryPicker}
        textProps={{ placeholder: 'Enter a phone number...' }}
        style={styles.phoneInput}
        textStyle={styles.phoneInputText}
      />

      {countryPickerVisible && (
        <CountryPicker
          withFilter
          withFlagButton={false}
          withCountryNameButton={false}
          onSelect={onSelectCountry}
          onClose={() => setCountryPickerVisible(false)}
          visible={countryPickerVisible}
        />
      )}

      <View style={styles.separator} />

      <TextInput
        value={phoneNumber}
        style={styles.phoneInputt}
        placeholder="Selected country code"
        editable={false}
      />
      
      {/* <Button title="Submit" onPress={onSubmit} /> */}
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
    width: 112,
    height: 56,
    padding: 5,
  
  },
  phoneInputText: {
    color: '#FF4500',
  },
  phoneInputt: {
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 56,
    padding: 5,
  },
  separator: {
    width: 10,
  },
});
