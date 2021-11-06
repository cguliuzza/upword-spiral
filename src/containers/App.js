import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Context } from '../context/Context';

function App() {

  const { findMe } = useContext(Context)

  useEffect(() => {
    findMe()
  }, []);

  return (
      <View style={styles.container}>
        <Nav />
        <Text>Welcome to the Upward Spiral App</Text>
        <Text>Page Count: {count}</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;