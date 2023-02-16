import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import DropDown from "../../components/DropDown";
import Button from "../../components/main/Button";
import { createInstructorBundleCourse } from "../../apis/courses";
import { useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { pickDocument } from "./AddResource";
import ActivityLoader from "../../components/ActivityLoader";
const status = ["Active", "Disable"];

const CreateBundleCourse = ({ navigation, route }) => {
  const [name, setName] = useState();
  const [overview, setOverView] = useState();
  const [price, setPrice] = useState();
  const [statuses, setStatus] = useState();
  const [image, setImage] = useState();
  const userInfo = useSelector((state) => state.userInfo);
  const [loader,setLoader]=useState(false)

  const save = () => {
    if(!name ||!overview||!price||!image){
      Alert.alert("All field are require")
      return 
    }
    setLoader(true)
    createInstructorBundleCourse(userInfo, name, overview, price, image, 1)
      .then((res) => {
        setLoader(false)
        navigation.goBack();
      })
      .catch((err) => {
        setLoader(false)
        Alert.alert(err.response.data.message);
      });
  };
  if(loader){
    return <ActivityLoader/>
  }
  return (
    <ScrollView style={{ paddingHorizontal: 20 }}>
      <Text style={art.bText}>Bundles Courses Name * </Text>
      <TextInput onChangeText={setName} style={art.tInput} />
      <Text style={art.bText}>Overview *</Text>
      <Pressable
        style={{ height: 150, backgroundColor: "#fff", borderRadius: 10 }}
      >
        <TextInput onChangeText={setOverView} style={art.tInput} />
      </Pressable>
      <Text style={art.bText}>Price ৳ * </Text>
      <TextInput keyboardType="number-pad" onChangeText={setPrice} style={art.tInput} />
      <Text style={art.bText}>Status ৳ * </Text>
      <DropDown
        onChange={setStatus}
        style={{
          borderWidth: 1,
          borderColor: "#808080",
          height: 50,
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
        DATA={status}
      />
      <Pressable
        onPress={() => {
          pickDocument().then((res) => {
            if(res.type.split('/')[1]!="jpeg"&&res.type.split('/')[1]!="jpg"&&res.type.split('/')[1]!="png"){
              Alert.alert("Please select image file")
              return
            }
            setImage({
              name:res.name,
              size:res.size,
              uri:res.uri,
              type:`image/${res.type.split('/')[1]}`
            });
          });
        }}
        style={{
          height: 150,
          backgroundColor: "#fff",
          borderRadius: 10,
          marginTop: 20,
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        {image ? (
          <Image
            source={{ uri: image.uri }}
            style={{ height: 150, width: "100%" }}
          />
        ) : (
          <Text>Upload Image</Text>
        )}
      </Pressable>
      <Button
        onPress={() => {
          save();
        }}
        title={"Create & Next"}
        style={{ backgroundColor: "green", color: "#fff", marginTop: 30 }}
      />
    </ScrollView>
  );
};

export default CreateBundleCourse;

const art = StyleSheet.create({
  bText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
  },
  tInput: {
    height: 55,
    width: "100%",
    borderRadius: 10,

    borderColor: "#e5e5e5",
    backgroundColor: "#fff",
    padding: 10,
    fontSize: 16,
  },
});
