import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Alert,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { AntDesign } from "@expo/vector-icons";
  import Button from "../../components/main/Button";
  import DropDown from "../../components/DropDown";
  import CheckBox from "../../components/CheckBox";
  import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
  import * as ImagePicker from "expo-image-picker";
import { updateCourseEnd, updateCourseInitial } from "../../apis/courses";
import { useSelector } from "react-redux";
import { dataURItoBlob, fileFromURL } from "../../functions/converters";
import { pickDocument } from "./AddResource";
import ActivityLoader from "../../components/ActivityLoader";
import { useIsFocused } from "@react-navigation/native";
  const Category = [
    "Business",
    "Design",
    "Development",
    "Finance $ Accounting",
    "Health & Fitness",
    " IT & Software",
    "Marketing",
    "Official Productivity",
    "Personal Development",
  ];
  const business = ["Communication", "Business", "Sale"];
  const design = [
    "Web Design",
    "Graphic Design",
    "Game Design",
    "Fashion Design",
    "User Experience Design",
  ];
  const development = [
    "Web",
    "Data Science",
    "Mobile Development",
    "Programming Language",
    "Game Development",
  ];
  const it = [
    "IT Certifications",
    "Network & Security",
    "Hardware",
    "Operating System & Server",
  ];
  const office = ["Microsoft", "Apple", "Google"];
  const personal = ["Career Development", "Creativity"];
  
  //const Tags = ["Development", "Digital Marketing", "IT", "Math", "Music"];
  const Accessibility = ["Paid", "Free"];
  const Language = ["Arabic", "Bangla", "English", "Hindi", "Spanish"];
  const Level = ["Higher", "Medium"];
  
  const EditTeacherCourse = (props) => {
    const inputRef = React.useRef();
    const descriptionRef = React.useRef();
    const [courseTitle, setCourseTitle] = useState();
    const [courseSubTitle, setCourseSubTitle] = useState();
    const [keyPoints, setKeyPoints] = useState([]);
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [subCategory, setSubCategory] = useState();
    const [tags, setTags] = useState();
    const [accessibility, setAccessibility] = useState();
    const [price, setPrice] = useState();
    const [language, setLanguage] = useState();
    const [level, setLevel] = useState();
    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [video, setVideo] = useState();
    const [youtube, setYoutube] = useState();
    const [isVideo, setIsVideo] = useState(false);
    const [isYoutube, setIsYoutube] = useState(false);
    const params=props.route.params;
    const data=params.data;
    const [Loader,setLoader]=useState(false)
    const userInfo=useSelector(state=>state.userInfo)
    const categories=useSelector(state=>state.categories)
    const [subCategories,setSubCategories]=useState([])
    const [allCategories,setAllCategories]=useState([])
    const [Tags,setTag]=useState([])
    //console.log(categories)
    //console.log(data)
    const isFocused=useIsFocused()
    useEffect(()=>{
      if(data&&categories){
        //console.log(data)
        setIsVideo(data.video?true:false)
        //setVideo(data.video)
        setYoutube(data.youtube_video_id?data.youtube_video_id:undefined)
        setIsYoutube(data.youtube_video_id?true:false)
        setCourseTitle(data.title)
        setCourseSubTitle(data.subtitle)
        setPrice(data.price)
        //setImage(data.image)
        setCategory(data.category_id>0?data.category_id-1:data.category_id)
        if(data.category_id){
          setSubCategories(setSubCategoriesList(categories[data.category_id-1].name))
        }
        setSubCategory(data.subcategory_id>0?data.subcategory_id-1:data.subcategory_id)
        setAccessibility(data.learner_accessibility>0?data.learner_accessibility-1:data.learner_accessibility)
        setDescription(data.description)
        setLanguage(data.course_language_id>0?data.course_language_id-1:data.course_language_id)
        setLevel(data.difficulty_level_id>0?data.difficulty_level_id-1:data.difficulty_level_id)
      }
    },[data,isFocused,categories])
    useEffect(()=>{
      if(categories){
        let arr=[]
        categories.map((doc,i)=>{
          arr.push(doc.name)
        })
        setTag(arr)
        setAllCategories(arr)
      }
    },[categories])
    const setSubCategoriesList=(category)=>{
      let data=categories.filter(d=>d.name==category)[0];
      if(!data || !Array.isArray(data.subcategories)){
        return null
      }
      let arr=[]
      data.subcategories.map((doc,i)=>{
        arr.push(doc.name)
      })
      return arr
    }
  const updateCourse=()=>{
    setLoader(true)
    //console.log(data.uuid)
    updateCourseInitial(userInfo,data.uuid,courseTitle,courseSubTitle,description).then(res=>{
      console.log(res.data)
    }).catch(err=>{
      Alert.alert(err.response.data.message)
    })
    //console.log(fileFromURL(image))
    updateCourseEnd(userInfo,data.uuid,category,subCategory,language,level,price,image,accessibility,video,isVideo,youtube).then(res=>{
      //console.warn(res)
      setLoader(false)
      props.navigation.goBack()
    }).catch(err=>{
      setLoader(false)
      Alert.alert(err.response.data.message)
    })
  }
  if(Loader || !categories){
    return <ActivityLoader/>
  }
    return (
      <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Text style={art.headline}>Course Details</Text>
        <View>
          <Text style={art.mediumText}>Course Title</Text>
          <TextInput value={courseTitle}
            onChangeText={setCourseTitle}
            placeholder="Type Your Course Title"
            style={art.inputBox}
          />
          <Text style={art.mediumText}>Course Subtitle</Text>
          <Pressable
            onPress={() => {
              if (inputRef) {
                inputRef.current.focus();
              }
            }}
            style={[art.inputBox, { height: 150, padding: 10 }]}
          >
            <TextInput value={courseSubTitle}
              onChangeText={setCourseSubTitle}
              ref={inputRef}
              placeholder="Course subtitle in 1000 characters"
            />
          </Pressable>
          {/* <Text style={art.headline}>Course Description Key Points</Text>
          <Text style={art.mediumText}>
            {keyPoints.map((doc, i) => {
              return `${i != 0 ? ", " : ""}${doc}`;
            })}
          </Text>
          <TextInput 
            onChangeText={setName}
            placeholder="Type Key Point Name"
            style={art.inputBox}
          /> */}
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            {/* <Button
              onPress={() => {
                setKeyPoints((val) => [...val, name]);
              }}
              title={"Add"}
              style={art.but}
            /> */}
            {/* <Button title={"Cancel"} style={art.but1} /> */}
          </View>
          <Text style={art.mediumText}>Course Description </Text>
          <Pressable
            style={[art.inputBox, { height: 150, padding: 10 }]}
            onPress={() => {
              if (descriptionRef) {
                descriptionRef.current.focus();
              }
            }}
          >
            <TextInput value={description}
              ref={descriptionRef}
              onChangeText={setDescription}
              placeholder="Course Description "
            />
          </Pressable>
        </View>
        <Text style={art.headline}>Category & Tags</Text>
        <Text style={art.mediumText}>Course Category</Text>
        <DropDown
          onChange={(e) => {
            setCategory(e);
            //console.log(setSubCategoriesList(allCategories[e-1]))
            setSubCategories(setSubCategoriesList(allCategories[e-1]))
          }}
          placeholder={category?allCategories[category]:"Select Category"}
          style={art.drop}
          DATA={allCategories}
        />
        <Text style={art.mediumText}>Course Subcategory</Text>
        <DropDown
          onChange={setSubCategory}
          placeholder={subCategory?subCategories[subCategory]:"Select Sub Category"}
          style={art.drop}
          DATA={
            subCategories
          }
        />
        <Text style={art.mediumText}>Tags</Text>
        <DropDown
          onChange={setTags}
          placeholder={tags?Tags[tags]:"Select Tag"}
          style={art.drop}
          DATA={Tags}
        />
        <Text style={art.headline}>Learners Accessibility & others</Text>
        <Text style={art.mediumText}>Learners Accessibility</Text>
        <DropDown
          onChange={setAccessibility}
          placeholder={accessibility?Accessibility[accessibility]:"Select Accessibility"}
          style={art.drop}
          DATA={Accessibility}
        />
        <Text style={art.mediumText}>Course Price</Text>
        <TextInput value={price}
          onChange={setPrice}
          placeholder="Type Course Price"
          style={art.inputBox}
        />
        <Text style={art.mediumText}>Language</Text>
        <DropDown 
          onChange={setLanguage}
          placeholder={language?Language[language]:"Select Language"}
          style={art.drop}
          DATA={Language}
        />
        <Text style={art.mediumText}>Difficulty Level</Text>
        <DropDown
          onChange={setLevel}
          placeholder={level?Level[level]:"Select Level"}
          style={art.drop}
          DATA={Level}
        />
        <Text style={art.mediumText}>Course Thumbnail</Text>
        <Pressable
          onPress={() => {
            pickDocument().then(res=>{
              setImage({
                name:res.name,
                type:`image/${res.type.split('/')[1]}`,
                size:res.size,
                uri:res.uri
              })
            })
          }}
          style={[
            art.inputBox,
            {
              height: 150,
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            },
          ]}
        >
          {image&&image.uri ? (
            <Image
              style={{
                width: "100%",
                height: 150,
                borderRadius: 10,
              }}
              source={{ uri: image.uri }}
            />
          ) : (
            <Text>Pick Image</Text>
          )}
        </Pressable>
        <Text style={art.smalltext}>
          Accepted image format & size: 575px X 450px (1MB)
        </Text>
        <Text style={art.smalltext}>Accepted image filetype: jpg, jpeg, png</Text>
        <Text style={art.mediumText}>Course Introduction Video (Optional)</Text>
        <CheckBox
          style={{
            marginTop: 10,
          }}
          title={"Upload Video"}
          value={isVideo}
          onChange={() => {
            setIsVideo(val=>(!val));
          }}
        />
        {isVideo&&(
          <Button onPress={()=>{
            pickDocument().then(res=>{
              setVideo({
                name:res.name,
                type:`video/${res.name.split("/")[1]}`,
                uri:res.uri,
                size:res.size
              })
            })
          }} style={{
            marginTop:10
          }} title={"Upload"}/>
        )}
        <CheckBox style={{
          marginTop:10
        }} value={isYoutube} onChange={()=>{
          setIsYoutube(val=>(!val))
        }} title={"Youtube Video (write only video Id)"} />
        {isYoutube&&(
          <TextInput value={youtube} onChangeText={setYoutube} style={{
            borderWidth:1,
            height:40,
            width:"100%",
            marginVertical:10,
            borderRadius:5,
            paddingHorizontal:5,
            borderColor:"#e5e5e5"
          }} placeholder="Youtube video id"/>
        )}
        <Button
          onPress={() => {
            //props.navigation.navigate("Upload");
            updateCourse()
          }}
          title={"Save And Continue"}
          style={{
            backgroundColor: "#006600",
            height: 55,
            color: "#fff",
            fontWeight: "bold",
            borderRadius: 20,
            fontSize: 22,
            width: "100%",
            marginTop: 20,
          }}
        />
      </ScrollView>
    );
  };
  
  export default EditTeacherCourse;
  
  const art = StyleSheet.create({
    rules: {
      marginLeft: 10,
      fontSize: 13,
    },
    headline: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: "500",
    },
    mediumText: {
      fontSize: 16,
    },
    inputBox: {
      height: 55,
      width: "100%",
      paddingHorizontal: 15,
      borderRadius: 10,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: "#e5e5e5",
      backgroundColor: "#fff",
      flex: 1,
      overflow: "hidden",
    },
    but: {
      width: 100,
      marginTop: 10,
      backgroundColor: "green",
      color: "#fff",
      marginBottom: 10,
    },
    but1: {
      width: 100,
      marginTop: 10,
      backgroundColor: "#FF0000",
      color: "#fff",
      marginBottom: 10,
    },
    drop: {
      height: 55,
      width: "100%",
      paddingHorizontal: 10,
      borderRadius: 10,
      marginVertical: 5,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#e5e5e5",
    },
    smalltext: {
      fontSize: 13,
      fontWeight: "300",
    },
  });
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: .5,
    });
  
    //console.log(result);
  
    if (!result.cancelled) {
      // console.log(result)
      return result;
    }
    return null;
  };
  const pickVideo = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
  
    //console.log(result);
  
    if (!result.cancelled) {
      // console.log(result)
      return result;
    }
    return null;
  };
  