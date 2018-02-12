import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Style from './components/Style';
import InputButton from './components/InputButton';

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+'],
  ['CLEAR']
];

export default class ReactCalculator extends Component {
  constructor(props) {
    super(props);
    this._onInputButtonPressed = this._onInputButtonPressed.bind(this);

    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    }
  }

  _renderInputButtons() {
    let views = [];
    for (let i = 0; i < inputButtons.length; i++) {
      views.push([]);
      let viewRow = [];
      for (let j = 0; j < inputButtons[i].length; j++) {
        let input = inputButtons[i][j];
        viewRow.push(<InputButton
          value={input}
          highlight={this.state.selectedSymbol === input}
          onPress={() => this._onInputButtonPressed(input)}
          key={i + " " + j}
        />);
      }
      views[i].push(<View style={Style.inputRow}
        key={i}>
        {viewRow}
      </View>
      );
    }
    return views;
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleStringInput(input)
    }
  }

  _handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) {
          return;
        }

        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null
        });
        break;
    }
  }

  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;

    this.setState({
      inputValue: inputValue
    })
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})