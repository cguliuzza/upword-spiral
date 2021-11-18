import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ActionCard = ({ action }) => {

    return (
        <View style={styles.container}>
            <View>
                <Text 
                    value={action.name} 
                    style={styles.title}>
                {action.name}
                </Text>

                {/* INPUT FIELD IS NEEDED TO CREATE NEW ACTION W/ MINUTES TEXT
                <Text 
                    value={action.minutes} 
                    style={styles.description}> 
                {action.minutes} minute timer
                </Text> */}

                <Text 
                    value={action.description} 
                    style={styles.message}> 
                {action.description}
                </Text>
            </View>
        </View>
    )
}
    
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: '#363739', 
    },
    message: {
        color: '#363739',
        fontWeight: '500',
        marginTop: 5,
    }
})

export default ActionCard;