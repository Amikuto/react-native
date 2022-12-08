import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.profileImage}/>
            <Text style={styles.textWhite}>{props.text1}</Text>
            <Text style={styles.textWhite}>{props.text2}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignContent: "center",
        alignItems: "center",
        padding: 25,
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
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
    footerIcon: {
        // width: 60,
        maxWidth: "100%",
        maxHeight: "100%",
        width: 60,
        height: "auto",
        // backgroundColor: "#FFFFFF",
        margin: 10,
        padding: 10,
    }
})

export default Header;