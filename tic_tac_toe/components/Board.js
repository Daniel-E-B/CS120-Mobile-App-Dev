import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Button
  } from 'react-native';
import React, { Component } from 'react';
import Piece from './Piece';
  
const {width, height} = require('Dimensions').get('window');
const SIZE = 3; // 3-by-3 grid for Tic-Tac-Toe
const SQUARE_SIZE = Math.floor(width * 0.25);
const SQUARE_PADDING = Math.floor(SQUARE_SIZE * 0.05);
const BORDER_RADIUS = SQUARE_PADDING * 2;

export default class Board extends Component {
    constructor() {
        super();
        this.renderBoard = this.renderBoard.bind(this);
        this.updatePosition = this.updatePosition.bind(this);
        this.state = {
            lastPlaced: '',
            gamePositions: [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ]
       }
    }

    updatePosition(row, col) {
        // the below line makes a copy of this.state.gamePositions
        let newPositions = Object.assign({}, this.state.gamePositions);
        let toPlace = this.state.lastPlaced == 'X' ? 'O' : 'X'
        let currentPiece = newPositions[row][col];
        if (currentPiece == '') {
            // since currentPiece is an empty string '', we can put down a piece
            newPositions[row][col] = toPlace

            this.setState({
                gamePositions: newPositions,
                lastPlaced: toPlace
            })
        } else {
            // there's already a piece there so we can't put anything down.
            // so this function should just return nothing.
            return null
        }
    }

    renderBoard () {
        let result = [];

        for (let row = 0; row < SIZE; row++) {
          for (let col = 0; col < SIZE; col++) {
            let square_key = row * SIZE + col;
            let position = {
              left: col * SQUARE_SIZE + SQUARE_PADDING + 40,
              top: row * SQUARE_SIZE + SQUARE_PADDING + 200
            }

            let square = 
            <View key={square_key} style={[styles.square, position]}>
                <TouchableOpacity onPress={(e) => this.updatePosition(row, col)} style={styles.squareButton} >
                    <Piece pieceType={this.state.gamePositions[row][col]} />
                    {/* <Text>hello{this.state.gamePositions[row][col]}</Text> */}
                </TouchableOpacity>
            </View>
            result.push(square);

          }

        }

        return result;
    }

    render () {
        return (
        <View style={styles.container}>
        	<Text style={styles.instructionText}> This is the board </Text>
            {this.renderBoard()}
        </View>
        )
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#644B62',
    alignItems: 'center',
    justifyContent: 'center',
},
restartButton: {
    bottom: 150
},
instructionText: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    top: 150,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
},
pickText: {
    opacity: 0.4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
square: {
    flex: 1,
    position: 'absolute',
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    borderRadius: BORDER_RADIUS,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2'
},
squareButton: {
    width:SQUARE_SIZE,
    height:SQUARE_SIZE,
    alignItems:'center',
    top:20
}
});