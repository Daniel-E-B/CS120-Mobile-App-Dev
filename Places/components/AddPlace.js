import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class AddPlace extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add a Place Here!</Text>
      </View>
    );
  }
}