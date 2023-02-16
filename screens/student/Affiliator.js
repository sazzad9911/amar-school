import { ScrollView, StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import Button from '../../components/main/Button'

export default function Affiliator() {
  return (
    <ScrollView style={{paddingHorizontal:20,paddingVertical:10}}>
        <Text style={{fontSize:20,color: 'black'}}>
            সহযোগী আবেদন পত্র
        </Text>
        <Text style={{fontSize:18,color: '#6F7071'}}>
            নাম
        </Text>
        <TextInput placeholder='আপনার নাম লিখুন' style={art.inputBox1}
        />
        <Text style={{fontSize:18,color: '#6F7071'}}>
            ইমেইল
        </Text>
        <TextInput placeholder='আপনার ইমেইল দিন' style={art.inputBox1}
        />
        <Text style={{fontSize:18,color: '#6F7071'}}>
            ঠিকানা
        </Text>
        <TextInput placeholder='আপনার ঠিকানা লিখুন' style={art.inputBox1}
        />
        <Text style={{fontSize:18,color: '#6F7071'}}>
            কভার লেটার
        </Text>
        <TextInput style={art.inputBox2}
        />
        <Button title={'আবেদন করুন'} style={{ backgroundColor: '#53B5E0', height: 55, color: '#fff', fontWeight: 'bold', borderRadius: 20, fontSize: 22, width: '100%',marginTop:20, }}/>

    </ScrollView>
  )
}

const art  = StyleSheet.create({
    inputBox1:{
        height:55,
        width:'100%',
        paddingHorizontal:10,
        borderRadius:10,
        marginVertical:5,
        backgroundColor:'#B0E1F6', 
      },
      inputBox2:{
        height:150,
        width:'100%',
        paddingHorizontal:10,
        borderRadius:10,
        marginVertical:5,
        backgroundColor:'#B0E1F6', 
        justifyContent:'flex-start'
      },
})