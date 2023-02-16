import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Button from "../../components/main/Button";
import TeacherAssignmentCart from "../../components/TeacherParts/TeacherAssignmentCart";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { deleteAssignment, getAssignments } from "../../apis/courses";

const Assignment = (props) => {
  const data = props.route.params.data;
  const [assignments, setAssignments] = useState();
  const isFocused = useIsFocused();
  const userInfo = useSelector((state) => state.userInfo);
  const [loader,setLoader]=useState(false)
  //console.log(data)
  useEffect(() => {
    if (userInfo) {
      getAssignments(userInfo, data.uuid)
        .then((res) => {
          //console.log(res.data)
          setAssignments(res.data.data.assignments.data);
        })
        .catch((err) => {
          console.warn(err.response.data.message);
        });
    }
  }, [isFocused, userInfo,loader]);

  return (
    <ScrollView
      style={{
        paddingHorizontal: 20,
      }}
    >
      {/* <TouchableOpacity style={{
        
        height:40,
        width:40,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        flex:1,
       

      }}>
      <Ionicons name="add-outline" size={30} color="#FFF" />
      </TouchableOpacity> */}
      <Button
        onPress={() => {
          props.navigation.navigate("CreateAssignment", { data: data });
        }}
        style={{ marginTop: 10, backgroundColor: "green", color: "#fff" }}
        title={"Create New Assignment"}
      />
      {assignments &&
        assignments.map((doc, i) => (
          <TeacherAssignmentCart title={doc.name} marks={doc.marks} onDelete={()=>{
            
            deleteAssignment(userInfo,doc.uuid).then(res=>{
              setLoader(val=>(!val))
            }).catch(err=>{
              Alert.alert(err.response.data.message)
            })
          }} key={i} data={doc} {...props} />
        ))}
    </ScrollView>
  );
};

export default Assignment;

const styles = StyleSheet.create({});
