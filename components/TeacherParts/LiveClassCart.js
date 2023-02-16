import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../main/Button";

const LiveClassCart = ({ image, title, upcoming, past,navigation,onCreate,onView }) => {
  return (
    <View
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: "#e5e5e5",
        backgroundColor:'#COE6BA',
        borderRadius: 10,
        padding: 10,
        marginTop:10
      }}
    >
      <View>
        <Image
          style={{
            height: 100,
            width: "100%",
            borderRadius:10
          }}
          source={{
            uri: image,
          }}
        ></Image>
        <Text style={{ fontSize: 16,
           fontWeight: "500",marginTop:5 }}>{title}</Text>
        <Text style={art.bText}>
          Upcoming Live Class:{" "}
          <Text style={{ fontWeight: "normal" }}>{upcoming}</Text>
        </Text>
        <Text style={art.bText}>
          Past Live Class:{" "}
          <Text style={{ fontWeight: "normal" }}>{past}</Text>
        </Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:-10}}>
        <Button onPress={() => {
          if(onCreate){
            onCreate()
          }
           // navigation.navigate("CreateLiveClass");
          }} title={'Create'} style={{width:'40%'}}/>
        <Button onPress={() => {
          if(onView){
            onView()
          }
            //navigation.navigate("LiveClassViewList");
          }} title={'View'} style={{width:'40%',}}/>
      </View>
    </View>
  );
};

export default LiveClassCart;

const art = StyleSheet.create({
  bText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
