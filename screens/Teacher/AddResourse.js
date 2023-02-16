import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import Button from '../../components/main/Button'

const AddResourse = () => {
  return (
    <View style={{paddingHorizontal:20}}>
      <Text style={{fontWeight:'400',
    fontSize:18}}>Add Resourse</Text>
    <Pressable style={{height:150,
    width:'100%',
    backgroundColor:'#fff',
    borderRadius:10,
    marginTop:20,
    alignItems:'center'
    }}>
        <Text>
            File
        </Text>

    </Pressable>
    <Button
    title={'Submit'}
    style={{width:80,backgroundColor:'green',color:'#fff',marginTop:30}}/>
    </View>
  )
}

export default AddResourse

const styles = StyleSheet.create({})