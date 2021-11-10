import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignInScreen from './screens/SignInScreen';

const App = () => {
  return (
    <View style={styles.root}>
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fafafa'
  }
})

export default App;