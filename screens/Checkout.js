import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import DropDown from "../components/DropDown";
import CheckBox from "../components/CheckBox";
import Button from "../components/main/Button";
import SSLCommerzPayment from "sslcommerz-lts";
import WebView from "react-native-webview";
const country = ["Bangladesh"];
const state = [
  "Barisal",
  "Chattogram",
  "Comilla",
  "Dhaka",
  "Gazipur",
  "Khulna",
  "Mymensing",
  "Narayanganj",
  "Ragshahi",
  "Rangpur",
  "Sylhet",
];
const city = [
  "Barisal",
  "Chattogram",
  "Comilla",
  "Dhaka",
  "Gazipur",
  "Khulna",
  "Mymensing",
  "Narayanganj",
  "Ragshahi",
  "Rangpur",
  "Sylhet",
];

const gender = ["Male", "Female", "Others"];

const Checkout = ({ navigation, route }) => {
  const total = route.params.total;
  const discount = route.params.discount;
  const charge = route.params.charge;
  const [ssl, setSSL] = useState(false);
  const [checked, setChecked] = useState(false);
  const [link, setLink] = useState();

  const pay = async () => {
    const store_id = "amarschoolcombdlive";
    const store_passwd = "63D90503451C994999";
    const data = {
      total_amount: 100,
      currency: "BDT",
      tran_id: "REF123", // use unique tran_id for each api call
      success_url: "success",
      fail_url: "failed",
      cancel_url: "cancel",
      ipn_url: "ipn",
      shipping_method: "Courier",
      product_name: "Computer.",
      product_category: "Electronic",
      product_profile: "general",
      cus_name: "Customer Name",
      cus_email: "customer@example.com",
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, true);
    sslcz.init(data).then((apiResponse) => {
      // Redirect the user to payment gateway
      let GatewayPageURL = apiResponse.GatewayPageURL;
      //res.redirect(GatewayPageURL)
      setLink(GatewayPageURL);
      navigation.navigate("PaymentPage", { url: GatewayPageURL })
      console.log("Redirecting to: ", GatewayPageURL);
    });
  };

  if (link) {
    navigation.navigate("PaymentPage", { url: link });
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingHorizontal: 20 }}>
      <View style={{ height: 20 }} />
      <Text style={art.headline}>Billing Address</Text>
      <Text style={art.headline}>First Name</Text>
      <TextInput style={art.in} />
      <Text style={art.headline}>Last Name</Text>
      <TextInput style={art.in} />
      <Text style={art.headline}>Email Address</Text>
      <TextInput style={art.in} />
      <Text style={art.headline}>Address</Text>
      <TextInput style={art.in} />
      <Text style={art.headline}>Country</Text>
      <DropDown
        style={art.drop}
        DATA={country}
        placeholder={"Select Country"}
      />
      <Text style={art.headline}>State</Text>
      <DropDown style={art.drop} DATA={state} placeholder={"Select State"} />
      <Text style={art.headline}>City</Text>
      <DropDown style={art.drop} DATA={city} placeholder={"Select City"} />
      <Text style={art.headline}>Zip Code</Text>
      <TextInput style={art.in} />
      <Text style={art.headline}>Phone Number</Text>
      <TextInput style={art.in} />
      <Text style={art.headline}>Payment Method</Text>
      <CheckBox
        value={ssl}
        onChange={() => {
          setSSL((val) => !val);
        }}
        title={"SSLCOMMERZ"}
      />
      <Text style={{ marginTop: 10 }}>
        We protect your payment information using encryption to provide
        bank-level security
      </Text>
      <Text style={art.headline}>Billing Summary</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}>
        <View>
          <Text>Subtotal</Text>
          <Text>Discount</Text>
          <Text>Platform Charge</Text>
        </View>
        <View>
          <Text style={{ textAlign: "right" }}>৳ {total}</Text>
          <Text style={{ textAlign: "right" }}>- ৳ {discount}</Text>
          <Text style={{ textAlign: "right" }}>৳ {charge}</Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#707070",
          marginVertical: 5,
        }}></View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}>
        <View>
          <Text>Grand Total</Text>
          <Text>Conversion Rate</Text>
        </View>
        <View>
          <Text style={{ textAlign: "right" }}>
            ৳ {parseFloat(total) + parseFloat(charge) - parseFloat(discount)}
          </Text>
          <Text style={{ textAlign: "right" }}>1 ৳ = 1 BDT</Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#707070",
          marginVertical: 5,
        }}></View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}>
        <View>
          <Text>InBDT</Text>
        </View>
        <View>
          <Text style={{ textAlign: "right" }}>
            ৳ {parseFloat(total) + parseFloat(charge) - parseFloat(discount)}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
        }}>
        <CheckBox
          style={{ marginTop: 10 }}
          value={checked}
          onChange={() => {
            setChecked((val) => !val);
          }}
        />
        <Text
          style={{
            width: "90%",
          }}>
          Please check to acknowledge our Privacy & Terms Policy
        </Text>
      </View>
      <Button
        onPress={() => {
          if (!checked || !ssl) {
            return;
          }
          pay();
        }}
        title={"PAY"}
        style={{
          height: 40,
          borderRadius: 5,
          backgroundColor: "green",
          color: "#fff",
          marginTop: 20,
        }}
      />
    </ScrollView>
  );
};

export default Checkout;

const art = StyleSheet.create({
  headline: {
    fontSize: 16,
    fontWeight: "500",
    color: "green",
    marginVertical: 5,
  },
  in: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e5e5e5",
  },
  drop: {
    height: 55,
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    borderColor: "#e5e5e5",
    borderWidth: 1,
  },
});
