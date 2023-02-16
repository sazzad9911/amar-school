import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Button from "../../components/main/Button";
import { useSelector } from "react-redux";
import { createAssignments } from "../../apis/courses";
import { pickDocument } from "./AddResource";
import ActivityLoader from "../../components/ActivityLoader";


const CreateAssignment = ({navigation,route}) => {
  const data=route.params.data;
  const userInfo=useSelector(state=>state.userInfo)
  const [name,setName]=useState()
  const [marks,setMarks]=useState()
  const [details,setDetails]=useState()
  const [file,setFile]=useState()
  const [loader,setLoader]=useState(false)

  const save=()=>{
    setLoader(true)
    //console.log(file)
    if(!name||!details||!marks||!file){
      Alert.alert("All field are required")
      return
    }
    if(file.type.split("/")[1]!="zip"&&file.type.split("/")[1]!="pdf"){
      Alert.alert("Select zip of pdf file")
      return
    }
    createAssignments(userInfo,data.uuid,name,data.id,details,marks,file).then(res=>{
      setLoader(false)
      navigation.goBack() 
    }).catch(err=>{
      setLoader(false)
      Alert.alert(err.response.data.message)
    })
  }
  if(loader){
    return <ActivityLoader/>
  }
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : null}
    keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} style={{
      flex:1,
    }}>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            fontWeight: "400",
          }}
        >
          Assignment Topic
        </Text>
        <TextInput onChangeText={setName}
          placeholder="Enter your assignment topic"
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            fontWeight: "400",
          }}
        >
          Assignment Marks
        </Text>
        <TextInput keyboardType="number-pad" onChangeText={setMarks}
          placeholder="Enter your assignment marks"
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            marginBottom: 10,
            fontWeight: "400",
          }}
        >
          Assignment Details
        </Text>
        <Pressable
          style={{
            height: 150,
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        >
          <TextInput onChangeText={setDetails}
            placeholder="Enter your assignment details"
            style={{
              height: 50,
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
          />
        </Pressable>
        <Pressable onPress={()=>{
          pickDocument().then(res=>{
            setFile(res)
          })
          
        }}
          style={{
            height: 150,
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ textAlign: "center" }}>{file?"Uploaded":"File"}</Text>
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Button onPress={()=>{
            navigation.goBack()
          }} style={{ width: 80 }} title="Back" />
          <Button onPress={()=>{
            save()
          }}
            style={{ width: 80, backgroundColor: "green", color: "#fff" }}
            title="Create"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateAssignment;

const art = StyleSheet.create({
  rules: {
    marginLeft: 10,
    fontSize: 13,
  },
  headline: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "500",
  },
  mediumText: {
    fontSize: 16,
  },
  inputBox: {
    height: 55,
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    backgroundColor: "#fff",
    flex: 1,
  },
  but: {
    width: 100,
    marginTop: 10,
    backgroundColor: "green",
    color: "#fff",
    marginBottom: 10,
  },
  but1: {
    width: 100,
    marginTop: 10,
    backgroundColor: "#FF0000",
    color: "#fff",
    marginBottom: 10,
  },
  drop: {
    height: 55,
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  smalltext: {
    fontSize: 13,
    fontWeight: "300",
  },
});
