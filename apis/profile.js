import axios from "axios";
import { fileFromURL } from "../functions/converters";
import api from "./api";

export const getMyLearning = async (token) => {
  const res = axios.get(`${api}/amarschool/student/my-learning`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const getMyConsultation = async (token) => {
  const res = axios.get(`${api}/amarschool/student/my-consultation`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const getStudentProfile = async (token) => {
  const res = axios.get(`${api}/amarschool/student/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const getWishList = async (token) => {
  const res = axios.get(`${api}/amarschool/student/wishlist`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const addWishList = async (token,course_id,bundle_id) => {
  const res = axios.post(`${api}/amarschool/student/add-to-wishlist`,{
    course_id:course_id,
    bundle_id:bundle_id,
  }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const deleteWishList = async (token,course_id) => {
  //console.log(`${api}/amarschool/student/cart-delete/${course_id}`)
  const res = axios.delete(`${api}/amarschool/student/wishlist-delete/${course_id}`,{
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const getStudentDashboard = async (userInfo) => {
  const token = userInfo.meta.token;
  const res = await axios.get(`${api}/amarschool/frontend`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const updateStudentProfile = async (
  userInfo,
  uuid,
  first_name,
  last_name,
  email,
  gender,
  country_id,
  state_id,
  city_id,
  postal_code,
  address,
  about_me
) => {
  const token = userInfo.meta.token;
  const formData = new FormData();
  formData.append("first_name", first_name);
  formData.append("last_name", last_name);
  formData.append("email", email);
  formData.append("gender", gender);
  formData.append("country_id", country_id);
  formData.append("state_id", state_id);
  formData.append("city_id", city_id);
  formData.append("postal_code", postal_code);
  formData.append("address", address);
  formData.append("about_me", about_me);
  const options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(
    `${api}/amarschool/student/save-profile/${uuid}`,options
  );
  return res;
};
export const updateStudentProfilePicture = async (userInfo, uuid, image,first_name,last_name,email,gender) => {
  const token = userInfo.meta.token;
  const formData = new FormData();
  formData.append("image", image);
  formData.append("first_name",first_name)
  formData.append('last_name',last_name)
  formData.append("email",email)
  formData.append("gender",gender)
  console.log(formData)
  const options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  
  const res = await fetch(
    `${api}/amarschool/student/save-profile/${uuid}`,
    options
  );
  return res;
};
export const getNotifications = async (userInfo) => {
  const token = userInfo.meta.token;
  const res = await axios.get(`${api}/amarschool/frontend/all-notifications`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};