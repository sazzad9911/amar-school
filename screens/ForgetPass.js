import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity,KeyboardAvoidingView,Platform, ScrollView, Alert } from 'react-native'
import React from 'react'
import Button from '../components/main/Button'
import { forgetPasswordVerification } from '../apis/auth'

const ForgetPass = ({navigation}) => {
  const [PhoneNumber,setPhoneNumber]=React.useState()
  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : null}
    keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
  >
    <SafeAreaView
    style={{paddingHorizontal:20,flex:1}}
    >
      <ScrollView >
        <Text style={{
              marginTop: 10,
              fontSize: 22,
              fontWeight: "600",
              color: "#6F7071",
            }}>
        Forgot Password?
        </Text>
        <Text style={{
              marginTop: 10,
              fontSize: 15,
              fontWeight: "500",
              color: "#6F7071",
            }}>
        Enter your mobile no you used when you joined and we’ll send you verification code to reset your password.
        </Text>
        <Text style={{
              marginTop: 20,
              fontSize: 18,
              fontWeight: "600",
              color: "#6F7071",
            }}>
        Mobile no
        </Text>
        <TextInput value={PhoneNumber} onChangeText={setPhoneNumber}
            keyboardType="number-pad"
            style={{
              color: "black",
              width: '100%',
              height: 55,
              backgroundColor: "#FFFDD0",
              borderRadius: 10,
              paddingHorizontal: 20,
              marginTop:10
            }}
            placeholder="Enter Mobile no"
          />
          <Button
          onPress={() => {
            forgetPasswordVerification(PhoneNumber,"12345678").then(res=>{
              //console.log(res.data)
              navigation.navigate("ResetPass")
            }).catch(err=>{
              Alert.alert("Ops!",err.response.data.message)
            })
          }}
          title={'Send Verification Code'}
          style={{fontSize: 22,
            backgroundColor: "#006600",
            height: 55,
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 20,
            width: "100%",
        marginTop:30}}

          />
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate("LogIn");
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "green",
                fontWeight: "600",
              }}
            >
              Back to Login?
            </Text>
          </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default ForgetPass

const styles = StyleSheet.create({})