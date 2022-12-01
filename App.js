import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button, Platform, Text, View} from "react-native";

import Giphy from "./pages/Giphy";
import Material from "./pages/Material";
import Profile from "./pages/contacts/Profile"
import Contacts from "./pages/contacts/Contacts";
import PhoneCall from "./pages/contacts/PhoneCall";
import VideoCall from "./pages/contacts/VideoCall";
import Todo from "./pages/todo/Todo";
import TodoWelcome from "./pages/todo/TodoWelcome";

const Navigator = createNativeStackNavigator();

const Main = () => {
  return (
      <NavigationContainer>
          <Navigator.Navigator>
              <Navigator.Screen
                  name="Main page"
                  component={HomeScreen}
                  options={{ title: 'Main page' }}
              />
              <Navigator.Screen
                  name="Task9"
                  component={Material}
                  options={{ title: 'Task9' }} />
              <Navigator.Screen
                  name="Task10"
                  component={Giphy}
                  options={{ title: 'Task10' }} />
            <Navigator.Screen
                name="Profile"
                component={Profile}
                options={{ title: 'Task12: Profile' }} />
            <Navigator.Screen
                name="PhoneCall"
                component={PhoneCall}
                options={{ headerShown: false }} />
            <Navigator.Screen
                name="VideoCall"
                component={VideoCall}
                options={{ title: 'Task12: VideoCall' }} />
            <Navigator.Screen
                name="Task12"
                component={Contacts}
                options={{ title: 'Task12: Contacts' }} />
            <Navigator.Screen
                name="Task13"
                component={TodoWelcome}
                options={{ title: 'Task13: TODO' }} />
            <Navigator.Screen
                name="TodoList"
                component={Todo}
                options={{ title: 'Task13: TODO' }} />
          </Navigator.Navigator>
      </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
      <View>
        <Button
            title="Goto task 9 (MaterialUI)"
            onPress={() =>
                navigation.navigate('Task9')
            }
        />
        <Button
            title="Goto task 10 (Giphy)"
            onPress={() =>
                navigation.navigate('Task10')
            }
        />
        <Button
            title="Goto task 12 (Profile)"
            onPress={() =>
                navigation.navigate('Task12')
            }
        />
        <Button
            title="Goto task 13 (Todo)"
            onPress={() =>
                navigation.navigate('Task13')
            }
        />
      </View>
  );
};

const NotSupportedPlatform = () => {
  return (
      <View>
        <Text>
          Unsupported platform!
        </Text>
      </View>
  )
};

export default function App() {
  return  (
      Platform.OS === "android" ? <Main /> : <Main />
  )
}