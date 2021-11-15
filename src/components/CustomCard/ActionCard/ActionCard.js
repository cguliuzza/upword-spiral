import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import CustomButton from '../../CustomButton/CustomButton'

const ActionCard = ({ action }) => {
    
    // const [ action ] = useState(props.journal)
    // const [ action, setAction ] = useState(props.action)

    // ! ADD FAVORITE AND HIDE TO ACTIONS SCHEMA TABLE ON BACKEND!
    // const favoriteAction = () => {
    //     setAction({ ...action, favorite: !false })
    //     fetch(`http://localhost:3000/api/v1/actions/${action.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             favorite: !false
    //         })
    //     })
    // }

    return (
        <View style={styles.container}>
            <Text 
                value={action.name} 
                style={styles.name}>
            {action.name}
            </Text>

            <Text 
                value={action.minutes} 
                style={styles.description}> 
            {action.minutes} minute timer
            </Text>

            <Text 
                value={action.description} 
                style={styles.description}> 
            {action.description}
            </Text>
            {/* <CustomButton onPress={favoriteAction} type='SECONDARY' text='Favorite' /> */}
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
        name: {
            fontSize: 25,
            fontWeight: '800',
            color: '#363739', 
        },
        description: {
            color: '#363739',
            fontWeight: '500',
        }
    })

export default ActionCard
