import React from 'react';
import {Button, View} from "react-native";

const FetchTest = () => {

  // const requestOptions = {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     "Username": "123",
  //     "Password": "123"
  //   })
  // }

  // fetch("https://rickandmortyapi.com")
  //     .then((res) => console.log(res.json()))
  //     .catch((error) => console.log(error))

  const someFunc = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    console.log(response.json())
    // return await response.json();
  }

  // async function fetchMovies() {
  //   const response = await fetch('https://638d0ad6d2fc4a058a65cffe.mockapi.io/login');
  //   const chars = await response.json();
  //   console.log(chars)
  //   return chars;
  // }
  //
  // fetchMovies().then()

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      "Username": "123",
      "Password": "123"
    })
  }

  function fetchMovies() {
    fetch('https://638d0ad6d2fc4a058a65cffe.mockapi.io/login', requestOptions)
        .then((response) => response?.json().then((data) => console.log(data)))
  }

  fetch('https://638d0ad6d2fc4a058a65cffe.mockapi.io/login')
      .then((response) => {
        response.json().then((data) => {
          // console.log(data);
        });
      });

  return (
      <View>
        <Button title={"123"} onPress={fetchMovies}/>
      </View>
  );
};

export default FetchTest;