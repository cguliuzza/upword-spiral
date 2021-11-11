import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>Home, sweet home!</Text>
        </View>
    )
}

export default HomeScreen;
