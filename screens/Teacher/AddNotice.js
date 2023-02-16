import { StyleSheet, Text, View, TextInput, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../../components/main/Button";
import { useSelector } from "react-redux";
import { addInstructorNotices } from "../../apis/courses";

const AddNotice = (props) => {
  const userInfo=useSelector(state=>state.userInfo)
  const data=props.route.params.data;
  const [topic,setTopic]=useState()
  const [details,setDetails]=useState()

 const save=()=>{
  addInstructorNotices(userInfo,data.uuid,topic,details).then(res=>{
    props.navigation.goBack()
  }).catch(err=>{
    Alert.alert(err.response.data.message)
  })
 }
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "400" }}>Notice Topic</Text>
      <TextInput onChangeText={setTopic}
        placeholder="Notice Topic"
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          borderRadius: 10,
          marginVertical: 10,
        }}
      />
      <Text style={{ fontSize: 18, fontWeight: "400", marginTop: 20 }}>
        Notice Details
      </Text>
      <Pressable style={{ height: 150, backgroundColor: "#fff",marginTop:10,borderRadius:10 }}>
        <TextInput onChangeText={setDetails}
          placeholder="Notice Details"
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            borderRadius: 10,
            marginVertical: 10,
           
          }}
        />
      </Pressable>
      <View style={{justifyContent:'flex-end',width:'100%'}}>
      <Button onPress={() => {
        save()
            //props.navigation.navigate("NoticeViewList");
          }}   title={'Create'} style={{width:100,backgroundColor:'green',color:"#fff",marginTop:30 }}/>
      </View>
    </View>
  );
};

export default AddNotice;

const styles = StyleSheet.create({});
