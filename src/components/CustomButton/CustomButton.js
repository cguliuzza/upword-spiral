import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({ onPress, text, type='PRIMARY', bgroundColor, fgroundColor }) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[
                styles.container, 
                styles[`container_${type}`], 
                bgroundColor ? {backgroundColor: bgroundColor} : {} 
            ]}>
            <Text 
                style={[
                    styles.text, 
                    styles[`text_${type}`],
                    fgroundColor ? {color: fgroundColor} : {}
                ]}>{ text }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        padding: 15,
        marginVertical: 8,
        alignItems: 'center',
        borderRadius: 5
    },

    container_PRIMARY: {
        backgroundColor: 'teal',
    },

    container_SECONDARY: {
        borderColor: 'teal',
        borderWidth: 2,
    },

    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white'
    },

    text_SECONDARY: {
        color: 'teal'
    },

    text_TERTIARY: {
        color: 'gray'
    }
})

export default CustomButton