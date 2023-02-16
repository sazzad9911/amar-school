import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WithdrawCart = ({ id, date, amount, method, status, receipt }) => {
  return (
    <View style={{ flexDirection: "row",backgroundColor:'#fff',borderRadius:10,borderWidth:1,borderColor:'#e5e5e5',padding:10,marginBottom:10 }}>
      <View
        style={{ marginRight: 20, justifyContent: "space-between", width: 120 }}
      >
        <View style={{ justifyContent: "space-between",flexDirection:'row' }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>ID</Text>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>:</Text>
        </View>
        <View style={{ justifyContent: "space-between",flexDirection:'row' }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Date </Text>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>:</Text>
        </View>
        <View style={{ justifyContent: "space-between",flexDirection:'row' }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Amount</Text>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>:</Text>
        </View>
        <View style={{ justifyContent: "space-between",flexDirection:'row' }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Method </Text>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>:</Text>
        </View>
        <View style={{ justifyContent: "space-between",flexDirection:'row' }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>Receipt</Text>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>:</Text>
        </View>
        
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "400", }}>{id}</Text>
        <Text style={{ fontSize: 16, fontWeight: "400" }}>{date}</Text>
        <Text style={{ fontSize: 16, fontWeight: "400" }}>{amount}</Text>
        <Text style={{ fontSize: 16, fontWeight: "400" }}>{method}</Text>
        <Text style={{ fontSize: 16, fontWeight: "400", color: "green" }}>
          {status}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: "400", color: "red" }}>{receipt}</Text>
      </View>
    </View>
  );
};

export default WithdrawCart;

const styles = StyleSheet.create({});
