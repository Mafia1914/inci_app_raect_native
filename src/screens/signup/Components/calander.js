import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import COLORS from '../../../utils/colors'; 
import moment from 'moment-timezone';

const CalendarField = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);

  const handleConfirm = (date) => {
    setSelectedDate(date);
    console.log("Selected Date (Raw):", date);

    const formattedDate = moment(date).format('YYYY-MM-DD'); 

    console.log("Formatted Date:", formattedDate);

    onDateChange(formattedDate); 
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <PaperInput
          value={selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : 'DD / MM / YYYY'}
          onFocus={showDatePicker}
          editable={false}
          mode="outlined"
          label="Birthday*"
          theme={{
            colors: {
              primary: COLORS.darkprimariColor,
              text: COLORS.darkprimariColor,
              placeholder: COLORS.grey,
              background: 'white',
              outline: COLORS.darkprimariColor,
              error: COLORS.red,
            },
          }}
          style={styles.input}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={showDatePicker}>
          <MaterialCommunityIcons name="calendar-today" size={24} color={COLORS.black} />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        date={selectedDate || new Date()}
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    height: 60,
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    padding: 10,
  },
});

export default CalendarField;

