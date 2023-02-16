import { Linking, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Button from "../../components/main/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as DocumentPicker from 'expo-document-picker';
import { url } from "../../apis/api";


const AssignmentDetails = (props) => {
  const data=props.route.params.data
  const [document,setDocument]=useState()

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={art.mText}>Assignment Topic</Text>
      <Text style={art.emptyText}>{data.name}</Text>
      <Text style={art.mText}>Assignment Description</Text>
      <Text style={art.emptyText}>{data.description}</Text>
      <View
        style={{
          
          borderWidth: 1,
          borderColor: "#808080",
          
          paddingHorizontal:10,
          paddingVertical:10

        }}
      >
        <Text style={art.mText}>Marks</Text>
        <Text>{data.marks}</Text>
        <View style={{ backgroundColor: "#808080", height: 1,marginVertical:10 }}></View>
        <TouchableOpacity onPress={()=>{
          Linking.openURL(`${url}/${data.file}`)
        }}>
        <Text style={art.bText}>Download Assignment File</Text>
        </TouchableOpacity>
        <Text style={art.emptyText}>{data.original_filename}</Text>
        <TouchableOpacity onPress={()=>[
          pickDocument().then(res=>{
            setDocument(res)
          })
        ]}>
        <Text style={art.bText}>Your Submit File</Text>
        </TouchableOpacity>
        <Text style={art.emptyText}></Text>
      </View>
      <Button  onPress={() => {
      props.navigation.goBack()
    }} title={'Submit Assignment'} style={{backgroundColor:'green',color:'#fff',height:45,marginTop:30}}/>
    
    </View>
  );
};

export default AssignmentDetails;

const art = StyleSheet.create({
    emptyText:{
height:50,
textAlign:'justify'
    },
    bText:{
fontSize:20,
fontWeight:'500'
    },
    mText:{
        fontSize:18,
        fontWeight:'500'
    }
});
export const pickDocument = async () => {
  let result = await DocumentPicker.getDocumentAsync({});
  if(result){
    return result
  }
  return null
}
