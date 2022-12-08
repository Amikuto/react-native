import React, {useEffect} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';
import {useFonts} from 'expo-font';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
// import {Icon} from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Icon} from "@rneui/themed";
import DiscoverContainer from "./DiscoverContainer";
import Header from "./Header";
import Footer from "./Footer";


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const MyLayout2 = ({navigation, route}) => {

  // useEffect(() => {
  //   Font.loadAsync({
  //     'Roboto': require('/assets/fonts/Roboto-Medium.ttf'),
  //   })
  // }, [])

  return (
      <Container>
        <LinearGradient colors={['#FF0099', '#493240']} style={styles.gradient}>
          <ScrollView>
            <Header
                image={require("./images/guy.jpg")}
                text1={"Hope you are great, Damir!"}
                text2={"Let's workout to get some gain!"}
            >
            </Header>
            <Divider/>
            <Body>
              <DiscoverContainer text={"Discover"}/>
            </Body>
            <Divider/>
          </ScrollView>
          <View>
            <Footer
                icon1={require("./images/icons8-home.png")}
                icon2={require("./images/icons8-bic.png")}
                icon3={require("./images/icons8-plus.png")}
                icon4={require("./images/icons8-eat.png")}
                icon5={require("./images/icons8-map.png")}
            >
            </Footer>
          </View>
        </LinearGradient>
      </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex: 1;
`;

// const Header = styled.View`
//   width: 100%;
//   align-content: center;
//   align-items: center;
//   padding: 25px;
// `;


// const DiscoverItems = styled.View`
//   //height: 20%;
//   //width: 100%;
//   //margin: 20px;
//   display: flex;
//   align-content: space-between;
//   gap: 20px;
//   flex-direction: row;
//   //flex-flow: row wrap;
//   //justify-content: space-around;
// `

const DiscoverItem1 = styled.View`
  height: 110px;
  width: 150px;
  background-color: #6e1856;
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
`

const DiscoverItem2 = styled.View`
  height: 110px;
  width: 150px;
  background-color: rgba(42, 194, 141, 0.56);
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
`

const DiscoverItem3 = styled.View`
  height: 110px;
  width: 150px;
  background-color: rgba(48, 16, 168, 0.2);
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
`

const DiscoverItem4 = styled.View`
  height: 110px;
  width: 150px;
  background-color: rgba(124, 31, 59, 0.68);
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
`

const Body = styled.View`
  width: 100px;
`

// const Footer = styled.View`
//   background-color: rgba(37, 12, 32, 0.29);
//   height: 100px;
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   //flex-wrap: nowrap;
// `

const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #ffffff33;
  margin: 5px;
`;

const styles = StyleSheet.create({
  gradient: {
    height: "100%",
    flex: 1,
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

export default MyLayout2;