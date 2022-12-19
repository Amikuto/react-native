import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from "react-native";

const NewsHeader = () => {
  return (
      <View style={styles.header}>
        <Text style={styles.title}>Damir news</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(105,105,105,0.53)",
    // marginTop: 35,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  title: {
    fontSize: 20,
    // fontFamily: "Roboto-Medium"
  }
})
export default NewsHeader;