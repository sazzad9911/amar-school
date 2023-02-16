import React, { useState } from "react";
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
  Alert,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { SvgXml } from "react-native-svg";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../../components/main/Button";
import { profile, pen, ladyTeacher, maleTeacher } from "../../assets/icon";
import FilePicker from "react-native-document-picker";
import {
  becomeInstructor,
  getInstructorProfile,
  saveInstructorInfo,
} from "../../apis/instructor";
import { pickDocument } from "./AddResource";
import { useDispatch, useSelector } from "react-redux";
import { setInstructorInfo } from "../../functions/instrcutorInfo";
import ActivityLoader from "../../components/ActivityLoader";
import * as FileSystem from "expo-file-system";

const HEIGHT = Dimensions.get("window").height;
function TeacherInfo(props) {
  const [Focus, setFocus] = React.useState(false);
  const [Visible, setVisible] = React.useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [title, setTitle] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [bio, setBio] = useState();
  const [cv, setCv] = useState();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  //console.log(userInfo.meta.token)

  // const handleFileicker = async () => {
  //     try{
  //         await FilePicker.pick({
  //             presentationStyle:'fullScreen',
  //         });
  //     } catch (err){
  //         console.log(err);
  //     }
  // };

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
  const saveInfo = async () => {
    if (!firstName || !lastName || !title || !cv || !bio) {
      Alert.alert("All fields are required.");
      return;
    }
    setLoader(true);
    becomeInstructor(userInfo.meta.token)
      .then((r) => {
        //console.log(r.data)
        saveInstructorInfo(userInfo, firstName, lastName, title, bio, cv)
          .then((res) => {
            //Alert.alert("Information has saved")
            Alert.alert("Success", "We will send you a notification");
            //getData();
            //console.warn(res)
            // setLoader(false)
          })
          .catch((err) => {
            setLoader(false);
            Alert.alert(err.response.data.message);
          });
      })
      .catch((err) => {
        setLoader(false);
        Alert.alert(err.response.data.error);
      });
  };
  const getData = async () => {
    const res = await getInstructorProfile(userInfo);
    //console.log(res.data)
    setLoader(false);
    if (res.data.data.instructor) {
      dispatch(setInstructorInfo(res.data.data));
      props.navigation.navigate("UserTabRoute");
    } else {
      Alert.alert("Success", "We will send you a confirmation email");
      props.navigation.goBack();
    }
  };

  if (loader) {
    return <ActivityLoader />;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}>
      <View style={{ height: "100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: 20, marginTop: 90 }}>
            <View
              style={{
                height: 120,
                width: 120,
                borderRadius: 60,
                borderColor: "#006600",
                position: "absolute",
                borderWidth: 2,
                marginTop: -60,
                alignItems: "center",
                justifyContent: "center",
                left: "38%",
                overflow: "hidden",
              }}>
              <SvgXml xml={profile} height="116" width="116" />
            </View>
            <View style={{ height: 20 }} />
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <Text style={art.localText}>Give Your Information Here</Text>
            </View>
            <Text style={[art.bigText, { marginTop: 20 }]}>First name</Text>
            <View style={art.tInput}>
              <TextInput
                onChangeText={setFirstName}
                value={firstName}
                style={{
                  color: "black",
                  fontSize: 18,
                  height: 55,
                }}
                placeholder="Entar your first name"></TextInput>
            </View>

            <Text style={[art.bigText, { marginTop: 20 }]}>Last name</Text>
            <View style={art.tInput}>
              <TextInput
                onChangeText={setLastName}
                value={lastName}
                style={{
                  color: "black",
                  fontSize: 18,
                  height: 55,
                }}
                placeholder="Entar your last name"></TextInput>
            </View>
            <Text style={[art.bigText, { marginTop: 20 }]}>
              Professional Title
            </Text>
            <View style={art.tInput}>
              <TextInput
                onChangeText={setTitle}
                value={title}
                style={{
                  color: "black",
                  fontSize: 18,
                  height: 55,
                }}
                placeholder="Your title"></TextInput>
            </View>

            <Text style={[art.bigText, { marginTop: 20 }]}>CV</Text>
            <View>
              <Button
                style={{
                  marginVertical: 10,
                  backgroundColor: cv ? "green" : "white",
                }}
                title={cv ? "Uploaded" : "Upload CV"}
                onPress={async () => {
                  const pickImage = await pickDocument();
                  //const base64 = await FileSystem.readAsStringAsync(pickImage.uri, { encoding: 'base64' });
                  setCv(pickImage);
                }}
              />
            </View>

            <Text style={[art.bigText, { marginTop: 20 }]}>Bio</Text>
            <View style={art.tInput}>
              <TextInput
                value={bio}
                onChangeText={setBio}
                style={{
                  color: "black",
                  fontSize: 18,
                  height: 55,
                }}
                placeholder="About your self"></TextInput>
            </View>

            {/* <Text style={[art.bigText, { marginTop: 10 }]}>Your birthday</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={art.dateBox}>
                        <TextInput style={art.forText}
                            placeholder='Date'
                            keyboardType="numeric">

                        </TextInput>
                    </View>
                    <View style={art.dateBox}>
                        <TextInput style={art.forText}
                            placeholder='Month'
                            keyboardType="numeric">

                        </TextInput>
                    </View>
                    <View style={art.dateBox2}>
                        <TextInput style={art.forText}
                            placeholder='Year'
                            keyboardType="numeric">

                        </TextInput>
                    </View>
                </View>
                <Text style={[art.bigText, { marginTop: 10 }]}>You are a</Text>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <TouchableOpacity
                    onPress={() => {
                        setFocus(!Focus);
                        setVisible(false);
                    }}
                     style={art.user}>
                        <SvgXml xml={maleTeacher} height="70" width="70" />
                        <Text style={art.localText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => {
                        setVisible(!Visible);
                        setFocus(false);
                    }} 
                    style={art.user1}>
                        <SvgXml xml={ladyTeacher} height="70" width="70" />
                        <Text style={art.localText}>Femail</Text>
                    </TouchableOpacity>
                </View> */}
          </View>
        </ScrollView>
        <View style={{ width: "90%", left: "5%" }}>
          <Button
            onPress={() => {
              saveInfo();
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
            }}>
            {" "}
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default TeacherInfo;
