import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    WebView
} from 'react-native';
import styles from './Style';

export default class Play extends Component {
    constructor(props) {
        super(props);
        makeGuess = this.makeGuess.bind(this)
        restart = this.restart.bind(this)
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

    restart() {
        this.props.update(true)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Guess Number Game</Text>
                <Text style={[styles.title, styles.smallTitle]}>Guess the number between {this.state.minVal} and {this.state.maxVal}</Text>
                <View style={[styles.container, styles.guessBox]}>
                    {!this.state.won && <Text>Guesses: {this.state.guesses}</Text>}
                    {!this.state.won && <TextInput
                        style={styles.startTextEntry}
                        onChangeText={(value) => this.setState({ guess: value })}
                        placeholder="Guess"
                        keyboardType="numeric" />}
                    {!this.state.won && <Text>your guess was {this.state.hiLo ? "too high" : "too low"}</Text>}{/*centered, nicely formatted, etc*/}
                    {!this.state.won && <Button title="guess" onPress={makeGuess} />}
                    {this.state.won && <WebView
                        source={{ uri: 'https://raw.githubusercontent.com/Daniel-E-B/CS120-Mobile-App-Dev/master/guess_number_game/assets/images/youwin.gif' }}
                        style={{ width: 256, height: 256, marginBottom: 60 }}
                    />}
                    {/* couldn't do an image view for the gif, so I had to do it this janky way */}
                    {this.state.won && <Button title="Play Again" onPress={restart} />}
                </View >
            </View>
        )
    }
}