import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Button from "../main/Button";

const AllStudentCart = ({ image, name, email, course, date,navigation }) => {
  return (
    <View style={{ height: 180, width: "100%", backgroundColor: "#fff",padding:10,borderRadius:10,marginBottom:10 }}>
      <View style={{ flexDirection: "row",marginBottom:10 }}>
        <Image
          style={art.picture}
          source={{
            uri: image,
          }}
        />
        <View style={{flex:1}}>
          <Text>{name}</Text>
          <Text>{email}</Text>
          <Text>{course}</Text>
          <Text>{date}</Text>
        </View>
      </View>
      <Button title={'View'} onPress={() => {
            navigation.navigate("StudentDetails");
          }}/>
    </View>
  );
};

export default AllStudentCart;

const art = StyleSheet.create({
  picture: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginRight:10
  },
});
