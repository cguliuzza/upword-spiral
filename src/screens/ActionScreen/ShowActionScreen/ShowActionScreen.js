import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomButton from '../../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'
const ShowActionScreen = () => {
    
    const navigation = useNavigation();

    const onHomePressed = () => {
        navigation.navigate('Home');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={{ fontSize: 35, alignItems: 'center' }}>TEXT</Text>

            {/* <Pressable onPress={selectAction}>
                <View><ActionCard action={action} key={action.id} /></View>
            </Pressable> */}

            <CustomButton text='Home' onPress={onHomePressed} type='PRIMARY' />

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
})

export default ShowActionScreen;