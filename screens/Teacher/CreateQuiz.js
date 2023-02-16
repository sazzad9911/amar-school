import { StyleSheet, Text, View ,ScrollView,TextInput, Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import DropDown from '../../components/DropDown'
import Button from '../../components/main/Button'
import { createQuiz } from '../../apis/quiz'
import { useSelector } from 'react-redux'

const type=['Multiple Choice','True False']

const CreateQuiz = (props) => {
  const [Choice,SetChoice] = useState();
  const [name,setName]=useState()
  const [marks,setMarks]=useState()
  const [time,setTime]=useState()
  const data=props.route.params.data;
  const userInfo=useSelector(state=>state.userInfo)


  useEffect(() => {
    
  }, [])
  
  return (
    <View style={{paddingHorizontal:20}}>
     <Text
        style={{
          fontSize: 18,
          marginBottom: 10,
          fontWeight: "400",
        }}
      >
        Quiz Name
      </Text>
      <TextInput value={name} onChangeText={setName}
        placeholder="Enter your Quiz Name"
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          marginBottom: 10,
          fontWeight: "400",
          marginTop:10
        }}
      >
       Quiz Types
      </Text>
      <DropDown onChange={e=>{
        SetChoice(e)
      }} style={{borderWidth:1,borderColor:'#808080',backgroundColor:'#fff',borderRadius:10,height:50}} DATA={type}/>
      <Text
        style={{
          fontSize: 18,
          marginBottom: 10,
          fontWeight: "400",
            marginTop:10
         
        }}
      >
        Marks Per Question
      </Text>
      <TextInput returnKeyType='done' keyboardType="number-pad" value={marks} onChangeText={setMarks}
        placeholder="Enter your Marks Per Question"
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          marginBottom: 10,
          fontWeight: "400",
          marginTop:10
         
        }}
      >
       Time Duration (Minutes)
      </Text>
      <TextInput returnKeyType='done' keyboardType="number-pad" value={time} onChangeText={setTime}
        placeholder="Enter your  Time Duration"
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: 10,
          paddingHorizontal: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 20,
        }}
      >
        <Button onPress={() => {
          //props.navigation.navigate("Add Question",{Choice:Choice});
          createQuiz(userInfo,data.uuid,data.id,name,marks,time,Choice).then(res=>{
            props.navigation.goBack()
          }).catch(err=>{
            Alert.alert(err.response.data.message)
          })
        }} 
          style={{ width: 80, backgroundColor: "green", color: "#fff" }}
          title="Create"
        />
      </View>
    </View>
  )
}

export default CreateQuiz

const styles = StyleSheet.create({})