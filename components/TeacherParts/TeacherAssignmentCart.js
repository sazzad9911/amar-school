import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const TeacherAssignmentCart = ({onDelete,title,marks}) => {
  return (
    <TouchableOpacity
      disabled={true}
      onPress={() => {
        navigation.navigate("AssesmentDetails");
      }}
      style={{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            width: 150,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              alignItems: "center",
            }}
          >
            Assignment Topic
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            {" "}
            :
          </Text>
        </View>
        <Text style={{ width: "50%", marginLeft: 5 }} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            width: 150,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              alignItems: "center",
            }}
          >
            Assignment Marks
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            {" "}
            :
          </Text>
        </View>
        <Text>{marks}</Text>
      </View>
      <Pressable onPress={()=>{
        if(onDelete){
          onDelete()
        }
      }} style={{
        width:100,
        height:40,
        backgroundColor:"#FF0000",
        alignItems:'center',
        borderRadius:5,
        paddingHorizontal:5,
        justifyContent:"center",
        flexDirection:"row",
        marginVertical:5
      }}>
        <AntDesign name="delete" size={24} color="white" />
        <Text style={{
          color:"white",
          fontSize:16,
          marginLeft:10
        }}>Delete</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

export default TeacherAssignmentCart;

const styles = StyleSheet.create({});
