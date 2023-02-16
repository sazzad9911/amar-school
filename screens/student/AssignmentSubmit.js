import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/main/Button'

const AssignmentSubmit = (props) => {
  return (
    <View style={{padding:20}}>
      <Pressable style={{height:150,width:'100%',alignItems:'center'}}>
<Text> File Upload</Text>
      </Pressable>
      <Button  onPress={() => {
      props.navigation.navigate("AssignmentTab");
    }} title={'Submit Assignment'} style={{backgroundColor:'green',color:'#fff',height:45,marginTop:30}}/>
    
    </View>
  )
}

export default AssignmentSubmit

const styles = StyleSheet.create({})