import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../navigation/context';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/logo-example.jpeg';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);
  const { height } = useWindowDimensions();

  const [user, setUser] = useState([]);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignInPressed = (event) => {
    // Keyboard.dismiss();
    fetch('http://127.0.0.1:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          signIn();
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp', { name: 'Create an Account' });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={(styles.logo, { height: height * 0.3 })} />

        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          autoCapitalize='none'
        />

        <TextInput
          placeholder='Password'
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          autoCapitalize='none'
        />

        <CustomButton text='Sign In' onPress={onSignInPressed} type='PRIMARY' />

        <CustomButton
          text="Don't have an account? Create one!"
          onPress={onSignUpPressed}
          type='TERTIARY'
        />
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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'teal',
    borderWidth: 1,
    width: '95%',
    marginTop: 15,
  },
});

export default SignInScreen;
