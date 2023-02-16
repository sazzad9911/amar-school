import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Button from "../../components/main/Button";

const DoneAssesment = (props) => {
  return (
    <View style={{ paddingHorizontal: 20, alignItems: "center" }}>
      <Image
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          backgroundColoe: "red",
        }}
        source={{
          uri: "https://amarschool.com.bd/public/uploads/default/instructor-default.png",
        }}
      />
      <Text style={{fontSize:22,fontWeight:'500',}}>MD Jahidul</Text>
      <Text>Email : example@mail.com</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          width: "80%",
        }}
      >
        <Button
          title={"Download"}
          style={{
            backgroundColor: "green",
            color: "#FFF",
            height: 40,
            width: 100,
          }}
        />
        <View
          style={{
            height: 40,
            width: 100,
            backgroundColor: "#e5e5e5",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Text>8.00</Text>
        </View>
      </View>
      <View style={{alignItems:'center'}}>
      <Text style={{fontSize:18,fontWeight:'500',}}>
        Notes
      </Text>
      <Text>
      very good
      </Text>
      </View>
      <Button onPress={() => {
        props.navigation.navigate("EditAssesment");
      }}  title={'Edit'} style={{ width:80,height:40,backgroundColor:'red',color:'#fff',marginTop:20}}/>
    </View>
  );
};

export default DoneAssesment;

const styles = StyleSheet.create({});
