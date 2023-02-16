import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SvgXml } from "react-native-svg";
import { pen, profile } from "../../assets/icon";
import Button from "../../components/main/Button";
import CheckBox from "../../components/CheckBox";
import { useSelector } from "react-redux";
import { getInstructorDetails } from "../../apis/instructor";
import { pickDocument } from "../student/AssignmentDetails";
import { pickImage } from "./TeacherProfile";


const ViewProfile = () => {
  const userInfo=useSelector(state=>state.userInfo)
  const instructorInfo=useSelector(state=>state.instructorInfo)
  const ref=useRef()
  const [firstName,setFirstName]=useState()
  const [secondName,setSecondName]=useState()
  const [title,setTitle]=useState()
  const [about,setAbout]=useState()
  const [cv,setCv]=useState()
  const [image,setImage]=useState()
  //console.log(instructorInfo)

  useEffect(()=>{
    if(instructorInfo){

    }
  },[instructorInfo])

  return (
    <ScrollView style={{ paddingHorizontal: 20, marginBottom: 20 }}>
      <View style={{ marginLeft: "30%", marginTop: 50, position: "absolute" }}>
        <View style={art.pro}>
          {image?(
            <Image source={{uri:image.uri}} style={{
              width:116,
              height:116,
              borderRadius:58
            }} />
          ):(<SvgXml xml={profile} height="116" width="116" />)}
        </View>
        <TouchableOpacity onPress={()=>{
          pickImage().then(res=>{
            setImage(res)
          })
        }} style={{ marginTop: 70 }}>
          <SvgXml xml={pen} height="30" width="30" marginLeft="55%" />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 190 }}>
        <Text style={art.bText}>First Name</Text>
        <TextInput style={art.tInput} />
        <Text style={art.bText}>Last Name</Text>
        <TextInput style={art.tInput} />
        {/* <Text style={art.bText}>Email</Text>
        <TextInput style={art.tInput} /> */}
        <Text style={art.bText}>Professional Title</Text>
        <TextInput style={art.tInput} />
        {/* <Text style={art.bText}>Phone Number</Text>
        <TextInput style={art.tInput} /> */}
        <Text style={art.bText}>Bio</Text>
        <TouchableOpacity onPress={()=>{
          if(ref){
            ref.current.focus()
          }
        }}
          style={{
            borderWidth: 1,
            marginTop: 5,
            height: 100,
            width: "100%",
            borderColor: "#707070",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <TextInput ref={ref} />
        </TouchableOpacity>
        {/* <Text style={art.bText}>Gender</Text>
        <View style={{flexDirection:'row',marginTop:10}}>
          <View style={{flexDirection:'row',marginLeft:20,}}>
            <CheckBox/>
            <Text>Male</Text>
          </View>
          <View style={{flexDirection:'row',marginLeft:20}}>
            <CheckBox/>
            <Text>Female</Text>
          </View>
          <View style={{flexDirection:'row',marginLeft:20}}>
            <CheckBox/>
            <Text>Others</Text>
          </View>
        </View> */}
        <Text style={art.bbText}>Social Links</Text>
        <Text style={art.bText}>Facebook</Text>
        <TextInput style={art.tInput} />
        <Text style={art.bText}>Twitter</Text>
        <TextInput style={art.tInput} />
        <Text style={art.bText}>Linkedin</Text>
        <TextInput style={art.tInput} />
        <Text style={art.bText}>Pinterest</Text>
        <TextInput style={art.tInput} />
        <Text style={art.bText}>Linkedin</Text>
        <TextInput style={art.tInput} />
        <Text style={art.bbText}>Skills</Text>
        <Text style={art.bText}>Skills Name</Text>
        <TextInput style={art.tInput} />
        <Text style={art.bbText}>Certifications</Text>
      <Button onPress={()=>{
        pickDocument().then(res=>{
          setCv(res)
        })
      }} title={cv?"Done":'Add Certificate'}/>
      {/* <Text style={art.bbText}>Awards</Text>
      <Button title={'Add More Award'}/> */}
      <Button title={'Save Profile Now'} style={{marginTop: 20,
          backgroundColor: "#51B7FB",
          borderRadius: 20,
          color: "#fff",
          fontSize: 18,}}/>
      </View>
    </ScrollView>
  );
};

export default ViewProfile;

const art = StyleSheet.create({
  pro: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderColor: "#B0E1F6",
    position: "absolute",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  bText: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 5,
  },
  tInput: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#707070",
    marginTop: 5,
    padding: 10,
    fontSize: 16,
  },
  bbText:{fontSize:20,fontWeight:'500',marginVertical:10}

});
