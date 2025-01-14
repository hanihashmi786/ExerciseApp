import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Onboard1 from './screens/Onboard1';
import Onboard2 from './screens/Onboard2'; // Make sure Onboard2 exists
import Onboard3 from './screens/Onboard3'; // Make sure Onboard2 exists

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Only include Stack.Screen or Group as children */}
      <Stack.Navigator initialRouteName="Onboard1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboard1" component={Onboard1} />
        <Stack.Screen name="Onboard2" component={Onboard2} />
        <Stack.Screen name="Onboard3" component={Onboard3} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
