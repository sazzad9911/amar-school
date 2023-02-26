import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
 
const CourseBundle = ({
  headline,
  onPress,
  sale,
  ratings,
  image,
  price,
  color,
  tutior,
  courses
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 150,
        backgroundColor: "#fff",
        borderRadius:5,
        flexDirection: "row",
        marginBottom: 10,
        marginRight: 10,
        overflow: "hidden",
      }}
    >
      <View>
        <Image
          style={{
            height: 100,
            width: 150,
            resizeMode:"stretch"
          }}
          source={{
            uri: image,
          }}
        />
        <View style={{ width: 150, padding: 5 }}>
          <Text numberOfLines={2} style={{ fontSize: 13, fontWeight: "500" }}>{headline}</Text>
          <Text numberOfLines={2} style={{ fontSize: 11 }}>{tutior}</Text>
          {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 12, marginRight: 10 }}>{ratings}</Text>
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <EvilIcons name="star" size={12} color="black" />
            <Text style={{ fontSize: 12, marginLeft: 10 }}>{sale}</Text>
          </View> */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: "500" }}>Price:</Text>
            <Text
              style={{
                fontSize: 16,
                color: "#53B5E0",
                marginLeft: 5,
                fontWeight: "900",
              }}
            >
              {parseInt(courses)>0?`${courses}৳`:'Free'}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: "500" }}>Published:</Text>
            <Text
              style={{
                fontSize: 12,
                color: "#53B5E0",
                marginLeft: 5,
                fontWeight: "500",
              }}
            >
              {price}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseBundle;
