import React from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = ({ placeholder, style, onChangeText, value }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[style, { alignItems: 'center',height:60,width: 350 }]}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default CustomTextInput;
