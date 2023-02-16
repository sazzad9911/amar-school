import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ConsultCart = ({ name, job,navigation }) => {
  return (
    <TouchableOpacity  
    onPress={() => {
      navigation.navigate("Book");
    }}
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: (Dimensions.get("window").width)/2-25,
        marginRight:10
      }}
    >
      <Image
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
        }}
        source={{
          uri: "https://lmszai.zainikthemes.com/uploads_demo/user/1.jpg",
        }}
      />
      <Text style={{ fontSize: 18, fontWeight: "500", marginVertical: 5 }}>
        {name}
      </Text>
      <Text style={{ fontWeight: "400", marginBottom: 5 }}>{job}</Text>
      <View style={{ flexDirection: "row",justifyContent:'space-between' }}>
        <Image
          style={{
            height: 20,
            width: 20,
            borderRadius: 15,
            marginRight:5
          }}
          source={{
            uri: "https://lmszai.zainikthemes.com/frontend/assets/img/ranking_badges/membership_1.png",
          }}
        />
        <Image
          style={{
            height: 20,
            width: 20,
            borderRadius: 15,
            marginRight:5
          }}
          source={{
            uri: "https://lmszai.zainikthemes.com/frontend/assets/img/ranking_badges/rank_3.png",
          }}
        />
        <Image
          style={{
            height: 20,
            width: 20,
            borderRadius: 15,
            marginRight:5
          }}
          source={{
            uri: "https://lmszai.zainikthemes.com/frontend/assets/img/ranking_badges/course_1.png",
          }}
        />
        <Image
          style={{
            height: 20,
            width: 20,
            borderRadius: 15,
            marginRight:5
          }}
          source={{
            uri: "https://lmszai.zainikthemes.com/frontend/assets/img/ranking_badges/student_1.png",
          }}
        />
        <Image
          style={{
            height: 20,
            width: 20,
            borderRadius: 15,
            marginRight:5
          }}
          source={{
            uri: "https://lmszai.zainikthemes.com/frontend/assets/img/ranking_badges/sale_1.png",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 50,
          justifyContent: "space-between",
          marginVertical: 5,
        }}
      >
        <AntDesign name="like2" size={18} color="red" />
        <AntDesign name="dislike2" size={18} color="red" />
      </View>
      <Text>5 followers</Text>
    </TouchableOpacity>
  );
};

export default ConsultCart;

const styles = StyleSheet.create({});
