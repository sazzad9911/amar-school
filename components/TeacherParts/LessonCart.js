import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import CheckBox from "../CheckBox";
import DropDown from "../DropDown";
import Button from "../main/Button";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const visibility = ["Show", "Lock"];

const LessonCart = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [isYoutube, setIsYoutube] = useState(false);
  const [isTextOption, setIsTextOption] = useState(false);
  const [isImageOption, setIsImageOption] = useState(false);
  const [isPdf, setIsPdf] = useState(false);
  const [isSlide, setIsSlide] = useState(false);
  const [isAudio, setIsAudio] = useState(false);

  return (
    <ScrollView
      style={{ paddingHorizontal: 20 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={{fontSize:15,textAlign:'justify',fontWeight:'300'}}>To Upload your course videos please create your section and lesson details first!</Text>
      <Text style={art.t}>Section title of the course “ Test ”</Text>
      <TextInput style={art.in} placeholder={'Introduction'}/>
<View>
  <Button style={{marginTop:10,backgroundColor:'green',color:'#fff'}} title={'Save'}/>
</View>
      <Text style={{fontWeight:'500',
    fontSize:18,
    marginBottom:10}}>Type :</Text>
      <CheckBox
        style={{ marginTop: 5 }}
        value={isUpload}
        onChange={() => {
          setIsUpload((val) => !val);
        }}
        title={"Upload Video"}
      />
      {isUpload && <Upload />}
      <CheckBox
        style={{ marginTop: 5 }}
        value={isYoutube}
        onChange={() => {
          setIsYoutube((val) => !val);
        }}
        title={"Youtube"}
      />
      {isYoutube && <Youtube />}

      <CheckBox
        style={{ marginTop: 5 }}
        title={"Text"}
        value={isTextOption}
        onChange={() => {
          setIsTextOption((val) => !val);
        }}
      />
      {isTextOption && <TextOption />}

      <CheckBox
        style={{ marginTop: 5 }}
        title={"Image"}
        value={isImageOption}
        onChange={() => {
          setIsImageOption((val) => !val);
        }}
      />
      {isImageOption && <ImageOption />}

      <CheckBox
        style={{ marginTop: 5 }}
        title={"PDF"}
        value={isPdf}
        onChange={() => {
          setIsPdf((val) => !val);
        }}
      />
      {isPdf && <Pdf />}

      <CheckBox
        style={{ marginTop: 5 }}
        title={"Slide Document"}
        value={isSlide}
        onChange={() => {
          setIsSlide((val) => !val);
        }}
      />
      {isSlide && <Slide />}
      <CheckBox
        style={{ marginTop: 5 }}
        title={"Audio"}
        value={isAudio}
        onChange={() => {
          setIsAudio((val) => !val);
        }}
      />
      {isAudio && <Audio />}
    </ScrollView>
  );
};

export default LessonCart;

const art = StyleSheet.create({
  in: {
    borderWidth: 1,
    height: 40,
    width: "100%",
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 5,
    borderColor: "#e5e5e5",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#e5e5e5",
    height: 45,
    marginTop: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  t: {
    fontSize: 18,
    marginVertical: 10,

  },
  a: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
    
  },
  press:{
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e5e5e5",
    marginTop: 10,
    padding: 10,
  }
});

const Upload = () => {
  return (
    <View>
      <Text style={art.a}>Upload Video</Text>
      <Button title={"Upload"} style={{ marginTop: 10 }} />
      <Text style={art.a}>Lesson Title </Text>
      <TextInput style={art.in} placeholder="First steps" />
      <Text style={art.a}>Learner's Visibility</Text>
      <DropDown
        placeholder={"Select Option"}
        DATA={visibility}
        style={art.dropdown}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button
          title={"Save"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "green",
            color: "#fff",
          }}
        />
        <Button
          title={"Back"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "red",
            color: "#fff",
          }}
        />
      </View>
    </View>
  );
};

const Youtube = () => {
  return (
    <View>
      <Text style={art.a}>Lesson Youtube Video ID</Text>
      <TextInput style={art.in} placeholder="Type Your Youtube Video ID" />
      <Text style={art.a}>Lesson Title</Text>
      <TextInput style={art.in} placeholder="First steps" />
      <Text style={art.a}>Learner's Visibility</Text>
      <DropDown
        placeholder={"Select Option"}
        DATA={visibility}
        style={art.dropdown}
      />
      <Text style={art.a}>Lesson File Duration (00:00)</Text>
      <TextInput style={art.in} placeholder="First File Duration" />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          marginTop: 10,
        }}
      >
        <Button
          title={"Save"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "green",
            color: "#fff",
          }}
        />
        <Button
          title={"Back"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "red",
            color: "#fff",
          }}
        />
      </View>
    </View>
  );
};

const TextOption = () => {
  return (
    <View>
      <Text style={art.a}>Lesson Description</Text>
      <Pressable
        style={art.press}
      >
        <TextInput />
      </Pressable>
      <Text style={art.a}>Lesson Title</Text>
      <TextInput style={art.in} placeholder="First steps" />
      <Text style={art.a}>Learner's Visibility</Text>
      <DropDown
        placeholder={"Select Option"}
        DATA={visibility}
        style={art.dropdown}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button
          title={"Save"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "green",
            color: "#fff",
          }}
        />
        <Button
          title={"Back"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "red",
            color: "#fff",
          }}
        />
      </View>
    </View>
  );
};

const ImageOption = () => {
  return (
    <View>
      <Text style={art.a}>Lesson Image</Text>
      <Pressable style={art.press}>
        <TextInput />
      </Pressable>
      <Text style={art.a}>Lesson Title</Text>
      <TextInput style={art.in} placeholder="First steps" />
      <Text style={art.a}>Learner's Visibility</Text>
      <DropDown
        placeholder={"Select Option"}
        DATA={visibility}
        style={art.dropdown}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button
          title={"Save"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "green",
            color: "#fff",
          }}
        />
        <Button
          title={"Back"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "red",
            color: "#fff",
          }}
        />
      </View>
    </View>
  );
};

const Pdf = () => {
  return (
    <View>
      <Text style={art.a}>Upload PDF</Text>
      <Pressable style={art.press}>
        <TextInput />
      </Pressable>
      <Text style={art.a}>Lesson Title</Text>
      <TextInput style={art.in} placeholder="First steps" />
      <Text style={art.a}>Learner's Visibility</Text>
      <DropDown
        placeholder={"Select Option"}
        DATA={visibility}
        style={art.dropdown}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button
          title={"Save"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "green",
            color: "#fff",
          }}
        />
        <Button
          title={"Back"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "red",
            color: "#fff",
          }}
        />
      </View>
    </View>
  );
};

const Slide = () => {
  return (
    <View>
      <Text style={art.a}>Write your Slide Embed Code</Text>
      <Pressable style={art.press}>
        <TextInput />
      </Pressable>
      <Text style={art.a}>Lesson Title</Text>
      <TextInput style={art.in} placeholder="First steps" />
      <Text style={art.a}>Learner's Visibility</Text>
      <DropDown
        placeholder={"Select Option"}
        DATA={visibility}
        style={art.dropdown}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button
          title={"Save"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "green",
            color: "#fff",
          }}
        />
        <Button
          title={"Back"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "red",
            color: "#fff",
          }}
        />
      </View>
    </View>
  );
};

const Audio = () => {
  return (
    <View>
      <Text style={art.a}>Upload Audio</Text>
      <Button title={"Upload"} style={{ marginVertical: 10 }} />
      <Text style={art.a}>Lesson Title </Text>
      <TextInput style={art.in} placeholder="First steps" />
      <Text style={art.a}>Learner's Visibility</Text>
      <DropDown
        placeholder={"Select Option"}
        DATA={visibility}
        style={art.dropdown}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Button
          title={"Save"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "green",
            color: "#fff",
          }}
        />
        <Button
          title={"Back"}
          style={{
            width: 80,
            height: 40,
            backgroundColor: "red",
            color: "#fff",
          }}
        />
      </View>
    </View>
  );
};
