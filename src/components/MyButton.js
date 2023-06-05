import * as React from 'react';
import { StyleSheet, Text, View } from "react-native"
import { Button } from 'react-native-paper';


const MyButton = ({ onPress }) => {
  return (
    <Button mode="contained" onPress={onPress} style={styles.button}>
      Submit
    </Button>
  );
};

MyButton.defaultProps = {
  // mode: 'outlined'
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: 'maroon'
  },
});

export default MyButton;
