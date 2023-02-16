import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import LiveClassCart from "../../components/TeacherParts/LiveClassCart";
import { useSelector } from "react-redux";
import { getLiveClassCourse } from "../../apis/instructor";
import { url } from "../../apis/api";
import { useIsFocused } from "@react-navigation/native";

const LiveClass = (props) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [data, setData] = useState();
  const isFocused=useIsFocused()

  useEffect(() => {
    if (userInfo) {
      getLiveClassCourse(userInfo)
        .then((res) => {
          setData(res.data.data.courses.data);
        })
        .catch((err) => {
          Alert.alert(err.response.data.message);
        });
    }
  }, [isFocused]);
  return (
    <ScrollView style={{ paddingHorizontal: 20 }}>
      {data &&
        data.map((doc, i) => (
          <LiveClassCart key={i}
            {...props}
            image={
              `${url}${doc.image}`
            }
            title={doc.title}
            upcoming={doc.total_upcoming}
            past={doc.total_past}
            onView={()=>{
              props.navigation.navigate("LiveClassViewList",{data:doc});
              
            }}
            onCreate={()=>{
              props.navigation.navigate("CreateLiveClass",{data:doc});
            }}
          />
        ))}
        {data&&data.length==0&&(
          <Text style={{
            marginVertical:10,
            textAlign:"center"
          }}>No Course Found</Text>
        )}
        
    </ScrollView>
  );
};

export default LiveClass;

const art = StyleSheet.create({});
