import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../components/CustomInput/CustomInput';
import CustomButton from '../../../components/CustomButton/CustomButton'

const SaveJournalScreen = ({ }) => {
    const { title, setTitle } = useState('');
    const { message, setMessage } = useState('');
    const { journals, setJournals } = useState('');
    
    const navigation = useNavigation();

    const onSavePressed = () => {
      e.preventDefault()
      fetch("http://localhost:3000/api/v1/journals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: e.target.title.value,
          message: e.target.message.value
        })
      })
      .then(res => res.json())
      .then(newJournal => renderNewJournal(newJournal))
      
      console.warn('Saved');
      navigation.navigate('JournalContainer')
    }
    
    const renderNewJournal = ( newJournal ) => {
      setJournals(...journals, newJournal)
    } 

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>Home, sweet home!</Text>

            <CustomInput placeholder='Title' name='title' value={title} setValue={setTitle}/>
            <CustomInput type='TEXTBOX' placeholder="What's on your mind?" name='message' value={message} setValue={setMessage}/>
            
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