import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Button from "../../components/main/Button";
import CourseCart from "../../components/Others/CourseCart";
import { getInstructorDetails } from "../../apis/instructor";
import { useSelector } from "react-redux";
import { url } from "../../apis/api";

const InstructorProfileView = (props) => {
  const params = props.route.params;
  const slug = params.slug;
  const user_id=params.user_id;
  const [Data, setData] = React.useState();
  const userInfo=useSelector(state=>state.userInfo)
  const [follow,setFollow]=useState()
  console.log(slug)

  React.useEffect(() => {
    if(userInfo&&slug){
      getInstructorDetails(userInfo,slug,user_id)
      .then((res) => {
        //console.log(res.data.data)
        setData(res.data.data);
      })
      .catch((err) => {
        console.warn(err.response.data.message);
      });
    }
  }, [slug,userInfo]);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingHorizontal: 20 }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ height: 100, width: 100, borderRadius: 50 }}
          source={{
            uri:
              Data && Data.userInstructor.image
                ? `${url}${Data.userInstructor.image}`
                : "https://e7.pngegg.com/pngimages/640/228/png-clipart-user-profile-computer-icons-others-miscellaneous-black.png",
          }}
        />
        <Text style={{ marginVertical: 10, fontSize: 18, fontWeight: "500" }}>
          {Data ? Data.userInstructor.name : "N/A"}
        </Text>
        {/* <Text>Python Developer</Text> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Image
            style={{
              height: 25,
              width: 25,
              bormarginVertical: 10,
              marginRight: 5,
            }}
            source={{
              uri: "https://lmszai.zainikthemes.com/frontend/assets/img/ranking_badges/membership_1.png",
            }}
          />
          <Image
            style={{
              height: 25,
              width: 25,
              bormarginVertical: 10,
              marginRight: 5,
            }}
            source={{
              uri: "https://lmszai.zainikthemes.com/frontend/assets/img/ranking_badges/rank_3.png",
            }}
          />
          <Image
            style={{
              height: 25,
              width: 25,
              bormarginVertical: 10,
              marginRight: 5,
            }}
            source={{
              uri: "https://lmszai.zainikthemes.com/frontend/assets/img/ranking_badges/course_1.png",
            }}
          />
          <Image
            style={{
              height: 25,
              width: 25,
              bormarginVertical: 10,
              marginRight: 5,
            }}
            source={{
              uri: "https://lmszai.zainikthemes.com/frontend/assets/img/ranking_badges/student_1.png",
            }}
          />
          <Image
            style={{
              height: 25,
              width: 25,
              bormarginVertical: 10,
              marginRight: 5,
            }}
            source={{
              uri: "https://lmszai.zainikthemes.com/frontend/assets/img/ranking_badges/sale_1.png",
            }}
          />
        </View>
        {/* <TouchableOpacity onPress={()=>{
          setFollow(!follow)
        }}
          style={{
            height: 35,
            width: 80,
            borderRadius: 5,
            color: "#fff",
            backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#fff", marginVertical: 10 }}>{follow?"UnFollow":"Follow"}</Text>
        </TouchableOpacity> */}
      </View>
      {/* <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View
          style={{
            width: "50%",
            height: 60,
            borderWidth: 1,
            borderColor: "#808080",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>2</Text>
          <Text>Followers</Text>
        </View>
        <View
          style={{
            width: "50%",
            height: 60,
            borderWidth: 1,
            borderColor: "#808080",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500" }}>2</Text>
          <Text>Following</Text>
        </View>
      </View> */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
      >
        <Entypo
          style={{ marginRight: 10, marginVertical: 10 }}
          name="bar-graph"
          size={18}
          color="black"
        />
        <Text>Author Level {Data ? Data.userInstructor.role : "0"}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome
          style={{ marginRight: 10, marginVertical: 10 }}
          name="book"
          size={18}
          color="black"
        />
        <Text>{Data ? Data.courses.total : "0"} Courses</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Feather
          style={{ marginRight: 10, marginVertical: 10 }}
          name="video"
          size={18}
          color="black"
        />
        <Text>{Data ? Data.total_lectures : "0"} Video Lectures</Text>
      </View>
      {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome5
          style={{ marginRight: 10, marginVertical: 10 }}
          name="user"
          size={18}
          color="black"
        />
        <Text>2 Students</Text>
      </View> */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Foundation
          style={{ marginRight: 10, marginVertical: 10 }}
          name="clipboard-notes"
          size={18}
          color="black"
        />
        <Text>{Data ? Data.total_quizzes : "0"} Quizzes</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Entypo
          style={{ marginRight: 10, marginVertical: 10 }}
          name="open-book"
          size={16}
          color="black"
        />
        <Text>{Data ? Data.total_assignments : "0"} Assignments</Text>
      </View>
      {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons
          style={{ marginRight: 10, marginVertical: 10 }}
          name="computer"
          size={16}
          color="black"
        />
        <Text>2 Meetings</Text>
      </View> */}
      {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
        <FontAwesome
          style={{ marginRight: 10, marginVertical: 10 }}
          name="star-o"
          size={18}
          color="black"
        />
        <Text>2 Reviews</Text>
      </View> */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Fontisto
          style={{ marginRight: 10, marginVertical: 10 }}
          name="world"
          size={18}
          color="black"
        />
        <Text>
          {Data && Data.userInstructor.address
            ? Data.userInstructor.address
            : "N/A"}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            width: 130,
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Entypo name="facebook-with-circle" size={24} color="blue" />
          <Entypo name="twitter-with-circle" size={24} color="sky-blue" />
          <Entypo name="linkedin-with-circle" size={24} color="black" />
          <Entypo name="instagram-with-circle" size={24} color="black" />
        </View>
      </View>
      {/* <Button
        onPress={() => {
          props.navigation.navigate("Book");
        }}
        title={"Book Schedule"}
        style={{ marginTop: 20, backgroundColor: "green", color: "#fff" }}
      /> */}
      {/* <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        About Johnny Depp
      </Text>
      <Text style={{ textAlign: "justify" }}>
        Freelancers and entrepreneurs Freelancers and entrepreneurs use about.me
        to grow their audience and get more clients. · Create a page to present
        who you are and what you do in one link.use about.me to grow their
        audience and get more clients. · Create a page to present who you are
        and what you do in one link.
      </Text> */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Skills
      </Text>
      <Text>No skills to show</Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        My courses (
        {Data && Data.courses.data.length ? Data.courses.data.length : "0"})
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Data &&
          Data.courses.data.map((doc, i) => (
            <CourseCart
              key={i}
              onPress={() => {
                console.log(`${url}${doc.image}`)
                props.navigation.navigate("CourseView", { data: doc });
              }}
              headline={doc.title}
              image={doc.image ? `${url}${doc.image}` : null}
              tutor={doc.instructor_id}
              ratings={doc.status}
              sale={"(10)"}
              price={`${doc.price}`}
            />
          ))}
      </ScrollView>
    </ScrollView>
  );
};

export default InstructorProfileView;

const styles = StyleSheet.create({});
