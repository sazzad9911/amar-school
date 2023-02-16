import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../main/Button";

const CertificateCart = ({
    image, title, certificate, past,navigation 
}) => {
  return (
    <View
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: "#e5e5e5",
        backgroundColor:'#B0E1F6',
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
        <Text style={{ fontSize: 16, fontWeight: "500",marginTop:5 }}>{title}</Text>
        <Text style={art.bText}>
          Total Certificate:
          <Text style={{ fontWeight: "normal" }}>{certificate}</Text>
        </Text>
        
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:-10}}>
        <Button onPress={() => {
            navigation.navigate("CreateLiveClass");
          }} title={'Edit'} style={{width:'40%'}}/>
        <Button onPress={() => {
            navigation.navigate("CreateLiveClass");
          }} title={'View'} style={{width:'40%',}}/>
      </View>
    </View>
  )
}

export default CertificateCart

const art = StyleSheet.create({
    bText: {
    fontSize: 14,
    fontWeight: "500",
    marginTop:2
  },
})