// screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert("Login successful!", "Welcome!");
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert("Error");
    }
  };

  return (
    <View style={{flex:1,alignContent:'center',alignItems:'center',justifyContent:'center'}}>
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
      <Button title="Login" onPress={handleLogin} />
      <Button title="Don't have an account? Sign Up" onPress={() => navigation.navigate('Sign Up')} />
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

export default LoginScreen;
