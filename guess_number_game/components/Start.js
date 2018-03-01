import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
} from 'react-native';
import styles from './Style';

export default class Start extends Component {
    constructor(props) {
        super(props);
        startGame = this.startGame.bind(this);
        this.state = {
            minVal: 0,
            maxVal: 0,
        }
    }

    startGame() {
        this.props.update([true, this.state.minVal, this.state.maxVal])
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Guess Number Game</Text>
                <Text style={[styles.title, styles.smallTitle]}>Enter the maximum and minimum integers</Text>
                <View style={[styles.container, styles.guessBox]}>
                    <TextInput
                        style={styles.startTextEntry}
                        onChangeText={(value) => this.setState({ minVal: value })}
                        placeholder="Minimum Value"
                        keyboardType="numeric" />
                    <TextInput
                        style={styles.startTextEntry}
                        onChangeText={(value) => this.setState({ maxVal: value })}
                        placeholder="Maximum Value"
                        keyboardType="numeric" />
                    <Button title="Play" onPress={startGame} />
                </View >
            </View>
        )
    }
}