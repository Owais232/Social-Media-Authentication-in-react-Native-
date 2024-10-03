// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';


const HomeScreen = ({ navigation }: any) => {
  

  const handleLogout = async () => {
    try {
      await auth().signOut();
      Alert.alert("Logout successful!", "You have been logged out.");
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert("Error");
    }
  };

  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
