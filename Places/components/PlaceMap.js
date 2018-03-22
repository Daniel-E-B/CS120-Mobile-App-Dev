import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export default class PlaceMap extends Component {

  constructor() {
    super();
    this.renderMarkers = this.renderMarkers.bind(this);
  }

  renderMarkers() {
    var markerList = [];
    this.props.screenProps.markers.forEach(element => {
      markerList.push(
        <Marker
          key={Math.random()}
          title={element.title}
          description={element.description}
          coordinate={{
            latitude: element.latitude,
            longitude: element.longitude
          }}
        />
      );
    });
    return markerList;
  }
  render() {
    var startingPlace = {
      latitude: 38.897902,
      longitude: -77.036508,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }
    if (this.props.screenProps.markers.length > 1) {
      let place = this.props.screenProps.markers[this.props.screenProps.markers.length - 1];
      startingPlace = {
        latitude: place.latitude,
        longitude: place.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
    }
    console.log(startingPlace)
    return (
      < MapView style={styles.map}
        mapType="satellite"
        region={startingPlace}>
        {this.renderMarkers()}
      </MapView >
    )
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})