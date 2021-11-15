import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

const HomeScreen = () => {
    
    const navigation = useNavigation();

    const onJournalPressed = () => {
        console.warn('Time to Journal');
        navigation.navigate('SaveJournal')
    }
    
    const onShowJournalsPressed = () => {
        console.warn('List of Journals');
        navigation.navigate('JournalContainer')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>Home, sweet home!</Text>
            
            <CustomButton  text='Write in Journal' onPress={onJournalPressed} type='PRIMARY' />
            <CustomButton  text='Show Journals' onPress={onShowJournalsPressed} type='PRIMARY' />
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

export default HomeScreen;
