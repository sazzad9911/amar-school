import { StyleSheet, Text, View, Button, ScrollView ,Image, Alert} from "react-native";
import React, { useEffect, useState } from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Drop from "../../components/main/Drop";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Overview from "./Overview";
import Resources from "./Resources";
import Review from "./Review";
import QuizTab from "./QuizTab";
import AssignmentTab from './AssignmentTab'
import Notice from './Notice'
import LiveClassTab from './LiveClassTab'
import DiscussionTab from './DiscussionTab'
import CertificateTab from './CertificateTab'
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { addToCart, getStudentCoursesDetails } from "../../apis/courses";
import ActivityLoader from "../../components/ActivityLoader";
import { url } from "../../apis/api";
import { serverTimeToLocalDate } from "../../functions/converters";
import InstructorNav from "./InstructorNav";
import Curriculum from "./Curriculum";

const Tab = createMaterialTopTabNavigator();

const CourseView = ({navigation,route}) => {
  const video = React.useRef(null);
  const data=route.params.data;
  const [course,setCourse]=useState()
  const userInfo=useSelector(state=>state.userInfo)
  const [status, setStatus] = React.useState({});
  const isFocused=useIsFocused()


  useEffect(()=>{
    if(userInfo&&data){
      getStudentCoursesDetails(userInfo,data.slug).then(res=>{
        setCourse(res.data.data)
        //console.log(res.data.data)
        //console.log(res.data)
      }).catch(err=>{
        
        console.warn(err.response.data.message)
      })
    }
  },[isFocused,userInfo,data])
  if(!course){
    return <ActivityLoader/>
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>
      <View>
        <Text style={{ fontSize: 25, fontWeight: "500", textAlign: "center" }}>
          {course.course.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="videocam-outline" size={16} color="red" />
            <Text style={{ marginLeft: 5 }}>16 Lectures</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="book-open" size={16} color="red" />
            <Text style={{ marginLeft: 5 }}>6 sections</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <EvilIcons name="clock" size={16} color="red" />
            <Text style={{ marginLeft: 5 }}>21 min 42 sec</Text>
          </View> */}
        </View>
      </View>
      <View style={art.container}>
       {course.course.video?(
         <Video
         shouldPlay={true}
         ref={video} 
         style={art.video}
         source={{
           uri:`${url}${course.course.video.split(" ").join("%20")}`,
         }}
         useNativeControls
         resizeMode="contain"
         isLooping
         onPlaybackStatusUpdate={(status) => setStatus(() => status)}
       />
       ):course.course.youtube_video_id?(
        <Video
         ref={video} 
         style={art.video}
         source={{
           uri:`https://www.youtube.com/watch?v=${course.course.youtube_video_id}`,
         }}
         useNativeControls
         resizeMode="contain"
         isLooping
         onPlaybackStatusUpdate={(status) => setStatus(() => status)}
       />
       ):(
        <Text style={{
          marginVertical:30,
          textAlign:"center"
        }}>No Video</Text>
       )}
        {/* <View style={art.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "500" }}> Course Content</Text>
        <Text>0.00% Done</Text>
      </View> */}
      {/* <View
        style={{
          height: 10,
          borderRadius: 10,
          backgroundColor: "#e5e5e5",
          width: "100%",
          marginVertical: 10,
        }}
      ></View> */}
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text style={{ fontSize: 20, fontWeight: "500" }}>Introduction</Text>
      <View>
        <Text>
        Last update
        </Text>
        <Text>
        {serverTimeToLocalDate(course.course.created_at)}
        </Text>
      </View>
      </View>
      <Button onPress={()=>{
        //console.log(course.course.id)
       addToCart(userInfo,course.course.id).then(res=>{
       
        if(res.data.status!=200){
          Alert.alert("Ops!",res.data.msg)
          return
        }
        Alert.alert("Success!",res.data.msg)
        if(parseInt(data.price)>0){
          navigation.navigate("MyCart")
        }else{
          navigation.navigate("MyLearning");
        }
        
       }).catch(err=>{
        Alert.alert("Ops",err.response.data.message)
       })
      }} title="Add To Cart"/>
      {/* <View style={{ width: "100%" }}>
        <Drop
          onPress={() => {
            Alert.alert("Oh!", "You clicked");
          }}
          title={"New Home"}
          a="Values and Variables"
          b="Block lebel variables"
          c="This is pdf document"
        />
        <Drop
          onPress={() => {
            Alert.alert("Oh!", "You clicked");
          }}
          title={"JavaScript Fundamentals"}
          a="Values and Variables"
          b="Block lebel variables"
          c="This is pdf document"
        />
        <Drop
          onPress={() => {
            Alert.alert("Oh!", "You clicked");
          }}
          title={"Developer Skills"}
          a="Values and Variables"
          b="Block lebel variables"
          c="This is pdf document"
        />
        <Drop
          onPress={() => {
            Alert.alert("Oh!", "You clicked");
          }}
          title={"Editor Setup"}
          a="Values and Variables"
          b="Block lebel variables"
          c="This is pdf document"
        />
        <Drop
          onPress={() => {
            Alert.alert("Oh!", "You clicked");
          }}
          title={"HTML & CSS Crush Course"}
          a="Values and Variables"
          b="Block lebel variables"
          c="This is pdf document"
        />
        <Drop
          onPress={() => {
            Alert.alert("Oh!", "You clicked");
          }}
          title={"Youtube video"}
          a="Values and Variables"
          b="Block lebel variables"
          c="This is pdf document"
        />
      </View> */}
      <View style={{ height:600,marginTop:20 }}>
        
        <View style={{backgroundColor:'red',flex:1}}>
          <Tab.Navigator screenOptions={{
            tabBarScrollEnabled:true
          }}>
            <Tab.Screen name="Overview" initialParams={{course:course}} component={Overview} />
            
            {/* <Tab.Screen name="Curriculum" initialParams={{
            data:data
          }} component={Curriculum} /> */}
            {/* <Tab.Screen name="Certificate" component={CertificateTab} /> */}
            <Tab.Screen name="Instructor" initialParams={{
            data:data
          }} component={InstructorNav} />
          </Tab.Navigator>
        </View>
         
      </View>
    
    </ScrollView>
  );
};

export default CourseView;

const art = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
  },
  video: {
    height: 200,
    width: "100%",
  },
  buttons: {
    height: 30,
    width: 30,
  },
});
