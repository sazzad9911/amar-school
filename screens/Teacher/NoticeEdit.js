import { StyleSheet, Text, View, Pressable, TextInput, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import Button from "../../components/main/Button";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { editInstructorNotices } from "../../apis/courses";

const NoticeEdit = (props) => {
  const [topic, setTopic] = useState();
  const [details, setDetails] = useState();
  const userInfo = useSelector((state) => state.userInfo);
  const isFocused = useIsFocused();
  const params=props.route.params;
  const data=params.data;
  const uuid=params.uuid;
  //console.log(uuid)
  useEffect(()=>{
    if(data){
      setDetails(data.details)
      setTopic(data.topic)
    }
  },[data])

  const save=()=>{
    editInstructorNotices(userInfo,data.uuid,uuid,topic,details).then(res=>{
      props.navigation.goBack()
    }).catch(err=>{
      Alert.alert(err.response.data.message)
    })
  }
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "400" }}>Notice Topic</Text>
      <TextInput value={topic} onChangeText={setTopic}
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
      <Pressable
        style={{
          height: 150,
          backgroundColor: "#fff",
          marginTop: 10,
          borderRadius: 10,
        }}
      >
        <TextInput value={details} onChangeText={setDetails}
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
      <View style={{ justifyContent: "flex-end", width: "100%" }}>
        <Button
          onPress={() => {
            save()
            //props.navigation.navigate("NoticeViewList");
          }}
          title={"Update"}
          style={{
            width: 100,
            backgroundColor: "green",
            color: "#fff",
            marginTop: 30,
          }}
        />
      </View>
    </View>
  );
};

export default NoticeEdit;

const styles = StyleSheet.create({});
