import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "../main/Button";
import { useSelector } from "react-redux";

const TeacherCourseCart = ({
  title,
  onResource,
  image,
  icon,
  color,
  ratings,
  tutior,
  sale,
  navigation,
  onQuiz,
  onAssignment,
  onDelete,
  onEdit,
  
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
        <View style={{ paddingHorizontal: 10, flex: 1 }}>
          <Text style={art.titleText}>{title}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 12, marginRight: 10 }}>{ratings}</Text>
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <EvilIcons name="star" size={12} color="black" />
            <Text style={{ fontSize: 12, marginLeft: 10 }}>{sale}</Text>
          </View>
          <View style={art.iconBox}>
            <TouchableOpacity
              onPress={() => {
                //navigation.navigate("EditTeacherCourse");
                if(onEdit){
                  onEdit()
                }
              }}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Feather  name="edit" size={16} color="green" />
              <Text style={{ color: "#006600" }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              if (onDelete) {
                onDelete();
                
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
          <Button onPress={() => {
            navigation.navigate("LessonCart");
          }} title={'Lessons'} style={{height:30,marginTop:10,backgroundColor:'green',color:'#fff'}}/>
        </View>
      </View>
      <View style={art.lastBox}>
        <Button
          onPress={() => {
            if (onResource) {
              onResource();
            }
            //navigation.navigate("TeacherResource");
          }}
          title={"Resources"}
          style={art.buttonSty}
        />
        <Button
          onPress={() => {
            if (onQuiz) {
              onQuiz();

              return;
            }
          }}
          title={"Quiz"}
          style={art.buttonSty}
        />
        <Button
          onPress={() => {
            if (onAssignment) {
              onAssignment();
            }
          }}
          title={"Assignment"}
          style={art.buttonSty}
        />
      </View>
    </View>
  );
};

export default TeacherCourseCart;

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
    height: 170,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e5e5e5",
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
    fontSize: 13,
    fontWeight: "500",
    color: "#303030",
  },
  iconBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 130,
    marginTop: 5,
  },
});
