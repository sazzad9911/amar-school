import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../main/Button";

const BundleCourseCart = ({
  title,
  onPress,
  image,
  author, 
  color,
  ratings,
  tutior,
  sale,
  navigation,
  course,
  price,
  props,
  onDelete,
  onEdit
}) => {
  return (
    <View style={art.totalBox}>
      <View style={art.firstHalf}>
        <Image
          style={art.picture}
          source={{
            uri: image,
          }}
        />
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={art.titleText}>{title}</Text>
          <Text style={{ fontSize: 12 }}>{author}</Text>
          {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 12, marginRight: 10 }}>{ratings}</Text>
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <EvilIcons name="star" size={12} color="black" />
            <Text style={{ fontSize: 12, marginLeft: 10 }}>{sale}</Text>
          </View> */}
          <Text style={{ fontWeight:'500' }}>Courses: {course}</Text>
          <Text style={{ fontWeight:'500' }}>Price: {price}</Text>
          <View style={art.iconBox}>
            {/* <TouchableOpacity  onPress={() => {
          navigation.navigate("CreateBundleCourse");
        }}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Feather name="edit" size={16} color="green" />
              <Text style={{ color: "green" }}>Edit</Text>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={()=>{
                if(onDelete){
                  onDelete()
                }
              }}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons 
                name="delete-circle"
                size={18}
                color="red"
              />
              <Text style={{ color: "red" }}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BundleCourseCart;

const art = StyleSheet.create({
  buttonSty: {
    height: 30,
    width: 90,
  },
  lastBox: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    paddingHorizontal: 10,

    justifyContent: "space-between",
  },
  totalBox: {
    width: "100%",
    backgroundColor: "red",
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#707070",
    overflow: "hidden",
  },
  firstHalf: {
    height: 130,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
  },
  picture: {
    height: "100%",
    width: 150,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "600",
  },
  iconBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 130,
    marginTop: 5,
  },
});
