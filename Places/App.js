import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import PlaceMap from './components/PlaceMap';
import AddPlace from './components/AddPlace';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Create the component and store it in a variable
const TabNav = TabNavigator(
  {
    FavoritePlaces: { screen: PlaceMap },
    AddPlace: { screen: AddPlace },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
    },
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
        //The icons don't do anything on android, and the tab navigator looks all funny
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
  }
)

export default class App extends Component {

  constructor() {
    super();
    this.state = ({
      markers: [
        {
          latitude: 0,
          longitude: 0,
          title: "",
          description: "",
        },
      ]
    });
  }

  render() {
    return (
      <TabNav
      screenProps={{
        markers: this.state.markers
        //accessed in any subcomponent? by this.props.screenProps.prop_
      }}
      />
    )
  }
}