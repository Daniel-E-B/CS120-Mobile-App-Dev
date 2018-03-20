import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export default class PlaceMap extends Component {

  render() {
    return (
      <MapView style={styles.map}
        mapType="satellite"
        initialRegion={{
          latitude: 38.897902,
          longitude: -77.036508,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
          mapType: 'standard',
          title: "Casablanca"
        }}>
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})