import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../../components/CustomButton/CustomButton';
import ActionCard from '../../../components/CustomCard/ActionCard/ActionCard';

const ActionContainerScreen = () => {
    
    const navigation = useNavigation();
    const [ actions, setActions ] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/actions')
        .then(resp => resp.json())
        .then(actionData => setActions(actionData))
    }, [])

    // const onJournalPressed = () => {
    //     console.warn('Time to Journal');
    //     navigation.navigate('SaveJournal')
    // }

    const onHomePressed = () => {
        navigation.navigate('Home');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>5 Minute Moments</Text>

            <View>{actions.map(action => <ActionCard action={action} key={action.id} />)}</View>

            {/* <CustomButton  text='Create New Action' onPress={onCreateActionPressed} type='PRIMARY' /> */}
            <CustomButton  text='Home' onPress={onHomePressed} type='PRIMARY' />

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

export default ActionContainerScreen