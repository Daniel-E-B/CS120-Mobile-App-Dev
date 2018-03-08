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
        updateDataStart = this.updateDataStart.bind(this)
        updateDataRestart = this.updateDataRestart.bind(this)
        this.state = {
            playMode: false, //false for start screen, true for play screen
            minVal: 0,
            maxVal: 0,
        }
    }

    updateDataStart(dataFromChild) {
        let mode = dataFromChild[0]
        let min = dataFromChild[1]
        let max = dataFromChild[2]
        this.setState({
            playMode: mode, //false for start screen, true for play screen
            minVal: min,
            maxVal: max,
        })
    }

    updateDataRestart(dataFromChild){
        let data = dataFromChild
        this.setState({
            playMode: !data,
        })
    }

    render() {
        return (
            <View style={styles.container} >
                {!this.state.playMode && <Start update={updateDataStart} />}
                {this.state.playMode && <Play minVal={this.state.minVal} maxVal={this.state.maxVal} update={updateDataRestart}/>}
            </View>
        );
    }
}