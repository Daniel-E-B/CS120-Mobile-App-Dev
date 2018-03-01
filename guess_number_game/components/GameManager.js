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
        updateData = this.updateData.bind(this)
        this.state = {
            playMode: false, //false for start screen, true for play screen
            minVal: 0,
            maxVal: 0,
        }
    }

    updateData(dataFromChild) {
        let mode = dataFromChild[0]
        let min = dataFromChild[1]
        let max = dataFromChild[2]
        this.setState({
            playMode: mode, //false for start screen, true for play screen
            minVal: min,
            maxVal: max,
        })
    }

    render() {
        return (
            <View style={styles.container} >
                {!this.state.playMode && <Start update={updateData} />}
                {this.state.playMode && <Play minVal={this.state.minVal} maxVal={this.state.maxVal} />}
            </View>
        );
    }
}