import axios from "axios";
import { Platform } from "react-native";
import api from "./api";

export const becomeInstructor = async (token) => {
  const res = await axios.get(
    `${api}/amarschool/student/become-an-instructor`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const getAllInstructor = async (userInfo) => {
  const token = userInfo.meta.token;
  const res = await axios.get(`${api}/amarschool/frontend/all-instructor`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const getInstructorDetails = async (userInfo, slug,user_id) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/frontend/instructor/${user_id}/${slug}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res;
};
export const getInstructorDashboard = async (userInfo) => {
  const token = userInfo.meta.token;
  //console.log(token)
  const res = await axios.get(`${api}/amarschool/instructor/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const getInstructorProfile = async (userInfo) => {
  const token = userInfo.meta.token;
  //console.log(token)
  const res = await axios.get(`${api}/amarschool/instructor/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const setInstructorProfile = async (uuid) => {
  //const token=userInfo.meta.token;
  //console.log(token)
  const res = await axios.post(
    `${api}/amarschool/instructor/save-profile/${uuid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const getLiveClassCourse = async (userInfo) => {
  //const token=userInfo.meta.token;
  //console.log(token)
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/live-class/live-class/course-live-class-list`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const getLiveClassList = async (userInfo, uuid) => {
  //const token=userInfo.meta.token;
  //console.log(token)
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/live-class/live-class/live-class-list/${uuid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const deleteLiveClassList = async (userInfo, uuid) => {
  //const token=userInfo.meta.token;
  //console.log(token)
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/live-class/live-class/delete-live-class/${uuid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const createLiveClass = async (
  userInfo,
  uuid,
  class_topic,
  date,
  duration,
  meetingUrl,
  hostName,
  password
) => {
  const token = userInfo.meta.token;
  const formData=new FormData()
  formData.append("class_topic",class_topic)
  formData.append("date",date)
  formData.append("duration",duration)
  formData.append("jitsi_meeting_id",meetingUrl)
  formData.append("start_url",meetingUrl)
  formData.append("join_url",meetingUrl)
  formData.append("meeting_host_name",hostName)
  formData.append("moderator_pw",password)
  formData.append("attendee_pw",password)
  const options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(formData)
  const res = await fetch(`${api}/amarschool/instructor/live-class/live-class/live-class-store/${uuid}`,
  options
);
return res;
};
export const getInstructorAnalysis = async (userInfo) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/finances/finances/analysis`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const getInstructorWithdrawHistory = async (userInfo) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/finances/finances/withdraw-history`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const saveInstructorInfo = async (
  userInfo,
  firstName,
  lastName,
  professional_title,
  about_me,
  file
) => {
  const token = userInfo.meta.token;

  //console.log(img_to_upload)
  const formData = new FormData();
  formData.append("cv_file", file);
  formData.append("first_name",firstName)
  formData.append("last_name",lastName)
  formData.append("about_me",about_me)
  formData.append("professional_title")
  const options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${token}`
    },
  };
  //console.log(formData);

  const res=await fetch(`${api}/amarschool/student/save-instructor-info`, options);
  // const res = await axios.post(
  //   `${api}/amarschool/student/save-instructor-info`,
  //   {
  //     first_name: firstName,
  //     last_name: lastName,
  //     professional_title: professional_title,
  //     about_me: about_me,
  //     cv_file: file,
  //   },
  //   {
  //     headers: { Authorization: `Bearer ${token}` },
  //   }
  // );
  return res;
};
