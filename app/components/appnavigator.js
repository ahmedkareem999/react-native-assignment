import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Inputs from './inputform.js';
import { StyleSheet } from 'react-native';
import {Container, Button, Body, Card, CardItem, Title, Header, Form, Item, Input,Content,Right, Left, Label, Text} from 'native-base';

// import Asteroids from './asteroidList.js';
// import RandomAsteroids from './randomAsteroidList.js';


function Asteroids({route,navigation}) {
  const {name} = Inputs.props.state.name;
  return (
    <Container style={styles.container}>

      <Body><Title>Asteroid List</Title></Body>
      <Card>
        <CardItem>
          <Body>
            <Text style = {styles.text}>Name: {name}</Text>
            <Text style = {styles.text}></Text>
            <Text style = {styles.text}></Text>
          </Body>
        </CardItem>

      </Card>
    </Container>
  );
}

function RandomAsteroids({navigation}) {
  return (
    <Container style={styles.container}>

      <Body><Title>Random Asteroid List</Title></Body>
      <Card>
        <CardItem>
          <Body>
            <Text style = {styles.text}></Text>
            <Text style = {styles.text}></Text>
            <Text style = {styles.text}></Text>
          </Body>
        </CardItem>

      </Card>
    </Container>
  );
}
const Stack = createStackNavigator();

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

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,

    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
