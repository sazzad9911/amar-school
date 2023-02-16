import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const StudentDetails = () => {
  return (
    <View style={{paddingHorizontal:20,paddingVertical:10,flex:1,width:'100%'}}>
        <Image
          style={art.picture}
          source={{
            uri: 'https://lmszai.zainikthemes.com/uploads_demo/user/student-avatar.jpg',
          }}
        />
      <View style={{flexWrap:'wrap'}}>
      <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        <Text style={art.bText}>Course Name: <Text>JavaScript: Understanding the Weird Parts</Text></Text>
        
      </View>
      <View style={{flexDirection:'row',}}>
        <Text style={art.bText}>Course Join Date:</Text>
        <Text>26.10.2022</Text>
      </View>
      <View style={{flexDirection:'row',}}>
        <Text style={art.bText}>Email:</Text>
        <Text>student@gmail.com</Text>
      </View>
      <View style={{flexDirection:'row',}}>
        <Text style={art.bText}>Phone:</Text>
        <Text>01316331216</Text>
      </View>
      <View style={{flexDirection:'row',}}>
        <Text style={art.bText}>Country:</Text>
        <Text>Bangladesh</Text>
      </View>
      </View>
    </View>
  )
}

export default StudentDetails

const art = StyleSheet.create({
    picture:{
        height:80,
        width:80
    },
    bText:{
        fontSize:16,
        fontWeight:'500',
        marginRight:5
    }
})