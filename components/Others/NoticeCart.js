import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoticeCart = ({data}) => {

  return (
    <View style={{backgroundColor:'#fff',borderRadius:10,padding:10}}>
      <Text style={{textAlign:'right'}}>06 - 01 - 2023</Text>
      <Text style={{fontWeight:'500',fontSize:18}}>
      Topic for Notice Board
      </Text>
      <Text style={{fontWeight:'400',fontSize:15,textAlign:'justify'}}>
      {data.description}
      </Text>
    </View>
  )
}

export default NoticeCart

const styles = StyleSheet.create({})