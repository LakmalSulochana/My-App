import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Main = () => {
  const handleForgotPasswordClick = () => {
    // Add your logic here for when the "Forgot Password ?" text is clicked
    alert('Forgot Password Clicked');
  };

  return (
    <View style={{ paddingTop: 50 }}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleForgotPasswordClick}>
        <Text style={{alignSelf: 'flex-end'}}>Forgot Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlign: 'center',
    width: 300,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 300,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
 
});

export default Main;