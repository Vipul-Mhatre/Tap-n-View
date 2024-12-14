import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UserList from '../screens/UserList';
import UserDetails from '../screens/UserDetails';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={{
          headerStyle: { backgroundColor: '#3c8d99' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen 
          name="UserList" 
          component={UserList} 
          options={{ title: 'Tap n View - User List' }} 
        />
        <Stack.Screen 
          name="UserDetails" 
          component={UserDetails} 
          options={{ title: 'Tap n View - User Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;