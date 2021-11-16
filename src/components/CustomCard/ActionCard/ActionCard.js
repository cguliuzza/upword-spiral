import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ActionCard = ({ action }) => {

    return (
        <View style={styles.actionCard}>
            <View>
                <Text 
                    value={action.name} 
                    style={styles.name}>
                {action.name}
                </Text>

                {/* <Text 
                    value={action.minutes} 
                    style={styles.description}> 
                {action.minutes} minute timer
                </Text> */}

                <Text 
                    value={action.description} 
                    style={styles.description}> 
                {action.description}
                </Text>
            </View>
        </View>
    )
}
    
    const styles = StyleSheet.create({
        actionCard: {
            backgroundColor: 'white',
            borderColor: '#e8e8e8',
            borderWidth: 1,
            borderRadius: 5,
            padding: 15,
            paddingHorizontal: 20,
            marginVertical: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        name: {
            fontSize: 20,
            fontWeight: '800',
            color: '#363739', 
            flexDirection: 'row',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            maxWidth: '95%'
        },
        description: {
            color: '#363739',
            fontWeight: '500',
            flexDirection: 'row',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            maxWidth: '95%'
        }
    })

export default ActionCard;