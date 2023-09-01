import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = (navigation:any) => {
  //const navigation = useNavigation();

  const handleSignUpClick = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={[styles.container, { marginBottom: 10 }]}>
      <Text style={styles.text}>Don't Have an Account?</Text>
      <TouchableOpacity onPress={handleSignUpClick}>
        <Text style={[styles.text, styles.signUpText]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default Footer;
