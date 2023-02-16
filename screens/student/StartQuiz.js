import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/main/Button";

const StartQuiz = (props) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text>MD. HASIBUR RAHAMAN</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Question 1 of 1</Text>
        <View
          style={{
            height: 8,
            borderRadius: 10,
            backgroundColor: "green",
            width: "60%",
            marginLeft: 20,
          }}
        ></View>
      </View>
      <Text>
        Time remaining: <Text>00:05:00 of 00:05:00</Text>
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text>MD. HASIBUR RAHAMAN</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 40,
            marginTop: 10,
          }}
        >
          <CheckBox />
          <Text>True</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 40,
            marginTop: 10,
          }}
        >
          <CheckBox />
          <Text>False</Text>
        </View>
      </View>
      <Button  onPress={() => {
          props.navigation.navigate("SeeResult");
        }}  title={'Give Answer'} style={{backgroundColor:'green',color:'#fff',marginTop:30}}/>
    </View>
  );
};

export default StartQuiz;

const styles = StyleSheet.create({});
