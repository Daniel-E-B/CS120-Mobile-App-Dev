import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class PlaceMap extends Component {


    render() {
        return (
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 37.545135,
                    longitude: -122.299969,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                    mapType: 'standard',
                    title: "Nueva School"
                }}>
                    <Marker
                    key="nuevaschool"
                    title="The Nueva School"
                    description="A K-12 independent private school with two campuses in the Bay Area"
                    coordinate={
                        {
                            latitude: 37.545135,
                            longitude: -122.299969
                        }
                    }
                />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})