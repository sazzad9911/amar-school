import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const InstructorCart = ({ name, job, navigation, level, rate,slug,image,user_id }) => {
  return (
    <TouchableOpacity
      onPress={() => { 
        
        navigation.navigate("InstructorProfileView",{slug:slug,user_id:user_id});
      }}
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        width: Dimensions.get("window").width / 2 - 25,
        marginRight: 10,
      }}
    >
      <Image
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
        }}
        source={{
          uri:image?image: "https://lmszai.zainikthemes.com/uploads_demo/user/1.jpg",
        }}
      />
      <Text
        numberOfLines={1}
        style={{ fontSize: 18, fontWeight: "500", marginVertical: 5 }}
      >
        {name}
      </Text>
      <Text style={{ marginBottom: 5, fontSize: 9 }}>{job}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ marginRight: 5 }}>{level}.0</Text>

        <FontAwesome
          name="star"
          size={14}
          color={level > 0 ? "#FFD801" : "#E5E5E5"}
        />
        <FontAwesome
          name="star"
          size={14}
          color={level > 1 ? "#FFD801" : "#E5E5E5"}
        />
        <FontAwesome
          name="star"
          size={14}
          color={level > 2 ? "#FFD801" : "#E5E5E5"}
        />
        <FontAwesome
          name="star"
          size={14}
          color={level > 3 ? "#FFD801" : "#E5E5E5"}
        />
        <FontAwesome
          name="star"
          size={14}
          color={level > 4 ? "#FFD801" : "#E5E5E5"}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image
          style={{
            height: 20,
            width: 20,
            borderRadius: 15,
            marginRight: 5,
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
            marginRight: 5,
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
            marginRight: 5,
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
            marginRight: 5,
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
            marginRight: 5,
          }}
          source={{
            uri: "https://lmszai.zainikthemes.com/frontend/assets/img/ranking_badges/sale_1.png",
          }}
        />
      </View>
      <Text style={{ marginTop: 5 }}>{rate?rate:"N/A"}/Hour</Text>
    </TouchableOpacity>
  );
};

export default InstructorCart;

const styles = StyleSheet.create({});
