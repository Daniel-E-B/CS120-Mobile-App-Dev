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
    return (
      // { this.renderMarkers() }
      < MapView style={styles.map}
        mapType="satellite"
        initialRegion={{
          latitude: 38.897902,
          longitude: -77.036508,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
          mapType: 'standard',
          title: "Casablanca"
        }
        }>
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