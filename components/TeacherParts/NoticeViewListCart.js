import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../main/Button";
import { serverTimeToLocalDate } from "../../functions/converters";
import { useSelector } from "react-redux";
import { deleteInstructorNotices } from "../../apis/courses";

const NoticeViewListCart = ({ navigation, onPress, data ,course_uuid,onDelete}) => {
  //console.log(data);
  const userInfo=useSelector(state=>state.userInfo)
  

  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingTop: 10,
      }}
    >
     <View style={{
      flexDirection:"row",
      justifyContent:"space-between",
      
     }}>
      <Text style={{fontWeight:"500"}}>{data.topic}</Text>
     <Text style={{ textAlign: "right" }}>
        {serverTimeToLocalDate(data.created_at)}
      </Text>
     </View>
      <Text>{data.details}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        {/* <Button
          onPress={() => {
            navigation.navigate("NoticeView");
          }}
          style={{
            backgroundColor: "green",
            color: "#fff",
            height: 30,
            width: 80,
          }}
          title={"View"}
        /> */}
        <Button
          onPress={() => {
            navigation.navigate("NoticeEdit",{data:data,uuid:course_uuid});
          }}
          style={{
            backgroundColor: "green",
            color: "#fff",
            height: 30,
            width: 80,
          }}
          title={"Edit"}
        />
        <Button onPress={()=>{
          if(onDelete){
            onDelete()
          }
          
        }}
          style={{
            backgroundColor: "red",
            color: "#fff",
            height: 30,
            width: 80,
          }}
          title={"Delete"}
        />
      </View>
    </View>
  );
};

export default NoticeViewListCart;

const styles = StyleSheet.create({});
