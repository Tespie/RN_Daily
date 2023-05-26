// import * as React from 'react';
import React from 'react';
import { Button, StyleSheet, Text, View } from "react-native"
import { IconButton, TextInput as RN_PaperTextInput } from 'react-native-paper';

const MyTextInput = ({ mode, label, placeholder, value,
  onChangeText,
  disabled,
  style,
  ...rest
}) => {

  return (
    <RN_PaperTextInput
      mode={mode}
      // label={label}
      label={<Text style={{ fontSize: 25, color: 'maroon' }}>{label}</Text>}
      placeholder={placeholder}
      // placeholder={<Text style={{ fontSize: 25, color: 'maroon' }}>{placeholder}</Text>}
      value={value}
      onChangeText={onChangeText}
      disabled={disabled}
      style={[style, styles.container]}
      outlineColor='gray'
      activeOutlineColor='maroon'
      // right={
      //   <RN_PaperTextInput.Icon
      //     name={() => (
      //       <IconButton icon="calendar" />
      //     )}
      //   />
      // } 
      // right={
      //   <RN_PaperTextInput.Icon
      //     name={() => (
      //       <IconButton icon="calendar" />
      //     )}
      //   />
      // }
      right={
        <RN_PaperTextInput.Icon
          name="\u{1F4C5}"
          // onPress={handleIconPress}
          style={{ marginRight: 10 }}
        />
      }

      {...rest}
    />
  );
};

MyTextInput.defaultProps = {
  mode: 'outlined',
  // disabled: false,
  // style: {backgroundColor : 'red',},
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    fontSize: 20,
    // borderWidth: 2,

  },
});
export default MyTextInput;