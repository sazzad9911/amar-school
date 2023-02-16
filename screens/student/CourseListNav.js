import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CourseCart from "../../components/Others/CourseCart";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { getStudentCourses } from "../../apis/courses";
import { url } from "../../apis/api";

const CourseListNav = ({navigation,route}) => {
  const [courses,setCourses]=useState()
  const userInfo=useSelector(state=>state.userInfo)

  useEffect(()=>{
    if(userInfo){
      getStudentCourses(userInfo)
        .then((res) => {
          //setData(res.data.data);
          //setCategories(res.data.data.categories);
          setCourses(res.data.data.courses.data);
          //setLoader(false);
        })
        .catch((err) => {
          //setLoader(false);
          console.log(err.response.data.message);
        });
    }

  },[])
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{height:10}}/>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          flexWrap:"wrap",
        }}
      >
        
        {courses &&
          courses.map((doc, i) => (
            <CourseCart
              key={i}
              onPress={() => {
                //console.log(doc.image)
                navigation.navigate("CourseView", { data: doc });
              }}
              headline={doc.title}
              image={doc.image ? `${url}${doc.image}` : null}
              tutor={doc.instructor_id}
              ratings={doc.status}
              sale={"(10)"}
              price={`BDT ${doc.price}`}
            />
          ))}
          {courses&&courses.length==0&&(
            <Text style={{
              marginVertical:30,
              textAlign:"center"
            }}>No Course Found</Text>
          )}
      </View>
     
      <View style={{height:30}}>

      </View>
    </ScrollView>
  );
};

export default CourseListNav;

const styles = StyleSheet.create({});
