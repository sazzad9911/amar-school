import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, ScrollView,StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { url } from "../../apis/api";
import { getNotifications } from "../../apis/profile";
import Avatar from "../../components/main/Avater";

const Notification = ({ navigation, route }) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [notification, setNotification] = useState();

  useEffect(() => {
    getNotifications(userInfo)
      .then((res) => {
        setNotification(res.data.data.notifications);
      })
      .catch((err) => {
        console.error(err.response.data.message);
      });
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          height: "100%",
          width: "100%",
          paddingHorizontal: 20,
        }}>
        {notification &&
          notification.map((doc, i) => <NotificationCart data={doc} key={i} />)}
        {notification && notification.length == 0 && (
          <Text
            style={{
              marginVertical: 10,
              textAlign: "center",
            }}>
            No Notification Found
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Notification;

const NotificationCart = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginHorizontal:0,
        alignItems:"center",
        paddingVertical:10,
        borderBottomWidth:1,
        borderBottomColor:"#e5e5e5",
       
      }}>
      <Avatar
        style={{
          width: 50,
          height: 50,
        }}
        source={{ uri: `${url}${data.user.image}` }}
      />
      <View style={{
        marginLeft:10
      }}>
        <Text style={styles.smallText}>{data?.user?.name}</Text>
        <Text style={styles.largeText}>{data?.text}</Text>
      </View>
    </View>
  );
};
const styles=StyleSheet.create({
    smallText:{
        fontSize:14,
        color:"#808080"
    },
    largeText:{
        fontSize:16,
    }
})