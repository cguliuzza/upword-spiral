import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import BottomTabs from './BottomTabs/BottomTabs';

import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';

import HomeScreen from '../screens/HomeScreen/HomeScreen'
import JournalContainerScreen from '../screens/JournalScreen/JournalContainerScreen/JournalContainerScreen';
import ActionContainerScreen from '../screens/ActionScreen/ActionContainerScreen';
import CreateContainerScreen from '../screens/CreateScreen/CreateContainerScreen';
import MotivationContainerScreen from '../screens/MotivationScreen/MotivationContainerScreen';

import ShowActionScreen from '../screens/ActionScreen/ShowActionScreen/ShowActionScreen';
import CreateJournalScreen from '../screens/JournalScreen/CreateJournalScreen/CreateJournalScreen';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const MotivationStack = createStackNavigator();
const CreateStack = createStackNavigator();
const ActionStack = createStackNavigator();
const JournalStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const headerTitle = ({ route }) => ({ title: route.params.name })

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen} />
        <HomeStack.Screen name='CreateJournal' component={CreateJournalScreen} options={headerTitle} />
        <HomeStack.Screen name='JournalContainer' component={JournalContainerScreen} options={headerTitle} />
        <HomeStack.Screen name='ActionContainer' component={ActionContainerScreen} options={headerTitle} />
    </HomeStack.Navigator>
)
const MotivationStackScreen = () => (
    <MotivationStack.Navigator>
        <MotivationStack.Screen name='Motivation' component={MotivationContainerScreen} options={headerTitle} />
        {/* <MotivationStack.Screen name='CreateMotivation' component={CreateMotivationScreen} options={headerTitle} />
        <MotivationStack.Screen name='ShowMotivation' component={ShowMotivationScreen} options={headerTitle} />
        <MotivationStack.Screen name='MotivationContainer' component={MotivationContainerScreen} options={headerTitle} /> */}
    </MotivationStack.Navigator>
)
const CreateStackScreen = () => (
    <CreateStack.Navigator>
        <CreateStack.Screen name='Create' component={CreateContainerScreen} options={headerTitle} />
        {/* <CreateStack.Screen name='CreateMotivation' component={CreateMotivationScreen} options={headerTitle} /> */}
        {/* <CreateStack.Screen name='CreateAction' component={CreateActionScreen} options={headerTitle} /> */}
        <CreateStack.Screen name='CreateJournal' component={CreateJournalScreen} options={headerTitle} />
    </CreateStack.Navigator>
)
const ActionStackScreen = () => (
    <ActionStack.Navigator>
        <ActionStack.Screen name='Action' component={ActionContainerScreen} options={headerTitle} />
        <ActionStack.Screen name='ShowAction' component={ShowActionScreen} options={headerTitle} />
    </ActionStack.Navigator>
)
const JournalStackScreen = () => (
    <JournalStack.Navigator>
        <JournalStack.Screen name='Journal' component={JournalContainerScreen} options={headerTitle} />
        <JournalStack.Screen name='CreateJournal' component={CreateJournalScreen} options={headerTitle} />
        <JournalStack.Screen name='JournalContainer' component={JournalContainerScreen} options={headerTitle} />
    </JournalStack.Navigator>
)

const Navigation = () => {

    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={{headerShown: false}}>
                <Tabs.Screen name="Home" component={HomeStackScreen} />
                <Tabs.Screen name="Motivation" component={MotivationStackScreen} />
                <Tabs.Screen name="Create" component={CreateStackScreen} />
                <Tabs.Screen name="Action" component={ActionStackScreen} />
                <Tabs.Screen name="Journal" component={JournalStackScreen} />
            </Tabs.Navigator>


            {/* <AuthStack.Navigator initialRouteName="SignIn" >
                <AuthStack.Screen name='SignIn' component={SignInScreen} options={{ title: 'Sign In'}} />
                <AuthStack.Screen name='SignUp' component={SignUpScreen} options={{ title: 'Create Account'}} />
                <AuthStack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
                <AuthStack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
                <AuthStack.Screen name='NewPassword' component={NewPasswordScreen} />
                
            </AuthStack.Navigator> */}
        </NavigationContainer>
    )
}

export default Navigation;

{/* <AuthStack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}> */}
{/* <Stack.Navigator initialRouteName="SignIn"> */}

{/* <Stack.Screen name='SaveJournal' component={SaveJournalScreen} />
<Stack.Screen name='JournalContainer' component={JournalContainerScreen} />
<Stack.Screen name='ActionContainer' component={ActionContainerScreen} />
<Stack.Screen name='ShowAction' component={ShowActionScreen} /> */}