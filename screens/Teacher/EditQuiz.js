import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { getQuestions } from "../../apis/quiz";
import { ScrollView } from "react-native-gesture-handler";

const EditQuiz = ({ navigation, route }) => {
  const data = route.params.data;
  const userInfo = useSelector((state) => state.userInfo);
  const [Data, setData] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (userInfo) {
      getQuestions(userInfo, data.uuid, data.title)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          Alert.alert(err.response.data.message);
        });
    }
  }, [isFocused, userInfo]);
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 20,paddingVertical:10 }}>
        <EditQuizCart />
      </View>
    </ScrollView>
  );
};

export default EditQuiz;

const styles = StyleSheet.create({});

const EditQuizCart = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#e5e5e5",
        borderRadius: 5,
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Question</Text>
        <View
          style={{
            flexDirection: "row",
            width: 50,
            justifyContent: "space-between",
          }}
        >
          {/* <Feather name="edit" size={16} color="green" />
          <MaterialIcons name="delete-forever" size={18} color="red" /> */}
        </View>
      </View>
      <Text>I am Bangladeshi</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18, marginRight: 5 }}>Answer :</Text>
        <Text>True</Text>
      </View>
    </View>
  );
};
