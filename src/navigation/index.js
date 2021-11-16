import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SaveJournalScreen from '../screens/JournalScreen/SaveJournalScreen/SaveJournalScreen';
import JournalContainerScreen from '../screens/JournalScreen/JournalContainerScreen/JournalContainerScreen';
import ActionContainerScreen from '../screens/ActionScreen/ActionContainerScreen';
import ShowActionScreen from '../screens/ActionScreen/ShowActionScreen/ShowActionScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
                <Stack.Screen name='SignIn' component={SignInScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
                <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
                <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
                
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='SaveJournal' component={SaveJournalScreen} />
                <Stack.Screen name='JournalContainer' component={JournalContainerScreen} />
                <Stack.Screen name='ActionContainer' component={ActionContainerScreen} />
                <Stack.Screen name='ShowAction' component={ShowActionScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
