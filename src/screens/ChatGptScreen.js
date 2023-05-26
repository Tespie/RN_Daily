import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';

const ChatGptScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Username"
        value={username}
        // onChangeText={handleUsernameChange}
        onChangeText={val => setUsername(val)}
      />
      <CustomTextInput
        label="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      {/* Add other form fields */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ChatGptScreen;
