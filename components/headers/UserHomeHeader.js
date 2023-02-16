import React, { useEffect, useState } from "react";
import { View, Image, StatusBar, Text } from "react-native";
import { logo } from "../../assets/icon";
import { SvgXml } from "react-native-svg";
import { useSelector } from "react-redux";
import { getStudentProfile } from "../../apis/profile";
import { url } from "../../apis/api";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const UserHomeHeader = ({navigation}) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [image, setImage] = useState();

  useEffect(() => {
    if (userInfo) {
      getStudentProfile(userInfo.meta.token).then((res) => {
        if (res.data.data.user.image) {
          setImage(`${url}${res.data.data.user.image}`);
        }
      });
    }
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          height: 100,
          width: "100%",
          flexDirection: "row",
          backgroundColor: "#f2f2f2",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <SvgXml xml={logo} height="60" width="60" />
        <Text
          numberOfLines={1}
          style={{
            flex: 4.5,
            textAlign: "right",
            marginRight: 10,
            fontSize: 18,
            right: 50,
          }}
        >
          {userInfo && userInfo.data ? userInfo.data.name : "Invalid"}
        </Text>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            borderWidth: 2,
            borderColor: "#006600",
            flex: 1.1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 20,
          }}
        >
          <Pressable onPress={() => {
            navigation.navigate("Profile")
          }}>
            <Image
              source={{
                uri: image
                  ? image
                  : "https://cdn-icons-png.flaticon.com/512/1999/1999625.png",
              }}
              style={{ width: 49, height: 49, borderRadius: 23 }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default UserHomeHeader;
