import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const RecentlyAdded = ({ title, enroll, date, image }) => {
  //console.log(image)
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
        flexDirection: "row",
        marginRight: 10,
        marginVertical: 10,
        width: 250,
      }}
    >
      <Image
        style={{
          height: 60,
          width: 60,
          borderRadius: 30,
        }}
        source={{
          uri: image,
        }}
      />
      <View style={{ marginLeft: 10 }}>
        <Text
          numberOfLines={1}
          style={{
            width: 160,
          }}
        >
          {title}
        </Text>
        <Text>{enroll}</Text>
        <View
          style={{
            backgroundColor: "#B0E1F6",
            width: 120,
            padding: 2,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            height: 30,
            marginTop: 5,
          }}
        >
          <Text>{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default RecentlyAdded;

const styles = StyleSheet.create({});
