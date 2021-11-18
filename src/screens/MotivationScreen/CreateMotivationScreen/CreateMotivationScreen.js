import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, ScrollView, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'
import CustomButton from '../../../components/CustomButton/CustomButton'

const CreateMotivationScreen = () => {
    const navigation = useNavigation();

    const [ motivations, setMotivations ] = useState([]);

    const [ motivationText, setMotivationText ] = useState();
    const [ motivationAuthor, setMotivationAuthor ] = useState();
    // add motivationLikes

    const onMotivationContainerPressed = () => {
        navigation.navigate('MotivationContainer', { name: "Motivation Entries"});
    }

    const handleAddMotivation = () => {
        Keyboard.dismiss();
  
        fetch('http://localhost:3000/api/v1/motivations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({text: motivationText, author: motivationAuthor})
        })
  
        setMotivations([...motivations, {text: motivationText, author: motivationAuthor}]);
        setMotivationText(null);
        setMotivationAuthor(null);
      }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>Motivation</Text>

          <KeyboardAvoidingView
                behavior={"padding"} style={styles.writeActionWrapper}
          >

            <TextInput placeholder='Text' name='text' value={motivationText} onChangeText={text => setMotivationText(text)} style={styles.input} />

            <TextInput placeholder="Author" name='author' value={motivationAuthor} onChangeText={text => setMotivationAuthor(text)} style={styles.input} />

            <CustomButton text='Save New Motivation' onPress={handleAddMotivation} type='PRIMARY' />

            <CustomButton  text='Motivation Entries' onPress={onMotivationContainerPressed} type='SECONDARY' />
          </KeyboardAvoidingView>
        </View>
      </ScrollView>

    )
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
      paddingTop: 45
  },
  writeActionWrapper: {
      position: 'absolute',
      bottom: -300,
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center'
  },
  input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: 'teal',
      borderWidth: 1,
      width: '95%',
      marginBottom: 15,
  },
  addWrapper: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: 'teal',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  addText: {
      fontWeight: 'bold',
      color: 'white',
  }
  })

export default CreateMotivationScreen
