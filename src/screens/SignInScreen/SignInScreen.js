import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo-example.jpeg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignInScreen = () => {
const { email, setEmail } = useState('');
const { password, setPassword } = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in button works")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password button works")
    }
    
    const onSignUpPressed = () => {
        console.warn("Sign Up button works")
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo, {height: height * 0.3}} />

            <CustomInput placeholder='Email' value={email} setValue={setEmail} />
            <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true} />

            <CustomButton text='Sign In' onPress={onSignInPressed} type='PRIMARY' />
            <CustomButton text='Forgot password?' onPress={onForgotPasswordPressed} type='TERTIARY' />

            <SocialSignInButtons />

            <CustomButton text="Don't have an account? Create one!" onPress={onSignUpPressed} type='TERTIARY' />
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    }
})

export default SignInScreen;
