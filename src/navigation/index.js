import React, { useState, useEffect, useMemo } from 'react'
import { NavigationContainer, Image, View } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import { AuthContext } from './context';

import SignInScreen from '../screens/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
// import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
// import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';

// import CreateContainerScreen from '../screens/CreateScreen/CreateContainerScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import JournalContainerScreen from '../screens/JournalScreen/JournalContainerScreen/JournalContainerScreen';
import ActionContainerScreen from '../screens/ActionScreen/ActionContainerScreen';
import MotivationContainerScreen from '../screens/MotivationScreen/MotivationContainerScreen';

import ShowActionScreen from '../screens/ActionScreen/ShowActionScreen/ShowActionScreen';
import CreateJournalScreen from '../screens/JournalScreen/CreateJournalScreen/CreateJournalScreen';

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const MotivationStack = createStackNavigator();
const ActionStack = createStackNavigator();
const JournalStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
// const CreateStack = createStackNavigator();

// let headerTitleOptions = ({ route }) => ({ title: route.params.name })

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen} />
        <HomeStack.Screen name='CreateJournal' component={CreateJournalScreen} />
        <HomeStack.Screen name='JournalContainer' component={JournalContainerScreen} />
        <HomeStack.Screen name='ActionContainer' component={ActionContainerScreen} />
    </HomeStack.Navigator>
)
const MotivationStackScreen = () => (
    <MotivationStack.Navigator>
        <MotivationStack.Screen name='Motivations' component={MotivationContainerScreen} />
        {/* <MotivationStack.Screen name='CreateMotivation' component={CreateMotivationScreen} />
        <MotivationStack.Screen name='ShowMotivation' component={ShowMotivationScreen} />
        <MotivationStack.Screen name='MotivationContainer' component={MotivationContainerScreen} /> */}
    </MotivationStack.Navigator>
)

const ActionStackScreen = () => (
    <ActionStack.Navigator>
        <ActionStack.Screen name='Actions' component={ActionContainerScreen} />
        <ActionStack.Screen name='ShowAction' component={ShowActionScreen} />
    </ActionStack.Navigator>
)
const JournalStackScreen = () => (
    <JournalStack.Navigator>
        <JournalStack.Screen name='Journals' component={JournalContainerScreen} />
        <JournalStack.Screen name='CreateJournal' component={CreateJournalScreen} />
        <JournalStack.Screen name='JournalContainer' component={JournalContainerScreen} />
    </JournalStack.Navigator>
)

// const CreateStackScreen = () => (
//     <CreateStack.Navigator>
//         <CreateStack.Screen name='Create' component={CreateContainerScreen} />
//         <CreateStack.Screen name='CreateJournal' component={CreateJournalScreen} />
//         {/* <CreateStack.Screen name='CreateMotivation' component={CreateMotivationScreen} /> */}
//         {/* <CreateStack.Screen name='CreateAction' component={CreateActionScreen} /> */}
//     </CreateStack.Navigator>
// )


const Navigation = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ userCookie, setUserCookie ] = useState(null);

    const authContext = useMemo(() => {
        return {
            signIn: () => {
                setIsLoading(false);
                setUserCookie('cookie');
            },
            signUp: () => {
                setIsLoading(false);
                setUserCookie('cookie');
            },
            logOut: () => {
                setIsLoading(false);
                setUserCookie(null);
            }
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [])

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <AuthContext.Provider value={authContext}>
        <NavigationContainer>
            {userCookie ? (
                <Tabs.Navigator screenOptions={{headerShown: false}}>
                    <Tabs.Screen name="HOME" component={HomeStackScreen} 
                    // options={{
                    //     tabBarIcon: ({focused}) => (
                    //         <View>
                    //             <Image
                    //                 source={require('../../assets/icons/home.png')}
                    //                 resizeMode='contain'
                    //                 style={{
                    //                     width: 25,
                    //                     height: 25,
                    //                     tintColor: focused ? 'green' : 'red'
                    //                 }}
                    //             />
                    //         </View>
                    //     )
                    // }} 
                    />
                    <Tabs.Screen name="MOTIVATION" component={MotivationStackScreen} />
                    {/* <Tabs.Screen name="ADD" component={CreateStackScreen} /> */}
                    <Tabs.Screen name="ACTION" component={ActionStackScreen} />
                    <Tabs.Screen name="JOURNAL" component={JournalStackScreen} />
                </Tabs.Navigator>
            ) : (
                <AuthStack.Navigator initialRouteName="SignIn" >
                    <AuthStack.Screen name='SignIn' component={SignInScreen} options={{ title: 'Sign In'}} />
                    <AuthStack.Screen name='SignUp' component={SignUpScreen} options={{ title: 'Create Account'}} />
                </AuthStack.Navigator>
            )}
        </NavigationContainer>
        </AuthContext.Provider>
    )
}

export default Navigation;

{/* <AuthStack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
<AuthStack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
<AuthStack.Screen name='NewPassword' component={NewPasswordScreen} /> */}