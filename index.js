import "./index.css";
import App from "./src/App";
import React from 'react';
import { Navigation } from "react-native-navigation";
import { NavigationContainer } from '@react-navigation/native';

ReactDOM.render (
    <NavigationContainer>
        Navigation.registerComponent('com.myApp.WelcomeScreen', {() => App});
        Navigation.events().registerAppLaunchedListener({() => {
            Navigation.setRoot({
                root: {
                    stack: {
                        children: [{
                            component: {
                                name: 'com.myApp.WelcomeScreen'
                            }
                        }]
                    }
                }
            })
        }});
    </NavigationContainer>,
  document.getElementById("root")
);