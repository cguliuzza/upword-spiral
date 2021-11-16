import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton'

const SaveJournalScreen = ({ }) => {
  const navigation = useNavigation();
    // const { title, setTitle } = useState('');
    // const { message, setMessage } = useState('');
    const [ journalData, setJournalData ] = useState({
      title: '',
      message: ''
    });
    const [ journals, setJournals ] = useState('');
    
    const handleAddJournal = (newJournal) => {
      setJournals([...journals, newJournal]);
      navigation.navigate('JournalContainer')
    }

    const handleChange = (event) => {
      // event.preventDefault()
      setJournalData({
        ...journalData, 
        [event.target.name]: [event.target.value]
      })
    }

    const onSavePressed = (event) => {
      event.preventDefault()
      fetch("http://localhost:3000/api/v1/journals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          journalData
        })
      })
      .then(res => res.json())
      .then(newJournal => handleAddJournal(newJournal))
      
      console.warn('Saved');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>Home, sweet home!</Text>

            <CustomInput placeholder='Title' name='title' value={journalData.title} onChange={handleChange} />

            <CustomInput type='TEXTBOX' placeholder="What's on your mind?" name='message' value={journalData.message} onChange={handleChange} multiline={true} />
            
            <CustomButton  text='Save' onPress={onSavePressed} type='PRIMARY' />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        paddingTop: 45
    }
})

export default SaveJournalScreen;