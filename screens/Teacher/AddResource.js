import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Button from "../../components/main/Button";
import * as DocumentPicker from "expo-document-picker";
import { useSelector } from "react-redux";
import { addResources } from "../../apis/courses";
import ActivityLoader from "../../components/ActivityLoader";

const AddResource = (props) => {
  const params = props.route.params;
  const data = params.data;
  const [file, setFile] = useState();
  const userInfo = useSelector((state) => state.userInfo);
  const [loader,setLoader]=useState(false)
  
  const save = () => {
    if (!file) {
      Alert.alert("Please select a file");
      return;
    }
    if(file.type.split('/')[1]!="zip"){
      Alert.alert("Please select .zip file")
      return
    }
  setLoader(true)
    addResources(userInfo, data.uuid, file)
      .then((res) => {
        //console.warn(res);
        setLoader(false)
        props.navigation.goBack()
      })
      .catch((err) => {
        setLoader(false)
        Alert.alert(err.response.data.message);
      });
  };

  //console.log(data)
  if(loader){
    return <ActivityLoader/>
  }
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "500", color: "#707070" }}>
        {data.title}
      </Text>
      <Pressable
        onPress={() => {
          pickDocument().then((res) => {
            setFile(res);
          });
        }}
        style={{ height: 150, borderRadius: 10, marginTop: 20 }}
      >
        <Text>{file ? "Successful" : "File Upload"}</Text>
      </Pressable>
      <Button
        onPress={() => {
          save();
          //props.navigation.navigate("TeacherResource");
        }}
        style={{ height: 40, backgroundColor: "green", color: "#fff" }}
        title={"Submit"}
      />
    </View>
  );
};

export default AddResource;

const styles = StyleSheet.create({});
export const pickDocument = async () => {
  let result = await DocumentPicker.getDocumentAsync({
    type: "*/*",
    copyToCacheDirectory: true,
  }).then((response) => {
    if (response.type == "success") {
      let { name, size, uri } = response;
      let nameParts = name.split(".");
      let fileType = nameParts[nameParts.length - 1];
      var fileToUpload = {
        name: name,
        size: size,
        uri: uri,
        type: "application/" + fileType,
      };
      console.log(fileToUpload, "...............file");
      return fileToUpload;
    }
  });
  return result;
};
