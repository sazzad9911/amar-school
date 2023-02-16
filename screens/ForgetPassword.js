import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Button from "../components/main/Button";

const ForgetPassword = ({navigation}) => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{fontSize:18,fontWeight:'500',}}>Forgot Password?</Text>
      <Text style={{marginTop:10,textAlign:'justify'}}>Enter your mobile no you used when you joined and we’ll send you verification code to reset your password.</Text>
      <Text style={{fontSize:18,fontWeight:'500',marginVertical:10}}>Mobile no</Text>
      <TextInput style={{ height: 45, borderWidth: 1, borderRadius: 10,backgroundColor:'#F6FBFE' ,paddingHorizontal:20}} 
      placeholder={'Type yor mobile number'}/>
      <Button onPress={() => { navigation.navigate('Reset') }} style={{ marginTop:30,backgroundColor:'green',color:'#fff',}} title={'Send Verification Code'}
      
      />
      <TouchableOpacity>
        <Text style={{color:'green',fontWeight:'500'}}>
            Back To LogIn?
        </Text>
      </TouchableOpacity>
      
      {/* <Text style={{fontSize:18,fontWeight:'500',marginVertical:10}}>Verification Code</Text>
      <TextInput style={{ height: 45, borderWidth: 1, borderRadius: 10,backgroundColor:'#F6FBFE' }} />
      <Text style={{fontSize:18,fontWeight:'500',marginVertical:10}}>New Password</Text>
      <TextInput style={{ height: 45, borderWidth: 1, borderRadius: 10,backgroundColor:'#F6FBFE' }} />
    
      <Text style={{fontSize:18,fontWeight:'500',marginVertical:10}}>Confirm Password</Text>
      <TextInput style={{ height: 45, borderWidth: 1, borderRadius: 10,backgroundColor:'#F6FBFE' }} />
     */}
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
