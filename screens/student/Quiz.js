import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../../components/main/Button";
import CheckBox from '../../components/CheckBox'
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { getAllQuiz } from "../../apis/quiz";


const Quiz = ({navigation,route}) => {
  const course=route.params.course;
  const [quiz,setQuiz]=useState()
  const userInfo=useSelector(state=>state.userInfo)
  const isFocused=useIsFocused()

  useEffect(()=>{
    if(userInfo){
      if (userInfo) {
        getAllQuiz(userInfo, data.uuid)
          .then((res) => {
            setQuiz(res.data.data.exams);
          })
          .catch((err) => {
            //console.log(err)
            Alert.alert(err.response.data.message);
          });
      }
    }
  },[userInfo,course,isFocused])
  return (
    <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <View style={art.UpCircle}>
        <Text>45</Text>
      </View>
      <View style={art.rectangle}>
        <Text style={art.qus}>
          Which country won the 2022 Cricket World Cup?
        </Text>
      </View>
      <View style={art.qusBox}>
        <Text>Pakistan</Text>
        <View><CheckBox/></View>
      </View>
      <View style={art.qusBox}>
        <Text>England</Text>
        <View><CheckBox/></View>
      </View>
      <View style={art.qusBox}>
        <Text>India</Text>
        <View><CheckBox/></View>
      </View>
      <View style={art.qusBox}>
        <Text>Bangladesh</Text>
        <View><CheckBox/></View>
      </View>
      <Button title={"পরবর্তী"}
              style={{
                backgroundColor: '#006600',
                height: 55,
                color: '#fff',
                fontWeight: '900',
                fontSize: 18,
                borderRadius: 20,
                width: 320,
                marginTop:'30%'
              }} />
    </ScrollView>
  );
};

export default Quiz;

const art = StyleSheet.create({
  rectangle: {
    width: "100%",
    height: 180,
    backgroundColor: "#B0E1F6",
    borderRadius: 20,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingTop: 40,
    marginBottom: 20,
  },
  UpCircle: {
    height: 60,
    width: 60,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: "#006600",
    position: "absolute",
    zIndex: 5,
    backgroundColor: "#fff",
    left: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  qus: {
    fontSize: 16,
    fontWeight: "600",
  },
  qusBox: {
    height: 55,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#808080",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom:10,
   justifyContent:'space-between'
  },
});
