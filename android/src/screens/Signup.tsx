// screens/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

     
      await database().ref('users/' + user.uid).set({
        email: user.email,
        uid: user.uid,
      });

      Alert.alert("Sign up successful!", "You can now log in.");
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert("Error");
    }
  };

  return (
    <View style={{padding:30,flex:1,justifyContent:'center',alignItems:'center'}}>
      <TextInput
        placeholder="Email"
        value={email}
        style={style.input}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        style={style.input}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View>
      <Button  title="Sign Up" onPress={handleSignUp} />
      <Button title="Already have an account? Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};
const style=StyleSheet.create({
    input:{
        width:'80%',
        height:40,
        borderWidth:1,
        borderRadius:10
    }
})
export default SignUpScreen;
