import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import CourseCart from "../components/Others/CourseCart";
import MyCourse from "../components/Others/MyCourse";
import { useSelector } from "react-redux";
import ActivityLoader from "../components/ActivityLoader";
import { getStudentCourses } from "../apis/courses";
import { useIsFocused } from "@react-navigation/native";
import { url } from "../apis/api";

const Courses = (props) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [Data, setData] = React.useState();
  const [Loader, setLoader] = React.useState(true);
  const [Categories, setCategories] = React.useState();
  const [ActiveCategories, setActiveCategories] = React.useState();
  const [Courses, setCourses] = React.useState();
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (userInfo) {
      //setLoader(true);
      getStudentCourses(userInfo)
        .then((res) => {
          setData(res.data.data);
          setCategories(res.data.data.categories);
          setCourses(res.data.data.courses.data);
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
          console.log(err.response.data.message);
        });
    }
  }, [userInfo, isFocused]);
  if (Loader) {
    return <ActivityLoader />;
  }

  return ( 
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingHorizontal: 20, paddingVertical: 10 }}
    >
      <Text style={{ fontSize: 22, marginBottom: 10,fontWeight:"600" }}>My Course List</Text>
      {/* <MyCourse
        color={"red"}
        image={
          "https://lmszai.zainikthemes.com/uploads/course/1657091046-ua5pjxktej.jpg"
        }
        headline={"Python For Beginners - Learn Programming"}
        rate={"40%"}
      /> */}
      {Categories &&
        Courses &&
        Categories.map((doc, i) =>
          Courses.filter((d) => d.category_id == i + 1).length > 0 ? (
            <View key={i}>
              <Text style={{ fontSize: 16, marginBottom: 10 }}>{doc.name}</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ marginBottom: 10 }}
              >
                {Courses.filter((d) => d.category_id == i + 1).map((doc, i) => (
                  <CourseCart key={i}
                    onPress={() => {
                      props.navigation.navigate("CourseView",{data:doc});
                    }}
                    headline={doc.title}
                    image={doc.image?`${url}${doc.image}`:null}
                    tutor={doc.instructor_id}
                    ratings={doc.status}
                    sale={"(10)"} 
                    price={`${doc.price}`}
                  />
                ))}
              </ScrollView>
            </View>
          ) : (
            <View key={i}></View>
          )
        )}
    </ScrollView>
  );
};

export default Courses;

const styles = StyleSheet.create({});
