import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MotivationCard = ({ motivation }) => {
  return (
    <View style={styles.container}>
      <Text value={motivation.text} style={styles.message}>
        {motivation.text}
      </Text>
      <Text value={motivation.author} style={styles.author}>
        {motivation.author}
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
  message: {
    color: '#363739',
    fontWeight: '500',
  },
  author: {
    fontWeight: 'bold',
  },
});

export default MotivationCard;
