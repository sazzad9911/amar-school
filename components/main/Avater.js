import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Image } from "react-native";

export default function Avatar({ source, style,active }) {
  return (
    <View style={[{
      justifyContent:"center",
      alignItems:"center",
      borderRadius:100,
      borderColor:"#707070",
      borderWidth:1,
      overflow:"hidden",
      width:style&&style.width?style.width+10:70,
      height:style&&style.height?style.height+10:70,
    },style]}>
      {
        source&&source.uri?(
          <Image style={{
            width:style&&style.width?style.width:60,
            height:style&&style.height?style.height:60,
          }} source={{uri:source.uri}}/>
        ):(
          <FontAwesome name="user" size={style&&style.height?style.height-10:55} color={style&&style.color?style.color:"black"} />
        )
      }
      
    </View>
  );
}