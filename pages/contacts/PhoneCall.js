import React from 'react';
import {ActivityIndicator, View, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const PhoneCall = ({navigation, route}) => {
  return (
      <View style={styles.container}>
        <Image source={route.params.photo} resizeMode="stretch" style={styles.image}/>
          <ActivityIndicator size="large" color="#00ff00" style={{marginTop: 100}}/>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Profile", route.params)
        }}>
          <Image source={require("./images/d.png")} style={{height: 100, width: 100, marginTop: 100}}/>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    position: "relative",
    backgroundColor: "#30BA8F",
  },
  image: {
    height: screen.height * 0.5,
    width: screen.width,
    padding: 10,
  },
});

export default PhoneCall;