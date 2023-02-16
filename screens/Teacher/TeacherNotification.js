import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TeacherNotification = () => {
  return (
    <View style={{ backgroundColor: '#F6FBFE', height: '100%', width: '100%', padding: 20, }}>
            <View style={{ height: '100%', width: '100%', borderTopLeftRadius: 20, backgroundColor: '#B0E1F6', borderTopRightRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Notifications!
                </Text>
            </View>
        </View>
  )
}

export default TeacherNotification

const styles = StyleSheet.create({})