import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AllStudentCart from '../../components/TeacherParts/AllStudentCart'

const AllStudent = (props) => {
  return (
    <View style={{paddingHorizontal:20,marginTop:10}}>
     
      <AllStudentCart {...props} name={'Will Smith'} email={'student@gmail.com'} date={'06.11.2022'} course={'JavaScript: Understanding the Weird Parts'} image={'https://lmszai.zainikthemes.com/uploads_demo/user/student-avatar.jpg'}/>
      <AllStudentCart {...props} name={'Will Smith'} email={'student@gmail.com'} date={'06.11.2022'} course={'JavaScript: Understanding the Weird Parts'} image={'https://lmszai.zainikthemes.com/uploads_demo/user/student-avatar.jpg'}/>
      <AllStudentCart {...props} name={'Will Smith'} email={'student@gmail.com'} date={'06.11.2022'} course={'JavaScript: Understanding the Weird Parts'} image={'https://lmszai.zainikthemes.com/uploads_demo/user/student-avatar.jpg'}/>
      <AllStudentCart {...props} name={'Will Smith'} email={'student@gmail.com'} date={'06.11.2022'} course={'JavaScript: Understanding the Weird Parts'} image={'https://lmszai.zainikthemes.com/uploads_demo/user/student-avatar.jpg'}/>

    </View>
  )
}

export default AllStudent

const styles = StyleSheet.create({})