import { StyleSheet, Text, TouchableOpacity, View ,Image} from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import {
  check,
  invoice,
profile
} from "../../assets/icon";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Button from "../main/Button";


const ConsultationCart = ({headline,
  onPress,
  sale,
  ratings,
  image,
  price,
  color,
  tutior,
  name,
  navigation
  }) => {
  return ( 
    // <View style={art.container}>
    //   <View style={art.firstBox}>
    //     <View style={art.circlee}><SvgXml xml={profile} height="60" width="60" /></View>
    //     <View>
    //       <Text style={{ fontSize: 16 }}>Sabbir Rahman</Text>
    //       <Text style={{ fontSize: 12 }}>PHP Debelopper | Level 1</Text>
    //       <View style={{ flexDirection: "row", alignItems: "center" }}>
    //         <SvgXml xml={invoice} height="15" width="20" />
    //         <Text style={{ fontSize: 12 }}>Sabbir Rahman</Text>
    //       </View>
    //     </View>
    //     <TouchableOpacity style={{marginLeft:'25%'}}><SvgXml xml={check} height="20" width="20" /></TouchableOpacity>
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: "row",
    //       justifyContent: "space-between",
    //       paddingHorizontal: 10,
    //       backgroundColor: "#fff",
    //     }}
    //   >
    //     <Text style={{ fontSize: 13 }}>Date: 24/09/2022</Text>
    //     <Text style={{ fontSize: 13 }}>Time: 12:38 AM-01:38 AM</Text>
    //   </View>
    //   <View
    //     style={{
    //       width: "100%",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       backgroundColor:'#fff',
    //       paddingBottom:10,
    //     }}
    //   >
    //     <Text style={{ fontSize: 13 }}>Duration: 1 Hour 0 Munite</Text>
    //   </View>
    //   <View style={{ flexDirection: "row",justifyContent:'space-between',paddingHorizontal:20,backgroundColor: '#B0E1F6',paddingBottom:10 }}>
    //     <View style={{alignItems:'center'}}>
    //       <Text>Price</Text>
    //       <Text style={{ fontSize: 13 }}>$60.00</Text>
    //     </View>
    //     <View style={{alignItems:'center'}}>
    //       <Text>Order ID</Text>
    //       <Text style={{ fontSize: 13 }}>131126</Text>
    //     </View>
    //     <View style={{alignItems:'center'}}>
    //       <Text>Type</Text>
    //       <Text style={{ fontSize: 13 }}>Online</Text>
    //     </View>
    //   </View>
    // </View>
    <View
      
      style={{
        width: 150,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: "row",
        marginBottom: 10,
        marginRight: 10,
        overflow: "hidden",
      }}
    >
      <View>
        <Image
          style={{
            height: 70,
            width: 150,
          }}
          source={{
            uri: image,
          }}
        />
        <View style={{ width: 150, padding: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>{name}</Text>
          <Text style={{ fontSize: 10,  }}>{headline}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 12, marginRight: 10 }}>{ratings}</Text>
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <Entypo name="star" size={12} color="#FFC300" />
            <EvilIcons name="star" size={12} color="black" />
           
          </View>
          
        </View>
        <Button onPress={() => {
          navigation.navigate("Book");
        }} style={{backgroundColor:'green',color:'#fff',}} title={'Book Schedule'}/>
      </View>
      
    </View>
  );
};

export default ConsultationCart;

const art = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom:10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: "black",
    shadowRadius: 10,
    elevation: 3,
    shadowOpacity: 0.1,
  },
  firstBox: {
    height: 80,
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
  },
  circlee: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#808080",
    marginRight: 10,
    alignItems:'center',
    justifyContent:'center'
  },
});
