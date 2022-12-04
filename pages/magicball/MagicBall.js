import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import { Accelerometer } from 'expo-sensors';

const MagicBall = () => {
  let diffTime = 1000;
  const [lastUpdate, setLastUpdate] = useState(0);
  const SHAKE_THRESHOLD = 50;
  const [answer, setAnswer] = useState("false");
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [{last_x, last_y, last_z}, setLastData] = useState({
    last_x: 0,
    last_y: 0,
    last_z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const words = ["true", "false"]
  Accelerometer.setUpdateInterval(16)

  const _subscribe = () => {
    setSubscription(
        Accelerometer.addListener(setData)
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const randomizeAnswer = () => {
    const len = words.length;
    return words[Math.floor(Math.random() * len)]
  }

  const test = () => {
    const curTime = new Date().getTime()
    if ((curTime - lastUpdate) > 100){
      setLastUpdate(curTime)
      const speed = Math.abs(x + y + z - last_x - last_y - last_z)/ diffTime * 10000;
      if (speed > SHAKE_THRESHOLD) {
        setAnswer("")
        setTimeout(() => setAnswer(randomizeAnswer()), 500)
      }
    }
  }

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return (
      <View style={styles.container}>
        <Text style={styles.header}>Потряси меня!</Text>
        {test()}
        <Text style={[styles.answer, answer === "true" ? {color: "green"} : {color: "blue"}]}>{answer}</Text>
      </View>
  );
};

export default MagicBall;

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  header: {
    fontSize: 30,
    margin: 20,
  },
  answer: {
    fontSize: 64,
    margin: 20,
    padding: 50,
  }
})