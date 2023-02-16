import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Button from "../main/Button";

const SetQuizCart = ({ name, status, question, type, navigation, onPress,onDelete }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      style={{
        borderWidth: 1,
        borderColor: "#707070",
        width: "100%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
      }}
    >
      <View style={art.lineView}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 120,
            justifyContent: "space-between",
          }}
        >
          <Text style={art.boldLine}>Quiz Name</Text>
          <Text style={art.boldLine}>:</Text>
        </View>
        <Text>{name}</Text>
      </View>
      <View style={art.lineView}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 120,
            justifyContent: "space-between",
          }}
        >
          <Text style={art.boldLine}>Quiz Type</Text>
          <Text style={art.boldLine}>:</Text>
        </View>
        <Text>{type}</Text>
      </View>
      <View style={art.lineView}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 120,
            justifyContent: "space-between",
          }}
        >
          <Text style={art.boldLine}>Total Question</Text>
          <Text style={art.boldLine}>:</Text>
        </View>
        <Text>{question}</Text>
      </View>
      <View style={art.lineView}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 120,
            justifyContent: "space-between",
          }}
        >
          <Text style={art.boldLine}>Status</Text>
          <Text style={art.boldLine}>:</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 25,
            width: 90,
            backgroundColor: "orange",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>{status}</Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={() => {
          if(onDelete){
            onDelete()
          }
          //navigation.navigate("Add Question", {Choice:1});
        }}
        style={{
          width: 120,
          marginTop: 10,
          marginBottom: -2,
          backgroundColor: "#FF0000",
          color: "#fff",
          height: 30,
        }}
        title={"Delete Quiz"}
      />
    </TouchableOpacity>
  );
};

export default SetQuizCart;

const art = StyleSheet.create({
  boldLine: {
    fontSize: 16,
    fontWeight: "500",
    marginRight: 5,
  },
  lineView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
