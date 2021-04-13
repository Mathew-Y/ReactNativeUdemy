import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black",
        // alignItems: "flex-start",
        // alignItems: "flex-end"
        // alignItems: "stretch",
        // alignItems: "center"
        height: 200,
        // flexDirection: "row",
        // justifyContent: 'space-around', (no margin)
        // justifyContent: 'space-between' (provides margin around children)
    },
    textOneStyle: {
        // width: 200,
        borderWidth: 3,
        borderColor: "red",
        // position: "absolute",
        // alignSelf: 'center',
        // left: 30, // Move element 30 units right
        // right: 30, // Move element 30 units left
        // top: 30, // Move element 30 units down
        // bottom: 30, //  Move element 30 units up
        flex: 1
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: "red",
        // ...StyleSheet.absoluteFillObject,
        // fontSize: 10,
        // alignSelf: 'flex-start',
        // position: "absolute",
        flex: 1
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: "red",
        // alignSelf: "flex-end",
        flex: 1
    }
});

export default BoxScreen;