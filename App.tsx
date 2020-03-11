import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import SignInScreen from './screens/SignIn';
import ForgotPasswordScreen from './screens/ForgotPassword';
import VerifyCodeScreen from './screens/VerifyCode';
import SignUpScreen from './screens/SignUp';
import ResidentRegScreen from './screens/ResidentReg';
import CollectorRegScreen from './screens/CollectorReg';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CollectorReg">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen name="VerifyCode" component={VerifyCodeScreen}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
        <Stack.Screen name="ResidentReg" component={ResidentRegScreen}></Stack.Screen>
        <Stack.Screen name="CollectorReg" component={CollectorRegScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

