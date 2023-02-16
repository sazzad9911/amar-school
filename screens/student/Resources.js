import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDown from '../../components/DropDown'
import Drop from '../../components/main/Drop'
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from 'react-redux';
import { getResources } from '../../apis/courses';
import * as Linking from 'expo-linking';
import { url } from '../../apis/api';

const Resources = ({navigation,route}) => {
  const course=route.params.course
  const [resource,setResource]=useState()
  const userInfo=useSelector(state=>state.userInfo)

  useEffect(()=>{
    if(userInfo){
      getResources(userInfo,course.course.uuid).then(res=>{
        //console.log(res.data.data.resources.data)
        setResource(res.data.data.resources.data)
      }).catch(err=>{
        console.log(err.response.data.message)
      })
    }
  },[userInfo])
  return (
    <View>
      <Text style={{fontWeight:'500',fontSize:20}}>
      Resources({resource&&resource.length}) 
      </Text>
      {resource&&resource.map((doc,i)=>(
        <ResourceCart file={doc.file} name={doc.original_filename} key={i}/>
      ))}
      {resource&&resource.length==0&&(
        <Text style={{
          marginVertical:10,
          textAlign:"center"
        }}>No Resource</Text>
      )}
    </View>
  )
}

export default Resources

const styles = StyleSheet.create({})

const ResourceCart = ({name,file}) => {
  return (
    
    <View style={{ flexDirection: "row",alignItems:'center',marginTop:5}}>
      <AntDesign name="link" size={20} color="black" />
      <TouchableOpacity onPress={()=>{
        Linking.openURL(`${url}/${file}`)
      }}>
      <Text style={{ marginLeft: 10,color:'green',textDecorationLine:'underline' }}>
        {name}
      </Text>
      </TouchableOpacity>
    </View>
  
  )
}