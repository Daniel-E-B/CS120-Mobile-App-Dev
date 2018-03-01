import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    guessBox: {
        backgroundColor: 'lightblue',
        paddingHorizontal: 50,
        paddingVertical: 25,
        borderRadius: 25,
        margin: 25,
    },
    startTextEntry: {
        width: 200,
        textAlign: 'center',
        marginVertical: 20,
    },
    title: {
        fontFamily: "Oxygen",
        color: '#444444',
        fontSize: 48,
        top: 24,
        textAlign: 'center'
    },
    smallTitle: {
        fontFamily: "Oxygen",
        color: '#777777',
        fontSize: 24,
        marginVertical: 18,
        textAlign: 'center',
        overflow: 'visible',
        flexWrap: 'wrap',
        margin: 25
    }
});

export default styles;