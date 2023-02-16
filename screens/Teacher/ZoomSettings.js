import { ScrollView, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import DropDown from '../../components/DropDown'
import Button from '../../components/main/Button'

const ZoomSettings = () => {
  return (
    <ScrollView style={{paddingHorizontal:20}}>
      
      <Text style={art.bText}>Zoom Api Key</Text>
      <TextInput placeholder='Zoom Api Key' style={art.tInput} />
      <Text style={art.bText}>Zoom Api Secret</Text>
      <TextInput placeholder='Zoom Api Secret' style={art.tInput} />
      <Text style={art.bText}>Timezone</Text>
      <DropDown style={art.inputBox} DATA={['(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time','(GMT+0:00) Africa/Abidjan (Greenwich Mean Time',]} placeholder={'Select Timezone'}/>
      <Text style={art.bText}>Status</Text>
      <DropDown style={art.inputBox} DATA={['Active','Disable',]} placeholder={'Select Status'}/>
      <Text style={art.bText}>Host Video</Text>
      <DropDown style={art.inputBox} DATA={['Active','Disable',]} placeholder={'Select Gender'}/>
      <Text style={art.bText}>Participant Video</Text>
      <DropDown style={art.inputBox} DATA={['Active','Disable',]} placeholder={'Select Gender'}/>
      <Text style={art.bText}>Waiting Room</Text>
      <DropDown style={art.inputBox} DATA={['Active','Disable',]} placeholder={'Select Gender'}/>
      <Button title={'Save'} style={{marginTop: 20,
          backgroundColor: "#006600",
          borderRadius: 20,
          color: "#fff",
          fontSize: 18,}}/>
     

    </ScrollView>
  )
}

export default ZoomSettings

const art = StyleSheet.create({
  bbText:{fontSize:20,fontWeight:'500',marginVertical:10},
  inputBox:{
    height:50,
    width:'100%',
    paddingHorizontal:10,
    borderRadius:10,
    marginVertical:5,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    backgroundColor:'#fff'
    
  },
  bText: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 5,
  },
  tInput: {
    height: 50,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    marginTop: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor:'#fff'
  },
})