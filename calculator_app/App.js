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
  ['C', 'CE']
];

export default class ReactCalculator extends Component {
  constructor(props) {
    super(props);
    this._onInputButtonPressed = this._onInputButtonPressed.bind(this);

    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null,
      decimalPlace: 1
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
    if (this.state.selectedSymbol == '/' && this.state.inputValue == 0) {
      this.setState({
        inputValue: "Divide By 0 Error", selectedSymbol: null, previousInputValue: 0
      });
      return;
    }

    switch (str) {
      case '.':
        if (this.state.decimalPlace >= 1) {
          this.setState({
            decimalPlace: 0.1
          });
        }
        break;
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0,
          decimalPlace: 1
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
          selectedSymbol: null,
          decimalPlace: 1
        });
        break;
      case 'CE':
        this.setState({ inputValue: 0, previousInputValue: 0, selectedSymbol: null, decimalPlace: 1 });
        break;
      case 'C':
        this.setState({ inputValue: 0, decimalPlace: 1 });
        break;
    }
  }

  _handleNumberInput(num) {
    let inputValue = this.state.inputValue + num * this.state.decimalPlace;
    if(this.state.decimalPlace>=1){
     this.setState({
       inputValue: inputValue,
       decimalPlace: this.state.decimalPlace * 10
     })
    }else{
      this.setState({
        inputValue: inputValue,
        decimalPlace: this.state.decimalPlace / 10
      })
    }
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
  }
})