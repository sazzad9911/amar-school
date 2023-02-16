import { StyleSheet, Text, View,Pressable,TextInput } from 'react-native'
import React from 'react'
import Button from '../../components/main/Button'


const NoticeView = (props) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "400" }}>Notice Topic</Text>
      <TextInput
        placeholder="Notice Topic"
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          borderRadius: 10,
          marginVertical: 10,
        }}
      />
      <Text style={{ fontSize: 18, fontWeight: "400", marginTop: 20 }}>
        Notice Details
      </Text>
      <Pressable style={{ height: 150, backgroundColor: "#fff",marginTop:10,borderRadius:10 }}>
        <TextInput
          placeholder="Notice Details"
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            borderRadius: 10,
            marginVertical: 10,
           
          }}
        />
      </Pressable>
      <View style={{justifyContent:'flex-end',width:'100%'}}>
      <Button onPress={() => {
            props.navigation.navigate("NoticeEdit");
          }}  title={'Edit'} style={{width:100,backgroundColor:'green',color:"#fff",marginTop:30 }}/>
      </View>
    </View>
  )
}

export default NoticeView

const styles = StyleSheet.create({})