import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button, TouchableHighlight, ScrollView
} from "react-native";
import {Avatar, ListItem} from "@rneui/themed";
import axios from "axios";

import * as SQLite from 'expo-sqlite'
import CheckBox from "expo-checkbox";
const db = SQLite.openDatabase('tododb2')

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Todo = ({navigation, route}) => {
  const [doneNewTodo, setDoneNewTodo] = useState(false);
  const [currentTodo, setTodo] = useState("");
  const [done, setDone] = useState([]);
  const [notDone, setNotDone] = useState([]);

  useEffect(() => {
    fetchAllData()
  }, [])

  const fetchAllData = () => {
    getDone()
    getNotDone()
  }

  const addData = () => {
    const id = done.length + notDone.length + 1
    db.transaction(tx => {
      tx.executeSql(
          "INSERT INTO todo (text, done) values (?, ?)",
          [currentTodo, false],
          () => {
            console.log("suc fetching")
          },
          () => {
            console.log("error fetching")
          }
      );
    })
    fetchAllData()
  }

  const getNotDone = () => {
    db.transaction(tx => {
      tx.executeSql(
          "SELECT * FROM todo WHERE NOT done",
          [],
          (_, {rows: {_array}}) => setNotDone(_array),
          () => console.log("error fetching")
      );
    })
    console.log("NOT DONE: ", notDone)
  }

  const getDone = () => {
    db.transaction(tx => {
      tx.executeSql(
          "SELECT * FROM todo WHERE done",
          [],
          (_, {rows: {_array}}) => setDone(_array),
          () => console.log("error fetching")
      );
    })
    console.log("DONE: ", done)
  }

  const changeTodoStatus = (item) => {
    db.transaction(tx => {
      tx.executeSql(
          "UPDATE todo SET done = NOT done WHERE todoId = ?",
          [item["todoId"]],
          () => {
            console.log("suc fetching")
          },
          () => {
            console.log("error fetching")
          }
      );
    })
    fetchAllData()
  }

  const deleteTodo = (item) => {
    db.transaction(tx => {
      tx.executeSql(
          "DELETE FROM todo WHERE todoId = ?",
          [item["todoId"]],
          () => {
            console.log("suc fetching")
          },
          () => {
            console.log("error fetching")
          }
      );
    })
    fetchAllData()
  }

  const keyExtractor = (item, index) => index.toString()

  const renderItem = ({ item }) => (
      <View>
        <TouchableHighlight
            style={[styles.listItem, !!item["done"] ? {backgroundColor: "green"} : {backgroundColor: "white"}]}
            onPress={() => changeTodoStatus(item)}
            onLongPress={() => deleteTodo(item)}
            underlayColor={!!item["done"] ? "green" : "white"}
        >
          <Text style={[styles.listItemText, !!item["done"] ? {color: "white"} : {color: "black"}]}>{item["text"]}</Text>
        </TouchableHighlight >
      </View>
  )

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>???????????? ??????</Text>
        <TextInput
            style={styles.input}
            placeholder="?????? ???????????????????? ???????????????"
            onChangeText={(todoText) => setTodo(todoText)}
            value={currentTodo}
        />
        <View style={styles.chin}>
          <CheckBox
              value={doneNewTodo}
              onValueChange={() => setDoneNewTodo(!doneNewTodo)}
              color={doneNewTodo ? "#4630EB" : "black"}
              style={styles.checkbox}
          />
          <Text style={styles.checkboxText}>
            ?????? ???????????????????
          </Text>
        </View>

        <Button title={"????????????????!"} onPress={addData}></Button>

        <ScrollView nestedScrollEnabled={true} style={{ width: window.width}} >
          <View>
            <ScrollView horizontal={true} style={{ width: window.width}}>

              <View style={styles.todoContainer}>
                <View style={styles.todoBlock}>
                  <Text style={styles.todoBlockText}>?????? ??????????????</Text>
                  <FlatList
                      style={styles.list}
                      keyExtractor={keyExtractor}
                      data={notDone}
                      renderItem={renderItem}
                  />
                </View>
                <View style={styles.todoBlock}>
                  <Text style={styles.todoBlockText}>??????????????????????</Text>
                  <FlatList
                      style={styles.list}
                      keyExtractor={keyExtractor}
                      data={done}
                      renderItem={renderItem}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: "white",
  },
  header: {
    textAlign: "center",
    fontSize: 40,
    margin: 20,
  },
  chin: {
    alignItems: "center",
    margin: 10
  },
  checkboxText: {

  },
  input: {
    height: 40,
    width: window.width - 20,
    margin: 10,
    padding: 10,
    borderStyle: "solid",
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: "white",
    alignSelf: "center"
  },
  todoContainer: {
    backgroundColor: "#dcdcdc",
    // padding: 20,
  },
  todoBlock: {
    margin: 20
  },
  todoBlockText: {
    fontSize: 25,
    padding: 10,
  },
  list: {

  },
  listItem: {
    height: 30,
    borderStyle: "solid",
    borderRadius: 2,
    borderWidth: 1,
    margin: 2,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  listItemText: {
    fontSize: 15,
  }
});

export default Todo;