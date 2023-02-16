import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CourseView from '../student/CourseView';
import Analysis from './Analysis';
import Withdraw from './Withdraw';

const Tab = createMaterialTopTabNavigator();


const Finance = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Analysis" component={Analysis} />
      <Tab.Screen name="Withdraw" component={Withdraw} />
    </Tab.Navigator>
  )
}

export default Finance

const styles = StyleSheet.create({})

