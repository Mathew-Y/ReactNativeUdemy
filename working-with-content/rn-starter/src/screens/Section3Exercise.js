import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Section3Exercise = () => {
    const people = [
        {name: 'Friend 1', age: 20},
        {name: 'Friend 2', age: 45},
        {name: 'Friend 3', age: 32},
        {name: 'Friend 4', age: 27},
        {name: 'Friend 5', age: 53},
        {name: 'Friend 6', age: 30},
    ]

    return (
        <FlatList
            data={people}
            renderItem={({item}) => {
                return <Text>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default Section3Exercise;