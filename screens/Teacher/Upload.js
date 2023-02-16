import { StyleSheet, Text, View,ScrollView,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../../components/main/Button'
import DropDown from '../../components/DropDown'

const Upload = () => {
  return (
    <ScrollView style={{paddingHorizontal:20,}}>
      <Text style={art.headline}>Title</Text>
      <TextInput placeholder='Title of the Vedio' style={art.inputBox}
        />
        <Button title={'Select Vedio'} style={{marginTop:20,backgroundColor:'#FF0000'}}/>
        <Text style={art.headline}>Description</Text>
      <TouchableOpacity style={{height:150,borderRadius:10,
        borderWidth:1,
        borderColor:'black',
        padding:10}}>
      <TextInput placeholder='Title of the Vedio'
        />
      </TouchableOpacity>
        <Text style={art.headline}>Keywords</Text>
      <TextInput placeholder='Title of the Vedio' style={art.inputBox}
        />
        <Text style={art.headline}>Privacy</Text>
        <DropDown style={{borderColor:'black',borderWidth:1,borderRadius:10}}  DATA={['Only me','Students','Public']}/>

        <Button title={'Save And Continue'} style={{ backgroundColor: '#006600', height: 55, color: '#fff', fontWeight: 'bold', borderRadius: 20, fontSize: 22, width: '100%',marginTop:20, }}/>

    </ScrollView>
  )
}

export default Upload

const art = StyleSheet.create({
    inputBox:{
        height:55,
        width:'100%',
        paddingHorizontal:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'black'
      },
      headline:{
        fontSize:18,
        marginVertical:10 
    },
})