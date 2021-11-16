import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Pressable, TextInput } from 'react-native';
import CustomButton from '../../../components/CustomButton/CustomButton';
// import CustomInput from '../../../components/CustomInput/CustomInput';
import ActionCard from '../../../components/CustomCard/ActionCard/ActionCard';
import { Keyboard } from 'react-native';

const ActionContainerScreen = () => {
    
    const navigation = useNavigation();
    const [ actions, setActions ] = useState([])

    const [ actionName, setActionName ] = useState()
    const [ actionDescription, setActionDescription ] = useState()
    
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/actions')
        .then(resp => resp.json())
        .then(actionData => setActions(actionData))
    }, [])

    const onHomePressed = () => {
        navigation.navigate('Home');
    }
    
    const handleAddAction = () => {
        Keyboard.dismiss();
        setActions([...actions, {name: actionName}, {description: actionDescription}])
        setActionName(null);
        setActionDescription(null);
    }
    
    const selectAction = () => {
        navigation.navigate('ShowAction');
    }

    // const newAction = () => {
    //     {{name: actionName; description: actionDescription}}
    // }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>5 Minute Moments</Text>

        <Pressable onPress={selectAction}>
            <View>{actions.map(action => <ActionCard action={action} key={action.id} />).reverse()}</View>
        </Pressable>

            <CustomButton  text='Home' onPress={onHomePressed} type='PRIMARY' />

            <KeyboardAvoidingView
                behavior={"padding"}
                style={styles.writeActionWrapper}
            >
                <TextInput placeholder='Add action name' style={styles.input} value={actionName} type='PRIMARY' onChangeText={text => setActionName(text)} />
                <TextInput placeholder='Add action description' style={styles.input} value={actionDescription} type='PRIMARY' onChangeText={text => setActionDescription(text)} />

                <Pressable onPress={handleAddAction}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>Create New Action</Text>
                    </View>
                </Pressable>
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
    // justifyContent: 'space-around',
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