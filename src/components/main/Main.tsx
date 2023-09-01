import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Main = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForgotPasswordClick = () => {
    alert('Forgot Password Clicked');
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleForgotPasswordClick}>
          <Text style={{ alignSelf: 'flex-end' }}>Forgot Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text style={styles.text}>Don't Have an Account?</Text>
        <TouchableOpacity onPress={() => alert('Sign Up Clicked')}>
          <Text style={[styles.text, styles.signUpText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // To space out the content vertically
    alignItems: 'center',
  },
  content: {
    flex: 1, // Take up available space
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    marginBottom: 20, // Add some margin at the bottom
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
  },
  signUpText: {
    color: 'yellow',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
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
    backgroundColor: '#ffd482',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 300,
    marginTop: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight:'600'
  },
});

export default Main;
