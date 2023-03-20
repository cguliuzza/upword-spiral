import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Navigation />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginVertical: 0,
    marginHorizontal: 0,
  },
});

export default App;
