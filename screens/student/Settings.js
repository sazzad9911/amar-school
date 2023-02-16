import { useIsFocused } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, logInUser } from "../../apis/auth";
import { getStudentProfile, updateStudentProfile } from "../../apis/profile";
import ActivityLoader from "../../components/ActivityLoader";
import DropDown from "../../components/DropDown";
import Button from "../../components/main/Button";
import { storeData } from "../../functions/storage";
import { setUserInfo } from "../../functions/userInfo";

export default function Settings({ navigation }) {
  const userInfo = useSelector((state) => state.userInfo);
  //console.log(userInfo)
  const [Data, setData] = React.useState();
  const [FirstName, setFirstName] = React.useState();
  const [LastName, setLastName] = React.useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Country, setCountry] = useState();
  const [State, setState] = useState();
  const [City, setCity] = React.useState();
  const [PostalCode, setPostalCode] = useState();
  const [Address, setAddress] = React.useState();
  const [About, setAbout] = useState();
  const [Gender, setGender] = useState();
  const dispatch=useDispatch()
  const country = ["Bangladesh"];
  const state = [
    "Barisal",
    "Chattogram",
    "Comilla",
    "Dhaka",
    "Gazipur",
    "Khulna",
    "Mymensing",
    "Narayanganj",
    "Ragshahi",
    "Rangpur",
    "Sylhet",
  ];
  const city = [
    "Barisal",
    "Chattogram",
    "Comilla",
    "Dhaka",
    "Gazipur",
    "Khulna",
    "Mymensing",
    "Narayanganj",
    "Ragshahi",
    "Rangpur",
    "Sylhet",
  ];

  const gender = ["Male", "Female", "Others"];
  const bioRef = React.useRef();
  const isFocused = useIsFocused();
  const [uuid, setUUID] = useState();
  const [loader,setLoader]=useState(false)

  React.useEffect(() => {
    if (userInfo) {
      getStudentProfile(userInfo.meta.token)
        .then((res) => {
          const data = res.data.data;
          setData(data);
          //console.warn(data)
          setFirstName(data.student.first_name?data.student.first_name:"");
          setLastName(data.student.last_name?data.student.last_name:"");
          setEmail(data.user.email?data.user.email:"");
          setPhone(data.user.phone_number?data.user.phone_number:"");
          setCountry(
            data.student.country_id ? data.student.country_id - 1 : null
          );
          setState(data.student.state_id ? data.student.state_id - 1 : null);
          setCity(data.student.city_id ? data.student.city_id - 1 : null);
          setPostalCode(data.student.postal_code?data.student.postal_code:"");
          setAddress(data.student.address?data.student.address:"");
          setAbout(data.student.about_me!="null"?data.student.about_me:"");
          setGender(data.student.gender!="null"?data.student.gender:"");
          setUUID(data.student.uuid);
          //console.log(data.student.about_me!="null"?"ok":"null")
          
        })
        .catch((err) => {
          console.warn(err.response.data.message);
        });
    }
  }, [userInfo, isFocused]);
  //console.log(uuid)
  const save = () => {
    setLoader(true)
    updateStudentProfile(
      userInfo,
      uuid,
      FirstName,
      LastName,
      Email,
      Gender,
      Country,
      State,
      City,
      PostalCode,
      Address,
      About
    )
      .then((res) => {
        //console.warn(res);
        update()
        
      })
      .catch((err) => {
        setLoader(false)
        Alert.alert(err.response.data.message);
      });
  };
  const update=()=>{
    getUserInfo(userInfo.meta.token).then(res=>{
      dispatch(setUserInfo(res.data))
      storeData("userInfo",res.data)
      setLoader(false)
      navigation.goBack();
    }).catch(err=>{
      setLoader(false)
      Alert.alert(err.response.data.message)
    })
  }
  if(loader){
    return <ActivityLoader/>
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ paddingHorizontal: 20, paddingVertical: 10 }}
    >
      <Text style={art.Htext}>First Name</Text>
      <TextInput
        value={FirstName}
        onChangeText={setFirstName}
        style={art.inputBox}
      />
      <Text style={art.Htext}>Last Name</Text>
      <TextInput
        value={LastName}
        onChangeText={setLastName}
        style={art.inputBox}
      />
      <Text style={art.Htext}>Email</Text>
      <TextInput value={Email} onChangeText={setEmail} style={art.inputBox} />
      {/* <Text style={art.Htext}>Phone Number</Text>
      <TextInput value={Phone} onChangeText={setPhone} style={art.inputBox} /> */}
      <Text style={art.Htext}>Country</Text>
      <DropDown
        onChange={(e) => {
          setCountry(e);
        }}
        style={art.inputBox}
        placeholder={State ? state[Country] : "Select Country"}
        DATA={country}
      />
      <Text style={art.Htext}>State</Text>
      <DropDown
        onChange={(e) => [setState(e)]}
        placeholder={State ? state[State] : "Select State"}
        style={art.inputBox}
        DATA={state}
      />
      <Text style={art.Htext}>City</Text>
      <DropDown
        onChange={(e) => {
          setCity(e);
        }}
        style={art.inputBox}
        placeholder={City ? city[City] : "Select City"}
        DATA={city}
      />
      <Text style={art.Htext}>Postal Code</Text>
      <TextInput
        keyboardType="number-pad"
        value={PostalCode}
        onChangeText={setPostalCode}
        style={art.inputBox}
      />
      <Text style={art.Htext}>Address</Text>
      <TextInput
        value={Address}
        onChangeText={setAddress}
        style={art.inputBox}
      />
      <Text style={art.Htext}>Bio</Text>
      <Pressable
        onPress={() => {
          if (bioRef) {
            bioRef.current.focus();
          }
        }}
        style={[art.inputBox, { height: 120 }]}
      >
        <TextInput
          ref={bioRef}
          style={{
            width: "100%",
          }}
          value={About}
          onChangeText={setAbout}
        />
      </Pressable>

      <Text style={art.Htext}>Gender</Text>
      <DropDown
        onChange={(e) => {
          setGender(gender[e - 1]);
        }}
        
        style={art.inputBox}
        DATA={gender}
        placeholder={Gender ? Gender : "Select Gender"}
      />
      <View style>
        <Button
          onPress={() => {
            save();
            //navigation.navigate("TeacherTabRoute");
          }}
          title={"Save Profile Now"}
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
      </View>
    </ScrollView>
  );
}

const art = StyleSheet.create({
  inputBox: {
    height: 55,
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "#FFFDD0",
  },
  Htext: {
    fontSize: 18,
    color: "#6F7071",
  },
});
