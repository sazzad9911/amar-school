import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NoticeCart from '../../components/Others/NoticeCart'
import { useSelector } from 'react-redux'
import { getInstructorNotices } from '../../apis/courses'

const Notice = ({navigation,route}) => {
  const userInfo=useSelector(state=>state.userInfo)
  const [notice,setNotice]=useState()
  const course=route.params.course

  useEffect(()=>{
    if(userInfo){
      getInstructorNotices(userInfo,course.course.uuid).then(res=>{
        setNotice(res.data.data.notices.data)
        //console.log(res.data.data.notices.data)
      }).catch(err=>{
        console.warn(err.response.data.message)
      })
    }
  },[userInfo])


  return (
    <View>
      
      {notice&&notice.map((doc,i)=>(
        <NoticeCart key={i} data={doc}/>
      ))}
      {notice&&notice.length==0&&(
        <Text style={{
          marginVertical:10,
          textAlign:"center"
        }}>No Notice Found</Text>
      )}
    </View>
  )
}

export default Notice

const styles = StyleSheet.create({})