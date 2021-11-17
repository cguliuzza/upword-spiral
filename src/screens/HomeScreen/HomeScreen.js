import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton';

const HomeScreen = ({ route }) => {
    const navigation = useNavigation();
    
    const onJournalPressed = () => {
        navigation.navigate('CreateJournal', { name: "Create Journal"})
    }
    
    const onShowJournalsPressed = () => {
        navigation.navigate('JournalContainer', { name: "Journal Entries"})
    }

    const onShowActionsPressed = () => {
        navigation.navigate('ActionContainer', { name: "5 Minute Moments"})
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>Home, sweet home!</Text>
            
            <CustomButton  text='Write in Journal' onPress={onJournalPressed} type='PRIMARY' />
            <CustomButton  text='Show Journals' onPress={onShowJournalsPressed} type='PRIMARY' />
            <CustomButton  text='Show Actions' onPress={onShowActionsPressed} type='PRIMARY' />
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
