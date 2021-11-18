import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
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

    const onActionPressed = () => {
        navigation.navigate('CreateAction');
    }
    
    const selectAction = () => {
        navigation.navigate('ShowAction');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            {/* <Text style={{ fontSize: 35, alignItems: 'center' }}>Action Entries</Text> */}

            <CustomButton  text='Write an Action' onPress={onActionPressed} type='PRIMARY' />

        <Pressable onPress={selectAction}>
            <View>{actions.map(action => <ActionCard action={action} key={action.id} />).reverse()}</View>
        </Pressable>
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

export default ActionContainerScreen