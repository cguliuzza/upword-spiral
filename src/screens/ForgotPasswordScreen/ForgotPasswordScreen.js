import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ForgotPasswordScreen = () => {
const { email, setEmail } = useState('');

    const onSendPressed = () => {
        console.warn("Send button works")
    }

    const onSignInPressed = () => {
        console.warn("Back to Sign In button works")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your Password</Text>

            <CustomInput placeholder='Enter your Email Address' value={email} setValue={setEmail} />
           
            <CustomButton text='Send' onPress={onSendPressed} type='PRIMARY' />

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

export default ForgotPasswordScreen;