import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import DropDownCart from "../../components/main/DropDownCart";

export default function Help() {
  return (
    <ScrollView>
      <DropDownCart
        onPress={() => {
          Alert.alert("Oh!", "You clicked");
        }}
        title={"1. Where Can I See The Status Of My Refund?"}
        description="In The Refund Status Column You Can See The Date Your Refund Request Was Submitted Or When It Was Processed"
      />
      <DropDownCart
        onPress={() => {
          Alert.alert("Oh!", "You clicked");
        }}
        title={"2. When Will I Receive My Refund?"}
        description="Refund Requests Are Submitted Immediately To Your Payment ProcessOr Or FInancial InstitutiOn After Udemy Has Received And Processed Your Request. It May Take 5 To 10 BusIness Days Or LOnger To Post The Funds In Your Account, dependIng On Your FInancial InstitutiOn Or locatiOn"
      />
      <DropDownCart
        onPress={() => {
          Alert.alert("Oh!", "You clicked");
        }}
        title={"3.Why Was My Refund Request Denied?"}
        description="All Eligible COurses Purchased On Udemy Can Be Refunded WithIn 30 Days, Provided The Request Meets The GuidelInes In Our Refund Policy."
      />
      <DropDownCart
        onPress={() => {
          Alert.alert("Oh!", "You clicked");
        }}
        title={"4.What Is'Credit Refund'?"}
        description="In CAses Where A trAnsAction Is Not Eligible For A Refund To Your originAl pAyment Method, The Refund Will Be grAnted Using Lmszai Credit"
      />
      <DropDownCart
        onPress={() => {
          Alert.alert("Oh!", "You clicked");
        }}
        title={"5. Where Can I See The Status Of My Refund"}
        description="In The Refund Status Column You Can See The Date Your Refund Request Was SubmItted Or When It Was Processed."
      />
      <DropDownCart
        onPress={() => {
          Alert.alert("Oh!", "You clicked");
        }}
        title={"6. Ehen Will I Received My Refund"}
        description="Refund Requests Are Submitted Immediately To Your Payment ProcessOr Or FInancial InstitutiOn After Udemy Has Received And Processed Your Request. It May Take 5 To 10 BusIness Days Or LOnger To Post The Funds In Your Account, dependIng On Your FInancial InstitutiOn Or locatiOn."
      />
      <DropDownCart
        onPress={() => {
          Alert.alert("Oh!", "You clicked");
        }}
        title={"7. Why Was My Refund Request Denied?"}
        description="All Eligible COurses Purchased On Udemy Can Be Refunded WithIn 30 Days, Provided The Request Meets The GuidelInes In Our Refund Policy."
      />
      <DropDownCart
        onPress={() => {
          Alert.alert("Oh!", "You clicked");
        }}
        title={"8. What Is A 'credit Refund'?"}
        description="In CAses Where A trAnsAction Is Not Eligible For A Refund To Your originAl pAyment Method, The Refund Will Be grAnted Using Lmszai Credit"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
