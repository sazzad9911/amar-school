import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const Review = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
      <View
        style={{
          height: 120,
          width: 110,
          borderRadius: 10,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "500" }}>5.0</Text>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="star" size={14} color="#F6CE05" />
          <Entypo name="star" size={14} color="#F6CE05" />
          <Entypo name="star" size={14} color="#F6CE05" />
          <Entypo name="star" size={14} color="#F6CE05" />
          <Entypo name="star" size={14} color="#F6CE05" />
        </View>
        <Text>1 Reviews</Text>
      </View>
      <View
        style={{
          height: 120,
          width: "63%",
          borderRadius: 10,
          backgroundColor: "#fff",
          justifyContent: "center",
          marginLeft: 10,
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 10 }}>5</Text>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#F6CE05" />
          </View>
          <View
            style={{
              height: 10,
              width: "35%",
              borderRadius: 10,
              backgroundColor: "green",
              marginLeft: 10,
            }}
          />

          <Text style={{ marginLeft: 5 }}>1</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 10 }}>4</Text>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#e5e5e5" />
          </View>
          <View
            style={{
              height: 10,
              width: "35%",
              borderRadius: 10,
              backgroundColor: "#e5e5e5",
              marginLeft: 10,
            }}
          />

          <Text style={{ marginLeft: 5 }}>0</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 10 }}>3</Text>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#e5e5e5" />
            <Entypo name="star" size={14} color="#e5e5e5" />
          </View>
          <View
            style={{
              height: 10,
              width: "35%",
              borderRadius: 10,
              backgroundColor: "#e5e5e5",
              marginLeft: 10,
            }}
          />

          <Text style={{ marginLeft: 5 }}>0</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 10 }}>2</Text>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#e5e5e5" />
            <Entypo name="star" size={14} color="#e5e5e5" />
            <Entypo name="star" size={14} color="#e5e5e5" />
          </View>
          <View
            style={{
              height: 10,
              width: "35%",
              borderRadius: 10,
              backgroundColor: "#e5e5e5",
              marginLeft: 10,
            }}
          />

          <Text style={{ marginLeft: 5 }}>0</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginRight: 10 }}>1</Text>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="star" size={14} color="#F6CE05" />
            <Entypo name="star" size={14} color="#e5e5e5" />
            <Entypo name="star" size={14} color="#e5e5e5" />
            <Entypo name="star" size={14} color="#e5e5e5" />
            <Entypo name="star" size={14} color="#e5e5e5" />
          </View>
          <View
            style={{
              height: 10,
              width: "35%",
              borderRadius: 10,
              backgroundColor: "#e5e5e5",
              marginLeft: 10,
            }}
          />

          <Text style={{ marginLeft: 5 }}>0</Text>
        </View>
      </View>
      
    </View>
    <View style={{ flexDirection: "row",marginTop:30,alignItems:'center' }}>
        <Image
          style={{ height: 80, width: 80, borderRadius: 40,marginRight:20 }}
          source={{
            uri: "https://lmszai.zainikthemes.com/uploads_demo/user/student-avatar.jpg",
          }}
        />
        <View>
        <Text style={{fontSize:18,fontWeight:'500'}}>Will Smith</Text>
        <Text>5 months ago</Text>
        <View style={{ flexDirection: "row" }}>
          <Entypo name="star" size={16} color="#F6CE05" />
          <Entypo name="star" size={16} color="#F6CE05" />
          <Entypo name="star" size={16} color="#F6CE05" />
          <Entypo name="star" size={16} color="#F6CE05" />
          <Entypo name="star" size={16} color="#F6CE05" />
        </View>
        </View>
      </View>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({});
