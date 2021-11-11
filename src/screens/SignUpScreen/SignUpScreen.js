import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignUpScreen = () => {
const { firstName, setFirstName } = useState('');
const { lastName, setLastName } = useState('');
const { email, setEmail } = useState('');
const { password, setPassword } = useState('');
const { passwordConfirmation, setPasswordConfirmation } = useState('');

    const onRegisterPressed = () => {
        console.warn("Register button works")
    }

    const onTermsPressed = () => {
        console.warn("Terms and Conditions button works")
    }

    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy button works")
    }
    
    const onSignInPressed = () => {
        console.warn("Back to Sign In button works")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create an Account</Text>

            <CustomInput placeholder='First Name' value={firstName} setValue={setFirstName} />
            <CustomInput placeholder='Last Name' value={lastName} setValue={setLastName} />
            <CustomInput placeholder='Email' value={email} setValue={setEmail} />
            <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true} />
            <CustomInput placeholder='Password Confirmation' value={passwordConfirmation} setValue={setPasswordConfirmation} secureTextEntry={true} />

            <CustomButton text='Register' onPress={onRegisterPressed} type='PRIMARY' />
            <Text style={styles.text}>By registering you are agreeing to the{' '}
                <Text style={styles.link} onPress={onTermsPressed}>Terms and Conditions</Text> and{' '} 
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>.
            </Text>

            <SocialSignInButtons />

            <CustomButton text="Have an account? Sign In!" onPress={onSignInPressed} type='TERTIARY' />
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
        color: 'teal',
        fontWeight: 'bold',
    },
})

export default SignUpScreen;
