import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./../screens/student/Home";
import Notification from "./../screens/student/Notification";
import Profile from "./../screens/student/Profile";
import UserBottomBar from "./../components/bottomBars/UserBottomBar";
import UserHomeHeader from "./../components/headers/UserHomeHeader";
import Courses from "../screens/Courses";
import MyLearning from "../screens/student/MyLearning";
const Tab = createBottomTabNavigator();

const UserTabRoute = () => {
  return (
    <Tab.Navigator tabBar={(props) => <UserBottomBar {...props} />}>
      <Tab.Screen
        options={{ header: (props) => <UserHomeHeader {...props} /> }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ header: (props) => <UserHomeHeader {...props} /> }}
        name="Courses"
        component={MyLearning}
      />
      <Tab.Screen
        options={{ header: (props) => <UserHomeHeader {...props} /> }}
        name="Notification"
        component={Notification}
      />  
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default UserTabRoute;
