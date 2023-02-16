import React,{useState,useEffect} from "react";
import { View, Image, StatusBar, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useSelector } from "react-redux";
import { url } from "../../../apis/api";
import { getStudentProfile } from "../../../apis/profile";
import { logo } from "../../../assets/icon";

const TeacherHomeHeader = ({navigation}) => {
  const userInfo=useSelector(state=>state.userInfo)
  //console.log(userInfo.meta.token)
  const [image, setImage] = useState();

  useEffect(() => {
    if (userInfo) {
      getStudentProfile(userInfo.meta.token).then((res) => {
        if (res.data.data.user.image) {
          setImage(`${url}${res.data.data.user.image}`);
        }
      });
    }
  }, []);
  return (
    <View>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#f2f2f2"} />
      <View
        style={{
          height: 100,
          width: "100%",
          flexDirection: "row",
          backgroundColor: "#f2f2f2",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop:10
        }}
      >
        <SvgXml xml={logo} height="60" width="60"  />
        {/* <Image
          source={require("../../../assets/AmarSchoolLogo.png")}
          style={{ height: 60, width: 60, borderRadius: 5, flex: 1.5 }}
        /> */}
        <Text
          style={{
            flex: 4.5,
            textAlign: "right",
            marginRight: 10,
            fontSize: 18,
            right: 50,
          }}
        >
         {userInfo?userInfo.data.name:"Invalid"}
        </Text>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            borderWidth: 2,
            borderColor: "#006600",
            flex: 1.1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 20,
            overflow:'hidden'
          }}
        >
         <Pressable onPress={()=>{
          navigation.navigate("TeacherProfile")
         }}>
         <Image
            source={{
              uri:image?image: "https://cdn-icons-png.flaticon.com/512/1999/1999625.png",
            }}
            style={{ width: 48, height: 48, borderRadius: 24 }}
          />
         </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TeacherHomeHeader;
