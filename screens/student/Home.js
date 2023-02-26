import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { useSelector } from "react-redux";
import { url } from "../../apis/api";
import { getStudentBundleCourse, getStudentCourses } from "../../apis/courses";
import { getAllInstructor } from "../../apis/instructor";
import { getStudentDashboard } from "../../apis/profile";
import ActivityLoader from "../../components/ActivityLoader";
import InstructorLoginCart from "../../components/main/InstructorLoginCart";
import Coaching from "../../components/Others/Coaching";
import CoachingCourse from "../../components/Others/CoachingCourse";
import ConsultCart from "../../components/Others/ConsultCart";
import CourseBundle from "../../components/Others/CourseBundle";
import CourseCart from "../../components/Others/CourseCart";
import FreeALeasons from "../../components/Others/FreeALeasons";
import FreeLibrary from "../../components/Others/FreeLibrary";
import InstructorCart from "../../components/Others/InstructorCart";
import TallCart from "../../components/Others/TallCart";
import BundleCourseCart from "../../components/TeacherParts/BundleCourseCart";
import { serverTimeToLocalDate } from "../../functions/converters";

const Home = (props) => {
  const [AllInstructor, setAllInstructor] = React.useState();
  const [broadSelection, setBroadSelection] = useState();
  const [bundleCourse, setBundleCourse] = useState();
  const [consultation, setConsultation] = useState();
  const [instructor, setInstructor] = useState();
  const userInfo = useSelector((state) => state.userInfo);
  const isFocused = useIsFocused();
  const [loader,setLoader]=useState(false)
  //console.log(userInfo)

  React.useEffect(() => {
    if (userInfo) {
      getStudentDashboard(userInfo)
        .then((res) => {
          setConsultation(res.data.data.consultationInstructors);
          setInstructor(res.data.data.instructors);
          //console.log(res.data.data)
        })
        .catch((err) => {
          console.warn(err.response.data.message);
        });
      getStudentBundleCourse(userInfo)
        .then((res) => {
          setBundleCourse(res.data.data.bundles.data);
        })
        .catch((err) => {
          console.warn(err.response.data.message);
        });
      getStudentCourses(userInfo)
        .then((res) => {
          //setData(res.data.data);
          //setCategories(res.data.data.categories);
          setBroadSelection(res.data.data.courses.data);
          setLoader(false);
        })
        .catch((err) => {
          //setLoader(false);
          console.log(err.response.data.message);
        });
    }
  }, [isFocused, userInfo]);
  useEffect(()=>{
    
  },[])
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#F6FBFE",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Our Latest Courses
      </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {broadSelection &&
          broadSelection.map((doc, i) => (
            <CourseCart
              key={i}
              onPress={() => {
                //console.log(`${url}${doc.image}`)
                props.navigation.navigate("CourseView", { data: doc });
              }}
              headline={doc.title}
              image={doc.image ? `${url}${doc.image}` : null}
              tutor={doc.instructor_id}
              ratings={5}
              sale={"(10)"}
              price={`${doc.price}`}
              data={doc}
            />
          ))}
          {broadSelection&&broadSelection.length==0&&(
            <Text style={{
              marginVertical:30,
              textAlign:"center"
            }}>No Course Found</Text>
          )}
      </ScrollView>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Latest Bundle Courses
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {bundleCourse &&
          bundleCourse.map((doc, i) => (
            <CourseBundle
              key={i}
              onPress={() => {
                
                props.navigation.navigate("BundleDetails",{data:doc});
              }}
              headline={doc.name}
              image={
                doc?.image?`${url}${doc?.image}`:"https://lmszai.zainikthemes.com/uploads/course/1655545018-UOg3MEPfM6.jpg"
              }
              tutior={doc.overview}
              courses={doc.price}
              price={serverTimeToLocalDate(doc.created_at)}
            />
          ))}
        {bundleCourse && bundleCourse.length == 0 && (
          <Text
            style={{
              marginVertical: 30,
            }}
          >
            No Course Found
          </Text>
        )}
      </ScrollView>
      
      {/* <Text style={{ fontSize: 20, marginBottom: 10 }}>
        One to one consultation
      </Text> */}
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {consultation ? (
          consultation.map((doc, i) => (
            <InstructorCart
              key={i}
              {...props}
              name={doc.first_name + " " + doc.last_name}
              job={doc.professional_title}
              level={doc.status}
              rate={doc.hourly_rate}
              slug={doc.slug}
              image={doc.image ? `${url}${doc.image}` : null}
            />
          ))
        ) : (
          <ActivityLoader />
        )}
        {consultation && consultation.length == 0 && (
          <Text
            style={{
              marginVertical: 30,
            }}
          >
            No Instructor
          </Text>
        )}
      </ScrollView> */}
      <Text style={{ fontSize: 20, marginBottom: 10,marginTop:10 }}>
        Top Rated Courses From Our Top Instructor.
      </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {instructor ? (
          instructor.map((doc, i) => (
            <InstructorCart
              key={i}
              {...props}
              name={doc.first_name + " " + doc.last_name}
              job={doc.professional_title}
              level={5}
              rate={doc.hourly_rate}
              slug={doc.slug}
              user_id={doc.user_id}
              image={doc?.user?.image ? `${url}${doc?.user?.image}` : null}
            />
          ))
        ) : (
          <ActivityLoader />
        )}
        {instructor && instructor.length == 0 && (
          <Text
            style={{
              marginVertical: 30,
            }}
          >
            No Instructor
          </Text>
        )}
      </ScrollView>
    </ScrollView>
  );
};

export default Home;
