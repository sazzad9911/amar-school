import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import WithdrawCart from '../../components/TeacherParts/WithdrawCart'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { getInstructorWithdrawHistory } from '../../apis/instructor'

const Withdraw = () => {
  const userInfo=useSelector(state=>state.userInfo)
  const [withdraw,setWithdraw]=useState()
  const isFocused=useIsFocused()

  useEffect(()=>{
    if(userInfo){
      getInstructorWithdrawHistory(userInfo).then(res=>{
        setWithdraw(res.data.data.withdraws.data)
        //console.log(res.data.data.withdraws.data)
      }).catch(err=>{
        Alert.alert(err.response.data.message)
      })
    }
  },[isFocused,userInfo])
  return (
    <ScrollView style={{padding:20,}}>
      {withdraw&&withdraw.map((doc,i)=>(
      <WithdrawCart key={i} id={'#9043718'} date={'01 Jul 2022'} amount={'$ 45.00'} method={'Buy'} status={'Complete'} receipt={'Download Receipt'}/>
      ))}
      {withdraw&&withdraw.length==0&&(
        <Text style={{
          marginVertical:5,
          textAlign:"center"
        }}>No Withdraw History Found</Text>
      )}
    <View style={{height:20}}>

    </View>
    </ScrollView>
  )
}

export default Withdraw

const styles = StyleSheet.create({})