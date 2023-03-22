import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import CustomButton from '../../../components/CustomButton/CustomButton';
import MotivationCard from '../../../components/CustomCard/MotivationCard/MotivationCard';

const MotivationContainerScreen = () => {
  const navigation = useNavigation();

  const [motivations, setMotivations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/motivations')
      .then((resp) => resp.json())
      .then((motivationData) => setMotivations(motivationData));
  }, []);

  const onMotivationPressed = () => {
    navigation.navigate('CreateMotivation', { name: 'Create Motivation' });
  };

  const selectMotivation = () => {
    navigation.navigate('ShowMotivation');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <CustomButton
          text='Write new Motivation'
          onPress={onMotivationPressed}
          type='PRIMARY'
        />

        <Pressable onPress={selectMotivation}>
          <View>
            {motivations
              .map((motivation) => (
                <MotivationCard motivation={motivation} key={motivation.id} />
              ))
              .reverse()}
          </View>
        </Pressable>
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

export default MotivationContainerScreen;
