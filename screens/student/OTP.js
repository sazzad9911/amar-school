import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { logInUser, resentOTP, sendOTP, verifyOTP } from "../../apis/auth";
import ActivityLoader from "../../components/ActivityLoader";
import Button from "../../components/main/Button";
import { storeData } from "../../functions/storage";
import { setUserInfo } from "../../functions/userInfo";

const HEIGHT = Dimensions.get("window").height;
function OTP(props) {
  const [One, setOne] = React.useState();
  const [Two, setTwo] = React.useState();
  const [Three, setThree] = React.useState();
  const [Four, setFour] = React.useState();
  const params = props.route.params;
  const PhoneNumber = params.PhoneNumber;
  const Password = params.Password;
  //const OTP=params.otp;
  const [OTP, setOtp] = useState(params.otp);
  const twoRef = React.useRef();
  const threeRef = React.useRef();
  const fourRef = React.useRef();
  const oneRef=React.useRef()
  const [Counter, setCounter] = React.useState(0);
  const dispatch = useDispatch();
  const [loader,setLoader]=useState(false)

  React.useEffect(() => {
    setInterval(() => {
      setCounter((val) => {
        if (val < 23) {
          return val + 1;
        }
        return val;
      });
    }, 10000);
  }, []);
  if(loader){
    return <ActivityLoader/>
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}>
      <View
        style={{
          alignItems: "center",
          paddingVertical: 30,
          backgroundColor: "#fff",
          height: "100%",
        }}>
        <Text style={[art.localText, {}]}>{PhoneNumber}</Text>
        <Text style={art.localText}>
          Enter the 4 digit code sent to this number
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
          }}>
          <View style={art.box}>
            <TextInput value={One}
              onKeyPress={() => {
                if (twoRef) {
                  twoRef.current.focus();
                }
              }}
              ref={oneRef}
              onChangeText={(e) => {
                if(e?.split("")?.length>1){
                  return
                }
                setOne(e);
                //console.log(twoRef)
              }}
              style={art.OTPinput}
              keyboardType="number-pad"></TextInput>
          </View>
          <View style={art.box}>
            <TextInput value={Two}
              onKeyPress={() => {
                if (threeRef) {
                  threeRef.current.focus();
                }
              }}
              ref={twoRef}
              onChangeText={e=>{
                if(e?.split("")?.length>1){
                  return
                }
                setTwo(e)
              }}
              style={art.OTPinput}
              keyboardType="number-pad"></TextInput>
          </View>
          <View style={art.box}>
            <TextInput value={Three}
              onKeyPress={() => {
                if (fourRef) {
                  fourRef.current.focus();
                }
              }}
              ref={threeRef}
              onChangeText={e=>{
                if(e?.split("")?.length>1){
                  return
                }
                setThree(e)}}
              style={art.OTPinput}
              keyboardType="number-pad"></TextInput>
          </View>
          <View style={art.box}>
            <TextInput value={Four}
              ref={fourRef}
              onChangeText={e=>{
                if(e?.split("")?.length>1){
                  return
                }
                setFour(e)
              }}
              style={art.OTPinput}
              keyboardType="number-pad"></TextInput>
          </View>
        </View>
        <Text style={[art.localText, { marginTop: 30 }]}>
          Didn't get a code?
        </Text>
        <Text style={art.localText}>
          Please wait to request again : {Counter}
        </Text>
        <View
          style={{
            bottom: 10,
            position: "absolute",
            width: "100%",
            left: "5%",
          }}>
          <Button
            onPress={() => {
              if (!PhoneNumber) {
                Alert.alert("Phone number required");
                return;
              }
              if (Counter > 22) {
                setOne()
                setTwo()
                setThree()
                setFour()
                if (oneRef) {
                  oneRef.current.focus();
                }
                var O = Math.floor(1000 + Math.random() * 9000);
                setLoader(true);
                console.log(O);
                sendOTP(PhoneNumber, O)
                  .then((res) => {
                    setLoader(false);
                    setOtp(O)
                  })
                  .catch((e) => {
                    setLoader(false);
                    Alert.alert("Ops!", e.response.data.message);
                  });
                  setCounter(0)
                return;
              }
              let otp = `${One}${Two}${Three}${Four}`;
              if (!otp.toString().match(OTP.toString())) {
                Alert.alert("Ops!", "Otp not matched");
                return;
              }
              console.log(OTP);
              props.navigation.navigate("PersonalInfo", {
                PhoneNumber: PhoneNumber,
              });
              // verifyOTP(PhoneNumber,`${One}${Two}${Three}${Four}`).then(res=>{
              //   logInUser(PhoneNumber,Password).then(res=>{
              //     dispatch(setUserInfo(res.data));
              //     storeData("userInfo", res.data);
              //     props.navigation.navigate("UserTabRoute");
              //   }).catch(err=>{
              //     Alert.alert(err.response.data.message)
              //   })
              // }).catch(err=>{
              //   Alert.alert("Ops!",err.response.data.message)
              // })
            }}
            title={Counter > 22 ? "Request Again" : "Go ahead"}
            style={{
              backgroundColor: "#006600",
              height: 55,
              color: "#fff",
              fontWeight: "bold",
              borderRadius: 20,
              fontSize: 22,
              width: "90%",
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default OTP;
const art = StyleSheet.create({
  box: {
    height: 65,
    width: 65,
    backgroundColor: "#FFFDD0",
    marginTop: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  localText: {
    fontSize: 16,
    color: "#6F7071",
    textAlign: "center",
  },
  OTPinput: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
    height: 65,
    width: 65,
    borderRadius: 10,
  },
});
