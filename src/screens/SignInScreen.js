import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../assets/images/logo-example.jpeg';
import CustomInput from '../components/CustomInput';

const SignInScreen = () => {
const { email, setEmail } = useState('');
const { password, setPassword } = useState('');

    const {height} = useWindowDimensions();

    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo, {height: height * 0.3}} />

            <CustomInput placeholder='Email' value={email} setValue={setEmail} />
            <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200
    }
})

export default SignInScreen;
