import React, { useState, useEffect, useMemo } from 'react'
import { NavigationContainer, Image, View, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons'
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
import CreateActionScreen from '../screens/ActionScreen/CreateActionScreen/CreateActionScreen';
import ShowJournalScreen from '../screens/JournalScreen/ShowJournalScreen/ShowJournalScreen';
import CreateJournalScreen from '../screens/JournalScreen/CreateJournalScreen/CreateJournalScreen';
import ShowMotivationScreen from '../screens/MotivationScreen/ShowMotivationScreen/ShowMotivationScreen';
import CreateMotivationScreen from '../screens/MotivationScreen/CreateMotivationScreen/CreateMotivationScreen';

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
        <HomeStack.Screen name='ShowAction' component={ShowActionScreen} />
    </HomeStack.Navigator>
)
const MotivationStackScreen = () => (
    <MotivationStack.Navigator>
        <MotivationStack.Screen name='Motivations' component={MotivationContainerScreen} />
        <MotivationStack.Screen name='CreateMotivation' component={CreateMotivationScreen} />
        <MotivationStack.Screen name='ShowMotivation' component={ShowMotivationScreen} />
    </MotivationStack.Navigator>
)

const ActionStackScreen = () => (
    <ActionStack.Navigator>
        <ActionStack.Screen name='Actions' component={ActionContainerScreen} />
        <ActionStack.Screen name='ShowAction' component={ShowActionScreen} />
        <ActionStack.Screen name='CreateAction' component={CreateActionScreen} />
    </ActionStack.Navigator>
)
const JournalStackScreen = () => (
    <JournalStack.Navigator>
        <JournalStack.Screen name='Journals' component={JournalContainerScreen} />
        <JournalStack.Screen name='CreateJournal' component={CreateJournalScreen} />
        <JournalStack.Screen name='ShowJournal' component={ShowJournalScreen} />
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
                <Tabs.Navigator 
                    // screenOptions={{headerShown: false}}
                    screenOptions={({ route }) => ({
                            tabBarIcon: ({focused, color, size}) => {
                                let iconName;
                                let routeName = route.name;

                                if (routeName === "HOME") {
                                    iconName = focused ? 'home' : 'home-outline'
                                } else if (routeName === "MOTIVATION") {
                                    iconName = focused ? 'trending-up' : 'trending-up-outline'
                                } else if (routeName === "ACTION") {
                                    iconName = focused ? 'timer' : 'timer-outline'
                                } else if (routeName === "JOURNAL") {
                                    iconName = focused ? 'book' : 'book-outline'
                                }

                                return <Ionicons name={iconName} size={size} color={color} />
                            },
                        })
                    }>
                    
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