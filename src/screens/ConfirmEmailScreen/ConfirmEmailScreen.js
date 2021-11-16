import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ConfirmEmailScreen = () => {
    const navigation = useNavigation();
    
    const { emailCode, setEmailCode } = useState('');

    const onConfirmPressed = () => {
        navigation.navigate('Home');
    }

    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onResendCodePressed = () => {
        console.warn("Resend Code button works")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your Email</Text>

            <CustomInput placeholder='Enter your Confirmation Code' value={emailCode} setValue={setEmailCode} />
           
            <CustomButton text='Confirm' onPress={onConfirmPressed} type='PRIMARY' />

            <CustomButton text="Resend Code" onPress={onResendCodePressed} type='SECONDARY' />

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

export default ConfirmEmailScreen;
