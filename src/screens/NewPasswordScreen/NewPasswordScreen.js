import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const NewPasswordScreen = () => {
    const { emailCode, setEmailCode } = useState('');
    const { newPassword, setNewPassword } = useState('');

    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('Home');
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn', { name: "Sign In"});
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your Password</Text>

            <CustomInput placeholder='Confirmation Code' value={emailCode} setValue={setEmailCode} />

            <CustomInput placeholder='Enter your New Password' value={newPassword} setValue={setNewPassword} />
           
            <CustomButton text='Submit' onPress={onSubmitPressed} type='PRIMARY' />

            <CustomButton text="Back to Sign In" onPress={onSignInPressed} type='TERTIARY' />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        paddingTop: 45,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#363739',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
})

export default NewPasswordScreen;
