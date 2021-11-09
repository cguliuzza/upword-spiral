import { AppStateContext } from '../context/AppStateProvider';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar from '../components/NavBar';
import LoginScreen from '../screens/LoginScreen';

const App = () => {

  const {findMe} = useContext(AppStateContext)
  
  useEffect(() => {
    findMe()
  }, []);

  return (
      <SafeAreaView style={styles.container}>
        <NavBar />
        <Text>Upward Spiral App.js</Text>
        <LoginScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
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