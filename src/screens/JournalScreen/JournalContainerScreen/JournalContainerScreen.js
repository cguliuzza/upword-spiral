import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import CustomButton from '../../../components/CustomButton/CustomButton';
import JournalCard from '../../../components/CustomCard/JournalCard/JournalCard';

const JournalContainerScreen = () => {
    const navigation = useNavigation();
    
    const [ journals, setJournals ] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/journals')
        .then(resp => resp.json())
        .then(journalData => setJournals(journalData))
    }, [])

    const onJournalPressed = () => {
        navigation.navigate('CreateJournal', { name: "Create Journal"})
    }

    // const selectJournal = () => {
    //     navigation.navigate('ShowJournal');
    // }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            {/* <Text style={{ fontSize: 35, alignItems: 'center' }}>Journal Entries</Text> */}

            <CustomButton  text='Write in Journal' onPress={onJournalPressed} type='PRIMARY' />

        {/* <Pressable onPress={selectJournal}> */}
            <View>{journals.map(journal => <JournalCard journal={journal} key={journal.id} />).reverse()}</View>
        {/* </Pressable> */}

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

export default JournalContainerScreen