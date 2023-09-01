import React from 'react';
import Header from './src/components/header/Header';
import Main from './src/components/main/Main';
import Footer from './src/components/footer/Footer';
import { StyleSheet, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './src/components/signUp/SignUp';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    // <View style={styles.container}>
    //   <Header>My App</Header>
    //   <Main/>
    // </View>
    <View>
      <SignUp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
});

export default App;
