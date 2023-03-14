import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../main/Button";

const MyLearningCart = ({
  image,
  topics,
  price,
  order,
  validation,
  navigation,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}>
      <View
        style={{
          backgroundColor: "#FFFDD0",
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
        }}>
        <View style={{ flexDirection: "row", backgroundColor: "#FFFDD0" }}>
          <Image
            style={{
              height: 120,
              width: "30%",
              borderRadius: 5,
            }}
            source={{ uri: image }}
          />
          <View style={{ width: "70%", paddingHorizontal: 10 }}>
            <Text
              numberOfLines={2}
              style={{
                fontSize: 15,
                fontWeight: "500",
                textAlign: "justify",
                width: "100%",
                marginVertical: 5,
              }}>
              {topics}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo name="star" size={16} color="#F6CE05" />
                <Text>Give Review</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 20,
                  alignItems: "center",
                }}>
                <FontAwesome5
                  style={{ marginRight: 5 }}
                  name="file-invoice"
                  size={12}
                  color="black"
                />
                <Text>Invoice</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 10 }}>
                <Text>Price</Text>
                <Text>Order ID</Text>
                <Text>Validity</Text>
              </View>
              <View>
                <Text>
                  :{" "}
                  <Text style={{ marginLeft: 5 }}>
                    {parseInt(price) > 0 ? `${price}৳` : "Free"}
                  </Text>
                </Text>
                <Text>
                  : <Text style={{ marginLeft: 5 }}>{order}</Text>
                </Text>
                <Text>
                  : <Text style={{ marginLeft: 5 }}>{validation}</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {/* <View style={{ width: "80%" }}>
          <Text>70% </Text>
          <View
            style={{
              height: 10,
              width: "90%",
              backgroundColor: "#e5e5e5",
              borderRadius: 5,
              marginTop: 5,
            }}>
            <View
              style={{
                height: 10,
                width: "70%",
                backgroundColor: "#006600",
                borderRadius: 5,
              }}></View>
          </View>
        </View> */}
          {/* <Button
          
          style={{
            width: 50,
            height: 30,
            backgroundColor: "#006600",
            color: "#fff",
            marginTop:20
          }}
          title={"View"}
        /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyLearningCart;

const styles = StyleSheet.create({});
