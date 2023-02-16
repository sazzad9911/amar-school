import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import SetQuizCart from "../../components/TeacherParts/SetQuizCart";
import Button from "../../components/main/Button";
import { useSelector } from "react-redux";
import { deleteQuiz, getAllQuiz } from "../../apis/quiz";
import { useIsFocused } from "@react-navigation/native";

const SetQuiz = (props) => {
  const userInfo = useSelector((state) => state.userInfo);
  const params = props.route.params;
  const data = params.data;
  const [allQuiz, setAllQuiz] = useState();
  const isFocused=useIsFocused()
  const [loader,setLoader]=useState(false)
  useEffect(() => {
    if (userInfo) {
      getAllQuiz(userInfo, data.uuid)
        .then((res) => {
          setAllQuiz(res.data.data.exams);
        })
        .catch((err) => {
          //console.log(err)
          Alert.alert(err.response.data.message);
        });
    }
  }, [userInfo,isFocused,loader]);
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Button
        onPress={() => {
          props.navigation.navigate("CreateQuiz",{data:data});
        }}
        style={{ marginTop: 10, backgroundColor: "green", color: "#fff" }}
        title={"Create New Quiz"}
      />
      {allQuiz &&
        allQuiz.map((doc, i) => (
          <SetQuizCart onDelete={()=>{
            deleteQuiz(userInfo,doc.uuid).then(res=>{
              setLoader(val=>(!val))
            }).catch(err=>{
              Alert.alert(err.response.data.message)
            })
          }} onPress={()=>{
            props.navigation.navigate("EditQuiz",{data:data});
          }} key={i}  type={doc.type=="true_false"?"True False":"Multiple Choice"} name={doc.name} status={doc.status?"Published":"Unpublish"} />
        ))}
    </View>
  );
};

export default SetQuiz;

const styles = StyleSheet.create({});
