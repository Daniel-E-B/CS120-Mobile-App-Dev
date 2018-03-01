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

export default class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minVal: this.props.minVal,
            maxVal: this.props.maxVal,
            won: false,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Guess Number Game</Text>
                <Text style={[styles.title, styles.smallTitle]}>Guess the number between {this.state.minVal} and {this.state.maxVal}</Text>
                <View style={[styles.container, styles.guessBox]}>
                    <TextInput
                        style={styles.startTextEntry}
                        onChangeText={(value) => this.setState({ minVal: value })}
                        placeholder="Guess"
                        keyboardType="numeric" />
                    <Text>whether your guess was too high or low</Text>{/*centered, nicely formatted, etc*/}
                </View >
            </View>
        )
    }
}