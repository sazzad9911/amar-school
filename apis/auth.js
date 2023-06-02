import axios from "axios";
import api from "./api";

export const userRegistration=async(firstName,lastName,password,phoneNumber,passwordConfirmationNumber)=>{
    const res=await axios.post(`${api}/amarschool/frontend/user-register`,{
        first_name:firstName,
        last_name:lastName,
        password:password,
        phone_number:phoneNumber,
        password_confirmation:passwordConfirmationNumber
    })
    return res
}
export const registerUser=async(firstName,lastName,password,phoneNumber,email)=>{
    const res=await axios.post(`${api}/amarschool/frontend/mobile-register?first_name=${firstName}&last_name=${lastName}&phone_number=${phoneNumber}&password=${password}&email=${email}`)
    return res
}
export const verifyOTP=async(phoneNumber,OTP)=>{
    const res=await axios.post(`${api}/amarschool/frontend/user-otp-verify`,{
        phone_number:phoneNumber,
        otp_code:OTP
    })
    return res
}
export const resentOTP=async(phoneNumber)=>{
    const res=await axios.post(`${api}/amarschool/frontend/user-otp-resent`,{
        phone_number:phoneNumber
    })
    return res
}
export const sendOTP=async(phoneNumber,otp)=>{
    const res=await axios.get(`${api}/amarschool/frontend/sendsms?phone=${phoneNumber}&otp=${otp}`)
    return res
}
export const logInUser=async(phoneNumber,password)=>{
    const res=await axios.post(`${api}/amarschool/frontend/user-login`,{
        phone_number:phoneNumber,
        password:password
    })
    return res
}
export const getUserInfo=async(token)=>{
    const res=await axios.get(`${api}/amarschool/frontend/user-me`,{
        headers:{Authorization:`Bearer ${token}`}
    })
    return res
}
export const forgetPasswordVerification=async(phoneNumber,password)=>{
    const res=await axios.post(`${api}/amarschool/frontend/user-forget-password`,{
        phone_number:phoneNumber,
        password:password
    })
    return res
}
export const resetPassword=async(verificationCode,password,passwordConfirmation)=>{
    const res=await axios.post(`${api}/amarschool/frontend/user-reset-password`,{
        verification_code:verificationCode,
        password:password,
        password_confirmation:passwordConfirmation
    })
    return res
}
