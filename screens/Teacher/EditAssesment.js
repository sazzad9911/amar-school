import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import Button from "../../components/main/Button";

const EditAssesment = (props) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "500" }}>MD Jahidul</Text>
      <Text style={{ fontSize: 14, fontWeight: "400", marginBottom: 10 }}>
        example@mail.com
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#808080",
          borderRadius: 10,
          padding: 20,
          backgroundColor: "#e5e5e5",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Marks</Text>
        <TextInput
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#fff",
            marginTop: 10,
            borderRadius: 10,
            marginBottom: 10,
            paddingHorizontal:10
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Notes</Text>
        <Pressable
          style={{
            padding: 10,
            height: 150,
            width: "100%",
            backgroundColor: "#fff",
            marginTop: 10,
            borderRadius: 10,
          }}
        >
          <TextInput />
        </Pressable>
      </View>
      <Button onPress={() => {
        props.navigation.navigate("Assignment");
      }} title={'Save Assignment'} style={{backgroundColor:'green',color:'#fff',marginTop:30}}/>
    </View>
  );
};

export default EditAssesment;

const styles = StyleSheet.create({});

