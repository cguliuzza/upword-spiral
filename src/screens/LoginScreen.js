import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import Logo from '../../assets/images/logo-example.jpeg';

const LoginScreen = () => {
    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode='contain' />
            <Text>LoginScreen.js</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '50%',
        height: 100
    }
});

export default LoginScreen;
