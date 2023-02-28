import axios from "axios";
import { fileFromURL } from "../functions/converters";
import api from "./api";

export const getStudentCourses = async (userInfo) => {
  const token = userInfo.meta.token;
  //console.log(`${api}/amarschool/frontend/courses`)
  const res = await axios.get(`${api}/amarschool/frontend/courses`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const getStudentCoursesDetails = async (userInfo, slug) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/frontend/course-details/${slug}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    } 
  );
  return res;
};
export const getResources = async (userInfo, uuid) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/course/resource/index/${uuid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const deleteResources = async (userInfo, uuid, title) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/course/resource/delete/${uuid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
    {
      title: title,
    }
  );
  return res;
};
export const createCourseInitial = async (
  userInfo,
  title,
  subTitle,
  status,
  description
) => {
  const token = userInfo.meta.token;
  const res = await axios.post(
    `${api}/amarschool/instructor/course/store`,
    {
      title: title,
      subtitle: subTitle,
      status: status,
      description: description,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const updateCourseInitial = async (
  userInfo,
  uuid,
  title,
  subtitle,
  description
) => {
  const token = userInfo.meta.token;
  const res = await axios.post(
    `${api}/amarschool/instructor/course/update-overview/${uuid}`,
    {
      title: title,
      subtitle: subtitle,
      description: description,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const updateCourseEnd = async (
  userInfo,
  uuid,
  category_id,
  subcategory_id,
  course_language_id,
  difficulty_level_id,
  price,
  image,
  learner_accessibility,
  video,
  intro_video_check,
  youtube_video_id
) => {
  const token = userInfo.meta.token;

  const formData = new FormData();
  formData.append("category_id", category_id);
  formData.append("subcategory_id", subcategory_id);
  formData.append("course_language_id", course_language_id);
  formData.append("difficulty_level_id", difficulty_level_id);
  if(price){
    formData.append("price", parseInt(price));
  }
  if(image){
    formData.append("image", image);
  }
  formData.append("learner_accessibility", learner_accessibility);
  if(video){
    formData.append("video", video);
  }
  formData.append("intro_video_check", intro_video_check);
  formData.append("youtube_video_id", youtube_video_id);
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
  //console.log(formData);

  const res = await fetch(
    `${api}/amarschool/instructor/course/update-category/${uuid}`,
    options
  );
  // const res=await axios.post(`${api}/amarschool/instructor/course/update-category/${uuid}`,{
  //     category_id:category_id,
  //     subcategory_id:subcategory_id,
  //     course_language_id:course_language_id,
  //     difficulty_level_id:difficulty_level_id,
  //     price:price,
  //     image:fileFromURL(image),
  //     learner_accessibility:learner_accessibility,
  //     video:fileFromURL(video),
  //     intro_video_check:intro_video_check,
  //     youtube_video_id:youtube_video_id
  // },{
  //     headers:{Authorization:`Bearer ${token}`}
  // })
  return res;
};
export const getInstructorCourse = async (userInfo) => {
  const token = userInfo.meta.token;
  //console.log(token)
  const res = await axios.get(`${api}/amarschool/instructor/course`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const deleteInstructorCourse = async (userInfo, uuid) => {
  const token = userInfo.meta.token;
  //console.log(token)
  const res = await axios.delete(
    `${api}/amarschool/instructor/course/course-delete/${uuid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const getAssignments = async (userInfo, uuid) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/course/assignments/index/${uuid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const createAssignments = async (
  userInfo,
  uuid,
  name,
  course_id,
  description,
  marks,
  file
) => {
  const token = userInfo.meta.token;
  const formData=new FormData()
  formData.append("name",name)
  formData.append("course_id",course_id)
  formData.append("description",description)
  formData.append("marks",marks)
  formData.append("file",file)
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
    `${api}/amarschool/instructor/course/assignments/store/${uuid}`,
    options
  );
  return res;
};
export const deleteAssignment = async (userInfo, uuid) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/course/assignments/delete/${uuid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const addResources = async (userInfo, uuid, file) => {
  const token = userInfo.meta.token;
  const formData = new FormData();
  //console.log(fileFromURL(file))
  if(file){
    formData.append("file", file);
  }
  const options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  //console.log(formData);
  //console.log(`${api}/amarschool/instructor/course/resource/store/${uuid}`)
  //console.log(token)

  const res = await fetch(
    `${api}/amarschool/instructor/course/resource/store/${uuid}`,
    options
  );
 
  return res;
};
export const getInstructorBundleCourse = async (userInfo) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/bundle/course/index`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const deleteInstructorBundleCourse = async (userInfo, uuid) => {
  const token = userInfo.meta.token;
  const res = await axios.delete(
    `${api}/amarschool/instructor/bundle/course/delete/${uuid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const createInstructorBundleCourse = async (
  userInfo,
  name,
  overview,
  price,
  image,
  status
) => {
  const token = userInfo.meta.token;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("overview", overview);
  formData.append("price", price);
  if(image){
    formData.append("image", image);
  }
  formData.append("status",1)
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
    `${api}/amarschool/instructor/bundle/course/store`,
    options
  );
  return res;
};
export const getInstructorNoticeBoard = async (userInfo) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/notice-board/notice-board/course-notice-list`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const getInstructorNotices = async (userInfo, uuid) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/notice-board/notice-board/notice-board-list/${uuid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const editInstructorNotices = async (
  userInfo,
  uuid,
  course_uuid,
  topic,
  details
) => {
  const token = userInfo.meta.token;
  const res = await axios.post(
    `${api}/amarschool/instructor/notice-board/notice-board/update-notice-board/${course_uuid}/${uuid}`,
    {
      topic: topic,
      details: details,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const deleteInstructorNotices = async (userInfo, uuid) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/instructor/notice-board/notice-board/delete-notice-board/${uuid}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};

export const addInstructorNotices = async (userInfo, uuid, topic, details) => {
  const token = userInfo.meta.token;
  const res = await axios.post(
    `${api}/amarschool/instructor/notice-board/notice-board/notice-board-store/${uuid}`,
    {
      topic: topic,
      details: details,
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const getStudentBundleCourse = async (userInfo) => {
  const token = userInfo.meta.token;
  const res = await axios.get(`${api}/amarschool/frontend/bundles`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const getStudentBundleCourseDetails = async (userInfo,uuid) => {
  const token = userInfo.meta.token;
  //console.log(`${api}/amarschool/frontend/bundle-details/${uuid}`)
  const res = await axios.get(`${api}/amarschool/frontend/bundle-details/${uuid}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};
export const addToCart = async (userInfo, course_id,bundle_id) => {
  const token = userInfo.meta.token;
  const res = await axios.post(
    `${api}/amarschool/student/add-to-cart`,
    {
      course_id:course_id,
      bundle_id:bundle_id
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const getCartList = async (userInfo) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/student/cart-list`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const deleteFromCart = async (userInfo,course_id) => {
  const token = userInfo.meta.token;
  const res = await axios.delete(
    `${api}/amarschool/student/cart-delete/${course_id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};
export const getCategories = async (userInfo) => {
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/frontend/category/courses/jeeb-bijngan`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
};

export const checkOut=async(userInfo)=>{
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/student/checkout`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
}
export const pay=async(userInfo)=>{
  const token = userInfo.meta.token;
  const res = await axios.post(
    `${api}/amarschool/student/pay`,{
      payment_method:"sslcommarz"
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
}
export const applyCoupon=async(userInfo,cardId,coupon_code)=>{
  const token = userInfo.meta.token;
  const res = await axios.post(
    `${api}/amarschool/student/apply-coupon`,{
      id:cardId,
      coupon_code:coupon_code
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
}
export const getBundleCourseDetails=async(userInfo,bundleId)=>{
  const token = userInfo.meta.token;
  const res = await axios.get(
    `${api}/amarschool/frontend/bundle_course/${bundleId}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res;
}