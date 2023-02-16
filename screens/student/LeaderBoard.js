import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const LeaderBoard = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <PositionCart />
      <LeaderBoardCart/>
    </View>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({});

const PositionCart = () => {
  return (
    <View style={{ padding: 10, backgroundColor: "green", borderRadius: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 30,
          }}
          source={{
            uri: "https://amarschool.com.bd/public/uploads/default/instructor-default.png",
          }}
        />
        <Text
          style={{
            marginLeft: 10,
            fontWeight: "500",
            fontSize: 18,
            color: "#fff",
          }}
        >
          MD Jahidul
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 110,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>
            Your Position{" "}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>
            :
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginLeft: 10,
            color: "#fff",
          }}
        >
          1
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 110,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>
            Quiz Mark{" "}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>
            :
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginLeft: 10,
            color: "#fff",
          }}
        >
          1
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 110,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>
            Your Mark
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>
            :
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginLeft: 10,
            color: "#fff",
          }}
        >
          1
        </Text>
      </View>
    </View>
  );
};

const LeaderBoardCart = () => {
  return (
    <View style={{ padding: 10, backgroundColor: "#e5e5e5", borderRadius: 10,marginTop:20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 30,
          }}
          source={{
            uri: "https://amarschool.com.bd/public/uploads/default/instructor-default.png",
          }}
        />
        <Text
          style={{
            marginLeft: 10,
            fontWeight: "500",
            fontSize: 18,
            color: "black",
          }}
        >
          MD Jahidul
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 110,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: "black" }}>
            Your Position{" "}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "black" }}>
            :
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginLeft: 10,
            color: "black",
          }}
        >
          1
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 110,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: "black" }}>
            Quiz Mark{" "}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "black" }}>
            :
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginLeft: 10,
            color: "black",
          }}
        >
          1
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 110,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: "black" }}>
            Your Mark
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: "black" }}>
            :
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            marginLeft: 10,
            color: "black",
          }}
        >
          1
        </Text>
      </View>
    </View>
  );
};
