import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../../components/CustomButton/CustomButton';

const ShowActionScreen = (key) => {
  const navigation = useNavigation();

  console.log(key);

  const onHomePressed = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={{ fontSize: 35, alignItems: 'center' }}>TEXT</Text>
        <CustomButton text='Home' onPress={onHomePressed} type='PRIMARY' />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 45,
  },
});

export default ShowActionScreen;
