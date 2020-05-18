import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Button, Body, Card, CardItem, Title, Header, Form, Item, Input,Content,Right, Left, Label, Text} from 'native-base';

class RandomAsteroids extends React.Component {
  static navigationOptions = {
    title: "Random Asteroid List",
    headerStyle: {
    backgroundColor: "#73C6B6"
    }
  };
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Container style={styles.container}>
        
        <Body><Title>Random Asteroid List</Title></Body>
        <Card style = {styles.card}>
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
}
export default RandomAsteroids;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,

    alignItems: 'center'
  },
  card : {

  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
