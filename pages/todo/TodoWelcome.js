import React, {useEffect} from 'react';
import {TouchableOpacity, View, Text} from "react-native";

import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('tododb')

const TodoWelcome = ({navigation, route}) => {

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
          'CREATE TABLE IF NOT EXISTS todo (todoId INTEGER PRIMARY KEY, text TEXT, done BOOL);'
      )
    })
    console.log("Table created")
  }, [])

  return (
      <View>
        <TouchableOpacity onPress={() => {
          navigation.navigate('TodoList')
        }}>
          <Text>Войти</Text>
        </TouchableOpacity>
      </View>
  );
};

export default TodoWelcome;