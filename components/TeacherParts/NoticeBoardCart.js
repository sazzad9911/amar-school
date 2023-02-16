import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../main/Button";

const NoticeBoardCart = ({subtitle, image, title, upcoming, past,navigation,onAdd,onView }) => {
  //console.log(image)
  return (
    <View
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: "#e5e5e5",
        backgroundColor:'#fff',
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
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{title}</Text>
        <Text style={art.bText}>
          {subtitle}
          <Text style={{ fontWeight: "normal" }}>{upcoming}</Text>
        </Text>
        
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:-10}}>
        <Button onPress={() => {
          if(onAdd){
            onAdd()
          }
            //navigation.navigate("AddNotice");
          }} title={'Add Notice'} style={{width:'40%',backgroundColor:'green',color:'#fff'}}/>
        <Button onPress={() => {
          if(onView){
            onView()
          }
            //navigation.navigate("NoticeViewList");
          }} title={'View List'} style={{width:'40%',backgroundColor:'green',color:'#fff'}}/>
      </View>
    </View>
  );
};

export default NoticeBoardCart;

const art = StyleSheet.create({
  bText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
