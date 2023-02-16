import React, { useState } from "react";
import { Alert, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { useSelector } from "react-redux";
import { pay } from "../apis/courses";

const { width, height } = Dimensions.get("window");
export default function PaymentPage({ navigation, route }) {
  const url = route.params.url;
  const id = route.params.id;
  const [value, setValue] = useState();
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <WebView
      
      onNavigationStateChange={(urls) => {
        //console.log(urls)
        if (
          urls.url == "https://securepay.sslcommerz.com/redirections/success"
        ) {
          Alert.alert("Success", "Payment Success, please wait...");
          pay(userInfo)
            .then((res) => {
              navigation.navigate("MyLearning");
            })
            .catch((err) => {
              console.error(err.response.data.message);
            });
        } else if (
          urls.url == "https://securepay.sslcommerz.com/gwprocess/v4/faild"
        ) {
          Alert.alert("Payment Failed");
          navigation.goBack();
        } else if (
          urls.url == "https://securepay.sslcommerz.com/gwprocess/v4/cancel" ||
          urls.url == "https://securepay.sslcommerz.com/gwprocess/v4/ipn"
        ) {
          navigation.goBack();
        }
      }}
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
      source={{ uri: url }}
    />
  );
}
