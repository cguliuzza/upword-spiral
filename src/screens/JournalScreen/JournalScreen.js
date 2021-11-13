import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';


const JournalScreen = () => {
    const { title, setTitle } = useState('');
    const { message, setMessage } = useState('');
    
    const navigation = useNavigation();

    const onSavePressed = () => {
        console.warn('Saved');
        navigation.navigate('Home')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>Home, sweet home!</Text>

            <CustomInput type='TEXTBOX' placeholder="Title" value={title} setValue={setTitle}/>
            <CustomInput type='TEXTBOX' placeholder="What's on your mind?" value={message} setValue={setMessage}/>
            
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

export default JournalScreen;
