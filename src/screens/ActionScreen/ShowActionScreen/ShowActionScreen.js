import React, { useRef, useEffect, useState, useCallback } from "react";
// import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomButton from '../../../components/CustomButton/CustomButton'

const ShowActionScreen = () => {
    const timerIdRef = useRef(10);
    const [counter, setCounter] = useState(10);
    
    const startCounter = useCallback(() => {
      if (timerIdRef.current !== 10) {
        return;
      }
      timerIdRef.current = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
    }, []);
    console.log("hello");
    useEffect(() => {
      console.log(timerIdRef.current);
      if (counter > 9) {
        startCounter();
      }
      return function cleanUp() {
        if (counter < 2) {
          clearInterval(timerIdRef.current);
        }
      };
    });
//     const navigation = useNavigation();

//     const onStartPressed = () => {
//         console.warn('The countdown begins!');
//     }

//     return (
//         <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.root}>
//             <Text style={{ fontSize: 35, alignItems: 'center' }}>5:00</Text>
//             <CustomButton text='Start' onPress={onStartPressed} type='PRIMARY' />
//         </View>
//         </ScrollView>
//     )


return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <Text style={{ color: "teal", alignItems: 'center', fontSize: 35 }}>
                5 Minute Moment Timer
            </Text>
            <Text style={{ color: "teal", alignItems: 'center', fontSize: 20 }}>
                {counter} minutes and blank seconds
            </Text>
            <CustomButton text='Start' onPress={onStartPressed} type='PRIMARY' />
        </View>
    </ScrollView>
);

}

// const styles = StyleSheet.create({
//     root: {
//         alignItems: 'center',
//         padding: 20,
//         paddingTop: 45
//     },
// })

export default ShowActionScreen;


// the counter problem

function RedirectUser() {

