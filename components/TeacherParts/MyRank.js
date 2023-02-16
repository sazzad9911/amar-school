import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";

const MyRank = ({ earning, student, image ,name}) => {
  return (
    <View style={{ flexDirection: "row",alignItems:'center',backgroundColor:'#fff',borderWidth:1,borderColor:'#e5e5e5',padding:10,borderRadius:10,marginRight:10 }}>
      <SvgXml xml={image} height="40" width="40" />
      <View style={{ marginLeft: 10 }}>
        <Text>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 60 }}>
            <Text>Earning</Text>
            <Text>Sudent</Text>
          </View>
          <View>
            <Text>: ৳ {earning}</Text>
            <Text>: {student}</Text>
          </View> 
        </View>
      </View>
    </View>
  );
};

export default MyRank;

const styles = StyleSheet.create({});
