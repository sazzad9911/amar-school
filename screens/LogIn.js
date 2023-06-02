import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { logInUser } from "../apis/auth";
import Button from "../components/main/Button";
import { storeData } from "../functions/storage";
import { setUserInfo } from "../functions/userInfo";
import { Feather } from "@expo/vector-icons";

function LogIn({ navigation }) {
  const [PhoneNumber, setPhoneNumber] = React.useState();
  const [Password, setPassword] = React.useState();
  const dispatch = useDispatch();
  const [p, setP] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}>
      <SafeAreaView
        style={{
          padding: 20,
          backgroundColor: "#fff",
          flex: 1,
          alignItems: "center",
          height: "100%",
        }}>
        <StatusBar backgroundColor="#fff" />

        <View style={{ paddingHorizontal: 30 }}>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: "600",
              color: "#6F7071",
            }}>
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
              }}>
              |
            </Text>
            <TextInput
              placeholder="Enter Phone Number"
              onChangeText={setPhoneNumber}
              value={PhoneNumber}
              keyboardType="number-pad"
              style={{
                flex: 1,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: "600",
              color: "#6F7071",
              marginBottom: 10,
            }}>
            Password
          </Text>
          <View
            style={{
              justifyContent: "center",
            }}>
            <TextInput
              value={Password}
              onChangeText={setPassword}
              secureTextEntry={!p}
              style={{
                color: "black",
                width: 310,
                height: 55,
                backgroundColor: "#FFFDD0",
                borderRadius: 20,
                paddingHorizontal: 20,
              }}
              placeholder="Enter password"
            />
            <View
              style={{
                position: "absolute",
                right: 10,
                zIndex: 100,
              }}>
              <TouchableOpacity onPress={() => setP((v) => !v)}>
                {p ? (
                  <Feather name="eye" size={24} color="black" />
                ) : (
                  <Feather name="eye-off" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{ justifyContent: "flex-start", marginTop: 10 }}
            onPress={() => {
              navigation.navigate("ForgetPass");
            }}>
            <Text
              style={{
                textAlign: "left",
                fontSize: 15,
                fontWeight: "500",
                color: "green",
              }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: "absolute",
            bottom: 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Button
            onPress={() => {
              if (!PhoneNumber || !Password) {
                Alert.alert("Ops!", "All fields are required.");
                return;
              }
              logInUser(`${PhoneNumber}`, Password)
                .then((res) => {
                  if (res) {
                    dispatch(setUserInfo(res.data));
                    storeData("userInfo", res.data);
                    navigation.navigate("UserTabRoute");
                  }
                })
                .catch((err) => {
                  Alert.alert("Ops!", err.response.data.message);
                });
              ///props.navigation.navigate("Home");
            }}
            title={"Log In"}
            style={{
              fontSize: 22,
              backgroundColor: "#006600",
              height: 55,
              color: "#fff",
              fontWeight: "bold",
              borderRadius: 20,
              width: "90%",
            }}>
            {" "}
          </Button>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PhoneNumber");
            }}>
            <Text
              style={{
                fontSize: 16,
                color: "green",
                fontWeight: "600",
              }}>
              Create A New Account?
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default LogIn;

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
