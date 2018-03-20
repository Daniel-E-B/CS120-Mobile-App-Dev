import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PlaceMap from './components/PlaceMap';
import AddPlace from './components/AddPlace';

const TabNav = TabNavigator(
  {
    FavoritePlaces: { screen: PlaceMap},
    AddPlace: { screen: AddPlace}
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#dddddd',
    }
    // couldn't get icons to work, so didn't use them
  }
)

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      markers: [],
    };
    this.updateMarkers = this.updateMarkers.bind(this);
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  updateMarkers(marker) {
    let stateMarkers = this.state.markers.slice(); // copy it, don't get a reference
    stateMarkers.push(marker);
    this.setState({
      markers: stateMarkers
    });
  }
  render() {
    return (
      <TabNav
        screenProp={{
          markers: this.state.markers,
          update: this.updateMarkers,
        }}
      />
    )
  }
}