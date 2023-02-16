import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import DropDown from "../../components/DropDown";
import Button from "../../components/main/Button";
import { createLiveClass } from "../../apis/instructor";
import { useSelector } from "react-redux";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { serverTimeToLocalDate } from "../../functions/converters";
import ActivityLoader from "../../components/ActivityLoader";

const CreateLiveClass = ({ navigation, route }) => {
  const data = route.params.data;
  const [topic, setTopic] = useState();
  const [duration, setDuration] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const userInfo = useSelector((state) => state.userInfo);
  const [date, setDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [url,setUrl]=useState()
  const [loader,setLoader]=useState(false)
  //console.log(data.uuid)

  const save = () => {
    if(!topic||!date||!duration){
      Alert.alert("Please fill all the required fields")
      return
    }
    setLoader(true)
    createLiveClass(userInfo, data.uuid, topic,date.toString(),duration,url,name,password).then(res=>{
      setLoader(false)
      navigation.goBack()
    }).catch(err=>{
      setLoader(false)
      Alert.alert(err.response.data.message)
    })
  };
  if(loader){
    return <ActivityLoader/>
  }
   
  return (
    <View style={{ paddingHorizontal: 20, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={art.bText}>Live Class Topic</Text>
        <TextInput value={topic} onChangeText={setTopic} style={art.tInput} />
        <Text style={art.bText}>Live Class Date</Text>
        <Button
          onPress={() => {
            setDatePickerVisibility(true)
          }}
          title={date ? serverTimeToLocalDate(date) : "Pick Date"}
        />

        <Text style={art.bText}>Time Duration (write in minutes )</Text>
        <DropDown
          onChange={setDuration}
          style={{ backgroundColor: "#B0E1F6", borderRadius: 10 }}
          placeholder={"Select Time Duration (in munites)"}
          DATA={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
          ]}
        />
        <Text style={art.bText}>Meeting Host Name </Text>
        <TextInput value={name} onChangeText={setName} style={art.tInput} />
        <Text style={art.bText}>Meeting Host Url </Text>
        <TextInput value={url} onChangeText={setUrl} style={art.tInput} />
        <Text style={art.bText}>Moderator Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={art.tInput}
        />
        <Text style={art.bText}>Attendee Password</Text>
        <TextInput
          value={rePassword}
          onChangeText={setRePassword}
          style={art.tInput}
        />
        <Button
          onPress={() => {
            save();
          }}
          title="Create Meeting"
          style={{
            backgroundColor: "#006600",
            borderRadius: 20,
            color: "#fff",
            fontSize: 18,
            marginVertical: 30,
          }}
        />
        <DateTimePickerModal
          style={{
            height: 300,
            zIndex: 100,
            width: "100%",
          }}
          date={new Date()}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={e=>{
            setDate(e)
            setDatePickerVisibility(false)
          }}
          onCancel={()=>{
            setDatePickerVisibility(false)
          }}
        />
      </ScrollView>
    </View>
  );
};

export default CreateLiveClass;

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
    borderWidth: 1,
    borderColor: "#e5e5e5",
    backgroundColor: "#B0E1F6",
    padding: 10,
    fontSize: 16,
  },
});
