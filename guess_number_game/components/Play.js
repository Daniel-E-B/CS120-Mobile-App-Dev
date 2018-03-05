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
        makeGuess = this.makeGuess.bind(this)
        this.state = {
            minVal: this.props.minVal,
            maxVal: this.props.maxVal,
            won: false,
            guesses: 0,
            hiLo: null,
            guess: 0,
            number: this.getRandomIntInclusive(this.props.minVal, this.props.maxVal),
        }
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    makeGuess() {
        let highOrLow = null
        let won = false
        this.state.guess > this.state.number ? highOrLow = true : highOrLow = false
        if (this.state.guess == this.state.number) { won = true }
        this.setState({
            guesses: this.state.guesses + 1,
            hiLo: highOrLow,
            won: won
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Guess Number Game</Text>
                <Text style={[styles.title, styles.smallTitle]}>Guess the number between {this.state.minVal} and {this.state.maxVal}</Text>
                <View style={[styles.container, styles.guessBox]}>
                    {!this.state.won &&<Text>Guesses: {this.state.guesses}</Text>}
                    {!this.state.won && <TextInput
                        style={styles.startTextEntry}
                        onChangeText={(value) => this.setState({ guess: value })}
                        placeholder="Guess"
                        keyboardType="numeric" />}
                    {!this.state.won && <Text>your guess was {this.state.hiLo ? "too high" : "too low"}</Text>}{/*centered, nicely formatted, etc*/}
                    {!this.state.won && <Button title="guess" onPress={makeGuess} />}
                    <Text>hiLo: {this.state.hiLo} number: {this.state.number} guess: {this.state.guess} </Text>
                    <Text>won: {this.state.won}</Text>
                    {this.state.won &&<Image source={require('../assets/images/youwin.gif')} />}
                </View >
            </View>
        )
    }
}