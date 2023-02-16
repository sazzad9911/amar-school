import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PendingAssesment from './PendingAssesment';
import DoneAssesment from './DoneAssesment';

const Tab = createMaterialTopTabNavigator();

const AssesmentDetails = () => {
  return (
    <View style={{height:'100%'}}>
      <View style={{flex:1}}>
          <Tab.Navigator screenOptions={{
            tabBarScrollEnabled:true
          }}>
            <Tab.Screen name="Pending" component={PendingAssesment} />
            <Tab.Screen name="D0ne" component={DoneAssesment} />
            </Tab.Navigator>
        </View>
    </View>
  )
}

export default AssesmentDetails

const styles = StyleSheet.create({})