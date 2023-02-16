import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Button from "../../components/main/Button";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getAllQuiz } from "../../apis/quiz";

const QuizTab = (props) => {
  const course = props.route.params.course;
  const [quiz, setQuiz] = useState();
  const userInfo = useSelector((state) => state.userInfo);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (userInfo) {
      if (userInfo) {
        getAllQuiz(userInfo, course.course.uuid)
          .then((res) => {
            setQuiz(res.data.data.exams);
          })
          .catch((err) => {
            //console.log(err)
            Alert.alert(err.response.data.message);
          });
      }
    }
  }, [userInfo, course, isFocused]);
  return (
    <View>
      {quiz && quiz.map((doc, i) => <QuizTabCart data={doc} key={i} {...props} />)}
      {quiz&&quiz.length==0&&(
        <Text style={{
          marginVertical:10,
          textAlign:"center"
        }}>No Quiz</Text>
      )}
    </View>
  );
};

export default QuizTab;

const art = StyleSheet.create({
  t: {
    fontSize: 16,
    fontWeight: "500",
  },
});

const QuizTabCart = (props) => {
  //console.log(props.data)
  const data=props.data
  return (
    <View
      style={{
        paddingTop: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e5e5e5",
        paddingHorizontal: 10,
        marginVertical:10
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 110,
          }}
        >
          <Text style={art.t}>Quiz Name</Text>
          <Text style={art.t}>:</Text>
        </View>
        <Text>{data.name}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 110,
          }}
        >
          <Text style={art.t}>Quiz Types</Text>
          <Text style={art.t}>:</Text>
        </View>
        <Text>{data.type=="true_false"?"True false":"Multiple Choice"}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 110,
          }}
        >
          <Text style={art.t}>Total Question</Text>
          <Text style={art.t}>:</Text>
        </View>
        <Text>0</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 110,
          }}
        >
          <Text style={art.t}>Time Duration</Text>
          <Text style={art.t}>:</Text>
        </View>
        <Text>{data.duration} minutes</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        {/* <Button
          onPress={() => {
            props.navigation.navigate("StartQuiz");
          }}
          title={"Start Quiz"}
          style={{
            height: 35,
            width: 120,
            backgroundColor: "green",
            color: "#fff",
          }}
        /> */}
        {/* <Button
          onPress={() => {
            props.navigation.navigate("LeaderBoard");
          }}
          title={"Leaderboard"}
          style={{
            height: 35,
            width: 120,
            backgroundColor: "green",
            color: "#fff",
          }}
        /> */}
      </View>
    </View>
  );
};
