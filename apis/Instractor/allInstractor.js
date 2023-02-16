import axios from "axios";
import api from "../api";
const getAllInstructor=async()=>{
    const res=await axios.get(`${api}/amarschool/frontend/all-instructor`)
    return res
}
const getInstructorDetails=async(name)=>{
    const res=await axios.get(`${api}/amarschool/frontend/instructor/10/`)
}

export {getAllInstructor,getInstructorDetails}