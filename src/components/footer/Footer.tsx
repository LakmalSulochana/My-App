import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={[styles.container, { marginBottom: 10 }]}>
      <Text style={styles.text}>Don't Have an Account?</Text>
      <TouchableOpacity onPress={() => alert('Sign Up Clicked')}>
        <Text style={[styles.text, styles.signUpText]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Display text in a row
    alignItems: 'center', // Vertically align text
    justifyContent: 'center', // Horizontally align text
  },
  text: {
    fontSize: 15,
    fontWeight: '700',
  },
  signUpText: {
    color: 'yellow',
    textDecorationLine: 'underline', // Add underline
    marginLeft: 5, // Add some space between the two texts
  },
});

export default Footer;
