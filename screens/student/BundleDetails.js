import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../../components/main/Button";
import { Video, AVPlaybackStatus } from "expo-av";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Overview from "./Overview";
import CourseListNav from "./CourseListNav";
import InstructorNav from "./InstructorNav";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DiscussionTab from "./DiscussionTab";
import Resources from "./Resources";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { addToCart, getStudentBundleCourseDetails } from "../../apis/courses";
import { url } from "../../apis/api";
import { addWishList } from "../../apis/profile";
import { getAllInstructor } from "../../apis/instructor";

const Tab = createMaterialTopTabNavigator();

const BundleDetails = ({ navigation, route }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const data = route.params.data;
  const isFocused=useIsFocused()
  const userInfo=useSelector(state=>state.userInfo)
  const [course,setCourse]=useState()
  const [instructorDetails,setInstructorDetails]=useState()

  useEffect(()=>{
   // console.log()
    if(userInfo){
      getStudentBundleCourseDetails(userInfo,data.uuid).then(res=>{
        setCourse(res.data.data)
        //console.log(res.data.data)
      }).catch(err=>{
        console.warn(err.response.data.message)
      })
      
    }
  },[isFocused,userInfo])
  return (
    <ScrollView style={{ padding: 20 }}>
      <View style={{ height: 200, width: "100%",justifyContent:"center",alignItems:"center" }}>
        {course&&course.bundle.image?(
          <Image
          ref={video}
          style={art.video}
          source={{
            uri: `${url}${course?.bundle.image}`,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        ):(
          <Text>No Image Found</Text>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>BDT {course?.bundle.price}</Text>

      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginRight: 10 }}>
          
            <Feather
              style={{ marginTop: 3 }}
              name="bar-chart"
              size={16}
              color="black"
            />
            <AntDesign
              style={{ marginTop: 3 }}
              name="user"
              size={16}
              color="black"
            />
           
          </View>
          <View>
            <Text>Course Level</Text>
            <Text>Student Enrolled</Text>
          </View>
        </View>
        <View>
          <Text>{course?.total_students}</Text>
          <Text>{course?.instructor_average_rating}</Text>
        </View>
      </View>
      <Button onPress={()=>{
        if(!course){
          return
        }
        addToCart(userInfo,undefined,course.bundle.id).then(res=>{
          navigation.navigate("MyCart")
        }).catch(err=>{
          Alert.alert(err.response.data.message)
        })
      }}
        title={"Enroll the Course"}
        style={{
          height: 35,
          marginTop: 20,
          backgroundColor: "green",
          color: "#fff",
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <EvilIcons onPress={()=>{
          console.log(course)
          addWishList(userInfo.meta.token,undefined,course.bundle.id).then(res=>{
            navigation.navigate("WishList")
          }).catch(err=>{
            //console.log(err.response.data.message)
            Alert.alert(err.response.data.message)
          })
        }} name="heart" size={24} color="red" />
        {/* <EvilIcons name="share-google" size={24} color="green" /> */}
      </View>
      <Text style={{ fontWeight: "500", fontSize: 18 }}>
        Course Details
      </Text>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        
        <View>
          <Text style={{
            fontWeight:"500"
          }}>{course?.bundle.name}</Text>
          <Text>{course?.bundle.overview}</Text>
         
        </View>
      </View>
      <View>
        <View></View>
      </View>
      <View style={{ backgroundColor: "red", height: 600, marginTop: 20 }}>
        <Tab.Navigator
          screenOptions={{
            tabBarScrollEnabled: true,
          }}
        >
          {/* <Tab.Screen name="Overview" component={Overview} /> */}
          {/* <Tab.Screen name="Curriculam" component={Resources} /> */}
          {/* <Tab.Screen name="Discussion" component={DiscussionTab} /> */}
          <Tab.Screen name="Course List" component={CourseListNav} />
          <Tab.Screen name="Instructor" initialParams={{
            data:data
          }} component={InstructorNav} />
        </Tab.Navigator>
      </View>
    </ScrollView>
  );
};

export default BundleDetails;

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
