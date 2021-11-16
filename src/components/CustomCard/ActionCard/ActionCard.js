import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
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
        <View style={styles.actionCard}>
            <View>
                <View style={styles.favorite}></View>
            </View>
            <View>
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
            </View>
            {/* <CustomButton onPress={favoriteAction} type='SECONDARY' text='Favorite' /> */}
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
            // marginBottom: 20,
        },
        // cardLeft: {
        //     flexDirection: 'row',
        //     alignItems: 'center',
        //     flexWrap: 'wrap',
        // },
        favorite: {
            width: 20,
            height: 20,
            backgroundColor: 'coral',
            opacity: 0.4,
            borderRadius: 5,
            marginRight: 15,
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

export default ActionCard
