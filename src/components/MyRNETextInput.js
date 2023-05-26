import React from 'react';
import { StyleSheet, View, TextInput, Platform } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { moderateScale } from 'react-native-responsive-screen';

const MyRNETextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  iconName,
  iconType,
  iconColor,
  containerStyle,
  inputStyle,
  inputContainerStyle,
  ...restProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {iconName && (
        <Icon
          name={iconName}
          type={iconType || 'material'}
          color={iconColor || 'gray'}
          size={moderateScale(24)}
        //   size={24}
          containerStyle={styles.iconContainer}
        />
      )}
      <Input
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        inputStyle={[styles.input, inputStyle]}
        inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
        {...restProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  iconContainer: {
    // marginRight: moderateScale(10),
    marginRight: 10,
  },
  input: {
    // fontSize: moderateScale(16),
    fontSize: 16,
    ...Platform.select({
      android: {
        paddingVertical: 8,
      },
      ios: {
        paddingVertical: 12,
      },
    }),
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    // borderRadius: moderateScale(5),
    borderRadius: 5,
    // paddingHorizontal: moderateScale(10),
    paddingHorizontal: 10,
  },
});

export default MyRNETextInput;
