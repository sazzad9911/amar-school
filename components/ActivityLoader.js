import {useState,useEffect} from "react"
import { ActivityIndicator, Dimensions,View } from "react-native"
import React from 'react'
const {width,height}=Dimensions.get("window")

export default function ActivityLoader() {
  return (
    <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }}>
        <ActivityIndicator size={"small"} color={'green'}/>
    </View>
  )
}
