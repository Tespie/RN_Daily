import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CustomTextInput from './CustomTextInput';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerInput = ({ label, value, onChange, showDatePicker }) => {
  const handleOpenDatePicker = () => {
    if (showDatePicker) {
      onChange(value);
    }
  };

  const handleDateChange = (event, selectedDate) => {
    onChange(selectedDate);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOpenDatePicker}>
      <View style={styles.container}>
        <CustomTextInput
          label={label}
          value={value ? value.toLocaleDateString() : ''}
          editable={false}
        />
        {showDatePicker && (
          <DateTimePicker
            value={value || new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
});

export default DateTimePickerInput;
