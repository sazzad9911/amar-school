import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { resentOTP } from "../apis/auth";
import Button from "../components/main/Button";

function PhoneNumber(props) {
  const [PhoneNumber, setPhoneNumber] = React.useState();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <SafeAreaView
        style={{
          padding: 20,
          backgroundColor: "#fff",
          flex: 1,
          alignItems: "center",
          height: "100%",
        }}
      >
        <StatusBar backgroundColor="#fff" />

        <View style={{ paddingHorizontal: 30 }}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: "600",
              color: "#6F7071",
            }}
          >
            Phone Number
          </Text>
          <View style={art.numInput}>
            <Image
              style={{
                height: 30,
                width: 40,
              }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZiTeb48Z4zXdMAAF5WDTILfyyc6k_zuQ6tw&usqp=CAU",
              }}
            />
            <Text style={{ color: "#6F7071" }}> +88</Text>
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 30,
                marginBottom: 5,
                fontWeight: "100",
              }}
            >
              |
            </Text>
            <TextInput onChangeText={setPhoneNumber}
              keyboardType="number-pad"
              style={{
                color: "black",
                width: "63%",
                height: 55,
              }}
              placeholder="Enter mobile number"
            />
          </View>
        </View>

        <Button
          onPress={() => {
            if(!PhoneNumber){
              Alert.alert("Invalid Phone Number")
              return
            }
            if(PhoneNumber.split("").length!=11){
              Alert.alert("Invalid Phone Number")
              return
            }
            props.navigation.navigate("PersonalInfo",{PhoneNumber:PhoneNumber});
            return
            resentOTP(PhoneNumber).then(res=>{
                props.navigation.navigate("OTP",{PhoneNumber:`${PhoneNumber}`});
            }).catch(err=>{
               Alert.alert("Ops!",err.response.data.message)
            })
            //props.navigation.navigate("OTP",{PhoneNumber:`+880${PhoneNumber}`});
          }}
          title={"Go ahead"}
          style={{
            fontSize: 22,
            backgroundColor: "#006600",
            height: 55,
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 20,
            position: "absolute",
            width: "90%",

            bottom: 20,
          }}
        >
          {" "}
        </Button>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default PhoneNumber;

const art = StyleSheet.create({
  numInput: {
    height: 55,
    backgroundColor: "#FFFDD0",
    borderRadius: 20,
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
