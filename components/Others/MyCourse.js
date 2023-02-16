import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const MyCourse = ({
  headline,
  onPress,
  sale,
  rate,
  image,
  price,
  color,
  tutior,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width:'100%',
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: "row",
        marginBottom: 10,
        marginRight: 10,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: color,
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{
            height: 100,
            width: 120,
            borderTopLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
          source={{
            uri: image,
          }}
        />
        <View style={{ width: "57%", marginLeft: 10, height: 100 }}>
          <Text>{headline}</Text>
          <View style={{ flexDirection: "row", bottom: -40,alignItems:'center', }}>
            <View
              style={{
                width: "80%",
                height: 5,
                backgroundColor: "#F1F1EF",
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  width: "40%",
                  height: 5,
                  backgroundColor: "red",
                  borderRadius: 5,
                }}
              ></View>
            </View>
            <Text style={{marginLeft:5}}>
                {rate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyCourse;
