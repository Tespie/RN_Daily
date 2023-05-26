import React from 'react';
import { TextInput as PaperTextInput } from 'react-native-paper';

const CustomTextInput = ({ mode,label, value, onChangeText, ...rest }) => {
  return (
    <PaperTextInput
      // mode="outlined" 
      mode={mode}
      label={label}
      value={value}
      style= {{marginBottom : 10,fontSize : 20}}
      
      onChangeText={onChangeText}
      {...rest}
    />
  );
};

CustomTextInput.defaultProps = {
  mode : 'outlined'
}

export default CustomTextInput;
