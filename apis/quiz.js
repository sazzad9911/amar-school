import axios from "axios";
import api from "./api";

export const getAllQuiz=async(userInfo,uuid)=>{
    const token=userInfo.meta.token
    const res=await axios.get(`${api}/amarschool/instructor/course/exam/${uuid}`,{
        headers:{Authorization:`Bearer ${token}`}
    })
    return res
}
export const createQuiz=async(userInfo,uuid,course_id,name,marks_per_question,duration,type)=>{
    const token=userInfo.meta.token
    const res=await axios.post(`${api}/amarschool/instructor/course/exam/store/${uuid}`,{
        course_id:course_id,
        name:name,
        marks_per_question:marks_per_question,
        duration:duration,
        type:type
    },{
        headers:{Authorization:`Bearer ${token}`,'accept':"application/json",'Content-Type': 'application/json'}
    })
    return res
}
export const getQuestions=async(userInfo,uuid,title)=>{
    const token=userInfo.meta.token
    const res=await axios.get(`${api}/amarschool/instructor/course/exam/view/${uuid}`,{
        headers:{Authorization:`Bearer ${token}`,'accept':"application/json",'Content-Type': 'application/json'}
    })
    return res
}
export const deleteQuiz=async(userInfo,uuid)=>{
    const token=userInfo.meta.token
    const res=await axios.get(`${api}/amarschool/instructor/course/exam/delete/${uuid}`,{
        headers:{Authorization:`Bearer ${token}`,'accept':"application/json",'Content-Type': 'application/json'}
    })
    return res
}