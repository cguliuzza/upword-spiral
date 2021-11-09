import { AppStateContext } from '../context/AppStateProvider';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar from '../components/NavBar';

const App = () => {

  const {findMe} = useContext(AppStateContext)
  
  useEffect(() => {
    findMe()
  }, []);

  return (
      <View style={styles.container}>
        <NavBar />
        <Text>Welcome to the Upward Spiral App</Text>
        <View><Button onClick={findMe}>Button</Button></View>

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