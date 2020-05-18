import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import Inputs from './inputform.js';
import Asteroids from './asteroidList.js';
import RandomAsteroids from './randomAsteroidList.js';

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inputs"  screenOptions={{
          gestureEnabled: true
        }}>
        <Stack.Screen name='Inputs' component={Inputs} options={{ title: 'Input form' }} />
        <Stack.Screen name='Asteroids' component={Asteroids} options={{ title: 'Asteroid List' }}/>
        <Stack.Screen name='RandomAsteroids' component={RandomAsteroids} options={{ title: 'Random Asteroid List' }} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default AppNavigator;
