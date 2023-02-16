import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Notification from "./../screens/student/Notification";
import UserBottomBar from "./../components/bottomBars/UserBottomBar";
import Courses from "../screens/Courses";
import TeacherHomeHeader from "../components/headers/Teacher/TeacherHomeHeader";
import TeacherHome from "../screens/Teacher/TeacherHome";
import TeacherProfile from "../screens/Teacher/TeacherProfile";
import TeacherCourse from "../screens/Teacher/TeacherCourse";
import TeacherNotification from "../screens/Teacher/TeacherNotification";



const Tab = createBottomTabNavigator();

const TeacherTabRoute = () => {
  return (
    <Tab.Navigator tabBar={(props) => <UserBottomBar {...props} />}>
      <Tab.Screen
        options={{ header: (props) => <TeacherHomeHeader {...props} /> }}
        name="TeacherHome"
        component={TeacherHome}
      />
      <Tab.Screen
        options={{ header: (props) => <TeacherHomeHeader {...props} /> }}
        name="TeacherCourse"
        component={TeacherCourse}
      />
      <Tab.Screen
        options={{ header: (props) => <TeacherHomeHeader {...props} /> }}
        name="TeacherNotification"
        component={Notification}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="TeacherProfile"
        component={TeacherProfile}
      />
    </Tab.Navigator>
  );
};

export default TeacherTabRoute;
