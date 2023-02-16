import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../../components/main/Button";
import { useSelector } from "react-redux";
import { deleteLiveClassList, getLiveClassList } from "../../apis/instructor";
import { useIsFocused } from "@react-navigation/native";

const LiveClassViewList = (props) => {
  const userInfo = useSelector((state) => state.userInfo);
  const [newClass, setClass] = useState();
  const data = props.route.params.data;
  const isFocused = useIsFocused();
  const [loader,setLoader]=useState(false)
  console.log(data.uuid)

  useEffect(() => {
    if (userInfo) {
      getLiveClassList(userInfo, data.uuid)
        .then((res) => {
          // console.log(res.data.data.past_live_classes.data)
          setClass(res.data.data.past_live_classes.data);
        })
        .catch((err) => {
          Alert.alert(err.response.data.message);
        });
    }
  }, [userInfo, isFocused,loader]);
  return (
    <View style={{ paddingHorizontal: 20 }}>
      {newClass && newClass.map((doc, i) => <Cart onDelete={()=>{
        deleteLiveClassList(userInfo,doc.uuid).then(res=>{
          setLoader(c=>(!c))
        }).catch(err=>{
          Alert.alert(err.response.data.message)
        })
      }} data={doc} key={i} />)}
      {newClass && newClass.length == 0 && (
        <Text
          style={{
            textAlign: "center",
            marginVertical: 10,
          }}
        >
          No Live Class Found
        </Text>
      )}
    </View>
  );
};

export default LiveClassViewList;

const styles = StyleSheet.create({});
const Cart = ({ data,onDelete }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginVertical: 5,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      }}
    >
      <View>
        <Text style={{
          fontSize:16,
          fontWeight:"500"
        }}>
          Class Topic:    
          <Text
            style={{
              marginVertical: 10,
              fontWeight:"300",
              paddingLeft:10
            }}
          >
            {data.class_topic}
          </Text>
        </Text>
        <Text style={{
          fontWeight:"500"
        }}>
          Duration: <Text style={{
            fontWeight:"400"
          }}>{data.duration} Minutes</Text>
        </Text>
      </View>
      <Button onPress={()=>{
        if(onDelete){
          onDelete()
        }
      }} style={{
        backgroundColor:"#FF0000",
        paddingHorizontal:10,
        color:"white",
        marginBottom:0,
      }} title={"Delete"}/>
    </View>
  );
};
