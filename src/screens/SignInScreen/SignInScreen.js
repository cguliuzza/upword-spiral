import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import Logo from '../../../assets/images/logo-example.jpeg';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { user, setUser } = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = ( event ) => {
        // validate user with backend

            // event.preventDefault()
            console.log(email, password)
            console.log('hi')
            fetch('http://127.0.0.1:3000/api/v1/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({email, password})
            })
            // send empty strings
            // modify state when text changes
            // change from state to ref ??

            //react native dev tools ??
              .then(res => {
                if (res.ok) {
                  res.json()
                  .then(user => {
                    setUser(user)
                    // history.push('/groups')
                    navigation.navigate('Home');
                  })
                } else {
                  res.json()
                  .then(errors => {console.error(errors)})
                }
              })
          }

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    }
    
    const onSignUpPressed = () => {
        navigation.navigate('SignUp');
    }

useEffect(() => {
    console.log(password)
}, [password])

const passwordChange = (event) => {
console.log(event)
}

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo, {height: height * 0.3}} />

            <CustomInput placeholder='Email' value={email} onChangeText={email => setEmail({email: email})} />
            <CustomInput placeholder='Password' value={password} secureTextEntry={true} onChange={passwordChange} />

            <CustomButton text='WORKS' onPress={onSignInPressed} type='PRIMARY' />

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
