import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckBox from "../../components/CheckBox";
import { Feather } from "@expo/vector-icons";
import Button from "../../components/main/Button";

const SeeResult = (props) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>Hasibur Rahman</Text>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 100,
          }}
        >
          <Text>Total Score </Text>
          <Text>:</Text>
        </View>
        <Text>1</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 100,
          }}
        >
          <Text>Your Score </Text>
          <Text>:</Text>
        </View>
        <Text>1</Text>
      </View>
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
          <Text style={{ color: "green" }}>True</Text>
          <Feather name="check" size={24} color="green" />
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
          props.navigation.navigate("LeaderBoard");
        }}   title={'Next'} style={{backgroundColor:'green',color:'#fff',width:100,height:40,marginTop:40}}/>
    </View>
  );
};

export default SeeResult;

const styles = StyleSheet.create({});
