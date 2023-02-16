import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../main/Button";

const AssignmentCart = (props) => {
  const data=props.data
  const uuid=props.uuid;
  //console.log(data.uuid)
  //console.log(uuid)
  //console.warn(data)
  return (
    <View
      style={{
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
      }}
    >
      <View>
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
          <Text> :</Text>
        </View>
          <Text style={{ textAlign: "justify" }}>{data.name} </Text>
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
          <Text> :</Text>
        </View>
          <Text>{data.marks}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          onPress={() => {
            props.navigation.navigate("AssignmentDetails",{data:data,uuid:uuid});
          }}
          title={"View Details"}
          style={{
            paddingHorizontal: 10,
            color: "#fff",
            backgroundColor: "green",
            height: 30,
            marginTop: 10,
          }}
        />
        {/* <Button
          onPress={() => {
            props.navigation.navigate("AssignmentResult",{data:data});
          }}
          title={"See Result"}
          style={{
            paddingHorizontal: 10,
            color: "#fff",
            backgroundColor: "green",
            height: 30,
            marginTop: 10,
          }}
        /> */}
      </View>
    </View>
  );
};

export default AssignmentCart;

const styles = StyleSheet.create({});
