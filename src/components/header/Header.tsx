import { View, Text } from 'react-native'
import React from 'react'

const Header = (props:any) => {
  return (
    <View>
      <Text style={{
        fontSize: 35,
        color: 'white',
        paddingTop:25,
       // marginBottom: 10, // Add margin at the bottom for a little gap
        textAlign: 'center', // Center the text
      }}>{props.children}</Text>
    </View>
  )
}

export default Header