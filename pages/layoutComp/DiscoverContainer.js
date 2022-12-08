import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import styled from "styled-components/native";
import DiscoverItem from "./DiscoverItem";

const DiscoverContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.textWhite]}>{props.text}</Text>

            <DiscoverItems>
                <DiscoverItem image={require("./images/handball.jpg")} text={"Handball"}/>
                <DiscoverItem image={require("./images/yoga.jpg")} text={"Yoga"}/>
            </DiscoverItems>

            <DiscoverItems>
                <DiscoverItem image={require("./images/swim.jpg")} text={"Swimming"}/>
                <DiscoverItem image={require("./images/workout.jpg")} text={"Workout"}/>
            </DiscoverItems>
        </View>
    );
};

const DiscoverItems = styled.View`
  display: flex;
  align-content: space-between;
  gap: 20px;
  flex-direction: row;
`
const styles = StyleSheet.create({
    container: {
        width: "100%",
        margin: 20,
    },
    textWhite: {
        color: "white",
        margin: 5,
        fontSize: 20,
    },
})

export default DiscoverContainer;