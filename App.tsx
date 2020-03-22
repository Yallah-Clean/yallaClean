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
import RegisterChoiceScreen from './screens/RegisterChoice';
import CollectorRegScreen from './screens/CollectorReg';
import OrgRegistryService from './service/OrgRegistry.js';
import YallaCleanTokenService from './service/YallaCleanToken.js';


const Stack = createStackNavigator();
export default function App() {
  const orgRegistry = new OrgRegistryService("0x0cc0c2de7e8c30525b4ca3b9e0b9703fb29569060d403261055481df7014f7fa");
// (async ()=>{
// const name=    await orgRegistry.userFactory( orgRegistry.getContractAddress())
// console.log( name,'tokegetContractAddressn name');

//   })();
  const token = new YallaCleanTokenService();
  const test=(async ()=>{
    const getContractAddress=    await orgRegistry.userFactory( orgRegistry.getContractAddress())
    console.log( getContractAddress,'tokegetContractAddressn');
// const name=    await orgRegistry.userFactory( "0x82ee681C3126bD63d3B920eCc6E758c1CbFAeFC8")
// console.log( name,'tokegetCo ntractAddressn name');

  })();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>
        <Stack.Screen name="Choose" component={RegisterChoiceScreen}></Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}></Stack.Screen>
        <Stack.Screen name="VerifyCode" component={VerifyCodeScreen}></Stack.Screen>
        <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
        <Stack.Screen name="ResidentReg" component={ResidentRegScreen}></Stack.Screen>
        <Stack.Screen name="CollectorReg" component={CollectorRegScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

