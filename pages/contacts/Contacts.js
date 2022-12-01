import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {Avatar, ListItem} from "@rneui/themed";
import axios from "axios";

// const contactsList = [
//   {
//     name: 'Amy Farha',
//     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//     subtitle: 'Vice President'
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//     subtitle: 'Vice Chairman'
//   }
// ]

const Contacts = ({navigation, route}) => {
  const [list, setList] = useState([]);

  const keyExtractor = (item, index) => index.toString()

  const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => {
        navigation.navigate('Profile', {
          name: item.name,
          photo: require("./images/avatar-placeholder.jpg"),
          phone: item.phone
        })
      }}>
        <ListItem bottomDivider >
          <Avatar title={item.name} source={require("./images/avatar-placeholder.jpg")}/>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.phone}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
  )

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response=> {
      console.log(response.data.length)
      setList(response.data)
    })
    return (
        setList([])
    )
  }, [])

  return (
      <SafeAreaView>
        <FlatList
            keyExtractor={keyExtractor}
            data={list}
            renderItem={renderItem}
        />
      </SafeAreaView>
  );
};

export default Contacts;