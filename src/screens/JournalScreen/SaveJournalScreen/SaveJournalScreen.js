import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, ScrollView, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'
import CustomButton from '../../../components/CustomButton/CustomButton'

const SaveJournalScreen = ({ }) => { 
    const navigation = useNavigation();

    const [ journals, setJournals ] = useState([]);

    const [ journalTitle, setJournalTitle ] = useState();
    const [ journalMessage, setJournalMessage ] = useState();
  
    const onHomePressed = () => {
      navigation.navigate('Home');
    }

    const onJournalContainerPressed = () => {
      navigation.navigate('JournalContainer');
    }
    
    const handleAddJournal = () => {
      Keyboard.dismiss();

      fetch('http://localhost:3000/api/v1/journals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: journalTitle, message: journalMessage})
      })

      setJournals([...journals, {title: journalTitle, message: journalMessage}]);
      setJournalTitle(null);
      setJournalMessage(null);

      // navigation.navigate('JournalContainer')
    }

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>Journal</Text>

          <KeyboardAvoidingView
                behavior={"padding"} style={styles.writeActionWrapper}
          >

            <TextInput placeholder='Title' name='title' value={journalTitle} onChangeText={text => setJournalTitle(text)} style={styles.input} />

            <TextInput placeholder="What's on your mind?" name='message' value={journalMessage} onChangeText={text => setJournalMessage(text)} style={styles.input} />
            {/* multiline={true} */}
            
            <CustomButton text='Save New Journal' onPress={handleAddJournal} type='PRIMARY' />

            <CustomButton  text='Journal Entries' onPress={onJournalContainerPressed} type='SECONDARY' />

            <CustomButton  text='Home' onPress={onHomePressed} type='TERTIARY' />
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

export default SaveJournalScreen;

