import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import GameManager from './components/GameManager';
import styles from './components/Style';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GameManager />
      </View>
    );
  }
}