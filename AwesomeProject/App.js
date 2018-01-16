import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructing");
    this.submitName = this.submitName.bind(this);
    this.state = {color: "#0077ff", input: ""};
    this.displayText="";
  }

  submitName() {
    console.log('Click happened');

    this.setState(
      {
        displayText: "Welcome, "+this.state.input
      }
    );
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize:18}}>
        {this.state.displayText}
      </Text>
        <Image source={require('./GitHub-Mark.png')} style={{width: 400, height: 400}}/>
        <TextInput
          style={{height: 40, width: 250}}
          placeholder="Enter your name"
          onChangeText={(input) => this.setState({input})}
        />
        <Button
          onPress={this.submitName}
          title="Submit"
          color={this.state.color} 
        />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
