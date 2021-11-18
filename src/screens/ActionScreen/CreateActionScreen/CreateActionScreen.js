import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, ScrollView, StyleSheet, KeyboardAvoidingView, Keyboard } from 'react-native'
import CustomButton from '../../../components/CustomButton/CustomButton'

const CreateActionScreen = () => {
    const navigation = useNavigation();

    const [ actions, setActions ] = useState([]);

    const [ actionName, setActionName ] = useState();
    const [ actionDescription, setActionDescription ] = useState();

    const onActionContainerPressed = () => {
        navigation.navigate('ActionContainer', { name: "Action Entries"});
    }

    const handleAddAction = () => {
        Keyboard.dismiss();
  
        fetch('http://localhost:3000/api/v1/actions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: actionName, description: actionDescription})
        })
  
        setActions([...actions, {name: actionName, description: actionDescription}]);
        setActionName(null);
        setActionDescription(null);
      }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>Action</Text>

          <KeyboardAvoidingView
                behavior={"padding"} style={styles.writeActionWrapper}
          >

            <TextInput placeholder='Name' name='name' value={actionName} onChangeText={text => setActionName(text)} style={styles.input} />

            <TextInput placeholder="Description" name='description' value={actionDescription} onChangeText={text => setActionDescription(text)} style={styles.input} />

            <CustomButton text='Save New Action' onPress={handleAddAction} type='PRIMARY' />

            <CustomButton  text='Action Entries' onPress={onActionContainerPressed} type='SECONDARY' />
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

export default CreateActionScreen
