import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AssignmentResult = () => {
  return (
    <View style={{paddingHorizontal:20}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text style={art.mText}>Assignment Topic</Text>
        <Text>Graphic Design</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text style={art.mText}>Marks</Text>
        <Text>10</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text style={art.mText}>Your Marks</Text>
        <Text>8.0</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text style={art.mText}>Notes</Text>
        <Text>very good</Text>
      </View>
    </View>
  )
}

export default AssignmentResult

const art = StyleSheet.create({
    emptyText:{
height:50,
textAlign:'justify'
    },
    bText:{
fontSize:20,
fontWeight:'500'
    },
    mText:{
        fontSize:18,
        fontWeight:'500'
    }
});