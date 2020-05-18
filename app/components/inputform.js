import React from 'react';
import { StyleSheet } from 'react-native';
import {Container, Button, Header, Form, Item, Input,Content,Right, Left, Label, Text} from 'native-base';
import {StackNavigator} from 'react-navigation';
class Inputs extends React.Component {

  constructor(props) {
    super(props);
    this.shuffleArray = this.shuffleArray.bind(this);
      this.state = {
        name: '',
        nasa_jpl_url: '',
        is_potentially_hazardous_asteroid: '',
        AsteroidID: ''
      }
      this.getValue = this.getValue.bind(this);
    }

  getValue() {
    return(
      this.state.name

    )
  }
  onChangeText = (text) => {
    this.setState({AsteroidID: text})

  }
  onSubmit = () => {
    if(this.state.AsteroidID != " ") {
      this.componentDidMount();
    } else {
      Alert.alert("Please enter Asteroid ID");
    }
  }

  shuffleArray(array) {
    try {
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    } catch(err) {
      console.err(err);
    }

  };
  async componentDidMount() {
        try {
          const api_key = "api_key=PdoIS2buirjk1WvbgzMWpj02QHvu3a41bupz7p2G";
          const astID = this.state.AsteroidID;
          const api = {
            nasaCall() {
              const uri = "https://api.nasa.gov/neo/rest/v1/neo";

              return fetch(`${uri}/${astID}?${api_key}`).then((res) => res.json());
            }
          }
            api.nasaCall().then((res) => {
              this.setState({
                name: res.name,
                nasa_jpl_url: res.nasa_jpl_url,
                is_potentially_hazardous_asteroid: res.is_potentially_hazardous_asteroid,
              })

              console.log(res.name);
              console.log(res.nasa_jpl_url);
              console.log(res.is_potentially_hazardous_asteroid);
              console.log(this.state.AsteroidID);
              console.log(this.state.name);
            })

          }
            catch(err) {
              console.error(err);
            }
    }

  async randomAsteroid() {
    try {

      const api1 = {

        nasaCall1() {
          const urll = "https://api.nasa.gov/neo/rest/v1/neo/browse";
          const url2 = "https://api.nasa.gov/neo/rest/v1/neo";
          const api_key = "api_key=PdoIS2buirjk1WvbgzMWpj02QHvu3a41bupz7p2G";
          //return fetch(`${urll}/?${api_key}`).then((res1) => res1.json());
          //console.log("this is random" + res1.near_earth_objects[0].id);
          //return fetch(`${urll}/?${api_key}`).then((res1) => res1.json());

          const randomArray = fetch(`${urll}/?${api_key}`).then((res1) => res1.json());
          const shuffledRandomArray = this.shuffleArray(randomArray.near_earth_objects);

          return fetch(`${url2}/${shuffledRandomArray}?${api_key}`).then((res2) => res2.json());
          console.log("this is random" + res1.near_earth_objects);
        // },
        // nasaCall2() {
        //   const uri1 = "https://api.nasa.gov/neo/rest/v1/neo";
        //   const api_key = "api_key=PdoIS2buirjk1WvbgzMWpj02QHvu3a41bupz7p2G"
        //   return fetch(`${uri1}/${api_key}?${api_key}`).then((res2) => res2.json());
        // }
      }
    }
      api1.nasaCall1().then((res1) => {
        this.setState({
          name: res1.name,
          nasa_jpl_url: res1.nasa_jpl_url,
          is_potentially_hazardous_asteroid: res1.is_potentially_hazardous_asteroid,
        })

        console.log(randomArray);

          console.log(res1.near_earth_objects);
        console.log(res1.name);
        console.log(res1.nasa_jpl_url);
        console.log(res1.is_potentially_hazardous_asteroid);
      })
        // const randomApiCall = await fetch('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=PdoIS2buirjk1WvbgzMWpj02QHvu3a41bupz7p2G');
        // const asteroid = await randomApiCall.json();
        // const nasaAsteroidList = JSON.stringify(asteroid);
        // const asteroidRandID = Math.floor(Math.random() * nasaAsteroidList.length);
        //
        // const astApiCall = await fetch('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=PdoIS2buirjk1WvbgzMWpj02QHvu3a41bupz7p2G');
        // const astRand = await astApiCall.json();
        // const astRandList = JSON.stringify(astRand);
        // // const astroidList = [];
        // // astroidList.add(astRandList.name);
        // // astroidList.add(astRandList.nasa_jpl_url);
        // // astroidList.add(astRandList.is_potentially_hazardous_asteroid);
        // this.setState({astroidList: astRandList, loading: false});
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

            <Button small style = {styles.submitButton} onPress={() => {
              this.onSubmit()
              this.props.navigation.navigate("Asteroids");
            }}>
             <Text>Submit</Text>
            </Button>

            <Button small style={styles.randomAsteroidButton} onPress= {() => {
              this.randomAsteroid()
              this.props.navigation.navigate("RandomAsteroids");
            }}>
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
