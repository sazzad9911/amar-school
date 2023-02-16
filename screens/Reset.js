import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Button from "../components/main/Button";

const Reset = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "500", marginVertical: 10 }}>
        Verification Code
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "300" }}>
        Reset Password *Verification code sent your mobile no. Please check.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "500", marginVertical: 10 }}>
        Verification Code
      </Text>
      <TextInput
        style={{
          height: 45,
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#F6FBFE",
          paddingHorizontal: 20,
        }}
        placeholder={"Type Your Verification Code"}
      />
      <Text style={{ fontSize: 18, fontWeight: "500", marginVertical: 10 }}>
        New Password
      </Text>
      <TextInput
        style={{
          height: 45,
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#F6FBFE",
          paddingHorizontal: 20,
        }}
      />

      <Text style={{ fontSize: 18, fontWeight: "500", marginVertical: 10 }}>
        Confirm Password
      </Text>
      <TextInput
        style={{
          height: 45,
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#F6FBFE",
          paddingHorizontal: 20,
        }}
        
      />
      <Button
        title={"Change number"}
        style={{ marginTop: 40, backgroundColor: "green", color: "#fff" }}
      />
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({});
