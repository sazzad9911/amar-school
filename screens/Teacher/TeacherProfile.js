import React, { useState,useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { SvgXml } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import {
  profile,
  pen,
  wishlist,
  set,
  logOut,
  headset,
  wifi,
  graph,
  share,
  dollar,
  enroll,
  diamond,
  st,
  upload,
  zoom,
  payment,
  dashboard,
  certificate,
  discuss,
  bundle,
  myCourse,
  nt,
  myCart
} from "../../assets/icon";
import TeacherOptions from "../../components/TeacherParts/TeacherOptions";
import { useDispatch, useSelector } from "react-redux";
import { setInstructorInfo } from "../../functions/instrcutorInfo";
import * as ImagePicker from 'expo-image-picker';
import { useIsFocused } from "@react-navigation/native";
import { getInstructorAnalysis, getInstructorProfile } from "../../apis/instructor";
import { setUserInfo } from "../../functions/userInfo";
import { storeData } from "../../functions/storage";
import { url } from "../../apis/api";
import { pickDocument } from "./AddResource";
import { getStudentProfile, updateStudentProfilePicture } from "../../apis/profile";

const TeacherProfile = (props) => {
  const dispatch=useDispatch()
  const instructorInfo=useSelector(state=>state.instructorInfo)
  const userInfo=useSelector(state=>state.userInfo)
  //console.log(userInfo)
  const [image,setImage]=useState()
  const [analysis,setAnalysis]=useState()
  const isFocused=useIsFocused()
  const [uuid,setUUID]=useState()
  const [loader,setLoader]=useState(false)
  const [student,setStudent]=useState()
  const [user,setUser]=useState()

  useEffect(() => {
    if (userInfo) {
      getInstructorAnalysis(userInfo)
        .then((res) => {
          setAnalysis(res.data.data);
          //console.log(res.data.data)
          // setData({
          //   labels: ["Jun","July"],
          //   datasets: [
          //     {
          //       data: [30,40],
          //     },
          //   ],
          // });
        })
        .catch((err) => {
          Alert.alert(err.response.data.message);
        });
        //console.log(userInfo.meta.token)
        getStudentProfile(userInfo.meta.token).then(res=>{
          setImage(res.data.data.user.image?{
            uri:`${url}${res.data.data.user.image}`
          }:null)
          //console.log(res.data)
          //console.log(res.data.data.user.image)
          //console.log(res.data.data.user.student)
          setStudent(res.data.data.user.student)
          setUser(res.data.data.user)
          setUUID(res.data.data.student.uuid)
        })
    }
  }, [isFocused, userInfo,loader]);

  return (
    <ScrollView>
      {/* <View style={art.icon}>
        <FontAwesome name="edit" size={24} color="black" />
      </View> */}

      <View style={art.fullView}>
        <View style={art.pro}>
          {image?(<Image style={{
            height:116,
            width:116,
            borderRadius:58
          }} source={{uri:image.uri}}/>):(<SvgXml xml={profile} height="116" width="116" />)}
        </View>
        <TouchableOpacity onPress={()=>{
          
          pickDocument().then(res=>{
            if(res.type.split("/")[1]!="jpeg"&&res.type.split("/")[1]!="jpg"&&res.type.split("/")[1]!="png"){
              Alert.alert("Please select image files")
              return
            }
            setImage({
              name:res.name,
              size:res.size,
              type:`image/${res.type.split("/")[1]}`,
              uri:res.uri
            })
            console.log(student)
            updateStudentProfilePicture(userInfo,uuid,{
              name:res.name,
              size:res.size,
              type:`image/${res.type.split("/")[1]}`,
              uri:res.uri
            },student.first_name,student.last_name,user.email,student.gender).then(res=>{
              console.warn(res)
              //setLoader(val=>(!val))
            }).catch(err=>{
              Alert.alert(err.response.data.message)
            })
          })
        }} style={{ marginTop: 10 }}>
          <Entypo  style={{
            marginLeft:"33%",
            backgroundColor:"white",
            borderRadius:20,
            padding:5
          }} name="pencil" size={10} color="black" />
        </TouchableOpacity>

        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Text style={{ fontSize: 22 }}>{userInfo?userInfo.data.name:"Invalid"}</Text>
          {/* <Text style={{ fontSize: 13, marginTop: 5 }}>
          3.3K followers • 378 following
          </Text> */}
          {/* <TouchableOpacity
           onPress={() => {
            props.navigation.navigate("ViewProfile");
          }}
            style={{
              width: 120,
              height: 30,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 14 }}>View Profile</Text>
          </TouchableOpacity> */}
        </View>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <TouchableOpacity style={art.miniBox}>
            <SvgXml xml={dollar} height="30" width="30" />
            <Text style={{ fontSize: 10 }}>EARNING</Text>
            <Text style={art.bT}>৳ {analysis?.total_earning}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={art.miniBox}>
            <SvgXml xml={enroll} height="30" width="30" />
            <Text style={{ fontSize: 10 }}>TOTAL ENROLL</Text>
            <Text style={art.bT}>{analysis?.total_enroll}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={art.miniBox}>
            <SvgXml xml={diamond} height="30" width="30" />
            <Text style={{ fontSize: 10, textAlign: "center" }}>
              TOTAL COURSE
            </Text>
            <Text style={art.bT}>{analysis?.total_courses}</Text>
          </TouchableOpacity>
        </View>
        
        <TeacherOptions onPress={() => {
            props.navigation.navigate("UploadCourse");
          }}
          title={"Upload Course"}
          color="#fff"
          image={upload}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
        {/* <TeacherOptions
          onPress={() => {
            props.navigation.navigate("Consultation");
          }}
          title={"Consultation"}
          color="#fff"
          image={headset}
          icon={<AntDesign name="right" size={24} color="black" />}
        /> */}
        <TeacherOptions
          onPress={() => {
            props.navigation.navigate("TeacherCourse");
          }}
          title={"My Courses"}
          color="#fff"
          image={myCourse}
          icon={<AntDesign name="right" size={24} color="black" />}
        />

        <TeacherOptions
          onPress={() => {
            props.navigation.navigate("BundleCourse");
          }}
          title={"Bundles Courses"}
          color="#fff"
          image={bundle}
          icon={<AntDesign name="right" size={24} color="black" />}
        />

        <TeacherOptions
          onPress={() => {
            props.navigation.navigate("MyCart");
          }}
          title={"My Cart"}
          color="#fff"
          image={myCart}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
        <TeacherOptions
          onPress={() => {
            props.navigation.navigate("NoticeBoard");
          }}
          title={"Notice Board"}
          color="#fff"
          image={nt}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
        <TeacherOptions
          onPress={() => {
            props.navigation.navigate("LiveClass");
          }}
          title={"Live Class"}
          color="#fff"
          image={wifi}
          icon={<AntDesign name="right" size={24} color="black" />}
        />

        {/* <TeacherOptions
          onPress={() => {
            props.navigation.navigate("Certificate");
          }}
          title={"Certificate"}
          color="#fff"
          image={certificate}
          icon={<AntDesign name="right" size={24} color="black" />}
        /> */}
        {/* <TeacherOptions
          onPress={() => {
            props.navigation.navigate("Discussion");
          }}
          title={"Discussion"}
          color="#fff"
          image={discuss}
          icon={<AntDesign name="right" size={24} color="black" />}
        /> */}
        <TeacherOptions
          onPress={() => {
            props.navigation.navigate("Finance");
          }}
          title={"Finance"}
          color="#fff"
          image={graph}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
        <TeacherOptions
          onPress={() => {
            props.navigation.navigate("Settings");
          }}
          title={"Settings"}
          color="#fff"
          image={set}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
        {/* <TeacherOptions
          onPress={() => {
            props.navigation.navigate("PaymentSettings");
          }}
          title={"Payment Settings"}
          color="#fff"
          image={payment}
          icon={<AntDesign name="right" size={24} color="black" />}
        /> */}
        {/* <TeacherOptions
          onPress={() => {
            props.navigation.navigate("ZoomSettings");
          }}
          title={"Zoom Settings"}
          color="#fff"
          image={zoom}
          icon={<AntDesign name="right" size={24} color="black" />}
        /> */}
        <TeacherOptions onPress={()=>{
          dispatch(setInstructorInfo(null))
          dispatch(setUserInfo(null));
          storeData("userInfo", null);
          //props.navigation.navigate("LogIn");
        }}
          title={"Log out"}
          color="#fff"
          image={logOut}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
      </View>
    </ScrollView>
  );
};

export default TeacherProfile;
const art = StyleSheet.create({
  miniBox: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginTop: 50,
    alignItems: "flex-end",
    width: "100%",
    paddingHorizontal: 20,
  },
  fullView: {
    marginTop: 100,
    backgroundColor: "#COE6BA",
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  pro: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderColor: "#B0E1F6",
    position: "absolute",
    borderWidth: 2,
    marginTop: -60,
    alignItems: "center",
    justifyContent: "center",
  },
});
export const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: false,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    return result.uri;
  }
  return null
};