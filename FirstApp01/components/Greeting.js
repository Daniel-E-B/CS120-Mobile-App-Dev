import React from 'react';
import { Text } from 'react-native';

export default class Greeting extends React.Component {
    render(){
      return(
        <Text style={{marginTop: -40}}>
          {this.props.name}
        </Text>
      )
    }
  }