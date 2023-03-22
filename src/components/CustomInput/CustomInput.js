import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  type = 'PRIMARY',
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        type={type}
        onChangeText={setValue}
        placeholder={placeholder}
        style={(styles.container, styles.input, styles[`container_${type}`])}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

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
  container_TEXTBOX: {
    height: '30%',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  input: {
    color: '#363739',
  },
});

export default CustomInput;
