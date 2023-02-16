import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function CommonHeader(props) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 20,marginTop:10 }}>
      <AntDesign
        onPress={() => {
          if (props.onPress) {
            props.onPress();
            return;
          }
          props.navigation.goBack();
        }}
        style={{ textAlign: "center", flex: 0.5,position:"absolute",marginLeft:20,zIndex:500 }}
        name="arrowleft"
        size={24}
        color="black"
      />
      <Text
        style={{ fontSize: 18, textAlign: "center", flex: 8, color: "#303030" }}
      >
        {props.name}
      </Text>
    </View>
  );
}

export default CommonHeader;
