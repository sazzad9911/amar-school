import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const QuizHeader = (props) => {
  return (
    <View style={art.container}>
      <Entypo onPress={() => {
            props.navigation.navigate("QuizSub");
          }} name="circle-with-cross" size={24} color="red" />
      <View style={art.head}>
        <View style={art.bar}>
        
          <View style={art.innerber}></View>
        </View>
        <Text style={{color:'#006600'}}>5/10</Text>
      </View>
    </View>
  );
};

export default QuizHeader;

const art = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  head: {
    marginLeft: 20,
    height: 30,
    borderRadius: 15,
  
    width: "80%",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#F1F1EF",
    borderWidth:1
  },
  bar: {
    height: 10,
    borderRadius: 5,
    width: "85%",
    backgroundColor: "#F1F1EF",
    marginRight: 5,
  
    justifyContent:'center'
  },
  innerber: {
    height: 10,
    width: "50%",
    borderRadius: 5,
    backgroundColor:'#006600'
  },
});
