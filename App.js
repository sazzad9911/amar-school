import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import MainRoute from "./routers/MainRoute";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { usePreventScreenCapture } from "expo-screen-capture";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider, useSelector } from "react-redux";
import store from "./functions/store";

const Stack = createNativeStackNavigator();
export default function App() {
  usePreventScreenCapture();
  const [Check, setCheck] = React.useState(null);
  const [Data, setData] = React.useState();
  //const userInfo=useSelector

  // useEffect(() => {
  //   getAllInstructor()
  //     .then((res) => {
  //       if (res.data) {
  //         setData(res.data.data);
  //       }
  //     })
  //     .catch((err) => [console.warn(err.response.data)]);
  // }, []);
  const goBack = () => {
    setCheck(null);
  };
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            {/* <Stack.Navigator>
        <Stack.Screen options={{
          headerShown:false
        }} name="InitialScreen" component={InitialScreen} />
        <Stack.Screen options={{
          headerShown:false
        }} name="TeacherRoute" component={TeacherRoute} />
        <Stack.Screen options={{
          headerShown:false
        }} name="MainRoute" component={MainRoute} />
      </Stack.Navigator> */}
            <MainRoute />
          </NavigationContainer>
          <StatusBar backgroundColor={"#f2f2f2"} barStyle="dark-content" mode="auto" />
        </GestureHandlerRootView>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
