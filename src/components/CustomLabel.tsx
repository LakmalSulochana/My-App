import { View, Text, TextInput } from 'react-native';
import React from 'react';

const CustomLabel = (props: any) => {
  return (
    <View>
      <Text style={{
        fontSize: 35,
        color: 'yellow',
        marginBottom: 10, // Add margin at the bottom for a little gap
        textAlign: 'center', // Center the text
      }}>{props.children}</Text>
      <TextInput
        placeholder="Email"
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 5,
          padding: 10,
          marginBottom: 10, // Add margin at the bottom for a little gap
          textAlign: 'center', // Center the input
          width: 300, // Set the width to 100%
        }}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 8,
          padding: 10,
          marginBottom: 10, // Add margin at the bottom for a little gap
          textAlign: 'center', // Center the input
          width: 300, // Set the width to 100%
        }}
        secureTextEntry={true}
      />
      <Text style={{ alignSelf: 'flex-end' }}>Forgot Password ?</Text>
    </View>
  );
};

export default CustomLabel;
