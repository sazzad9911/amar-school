import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { getAllInstructor } from "../../apis/instructor";
import { useSelector } from "react-redux";

const CourseCart = ({
  headline,
  onPress,
  sale,
  ratings,
  image,
  price,
  color,
  tutor,
}) => {
  const [Name,setName]=React.useState()
  const userInfo=useSelector(state=>state.userInfo)
  React.useEffect(()=>{
    getAllInstructor(userInfo).then(res=>{
      setName(res.data.data.instructors.data[tutor-1])
     // console.log(res.data.data.instructors.data[tutor-1])
    })
  },[])
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 150,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: "row",
        marginBottom: 10,
        marginRight: 10,
        overflow: "hidden",
      }}
    >
      <View>
        <Image
          style={{
            height: 70,
            width: 150,
          }}
          source={{
            uri: image,
          }}
        />
        <View style={{ width: 150, padding: 5 }}>
          <Text numberOfLines={3} style={{ fontSize: 13, fontWeight: "500" }}>
            {headline}
          </Text>
          <Text style={{ fontSize: 11 }}>{Name?(Name.first_name+" "+Name.last_name):"N/A"}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ marginRight: 5 }}>{ratings}.0</Text>
              <FontAwesome
                name="star"
                size={14}
                color={ratings > 0 ? "#FFD801" : "#E5E5E5"}
              />
              <FontAwesome
                name="star"
                size={14}
                color={ratings > 1 ? "#FFD801" : "#E5E5E5"}
              />
              <FontAwesome
                name="star"
                size={14}
                color={ratings > 2 ? "#FFD801" : "#E5E5E5"}
              />
              <FontAwesome
                name="star"
                size={14}
                color={ratings > 3 ? "#FFD801" : "#E5E5E5"}
              />
              <FontAwesome
                name="star"
                size={14}
                color={ratings > 4 ? "#FFD801" : "#E5E5E5"}
              />
            </View>
            
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: "500" }}>Price:</Text>
            <Text
              style={{
                fontSize: 12,
                color: "#53B5E0",
                marginLeft: 5,
                fontWeight: "500",
              }}
            >
              {parseInt(price)>0?`${price}৳`:"Free"}
              
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCart;
