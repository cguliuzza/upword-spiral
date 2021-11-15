import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import JournalScreen from '../../screens/JournalScreen/JournalScreen'

const GetJournal = () => {
    const [ journals, setJournals ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/journals')
        .then(resp => resp.json())
        .then(journalData => setJournals(journalData))
    }, [])

    return (
        <View>
            <Text>journals go here</Text>
            {/* <JournalScreen journals={journals} /> */}
        </View>
    )
}

export default GetJournal
