import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import Button from "../components/main/Button";
import { SvgXml } from "react-native-svg";
import { FontAwesome } from "@expo/vector-icons";
import { student1, profile, pen } from "../assets/icon";
import { StatusBar } from "expo-status-bar";
import CheckBox from "../components/CheckBox";
import {userRegistration} from "../apis/auth"
import ActivityLoader from "../components/ActivityLoader"
import { useDispatch } from "react-redux";
import { setUserInfo } from "../functions/userInfo";
import { storeData } from "../functions/storage";

const HEIGHT = Dimensions.get("window").height;
function PersonalInfo(props) {
  const [Focus, setFocus] = React.useState(false);
  const [Visible, setVisible] = React.useState(false);
  const [FirstName, setFirstName] = React.useState();
  const [SecondName, setSecondName] = React.useState();
  const [Password, setPassword] = React.useState();
  const [Checked, setChecked] = React.useState();
  const params=props.route.params;
  const PhoneNumber=params.PhoneNumber;
  const [Loader,setLoader]=React.useState(false)
  const dispatch=useDispatch()

  React.useEffect(() => {
    if (props.visible) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  }, [props.visible]);

  const art = StyleSheet.create({
    localText: {
      fontSize: 17,
      color: "#6F7071",
      textAlign: "center",
    },
    bigText: {
      color: "#6F7071",
      fontSize: 18,
      fontWeight: "600",
    },
    tInput: {
      height: 55,
      width: "100%",
      backgroundColor: "#FFFDD0",
      marginTop: 10,
      borderRadius: 10,
      justifyContent: "center",
      padding: 10,
    },
    dateBox: {
      height: 65,
      width: "25%",
      backgroundColor: "#FFFDD0",
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      marginRight: 5,
    },
    dateBox2: {
      height: 65,
      width: "40%",
      backgroundColor: "#FFFDD0",
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      marginRight: 5,
    },
    forText: {
      textAlign: "center",
      fontSize: 17,
      color: "#6F7071",
    },
    user: {
      height: 150,
      width: "48%",
      backgroundColor: "#FFFDD0",
      borderWidth: 1,
      borderColor: Focus ? "#006600" : "#FFFDD0",
      borderRadius: 20,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    user1: {
      height: 150,
      width: "48%",
      backgroundColor: "#FFFDD0",
      borderWidth: 1,
      borderColor: Visible ? "#006600" : "#FFFDD0",
      borderRadius: 20,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
    },
  });
if(Loader){
    return(
        <ActivityLoader/>
    )
}
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
    
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ marginTop: 10 }}>First Name</Text>
        <View
          style={{
            height: 45,
            width: "100%",
            borderWidth: 1,
            borderColor: "#808080",
            borderRadius: 10,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        >
          <TextInput
            onChangeText={setFirstName}
            style={{
              color: "black",
              fontSize: 18,
              height: 55,
            }}
            placeholder="Enter your first name"
          ></TextInput>
        </View>
        <Text style={{ marginTop: 10 }}>Last Name</Text>
        <View
          style={{
            height: 45,
            width: "100%",
            borderWidth: 1,
            borderColor: "#808080",
            borderRadius: 10,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        >
          <TextInput
            onChangeText={setSecondName}
            style={{
              color: "black",
              fontSize: 18,
              height: 55,
            }}
            placeholder="Enter your last name"
          ></TextInput>
        </View>
        <Text style={{ marginTop: 10 }}>Password</Text>
        <View
          style={{
            height: 45,
            width: "100%",
            borderWidth: 1,
            borderColor: "#808080",
            borderRadius: 10,
            justifyContent: "center",
            paddingHorizontal: 10,
            marginTop: 10,
          }}
        >
          <TextInput
            onChangeText={setPassword}
            style={{
              color: "black",
              fontSize: 18,
              height: 55,
            }}
            placeholder="Enter  Password"
          ></TextInput>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <CheckBox
            value={Checked}
            onChange={() => {
              setChecked(!Checked);
            }}
          />
          <Text>I agree with all the terms and conditions.</Text>
        </View>
        <Button
          onPress={() => {
            if (!FirstName || !SecondName || !Password || !Checked) {
              Alert.alert("Ops!", "All fields are required.");
              return;
            }
            setLoader(true)
            userRegistration(FirstName,SecondName,Password,PhoneNumber,Password)
            .then(res=>{
                setLoader(false)
                console.log(res.data)
                props.navigation.navigate("OTP",{PhoneNumber:PhoneNumber,Password:Password});
            }).catch(err=>{
                setLoader(false)
                Alert.alert("Ops!",err.response.data.message)
            })
            
          }}
          title={"Submit"}
          style={{
            backgroundColor: "#006600",
            height: 55,
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 20,
            fontSize: 22,
            width: "100%",
            marginTop: 30,
          }}
        >
          {" "}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

export default PersonalInfo;
