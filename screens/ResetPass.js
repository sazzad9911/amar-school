import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import Button from "../components/main/Button";
import { resetPassword } from "../apis/auth";

const ResetPass = ({ navigation }) => {
  const [verificationCode, setVerificationCode] = React.useState();
  const [Password, setPassword] = React.useState();
  const [ConfirmPassword, setConfirmPassword] = React.useState();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 20,
          flex: 1,
        }}
      >
        <Text
          style={{
            marginTop: 10,
            fontSize: 22,
            fontWeight: "600",
            color: "#6F7071",
          }}
        >
          Reset Password?
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 15,
            fontWeight: "500",
            color: "#6F7071",
          }}
        >
          *Verification code sent your mobile no. Please check.
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            fontWeight: "600",
            color: "#6F7071",
          }}
        >
          Verification Code
        </Text>
        <TextInput
          value={verificationCode}
          onChangeText={setVerificationCode}
          keyboardType="number-pad"
          style={{
            color: "black",
            width: "100%",
            height: 55,
            backgroundColor: "#FFFDD0",
            borderRadius: 10,
            paddingHorizontal: 20,
            marginTop: 10,
          }}
          placeholder="Type your verification code"
        />
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            fontWeight: "600",
            color: "#6F7071",
          }}
        >
          New Password
        </Text>
        <TextInput
          value={Password}
          onChangeText={setPassword}
          
          style={{
            color: "black",
            width: "100%",
            height: 55,
            backgroundColor: "#FFFDD0",
            borderRadius: 10,
            paddingHorizontal: 20,
            marginTop: 10,
          }}
          placeholder="*******"
        />
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            fontWeight: "600",
            color: "#6F7071",
          }}
        >
          Confirm Password
        </Text>
        <TextInput
          value={ConfirmPassword}
          onChangeText={setConfirmPassword}
          
          style={{
            color: "black",
            width: "100%",
            height: 55,
            backgroundColor: "#FFFDD0",
            borderRadius: 10,
            paddingHorizontal: 20,
            marginTop: 10,
          }}
          placeholder="*******"
        />
        <Button
          onPress={() => {
            if (!ConfirmPassword || !verificationCode || !Password) {
              Alert.alert("Ops!", "All field are required");
              return;
            }
            resetPassword(verificationCode, Password, ConfirmPassword)
              .then((res) => {
                console.log(res.data)
                navigation.navigate("LogIn");
              })
              .catch((err) => {
                Alert.alert("Ops!", err.response.data.message);
              });
          }}
          title={"Change Password"}
          style={{
            fontSize: 22,
            backgroundColor: "#006600",
            height: 55,
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 20,
            width: "100%",
            marginTop: 30,
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResetPass;

const styles = StyleSheet.create({});
