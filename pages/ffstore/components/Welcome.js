import React from 'react'
import {View} from 'react-native'
import {COLORS} from '../constants'
import Categories from '../components/Categories'
import Header from '../components/Header'
import Popular from '../components/Popular'

export default function Welcome() {
  return (
      <View
          style={{
            padding: 24,
            paddingTop: 55,
            paddingBottom: 75,
            backgroundColor: COLORS.black,
          }}
      >
        <Header/>
        <Categories/>
        <Popular/>
      </View>
  )
}