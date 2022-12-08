import React from 'react';
import {Image, StyleSheet, View} from "react-native";

const Footer = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.icon1} style={styles.footerIcon}/>
            <Image source={props.icon2} style={styles.footerIcon}/>
            <Image source={props.icon3} style={styles.footerIcon}/>
            <Image source={props.icon4} style={styles.footerIcon}/>
            <Image source={props.icon5} style={styles.footerIcon}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        display: "flex",
        flexDirection: "row",
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

export default Footer;