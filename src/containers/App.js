import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
      <View style={styles.container}>
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