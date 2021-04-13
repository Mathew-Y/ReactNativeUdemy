import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ScreenLayoutExercise = () => {
    return (
    <View style>
        <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>App</Text>
        </View>
        <View>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
        
    </View>
    
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 100,
        alignItems: "center",
        borderWidth: 3,
        borderColor: "black",
        flexDirection: "row"
    },
    textStyle: {
        fontSize: 40,
        left: 150
    },
    box1: {
        height: 100,
        width: 120,
        borderColor: "red",
        borderWidth: 3,
        backgroundColor:  "red",
        alignSelf: "flex-start"
    },
    box2: {
        height: 100,
        width: 120,
        borderColor: "green",
        borderWidth: 3,
        backgroundColor: "green",
        alignSelf: "center"
    },
    box3: {
        height: 100,
        width: 120,
        backgroundColor: "purple",
        position: "absolute",
        alignSelf: "flex-end"
    }
});

export default ScreenLayoutExercise;