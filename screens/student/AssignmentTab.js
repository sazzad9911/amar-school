import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AssignmentCart from "../../components/Others/AssignmentCart";
import { useSelector } from "react-redux";
import { getAssignments } from "../../apis/courses";

const AssignmentTab = (props) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [assignment, setAssignment] = useState();
  const course = props.route.params.course;
  //console.log(course.course)
  useEffect(() => {
    if (userInfo) {
      getAssignments(userInfo, course.course.uuid)
        .then((res) => {
          setAssignment(res.data.data.assignments.data);
          //console.log(res.data.data)
        })
        .catch((err) => {
          console.warn(err.response.data.message);
        });
    }
  }, [userInfo, course]);

  return (
    <View>
      {assignment && assignment.map((doc, i) => <AssignmentCart uuid={course.course.uuid} data={doc} key={i} {...props} />)}
      {assignment&&assignment.length==0&&(
        <Text style={{
          marginVertical:10,
          textAlign:'center'
        }}>No Assignment Found</Text>
      )}
    </View>
  );
};

export default AssignmentTab;

const styles = StyleSheet.create({});
