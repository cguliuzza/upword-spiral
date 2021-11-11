import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';

const App = () => {
  return (
    <View style={styles.root}>
      {/* <SignInScreen /> */}
      <SignUpScreen />
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