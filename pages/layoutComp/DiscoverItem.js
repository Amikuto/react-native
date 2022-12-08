import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const DiscoverItem = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.itemImage}/>
            <Text style={[styles.textWhite, styles.discoverItemText]}>{props.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textWhite: {
        color: "white",
        margin: 5,
        fontSize: 20,
    },
    discoverItemText: {
        fontSize: 10,
    },
    itemImage: {
        height: 20,
        width: 20,
        borderRadius: 50,
    },
    container: {

        height: 110,
        width: 150,
        backgroundColor: "#6e1856",
        borderRadius: 20,
        margin: 10,
        padding: 20,
    }
})

export default DiscoverItem;