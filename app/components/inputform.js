import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Button, Header, Form, Item, Input,Content,Right, Left, Label, Text} from 'native-base';
class Inputs extends React.Component {
  state = {
    AsteroidID: '',
    name:'',
    nasa_jpl_url: '',
    is_potentially_hazardous_asteroid: '',
    nasaList: [],
    astroidList: [],
    loading: true
  };

  onSubmit = () => {
    if(this.state.AsteroidID != " ") {
      this.componentDidMount();
    } else {
      Alert.alert("Please enter Asteroid ID");
    }
  }

  async componentDidMount() {
        try {
            const nasaApiCall = await fetch('https://api.nasa.gov/neo/rest/v1/neo/{{AsteroidID}}?api_key=PdoIS2buirjk1WvbgzMWpj02QHvu3a41bupz7p2G');
            const nasa = await nasaApiCall.json();
            const asteroidList = JSON.stringify(nasa);
            const nasaList = [];
            nasaList.add(asteroidList.name);
            nasaList.add(asteroidList.nasa_jpl_url);
            nasaList.add(asteroidList.is_potentially_hazardous_asteroid);
            this.setState({nasaList: nasaList, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }


  onChangeText = (text) => {
    this.setState({AsteroidID: text})
  }

  async randomAsteroid() {
    try {
        const randomApiCall = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=PdoIS2buirjk1WvbgzMWpj02QHvu3a41bupz7p2G');
        const asteroid = await randomApiCall.json();
        const nasaAsteroidList = JSON.stringify(asteroid);
        const asteroidRandID = Math.floor(Math.random() * nasaAsteroidList.length);

        const astApiCall = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=PdoIS2buirjk1WvbgzMWpj02QHvu3a41bupz7p2G');
        const astRand = await astApiCall.json();
        const astRandList = JSON.stringify(astRand);
        const astroidList = [];
        astroidList.add(astRandList.name);
        astroidList.add(astRandList.nasa_jpl_url);
        astroidList.add(astRandList.is_potentially_hazardous_asteroid);
        this.setState({astroidList: astroidList, loading: false});
    } catch(err) {
        console.log("Error fetching data-----------", err);
    }
}

  render() {
  return (

    <Container style={styles.container}>

        <Content>
          <Form>
            <Item style = {styles.item}>
              <Input placeholder=" Enter Asteroid ID" style = {styles.input} onChangeText={this.onChangeText.bind(this)}/>
            </Item>

            <Button small style = {styles.submitButton} onPress={() => this.onSubmit()}>
             <Text>Submit</Text>
            </Button>

            <Button small style={styles.randomAsteroidButton} onPress= {() => this.randomAsteroid()}>
             <Text>Random Asteroid</Text>
            </Button>
          </Form>

        </Content>
      </Container>
  );
}
}
export default Inputs

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,

    alignItems: 'center'
  },
  item: {
    //margin: 15,

    width: 200
  },
  input: {
  margin: 15,
  height: 40,
  borderColor: "#7a42f4",
  borderWidth: 1,
  width: 40
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    width: 200
  },
  submitButtonText: {
    color: 'white'
  },
  randomAsteroidButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    width: 200
  },
  randomAsteroidButtonText: {
    color: 'white'
  }
});
