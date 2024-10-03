// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './android/src/screens/Signup';
import LoginScreen from './android/src/screens/Login';
import HomeScreen from './android/src/screens/Home';
import { AuthProvider, useAuth } from './android/src/screens/AuthContext';


const Stack = createNativeStackNavigator();

const Appnavigator = () => {

  const {user,loading}=useAuth();

  if(loading){
    return null;
  }
  return (
   <Stack.Navigator initialRouteName='Login'>
    {!user?(
      <>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      </>
    ):(
      <Stack.Screen name='Home' component={HomeScreen}/>
    )}

   </Stack.Navigator>
  );
};


const App=()=>{
  return(
    <AuthProvider>
      <NavigationContainer>
        <Appnavigator/>
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App;
