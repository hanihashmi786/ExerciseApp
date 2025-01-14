import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard1 from './screens/Onboard1';
import Onboard2 from './screens/Onboard2'; // Make sure Onboard2 exists
import Onboard3 from './screens/Onboard3'; // Make sure Onboard2 exists
import Onboard4 from './screens/Onboard4'; // Make sure Onboard2 exists
import Onboard5 from './screens/Onboard5'; // Make sure Onboard2 exists
import Dashboard from './screens/Dashboard'; // Make sure Onboard2 exists
import UserSettings from './screens/UserSettings';
import SelectExercisePlan from './screens/SelectExercisePlan';
import SelectDietPlan from './screens/SelectDietPlan';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Only include Stack.Screen or Group as children */}
      <Stack.Navigator initialRouteName="Onboard1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboard1" component={Onboard1} />
        <Stack.Screen name="Onboard2" component={Onboard2} />
        <Stack.Screen name="Onboard3" component={Onboard3} />
        <Stack.Screen name="Onboard4" component={Onboard4} />
        <Stack.Screen name="Onboard5" component={Onboard5} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="UserSettings" component={UserSettings} />
        <Stack.Screen name="SelectExercisePlan" component={SelectExercisePlan} />
        <Stack.Screen name="SelectDietPlan" component={SelectDietPlan} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
