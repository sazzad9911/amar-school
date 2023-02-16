import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { stu } from "../../assets/icon";

function TallCart(props) {
  return (
    <TouchableOpacity
      style={{
        height: 222,
        width: 154,
        borderRadius: 15,
        backgroundColor: props.backgroundColor,
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}
    >
      <View
        style={{
          position: "absolute",
          height: 154,
          width: "100%",
          top: 82,
          left: 2,
        }}
      >
        <SvgXml xml={stu} />
      </View>
      <Text style={{ fontSize: 13, color: "#fff" }}>{props.SmallName}</Text>
      <Text style={{ fontSize: 20, color: "#fff" }}>{props.Name}</Text>
    </TouchableOpacity>
  );
}

export default TallCart;
