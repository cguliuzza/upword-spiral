import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JournalCard = ({ journal }) => {
  return (
    <View style={styles.container}>
      <Text value={journal.title} style={styles.title}>
        {journal.title}
      </Text>
      <Text value={journal.message} style={styles.message}>
        {journal.message}
      </Text>
    </View>
  );
};

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
    fontSize: 25,
    fontWeight: '800',
    color: '#363739',
  },
  message: {
    color: '#363739',
    fontWeight: '500',
  },
});

export default JournalCard;
