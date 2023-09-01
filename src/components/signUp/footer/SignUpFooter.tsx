import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const SignUpFooter = () => {
  return (
    <View style={[styles.container, { marginBottom: 10 }]}>
      <Text style={styles.text}>Have an Account?</Text>
      <TouchableOpacity onPress={() => alert('Sign In Clicked')}>
        <Text style={[styles.text, styles.signUpText]}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop:100
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

export default SignUpFooter;