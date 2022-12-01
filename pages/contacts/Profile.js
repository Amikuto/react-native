import * as React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Profile = ({navigation, route}) => {
  return (
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Image
                  source={route.params.photo}
                  style={styles.avatar}
              />
            </TouchableOpacity>
            <View style={styles.top_info}>
              <Text style={{fontSize: 40, fontWeight: "bold", textAlign: "center"}}>{route.params.name}</Text>
              <Text style={{fontSize: 20, textAlign: "center"}}>{route.params.phone}</Text>
              <View style={styles.activities}>
                <TouchableOpacity style={styles.activity_item} onPress={() => {
                  navigation.navigate("PhoneCall", route.params)
                }}>
                  <Image source={require("./images/phone-call.jpg")} style={styles.activity_icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.activity_item}>
                  <Image source={require("./images/message.jpg")} style={styles.activity_icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.activity_item}>
                  <Image source={require("./images/video-call.jpg")} style={styles.activity_icon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mid}>
            <TouchableOpacity style={styles.socials_item}>
              <Text style={styles.socials_text}>WhatsApp</Text>
              <Image source={require("./images/whatsapp.jpg")} style={styles.socials_image}/>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.socials_item}>
              <Text style={styles.socials_text}>Telegram</Text>
              <Image source={require("./images/telegram.jpg")} style={styles.socials_image}/>
            </TouchableOpacity>
          </View>
          <View style={styles.bot}>
            <TouchableOpacity style={styles.bot_item}>
              <Text>Журнал</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bot_item}>
              <Text>Место хранения</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.foot}>
          <View style={styles.foot_item}>
            <Ionicons name="star-outline" />
            <Text>Избранное</Text>
          </View>
          <View style={styles.foot_item}>
            <Ionicons name="pencil-sharp" />
            <Text>Изменить</Text>
          </View>
          <View style={styles.foot_item}>
            <Ionicons name="share-social-sharp" />
            <Text>Поделиться</Text>
          </View>
          <View style={styles.foot_item}>
            <Ionicons name="settings-outline" />
            <Text>Опциии</Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: "#DCDCDC"
  },
  main: {
    height: window.height * 0.85,
    alignItems: "center",
  },
  top: {
    height: 250,
    width: window.width,
    marginTop: window.height * 0.1,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
    alignItems: "center",
  },
  top_info: {
    padding: 30,
  },
  avatar: {
    height: 80,
    width: 80,
    position: "absolute",
    // right: 0,
    left: -40,
    top: -50,
  },
  activities: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    height: 120,
  },
  activity_item: {
    alignSelf: "flex-end"
  },
  activity_icon: {
    height: 40,
    width: 40,
    margin: 15,
  },
  mid: {
    height: 100,
    width: window.width,
    marginTop: window.width * 0.1,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 30,
  },
  socials_item: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  socials_image: {
    height: 25,
    width: 25,
  },
  socials_text: {
    fontSize: 15,
  },
  separator: {
    width: window.width * 0.8,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 1,
    marginLeft: window.width * 0.05,
  },
  bot: {
    margin: 20,
  },
  bot_item: {
    height: window.height * 0.05,
    width: window.width * 0.7,
    margin: 10,
    padding: 10,
    backgroundColor: "#b8b8b8",
    borderRadius: 40,
    alignItems: "center",
  },
  foot: {
    padding: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  foot_item: {
    alignItems: "center",
  }
})

export default Profile;