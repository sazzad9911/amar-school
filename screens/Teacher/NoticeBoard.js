import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import NoticeBoardCart from "../../components/TeacherParts/NoticeBoardCart";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { getInstructorNoticeBoard } from "../../apis/courses";
import { url } from "../../apis/api";

const NoticeBoard = (props) => {
  const [notice, setNotice] = useState();
  const userInfo = useSelector((state) => state.userInfo);
  const isFocused = useIsFocused();
  const navigation = props.navigation;

  useEffect(() => {
    if (userInfo) {
      getInstructorNoticeBoard(userInfo)
        .then((res) => {
          setNotice(res.data.data.courses.data);
        })
        .catch((err) => {
          Alert.alert(err.response.data.message);
        });
    }
  }, [userInfo, isFocused]);
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 20 }}>
        {notice &&
          notice.map((doc, i) => (
            <NoticeBoardCart 
              onAdd={() => {
                console.log(doc)
                navigation.navigate("AddNotice", { data: doc });
              }}
              onView={() => {
                navigation.navigate("NoticeViewList", { data: doc });
              }}
              key={i}
              {...props}
              image={`${url}${doc.image}`}
              title={doc.title}
              subtitle={doc.subtitle}
            />
          ))}
        {notice && notice.length == 0 && (
          <Text
            style={{
              textAlign: "center",
              marginVertical: 10,
            }}
          >
            No Notice Found
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default NoticeBoard;

const styles = StyleSheet.create({});
