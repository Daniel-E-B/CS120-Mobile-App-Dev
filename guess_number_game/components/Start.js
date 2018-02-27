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
        }
    }

    startGame() {
        //TODO: update a prop and use this as a helper function
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.startTextEntry} placeholder="Minimum Value" keyboardType="numeric" />
                <TextInput style={styles.startTextEntry} placeholder="Maximum Value" keyboardType="numeric" />
                <Button title="Play" onPress={startGame} />
            </View >
        )
    }
}