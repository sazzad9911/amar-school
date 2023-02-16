import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React,{useState,useEffect} from "react";
import BundleCourseCart from "../../components/TeacherParts/BundleCourseCart";
import Button from "../../components/main/Button";
import { useSelector } from "react-redux";
import { deleteInstructorBundleCourse, getInstructorBundleCourse } from "../../apis/courses";
import { useIsFocused } from "@react-navigation/native";
import { url } from "../../apis/api";

const BundleCourse = (props) => {
  const [bundleCourses,setBundleCourses]=useState()
  const userInfo=useSelector(state=>state.userInfo)
  const isFocused=useIsFocused()
  const [loader,setLoader]=useState(false)

  useEffect(()=>{
    if(userInfo){
      getInstructorBundleCourse(userInfo).then(res=>{
        setBundleCourses(res.data.data.bundles.data)
      }).catch(err=>{
        Alert.alert(err.response.data.message)
      })
    }
  },[userInfo,isFocused,loader])
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{ paddingHorizontal: 20 }}
    >
      <Button
        onPress={() => {
          props.navigation.navigate("CreateBundleCourse");
        }}
        style={{ marginTop: 10, backgroundColor: "green", color: "#fff" }}
        title={"Create Bundle Course"}
      />

      {bundleCourses&&bundleCourses.reverse().map((doc,i)=>(
        <BundleCourseCart onDelete={()=>{
          //console.log("ok")
          deleteInstructorBundleCourse(userInfo,doc.uuid).then(res=>{
            setLoader(val=>(!val))
          }).catch(err=>{
            Alert.alert(err.response.data.message)
          })
        }} key={i}
        {...props}
        image={
          `${url}${doc.image}`
        }
        title={doc.name}
        ratings="4.5"
        sale="(5)"
        author={doc.overview}
        price={doc.price}
      />
      ))}
      {bundleCourses&&bundleCourses.length==0&&(
        <Text style={{
          textAlign:"center",
          marginVertical:10
        }}>No Notice Found</Text>
      )}
    </ScrollView>
  );
};

export default BundleCourse;

const styles = StyleSheet.create({});
