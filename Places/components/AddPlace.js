import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native';

export default class AddPlace extends Component {
    constructor() {
        super();
        addPlace = this.addPlace.bind(this);
    }

    addPlace() {
        let marker = {
            longitude: parseFloat(this.state.longitude),
            latitude: parseFloat(this.state.latitude),
            title: this.state.title,
            description: this.state.description
        }
    }

    render() {
        return (
            <View style={styles.addPlaceScreen}>
                <View style={styles.description}>
                    <Text> Add a Place! Enter a latitude, longitude, title and description. </Text>
                </View>
                <View style={styles.input}>
                    <TextInput style={styles.textInputShort}
                        placeholder="Latitude"
                        keyboardType="numeric"
                        onChangeText={(text) => { }}
                    />
                    <TextInput style={styles.textInputShort}
                        placeholder="Longitude"
                        keyboardType="numeric"
                        onChangeText={(text) => { }}
                    />
                    <TextInput style={styles.textInputShort}
                        placeholder="Title"
                        onChangeText={(text) => { }}
                    />
                    <TextInput style={styles.textInputLong}
                        placeholder="Description"
                        onChangeText={(text) => { }}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => { }}
                        title="Add Marker"
                    />
                    <Button
                        onPress={this.addPlace}
                        title="Add Place"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    button: {
        padding: 12,
        borderRadius: 6,
        flex: 1
    },
    textInputShort: {
        height: 40,
        width: 200,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 5
    },
    textInputLong: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 80,
        width: 200,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 5
    },
    addPlaceScreen: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})