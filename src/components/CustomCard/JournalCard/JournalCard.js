import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import CustomButton from '../../CustomButton/CustomButton'

const JournalCard = ({ journal }) => {
    
    // const [ journal ] = useState(props.journal)
    // const [ journal, setJournal ] = useState(props.journal)

    // ! ADD BOOKMARK TO JOURNALS SCHEMA TABLE ON BACKEND!
    // const bookmarkJournal = () => {
    //     setJournal({ ...journal, bookmark: !false })
    //     fetch(`http://localhost:3000/api/v1/journals/${journal.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             bookmark: !false
    //         })
    //     })
    // }

    return (
        <View style={styles.container}>
            <Text 
                value={journal.title} 
                style={styles.title}>
            {journal.title}
            </Text>

            <Text 
                value={journal.message} 
                style={styles.message}> 
            {journal.message}
            </Text>
            {/* <CustomButton onPress={bookmarkJournal} type='SECONDARY' text='Bookmark' /> */}
        </View>
    )
}
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            width: '95%',
            borderColor: '#e8e8e8',
            borderWidth: 1,
            borderRadius: 5,
            padding: 15,
            paddingHorizontal: 20,
            marginVertical: 5,
        },
        title: {
            fontSize: 25,
            fontWeight: '800',
            color: '#363739', 
        },
        message: {
            color: '#363739',
            fontWeight: '500',
        }
    })

export default JournalCard
