import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import HomeHeader from '../../../assets/images/HomeUpwardSpiral.png';
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
            <Image source={HomeHeader} style={styles.logo} />
            {/* <Text style={{ fontSize: 35, alignItems: 'center' }}>Home, sweet home!</Text> */}
            
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
        paddingTop: 1
    },
    logo: {
        maxWidth: 460,
        maxHeight: 460,
        resizeMode: 'cover'
    },
})

export default HomeScreen;
