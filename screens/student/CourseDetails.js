import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Drop from "../../components/main/Drop";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Overview from "./Overview";
import Resources from "./Resources";
import Review from "./Review";
import QuizTab from "./QuizTab";
import DiscussionTab from "./DiscussionTab";
import AssignmentTab from "./AssignmentTab";
import Notice from "./Notice";
import LiveClassTab from "./LiveClassTab";
//import DiscussionTab from './DiscussionTab'
import CertificateTab from "./CertificateTab";
import { useState } from "react";
import { url } from "../../apis/api";
import { useRef } from "react";

const Tab = createMaterialTopTabNavigator();

const CourseDetails = ({ navigation, route }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const params = route.params;
  const data = params.data;
  const [videoUrl, setVideoUrl] = useState(data.video ? data.video : null);
  const [title, setTitle] = useState();
  const [duration, setDuration] = useState();
  const scrollRef = useRef();

  return (
    <ScrollView
      ref={scrollRef}
      showsVerticalScrollIndicator={false}
      style={{ padding: 20 }}>
      <View>
        <Text style={{ fontSize: 25, fontWeight: "500", textAlign: "center" }}>
          {data.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginVertical: 5,
          }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="videocam-outline" size={16} color="red" />
            <Text style={{ marginLeft: 5 }}>
              {data.lectures?.length} Lectures
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="book-open" size={16} color="red" />
            <Text style={{ marginLeft: 5 }}>
              {data.lessons?.length} sections
            </Text>
          </View>
          {duration && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 5,
              }}>
              <EvilIcons name="clock" size={16} color="red" />
              <Text style={{ marginLeft: 5 }}>{duration}</Text>
            </View>
          )}
        </View>
        {title && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}>
            {/* <EvilIcons name="clock" size={16} color="red" /> */}
            <Text style={{ marginLeft: 5 }}>{title}</Text>
          </View>
        )}
      </View>
      <View style={art.container}>
        {videoUrl ? (
          <Video
            ref={video}
            style={art.video}
            source={{
              uri: `${url}${videoUrl.split(" ").join("%20")}`,
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "green",
            }}>
            <Text style={{ color: "white" }}>No Video</Text>
          </View>
        )}

        {/* <View style={art.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
      </View>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "500" }}> Course Content</Text>
        <Text>0.00% Done</Text>
      </View>
      <View
        style={{
          height: 10,
          borderRadius: 10,
          backgroundColor: "#e5e5e5",
          width: "100%",
          marginVertical: 10,
        }}
      ></View> */}
      {/* <Text style={{ fontSize: 20, fontWeight: "500" }}>$ 200</Text> */}
      <View style={{ height: 10 }} />
      <View style={{ width: "100%" }}>
        {data.lessons &&
          data.lessons.map((doc, i) => (
            <Drop
              key={i}
              onPress={(doc) => {
                setTitle(doc.title);
                setDuration(doc.file_duration);

                setVideoUrl(doc.file_path);
                if (scrollRef) {
                  scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
                }
                //https://amarschool.com.bd/public/uploads/video/1676256135-Lec%2001-%20Part%2001.mp4
                //console.log(`${url}${videoUrl}`)
              }}
              title={doc.name}
              DATA={data.lectures?.filter((d) => d.lesson_id == doc.id)}
            />
          ))}
      </View>
      <View style={{ height: 600, marginTop: 20 }}>
        <View style={{ flex: 1 }}>
          <Tab.Navigator
            screenOptions={{
              tabBarScrollEnabled: true,
            }}>
            <Tab.Screen
              initialParams={{
                course: { course: data },
              }}
              name="Overview"
              component={Overview}
            />
            <Tab.Screen
              name="Resources"
              initialParams={{ course: { course: data } }}
              component={Resources}
            />
            <Tab.Screen
              name="Quiz"
              initialParams={{ course: { course: data } }}
              component={QuizTab}
            />
            <Tab.Screen
              name="Assignment"
              initialParams={{ course: { course: data } }}
              component={AssignmentTab}
            />
            <Tab.Screen
              name="Notice"
              initialParams={{ course: { course: data } }}
              component={Notice}
            />
            {/* <Tab.Screen name="Discussion" component={DiscussionTab} /> */}
            {/* <Tab.Screen name="Review" component={Review} /> */}
            {/* 
            
            {/* <Tab.Screen name="LiveClass" component={LiveClassTab} /> */}
            {/* 
            <Tab.Screen name="Curriculam" component={Resources} />
            <Tab.Screen name="Discussion" component={DiscussionTab} />
            <Tab.Screen name="Review" component={Review} />
            <Tab.Screen name="Quiz" component={QuizTab} /> */}
            {/* <Tab.Screen name="Assignment" component={AssignmentTab} />
            <Tab.Screen name="Notice" component={Notice} />
            <Tab.Screen name="LiveClass" component={LiveClassTab} />
            
             */}
            {/* <Tab.Screen name="Certificate" component={CertificateTab} /> */}
          </Tab.Navigator>
        </View>
      </View>
    </ScrollView>
  );
};

export default CourseDetails;

const art = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
  },
  video: {
    height: 200,
    width: "100%",
    backgroundColor: "green",
  },
  buttons: {
    height: 30,
    width: 30,
  },
});
