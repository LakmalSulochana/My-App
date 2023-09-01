import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './src/components/header/Header';
import Main from './src/components/main/Main';
import Footer from './src/components/footer/Footer';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Header>My App</Header>
      <Main />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up all available space
    justifyContent: 'space-between', // Space between Header and Footer
    alignItems: 'center', // Center horizontally
  },
});

export default App;
