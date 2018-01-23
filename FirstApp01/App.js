import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructing");
    this.submitName = this.submitName.bind(this);
    this.state = {color: "#0077ff", input: "", displayText: " ", displayName: ""};
  }

  submitName() {
    console.log('Click happened');
    if(this.state.input.length>2){
    this.setState(
      {
        displayText: "Welcome, "+this.state.input,
        displayName: this.state.input
      }
    );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:18, margin: 10}}>
        {this.state.displayText}
        </Text>
        <TouchableOpacity style={{backgroundColor:"#0077ff", borderRadius:15, padding:10}}>
          <Text>This is a touchable opacity {this.state.displayName}</Text>
        </TouchableOpacity>
        <Image source={require('./Github-Mark.png')} style={{ margin: 50, width: 200, height: 200}}/>
        <TextInput
          style={{margin: 20, height: 40, width: 250}}
          placeholder="Enter your name"
          onChangeText={(input) => this.setState({input: input})}
        />
        <Button
          onPress={this.submitName}
          title="Submit"
          color={this.state.color} 
        />
      <TouchableOpacity style={{backgroundColor:"#ffffff", margin: 10, left:145}}
       onPress={null}>
               <Text style={{color:"#ffffff", fontSize:36,padding:4}}>  ➡️  </Text>
     </TouchableOpacity>	      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
