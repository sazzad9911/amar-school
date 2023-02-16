import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect } from "react";
import { SvgXml } from "react-native-svg";
import { cart } from "../../assets/icon";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { deleteWishList } from "../../apis/profile";
import { useSelector } from "react-redux";
import { useState } from "react";
import { url } from "../../apis/api";

export default function WishCart({data,navigation}) {
  const userInfo=useSelector(state=>state.userInfo)
  const [courseData,setCourseData]=useState()
  useEffect(()=>{
    if(data.course){
      setCourseData(data.course)
    }else if(data.bundle){
      setCourseData(data.bundle)
    }
  },[])
  //console.log(data)
  return (
    <TouchableOpacity onPress={()=>{
      if(data.bundle){
        navigation.navigate("BundleDetails",{data:data.bundle})
      }else if(data.course){
        navigation.navigate("CourseView",{data:data.course})
      }
    }} style={art.containerr}>
      <View style={art.imageBox}>
        <Image
          style={{
            height: 100,
            width: 150,
            borderRadius: 5,
          }}
          source={{
            uri: `${url}${courseData?.image}`,
          }}
        />
    
      
        <TouchableOpacity onPress={()=>{
          deleteWishList(userInfo.meta.token,data.id).then(res=>{
            navigation.goBack()
          }).catch(err=>{ 
            Alert.alert(err.response.data.message)
          })
        }} style={{ position: "absolute", right: 5, top: 10 }}>
        <AntDesign name="delete" size={18} color="red" />
        </TouchableOpacity>
      

        {/* <TouchableOpacity style={art.addButton}>
          <SvgXml xml={cart} height="20" width="25" />
        </TouchableOpacity> */}
      </View>
      <View style={art.textBox}>
        <Text numberOfLines={2} style={{ fontSize: 14, fontWeight: "600" }}>
          {data.bundle?courseData?.name:courseData?.title}
        </Text>
        {/* <Text style={{ fontSize: 12 }}>{courseData?.over}</Text> */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 12, marginRight: 10 }}>0.00</Text>
          <Entypo name="star" size={12} color="#FFC300" />
          <Entypo name="star" size={12} color="#FFC300" />
          <Entypo name="star" size={12} color="#FFC300" />
          <Entypo name="star" size={12} color="#FFC300" />
          <EvilIcons name="star" size={12} color="black" />
          <Text style={{ fontSize: 12, marginLeft: 10 }}>({courseData?.status})</Text>
        </View>
        <Text style={{ fontSize: 14, fontWeight: "500" }}>Price: $ 50.00</Text>
        {/* <View style={{ marginTop: 5, alignItems: "flex-end", marginRight: 10 }}>
          <AntDesign name="delete" size={24} color="red" />
        </View> */}
      </View>
    </TouchableOpacity>
  );
}

const art = StyleSheet.create({
  containerr: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: "black",
    shadowRadius: 10,
    elevation: 3,
    shadowOpacity: 0.1,
    flexDirection: "row",
  },
  imageBox: {
    alignItems: "center",
    marginRight: 10,
  },
  addButton: {
    height: 30,
    width: 80,
    borderRadius: 5,
    backgroundColor: "#006600",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    width: "50%",
  },
});
