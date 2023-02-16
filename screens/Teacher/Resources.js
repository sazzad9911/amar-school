import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Button from '../../components/main/Button'

export default function Resources(props) {
  return (
    <ScrollView  style={{paddingHorizontal:20,height:'100%'}}>
     <Button onPress={() => {
          props.navigation.navigate("AddResourse");
        }} style={{marginTop:10,backgroundColor:'green',color:'#fff'}} title={'Add Resource'}/>
     
    </ScrollView>
  )
}
