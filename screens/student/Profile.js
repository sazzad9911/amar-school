import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import SelectClass from "../../components/Others/SelectClass";
import { AntDesign } from "@expo/vector-icons";
import {
  profile,
  pen,
  book1,
  help,
  wishlist,
  set,
  logOut,
  cup,
  badge,
  analysis,
  headset,
  share,
  cart,
  myCart,
} from "../../assets/icon";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../functions/userInfo";
import { storeData } from "../../functions/storage";
import { getStudentProfile, updateStudentProfilePicture } from "../../apis/profile";
import * as ImagePicker from "expo-image-picker";
import { pickDocument } from "../Teacher/AddResource";
import { url } from "../../apis/api";

const Profile = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const [image, setImage] = useState();
  
  //console.log(userInfo)
  const [Data,setData]=React.useState()
  React.useEffect(()=>{
    if(userInfo){
      getStudentProfile(userInfo.meta.token).then(res=>{
        setData(res.data.data.user)
        if(res.data.data.user.image){
          setImage({
            uri:`${url}${res.data.data.user.image}`
          })
        }
      }).catch(err=>{
        console.warn(err.response.data.message)
      })
    }
  },[userInfo])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <View
        style={{
          marginTop: 50,
          alignItems: "flex-end",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <FontAwesome name="edit" size={24} color="black" />
      </View> */}

      <View
        style={{
          marginTop: 100,
          backgroundColor: "#FFFDD0",
          height: "100%",
          width: "100%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 120,
            width: 120,
            borderRadius: 60,
            borderColor: "#006600",
            position: "absolute",
            borderWidth: 2,
            marginTop: -60,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {image ? (
            <Image
              style={{
                height: 120,
                width: 120,
                borderRadius: 60,
              }}
              source={{ uri: image.uri }}
            />
          ) : (
            <SvgXml xml={profile} height="120" width="120" />
          )}
        </View>
        <TouchableOpacity onPress={()=>{
          pickDocument().then(res=>{
            setImage({
              name:res.name,
              size:res.size,
              type:`image/${res.type.split("/")[1]}`,
              uri:res.uri
            })
            updateStudentProfilePicture(userInfo,Data?.student.uuid,{
              name:res.name,
              size:res.size,
              type:`image/${res.type.split("/")[1]}`,
              uri:res.uri
            },Data?.student.first_name,Data?.student.last_name,Data?.email,Data?.student.gender).then(res=>{
              console.warn(res)
            }).catch(err=>{
              Alert.alert(err.response.data.message)
            })
          })
        }}
          style={{
            marginTop: 10,
            backgroundColor: "white",
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            position: "absolute",
            top: 10,
            right: "37%",
            zIndex: 300,
          }}
        >
          <FontAwesome name="edit" size={18} color="black" />
        </TouchableOpacity>
        <View style={{ alignItems: "center", marginTop: 70 }}>
          <Text style={{ fontSize: 22 }}>
            {userInfo&&userInfo.data ? userInfo.data.name : "Invalid"}
          </Text>
          {/* <Text style={{ fontSize: 13, marginTop: 10 }}>
            Class 10 | Science
          </Text> */} 
          <View
            style={{
              width: 120,
              height: 30,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 13 }}>Total points: 0</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <TouchableOpacity style={art.miniBox}>
            <SvgXml xml={analysis} height="30" width="30" />
            <Text style={{ fontSize: 10 }}>LEARNING</Text>
            <Text style={{ fontSize: 10 }}>ANALYSIS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={art.miniBox}>
            <SvgXml xml={badge} height="30" width="30" />
            <Text style={{ fontSize: 10 }}>ACHIEVEMENT</Text>
            <Text style={{ fontSize: 10 }}>BADGES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={art.miniBox}>
            <SvgXml xml={cup} height="30" width="30" />
            <Text style={{ fontSize: 10 }}>LEADER</Text>
            <Text style={{ fontSize: 10 }}>BOARD</Text>
          </TouchableOpacity>
        </View>
        <SelectClass
          onPress={() => {
            props.navigation.navigate("MyLearning");
          }}
          title={"My Learning"}
          color="#fff"
          image={book1}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
        {/* <SelectClass
          onPress={() => {
            props.navigation.navigate("Consultation");
          }}
          title={"My Consultation"}
          color="#fff"
          image={headset}
          icon={<AntDesign name="right" size={24} color="black" />}
        /> */}
        <SelectClass
          onPress={() => {
            props.navigation.navigate("WishList");
          }}
          title={"WishList"}
          color="#fff"
          image={wishlist}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
        <SelectClass
          onPress={() => {
            props.navigation.navigate("Settings");
          }}
          title={"Settings"}
          color="#fff"
          image={set}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
        <SelectClass
          onPress={() => {
            props.navigation.navigate("MyCart");
          }}
          title={"My Cart"}
          color="#fff"
          image={myCart}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
        <SelectClass
          onPress={() => {
            props.navigation.navigate("Help");
          }}
          title={"Help and Support"}
          color="#fff"
          image={help}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
        <SelectClass
          onPress={() => {
            dispatch(setUserInfo(null));
            storeData("userInfo", null);
            //props.navigation.navigate("LogIn");
          }}
          title={"Log out"}
          color="#fff"
          image={logOut}
          icon={<AntDesign name="right" size={24} color="black" />}
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
const art = StyleSheet.create({
  miniBox: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: false,
    aspect: [4, 3],
    quality: 1,
  });

  //console.log(result);

  if (!result.cancelled) {
    return result;
  }
  return null;
};
