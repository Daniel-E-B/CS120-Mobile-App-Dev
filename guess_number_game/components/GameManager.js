import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import styles from './Style';
import Play from './Play';
import Start from './Start';


export default class GameManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playMode: false, //false for start screen, true for play screen
        }
    }
    render() {
        return (
            <View style={styles.container} >
                {!this.state.playMode && <Start />}
                {this.state.playMode && <Play />}
            </View>
        );
    }
}