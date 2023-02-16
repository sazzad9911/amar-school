import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TeacherCourseCart from "../../components/TeacherParts/TeacherCourseCart";
import { useSelector } from "react-redux";
import ActivityLoader from "../../components/ActivityLoader";
import { deleteInstructorCourse, getInstructorCourse } from "../../apis/courses";
import { url } from "../../apis/api";
import { useIsFocused } from "@react-navigation/native";

const TeacherCourse = (props) => {
  const [Data, setData] = React.useState();
  const userInfo = useSelector((state) => state.userInfo);
  const instructorInfo=useSelector((state)=>state.instructorInfo)
  const [Loader,setLoader]=useState(false)
  const isFocused=useIsFocused()
  //console.log(instructorInfo.instructor.uuid)
  useEffect(() => {
    //console.log(instructorInfo)
    if (userInfo) {
      getInstructorCourse(userInfo)
        .then((res) => {
          //console.log(res.data)
          setData(res.data.data.courses.data);
          //console.log(res.data.data.courses.data)
        })
        .catch((err) => {
          console.warn(err.response.data.message);
        });
    }
  }, [userInfo,Loader,isFocused]);
  if(!Data){
    return <ActivityLoader/>
  }
  
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingHorizontal: 20 }}
    >
      {Data&&Data.map((doc,i)=>(
        <TeacherCourseCart onDelete={()=>{
          deleteInstructorCourse(userInfo,doc.uuid).then(res=>{
            setLoader(val=>(!val))
          }).catch(err=>{
            console.warn(err.response.data.message)
            setLoader(val=>(!val))
          })
        }}
        onEdit={()=>{
          props.navigation.navigate("EditTeacherCourse",{data:doc});
        }}
        onQuiz={()=>{
          props.navigation.navigate("SetQuiz",{data:doc});
        }}
        onAssignment={()=>{
          props.navigation.navigate("Assignment",{data:doc});
        }}
         onResource={()=>{
          props.navigation.navigate("TeacherResource",{
            data:doc
          });
        }} key={i}
        {...props}
        image={
          doc.image?`${url}${doc.image}`:"https://lmszai.zainikthemes.com/uploads/course/1657091640-eByXJSy7Mo.jpg"
        }
        title={doc.title}
        ratings={doc.average_rating}
        sale="(5)"
        subTitle={doc.subtitle}
      />
      ))}
      {Data.length==0&&(
        <Text style={{textAlign:"center",marginVertical:10}}>No Data Found</Text>
      )}
      {/* <CourseCart/> */}
      
    </ScrollView>
  );
};

export default TeacherCourse;

const art = StyleSheet.create({});
