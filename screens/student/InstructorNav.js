import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { getAllInstructor } from "../../apis/instructor";


const InstructorNav = ({navigation,route}) => {
  const data=route.params.data?route.params.data:null;
  //console.log(data)
  const userInfo=useSelector(state=>state.userInfo)
  const [instructorDetails,setInstructorDetails]=useState()

  useEffect(()=>{
    if(userInfo){
      getAllInstructor(userInfo).then(res=>{
        let info=res.data.data.instructors.data.filter(d=>d.user_id==data.user_id);
        if(info.length>0){
          info=info[0]
          setInstructorDetails(info)
          //console.log(info)
        }
      })
    }
  },[])
  return (
    <View>
      <Text style={{ fontSize: 16,marginVertical:5,fontWeight:'500',marginTop:20 }}>Meet Your Instructor</Text>
      <View style={{ alignItems: "center" }}>
        {/* <Image
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
          }}
          source={{
            uri: "https://lmszai.zainikthemes.com/uploads/user/1669903389-ARXS2mtKaM.jpg",
          }}
        /> */}
        <Text style={{ fontSize: 16, fontWeight: "500",marginTop:20 }}>{`${instructorDetails?.first_name} ${instructorDetails?.last_name}`}</Text>
        <Text style={{ fontSize: 10 }}>{instructorDetails?.gender}</Text>
        <View
          style={{
            height: 25,
            width: 70,
            borderRadius: 5,
            backgroundColor: "#e5e5e5",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 14 }}>Instructor</Text>
        </View>
       <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%'}}>
       <View
          style={{
            
            width: "35%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Entypo name="star-outlined" size={18} color="red" />
            <Text style={{marginLeft:5}}>Rate BDT: {instructorDetails&&instructorDetails.hourly_rate?instructorDetails.hourly_rate:"N/A"}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <SimpleLineIcons name="badge" size={16} color="green" />
            <Text style={{marginLeft:5}}>Author Status {instructorDetails?.status}</Text>
          </View>
        </View>
        <View
          style={{
            
            width: "35%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="graduation-cap" size={14} color="red" />
            <Text style={{marginLeft:5}}>{instructorDetails?.consultation_available} Students</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="tv" size={14} color="green" />
            <Text style={{marginLeft:5}}>{instructorDetails?.available_type} Type</Text>
          </View>
        </View>
       </View>
      </View>
      <Text style={{ fontSize: 16,fontWeight:'500',marginTop:10,marginBottom:5 }}>About Instructor</Text>
      <Text style={{ fontSize: 13,textAlign:'justify' }}>{instructorDetails&& instructorDetails.about_me?
      instructorDetails.about_me:"N/A"}</Text>
    </View>
  );
};

export default InstructorNav;

const styles = StyleSheet.create({});
