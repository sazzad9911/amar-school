import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { SvgXml } from "react-native-svg";

const AnalysisCart = ({
    number,text,image
}) => {
  return (
    <View style={{paddingVertical:10,alignItems:'center',flexDirection:'row',backgroundColor:'#fff',marginBottom:10,borderRadius:10,borderWidth:1,borderColor:'#e5e5e5',paddingLeft:20}}>
      <SvgXml xml={image} height="40" width="40" />
      <View style={{marginLeft:20}}>
        <Text style={{fontSize:14,fontWeight:'500'}}>{text}</Text>
        <Text style={{fontSize:25,fontWeight:'500',color:'#3D0364'}}>{number}</Text>
      </View>
      
      
    </View>
  )
}

export default AnalysisCart

const styles = StyleSheet.create({})