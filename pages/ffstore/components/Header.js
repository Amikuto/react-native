import React from 'react'
import {Image, Linking, TouchableHighlight, View} from 'react-native'

const Header = () => {
  return (
      <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
      >
        <View>
          <TouchableHighlight
              onPress={() => Linking.openURL('https://vkusnoitochka.ru/')}
          >
            <Image
                source={{
                  uri:
                      'https://www.ph4.ru/DL/LOGO/m/mcdonalds_ru.gif',
                }}
                resizeMode='cover'
                style={{
                  borderRadius: 200,
                  alignSelf: 'center',
                  width: 100,
                  height: 90
                }}
            />
          </TouchableHighlight>
        </View>
        <View>
          <Image
              source={{
                uri: 'https://findicons.com/files/icons/1700/2d/512/cart.png',
              }}
              style={{
                width: 45,
                height: 45,
              }}
          />
        </View>
      </View>
  )
}
export default Header