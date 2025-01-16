import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import Onboard1 from './screens/Onboard1';
import Onboard2 from './screens/Onboard2';
import Onboard3 from './screens/Onboard3';
import Onboard4 from './screens/Onboard4';
import Onboard5 from './screens/Onboard5';
import Dashboard from './screens/Dashboard';
import UserSettings from './screens/UserSettings';
import SelectExercisePlan from './screens/SelectExercisePlan';
import SelectDietPlan from './screens/SelectDietPlan';
import ExerciseDetails from './screens/ExerciseDetails';
import DietPlanDetails from './screens/DietPlanDetails';
import SelectPremiumPlan from './screens/SelectPremiumPlan';

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

  if (isLoading) {
    return <SplashScreen/>; // Show splash screen while loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboard1" component={Onboard1} />
        <Stack.Screen name="Onboard2" component={Onboard2} />
        <Stack.Screen name="Onboard3" component={Onboard3} />
        <Stack.Screen name="Onboard4" component={Onboard4} />
        <Stack.Screen name="Onboard5" component={Onboard5} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="UserSettings" component={UserSettings} />
        <Stack.Screen name="SelectExercisePlan" component={SelectExercisePlan} />
        <Stack.Screen name="SelectDietPlan" component={SelectDietPlan} />
        <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
        <Stack.Screen name="DietPlanDetails" component={DietPlanDetails} />
        <Stack.Screen name="SelectPremiumPlan" component={SelectPremiumPlan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
