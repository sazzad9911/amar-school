import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WishCart from '../../components/Others/WishCart'
import { useSelector } from 'react-redux'
import { getWishList } from '../../apis/profile'
import ActivityLoader from '../../components/ActivityLoader'
import { useIsFocused } from '@react-navigation/native'

export default function WishList({navigation}) {
  const [Data,setData]=React.useState()
  const [Loader,setLoader]=React.useState()
  const userInfo=useSelector(state=>state.userInfo)
  const isFocused=useIsFocused()


  React.useEffect(()=>{
    if(userInfo){
      setLoader(true)
      getWishList(userInfo.meta.token).then(res=>{
        //console.log(res.data.data.wishlists.data)
        setLoader(false)
        setData(res.data.data.wishlists.data)
      }).catch(err=>{
        setLoader(false)
        console.warn(err.response.data.message)
      }) 
    }
  },[userInfo,isFocused])
  if(Loader){
    return <ActivityLoader/>
  }
  return (
    <ScrollView style={{paddingHorizontal:20,paddingVertical:10}}>
      {Data&&Data.map((doc,i)=>(
        <WishCart navigation={navigation} data={doc} key={i}/>
      ))}
      
      {Data&&Data.length==0&&(
        <View style={{
          flex:1,
          justifyContent:"center",
          alignItems:"center"
        }}>
          <Text>No List Added</Text>
        </View>
      )}
    </ScrollView>
  )
}

const art = StyleSheet.create({})