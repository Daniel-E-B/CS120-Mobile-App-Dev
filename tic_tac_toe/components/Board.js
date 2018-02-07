import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Button, 
    Image
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
            ], 
            gameOver:false
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
                </TouchableOpacity>
            </View>
            result.push(square);

          }

        }

        return result;
    }

    render () {

        let currentPlayer = '';
    
        if (this.state.lastPlaced == "X") {
            currentPlayer = "O"
        } else if (this.state.lastPlaced == "O") {
            currentPlayer = "X"
        } else {
            currentPlayer = "X"
        }
        
        //if the board is full, give gameover
        let filledSquares = 0;
        for(let i = 0; i < this.state.gamePositions.length; i++){
            for(let j = 0; j < this.state.gamePositions[i].length; j++){
                if(this.state.gamePositions[i][j]!==''){
                    filledSquares++
                }
            }
        }
        if(filledSquares=this.state.gamePositions.length*this.state.gamePositions[0].length){
            //this.setState({gameOver: true})
        }

        return (
        <View style={styles.container}>
            <Text style={styles.instructionText}> Tic Tac Toe </Text>
            {this.renderBoard()}
            {!this.state.gameOver && <Text style={[styles.instructionText, {marginTop: 100}]}>Current Player: {currentPlayer}</Text>}
            <Image source = {require('../images/icon.png')} style={{position: 'absolute', top: 15, width: 82, height: 128}}/>
        </View>
          )
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#c4e6ff',
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
    color: '#FDFDFF',
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
    borderColor: 'transparent',
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#85bdde',
},
squareButton: {
    width:SQUARE_SIZE,
    height:SQUARE_SIZE,
    alignItems:'center',
    top:20
}
});