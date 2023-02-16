import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { becomeInstructor, getInstructorProfile } from "../../apis/instructor";
import { setInstructorInfo } from "../../functions/instrcutorInfo";

const InstructorLoginCart = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  //console.log(userInfo)
  return (
    <TouchableOpacity
      onPress={() => {
        if (userInfo && userInfo.data.role == 3) {
          props.navigation.navigate("TeacherInfo");
          return;
        }
        //props.navigation.navigate("TeacherInfo");
        getInstructorProfile(userInfo)
          .then((res) => {
            dispatch(setInstructorInfo(res.data.data));
          })
          .catch((err) => {
            Alert.alert("Ops!", err.response.data.message);
          });
      }}
      style={{
        height: 150,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        borderTopLeftRadius: 30,
        marginBottom: 10,
        borderBottomRightRadius: 30,
        marginBottom: 10,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "500", color: "#fff" }}>
        {userInfo&&userInfo.data && userInfo.data.role == 3
          ? "Become an Instructor"
          : "Login as Instructor"}
      </Text>
    </TouchableOpacity>
  );
};

export default InstructorLoginCart;

const styles = StyleSheet.create({});
