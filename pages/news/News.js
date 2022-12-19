import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View, Text, Image} from "react-native";
import axios from "axios";
import {Avatar, Divider, ListItem} from "@rneui/themed";

const News = () => {
  const [isLoading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
        .get("https://6393de5f11ed187986bf1d3c.mockapi.io/news")
        .then(({data}) => {
          setNews(data)
          setLoading(false)
        })
        .catch(err => {
          console.log("Cannot receive data: " + err)
        })
    return (
        setNews([])
    )
  }, [])

  const keyExtractor = (item, index) => index.toString()

  const renderItem = ({item}) => (
      <View>
        <View style={styles.newsElem}>
          <Text style={styles.text}>{item.text}</Text>
          <Image
              source={{uri: item.image}}
              style={styles.image}
          />
        </View>
        <Divider/>
      </View>
  )

  return (
      <SafeAreaView style={styles.container}>
        {
          isLoading ?
              <Text>Loading...</Text>
              :
              <FlatList
                  keyExtractor={keyExtractor}
                  data={news}
                  renderItem={renderItem}
              />
        }
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
  },
  newsElem: {
    // width: 500,
    // maxWidth: "100%",
    // maxHeight: "100%",
    padding: 20,
    // flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
    // flexWrap: "nowrap",
    alignItems: "center",
    // margin: "auto",
    // flexGrow: 0,
  },
  text: {
    width: 300
  },
  image: {
    width: 100,
    height: 100,
    padding: 20
  },
  footer: {},
})

export default News;