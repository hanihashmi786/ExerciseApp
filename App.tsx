import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import SignupCompany from './screens/SignupCompany';
import SignupSecurity from './screens/SignupSecurity';
import Dashboard from './screens/Dashboard';
import SystemSetup from './screens/SystemSetup';
import MakePayment from './screens/MakePayment';
import PageNotFound from './screens/PageNotFound';
import MakeIntegrations from './screens/MakeIntegrations';
import Profile from './screens/Profile';
import CompanyProfile from './screens/CompanyProfile';
import OTPAuthenticationScreen from './screens/OTPAuthenticationScreen';
import Company from './screens/Company';
import Calls from './screens/Calls';
import BillingScreen from './screens/BillingScreen';
import Client from './screens/Client';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State for splash screen

  useEffect(() => {
    // Simulate a loading delay for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 30);

    return () => clearTimeout(timer);
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SignupCompany" component={SignupCompany} />
      <Stack.Screen name="SignupSecurity" component={SignupSecurity} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="SystemSetup" component={SystemSetup} />
      <Stack.Screen name="MakePayment" component={MakePayment} />
      <Stack.Screen name="PageNotFound" component={PageNotFound} /> 
      <Stack.Screen name="MakeIntegrations" component={MakeIntegrations} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
      <Stack.Screen name="OTPAuthenticationScreen" component={OTPAuthenticationScreen} />
      <Stack.Screen name="Company" component={Company} />
      <Stack.Screen name="Calls" component={Calls} />
      <Stack.Screen name="BillingScreen" component={BillingScreen} />
      <Stack.Screen name="Client" component={Client} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
