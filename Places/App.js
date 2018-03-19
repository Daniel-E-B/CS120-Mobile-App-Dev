import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PlaceMap from './components/PlaceMap';
import AddPlace from './components/AddPlace';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNav = TabNavigator(
  {
    FavoritePlaces: { screen: PlaceMap },
    AddPlace: { screen: AddPlace },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    // ********************** //
    // below is the code you need to add //
    // ********************** //
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'FavoritePlaces') {
          let suffix = focused == true ? '' : '-outline';
          iconName = 'ios-map' + suffix;

        } else if (routeName === 'AddPlace') {
          let suffix = focused == true ? '' : '-outline';
          iconName = 'ios-add-circle' + suffix;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // You can see the full list of icons here: https://ionicframework.com/docs/ionicons/
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
  }
)

export default class App extends Component {
  render() {
    return (
      <TabNav />
    )
  }
}