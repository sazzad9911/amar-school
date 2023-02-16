import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MyLearningCart from "../../components/Others/MyLearningCart";
import { useSelector } from "react-redux";
import { getMyLearning } from "../../apis/profile";
import ActivityLoader from "../../components/ActivityLoader";
import { url } from "../../apis/api";
import { useIsFocused } from "@react-navigation/native";

 
const MyLearning = (props) => {
  const userInfo=useSelector(state=>state.userInfo)
  const [Loader,setLoader]=React.useState(false)
  const [Data,setData]=React.useState()
  const isFocused=useIsFocused()
  //console.log(userInfo.meta.token)

  React.useEffect(()=>{
    if(userInfo){
      setLoader(true)
      getMyLearning(userInfo.meta.token).then(res=>{
        setData(res.data.data.orderItems.data)
        //console.log(res.data.data.orderItems.data[0])
        setLoader(false)
      }).catch(err=>{
        setLoader(false)
        console.warn(err.response.data)
      })
    }
  },[userInfo,isFocused])
  if(Loader){
    return <ActivityLoader/>
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 20 }}>
      {Data&&Data.map((doc,i)=>(
        <MyLearningCart onPress={()=>{
          //props.navigation.navigate("BundleDetails",{data:doc.course})
          //props.navigation.navigate("CourseView",{data:doc.course});
          if(doc.course){
            props.navigation.navigate("CourseDetails",{data:doc.course});
          }
        }} key={i}
        {...props}
        image={doc.course&&
          doc.course.image?`${url}${doc.course.image}`:"https://lmszai.zainikthemes.com/uploads/course/1669814930-hI5q3yMOZ6.jpg"
        }
        topics={doc.course?.title}
        price={doc.course?.price}
        order={doc.order_id}
        validation={"lifetime"}
        data={doc}
      />
      ))}
      {Data&&Data.length==0&&(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Text>No Course Found</Text>
        </View>
      )}
     <View style={{height:20}}/>
    </ScrollView>
  );
};

export default MyLearning;

const styles = StyleSheet.create({});
